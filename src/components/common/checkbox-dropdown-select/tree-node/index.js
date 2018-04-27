import cn from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import Action from './action';
import isEmpty from '../is-empty';
import NodeLabel from './node-label';

import styles from '../../../../style/scss/main.scss';
import { getDataset } from '../dataset-utils';

const cx = cn.bind(styles);

const isLeaf = node => isEmpty(node._children);

const getNodeCx = props => {
    const { keepTreeOnSearch, node, showPartiallySelected } = props;

    return cx(
        'node',
        {
            leaf: isLeaf(node),
            tree: !isLeaf(node),
            disabled: node.disabled,
            hide: node.hide,
            'match-in-children': keepTreeOnSearch && node.matchInChildren,
            partial: showPartiallySelected && node.partial
        },
        node.className
    );
};

const getToggleCx = ({ node }) => cx('toggle', { expanded: !isLeaf(node) && node.expanded, collapsed: !isLeaf(node) && !node.expanded });

const getNodeActions = props => {
    const { node, onAction } = props;

    // we _do_ want to rely on array index here
    // eslint-disable-next-line react/no-array-index-key
    return (node.actions || []).map((a, idx) => <Action key={`action-${idx}`} {...a} actionData={{ action: a.id, node }} onAction={onAction} />);
};

const TreeNode = props => {
    const { simpleSelect, keepTreeOnSearch, node, searchModeOn, onNodeToggle, onCheckboxChange, showPartiallySelected } = props;
    const liCx = getNodeCx(props);
    const toggleCx = getToggleCx(props);
    const style = keepTreeOnSearch || !searchModeOn ? { paddingLeft: `${node._depth * 20}px` } : {};
    if (props.node.checked) {
        style['backgroundColor'] = "#FFD700";
    }
    return (
        <li className={liCx} style={style} {...getDataset(node.dataset)}>
            <i className={toggleCx} onClick={() => onNodeToggle(node._id)} />
            <NodeLabel node={node} simpleSelect={simpleSelect} onCheckboxChange={onCheckboxChange} showPartiallySelected={showPartiallySelected} />
            {getNodeActions(props)}
        </li>
    );
};

TreeNode.propTypes = {
    node: PropTypes.shape({
        _id: PropTypes.string,
        _depth: PropTypes.number,
        _children: PropTypes.array,
        actions: PropTypes.array,
        className: PropTypes.string,
        title: PropTypes.string,
        label: PropTypes.string.isRequired,
        checked: PropTypes.bool,
        expanded: PropTypes.bool,
        disabled: PropTypes.bool,
        dataset: PropTypes.object
    }).isRequired,
    keepTreeOnSearch: PropTypes.bool,
    searchModeOn: PropTypes.bool,
    onNodeToggle: PropTypes.func,
    onAction: PropTypes.func,
    onCheckboxChange: PropTypes.func,
    simpleSelect: PropTypes.bool,
    showPartiallySelected: PropTypes.bool
};

export default TreeNode;
