import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames/bind';
import TreeManager from './tree-manager';
import Tree from './tree';
import Input from './input';
import styles from '../../../style/scss/main.scss';
import _ from 'lodash';

const cx = cn.bind(styles);

class CheckboxDropdownSelect extends Component {
    static propTypes = {
        data: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
        clearSearchOnChange: PropTypes.bool,
        keepTreeOnSearch: PropTypes.bool,
        placeholderText: PropTypes.string,
        showDropdown: PropTypes.bool,
        className: PropTypes.string,
        onChange: PropTypes.func,
        onAction: PropTypes.func,
        onNodeToggle: PropTypes.func,
        simpleSelect: PropTypes.bool,
        noMatchesText: PropTypes.string,
        showPartiallySelected: PropTypes.bool
    }

    constructor(props) {
        super(props);
        this.state = {
            showDropdown: this.props.showDropdown || false,
            searchModeOn: false,
            uncheckedItemsFormerlySelected: []
        };
        this.selectedCheckboxChange = this.selectedCheckboxChange.bind(this);
    }

    notifyChange = (...args) => {
        _.isFunction(this.props.onChange) && this.props.onChange(...args);
    }

    createList = (tree, simple, showPartial) => {
        this.treeManager = new TreeManager(tree, simple, showPartial);
        return this.treeManager.tree;
    }

    resetSearchState = () => {
        // clear the search criteria and avoid react controlled/uncontrolled warning
        this.searchInput.value = '';
        return {
            tree: this.treeManager.restoreNodes(), // restore the tree to its pre-search state
            searchModeOn: false,
            allNodesHidden: false
        };
    }

    componentWillMount() {
        const tree = this.createList(this.props.data, this.props.simpleSelect, this.props.showPartiallySelected);
        const selectedItems = this.treeManager.getTags();
        this.setState({ tree, selectedItems });
    }

    componentWillReceiveProps(nextProps) {
        const tree = this.createList(nextProps.data, nextProps.simpleSelect, nextProps.showPartiallySelected);
        const selectedItems = this.treeManager.getTags();
        this.setState({ tree, selectedItems });
    }

    handleClick = () => {
        this.setState(prevState => {
            // keep dropdown active when typing in search box
            const showDropdown = this.keepDropdownActive || !prevState.showDropdown;

            // register event listeners only if there is a state change
            if (showDropdown !== prevState.showDropdown) {
                if (showDropdown) {
                    document.addEventListener('click', this.handleOutsideClick, false);
                } else {
                    document.removeEventListener('click', this.handleOutsideClick, false);
                }
            }

            return !showDropdown ? { showDropdown, ...this.resetSearchState() } : { showDropdown };
        });
    }

    handleOutsideClick = e => {
        if (this.node.contains(e.target)) {
            return;
        }

        this.handleClick();
    }

    onInputChange = value => {
        const { allNodesHidden, tree } = this.treeManager.filterTree(value);
        const searchModeOn = value.length > 0;

        this.setState({
            tree,
            searchModeOn,
            allNodesHidden
        });
    }

    onTagRemove = id => {
        this.onCheckboxChange(id, false);
    }

    onNodeToggle = id => {
        this.treeManager.toggleNodeExpandState(id);
        this.setState({ tree: this.treeManager.tree });
        _.isFunction(this.props.onNodeToggle) && this.props.onNodeToggle(this.treeManager.getNodeById(id));
    }

    onCheckboxChange = (id, checked) => {
        this.treeManager.setNodeCheckedState(id, checked);
        const selectedItems = this.treeManager.getTags();
        const showDropdown = this.props.simpleSelect ? false : this.state.showDropdown;
        const nextState = {
            tree: this.treeManager.tree,
            selectedItems,
            showDropdown
        };

        if (this.props.simpleSelect || this.props.clearSearchOnChange) {
            _.assign(nextState, this.resetSearchState());
        }

        this.setState(nextState);
        this.notifyChange(this.treeManager.getNodeById(id), selectedItems);
        this.selectedCheckboxChange(id, checked);
    }

    onAction = (actionId, nodeId) => {
        _.isFunction(this.props.onAction) && this.props.onAction(actionId, this.treeManager.getNodeById(nodeId));
    }

    selectedCheckboxChange(id, checked) {
        // If one of the selected checkboxes was unchecked then add it to the list of formerly selected items
        var { uncheckedItemsFormerlySelected } = this.state;
        if (!checked) {
            var matchingItems = _.filter(function (o) { return o._id === id; });
            if (matchingItems.length === 0) {
                uncheckedItemsFormerlySelected.push(this.state.tree.get(id));
            }
            this.setState({ uncheckedItemsFormerlySelected: uncheckedItemsFormerlySelected });
        }

        // If one of the selected checkboxes was checked then remove it from the list of formerly selected items
        if (checked) {
            this.setState({ uncheckedItemsFormerlySelected: _.filter(uncheckedItemsFormerlySelected, function (o) { return o._id !== id; }) });
        }
    }

    renderItem(item) {
        return (
            <div key={item.label}>
                {/* defaultChecked only works for initial render so having key value set to a random value is a hack to make React think it is always initial rendering */}
                <input key={Math.random()} id={item.label} type="checkbox" name={item.label} defaultChecked={item.selected} onChange={(event) => this.onCheckboxChange(item._id, event.target.checked)} />
                <label htmlFor={item.label}>{item.label}</label><br />
            </div>
        );
    }

    renderSelectedItems() {
        // Add a selected flag on each of our entries to know whether they are either from the selected list or formerly selected list
        const selected = _.map(this.state.selectedItems, o => _.extend({ selected: true }, o));
        const formerlySelected = _.map(this.state.uncheckedItemsFormerlySelected, o => _.extend({ selected: false }, o));

        // Combine both lists, order them by ID then render each one
        var allItems = selected.concat(formerlySelected);
        allItems = _.sortBy(allItems, [function (o) { return o._id; }]);
        return (
            <div>
                {allItems.map((val) => this.renderItem(val))}
            </div>
        );
    }

    render() {
        const dropdownTriggerClassname = cx({
            'dropdown-trigger': true,
            arrow: true,
            top: this.state.showDropdown,
            bottom: !this.state.showDropdown
        });

        return (
            <div
                className={cx(this.props.className, 'react-dropdown-tree-select')}
                ref={node => {
                    this.node = node;
                }}
            >
                <div className="dropdown">
                    <a className={dropdownTriggerClassname} onClick={this.handleClick}>
                        <Input
                            inputRef={el => {
                                this.searchInput = el;
                            }}
                            tags={this.state.selectedItems}
                            placeholderText={this.props.placeholderText}
                            onInputChange={this.onInputChange}
                            onFocus={() => {
                                this.keepDropdownActive = true;
                            }}
                            onBlur={() => {
                                this.keepDropdownActive = false;
                            }}
                            onTagRemove={this.onTagRemove}
                        />
                    </a>
                    {this.state.showDropdown && (
                        <div className={cx('dropdown-content')}>
                            {this.state.allNodesHidden ? (
                                <span className="no-matches">{this.props.noMatchesText || 'No matches found'}</span>
                            ) : (
                                <Tree
                                    data={this.state.tree}
                                    keepTreeOnSearch={this.props.keepTreeOnSearch}
                                    searchModeOn={this.state.searchModeOn}
                                    onAction={this.onAction}
                                    onCheckboxChange={this.onCheckboxChange}
                                    onNodeToggle={this.onNodeToggle}
                                    simpleSelect={this.props.simpleSelect}
                                    showPartiallySelected={this.props.showPartiallySelected}
                                />
                            )}
                        </div>
                    )}
                </div>
                Selected services<br />
                {this.renderSelectedItems()}
            </div>
        );
    }
}

export default CheckboxDropdownSelect;
