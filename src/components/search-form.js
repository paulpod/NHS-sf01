import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { Field } from 'redux-form-normalize-on-blur';
import PropTypes from 'prop-types';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import Button from 'react-bootstrap/lib/Button';
import CheckboxDropdownSelect from './common/checkbox-dropdown-select/checkbox-dropdown-select';
import { connect } from 'react-redux';
import '../style/scss/main.scss';
import { validPostcode, required } from '../utils/validation';
import { FieldGroup } from './common/field_group';
import GeolocationSelect from './common/geolocation_select';
import { isEmpty } from '../utils';
import { formatPostcode } from '../utils/address';
import { updateServiceTypesInForm } from "../actions/index";
import { bindActionCreators } from 'redux';

const defaultData = {
    urgency: '1',
    distance: '10'
};

class SearchForm extends Component {
    constructor(props) {
        super(props);
    }

    // Prevents submit form by pressing 'return' to force the user to press 'Continue' 
    // button. This is to force the code to add spaces to postcode to be triggered, 
    // because it only gets triggered when the postcode field loses focus
    onKeyPress = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
        }
    }

    onServiceTypesChange = (currentNode, selectedNodes) => {
        this.props.updateServiceTypesInForm(selectedNodes);
    };

    // Don't re-render the form because it causes the selected service types to be wiped out (as the selected service type information 
    // is not stored in this component's state).
    // eslint-disable-next-line no-unused-vars
    shouldComponentUpdate = (nextProps, nextState) => {
        return false;
    };

    render() {
        const { handleSubmit, submitting, geolocation } = this.props;
        const urgencyInHours = ['1', '2', '6', '12', '24'];
        const distanceInMiles = ['2', '5', '10', '20', '40', '60'];
        return (
            <form onSubmit={handleSubmit} onKeyPress={this.onKeyPress}>
                <div>
                    <label>Find a type of service</label>
                    <div><p>Example: Hello, Urgent Care Centre, Pharmacy</p></div>
                    <div>
                        <CheckboxDropdownSelect
                            data={this.props.serviceTypes}
                            onChange={this.onServiceTypesChange}
                            className="bootstrap-demo"
                        />
                    </div>
                </div>
                
                
                <div>
                    <GeolocationSelect />
                    <Field
                        name="postcode"
                        label="Postcode"
                        component={FieldGroup}
                        type="text"
                        size="12"
                        validate={isEmpty(geolocation) ? [required, validPostcode] : [validPostcode]}
                        normalizeOnBlur={formatPostcode}
                    />
                </div>
                <div>
                    <Button id="continueButton" type="submit" bsSize="small" bsStyle="success" disabled={submitting}>
                        Continue<Glyphicon glyph="chevron-right" />
                    </Button>
                </div>
            </form>
        );
    }
}

SearchForm.propTypes = {
    pristine: PropTypes.bool,
    submitting: PropTypes.bool,
    reset: PropTypes.func,
    handleSubmit: PropTypes.func,

    // Non-Redux form specific properties
    serviceTypes: PropTypes.array,
    geolocation: PropTypes.object,
    updateServiceTypesInForm: PropTypes.func
};

function RadioButtons(props) {
    return (
        <div className="form-check">
            {props.unitArray.map((val) =>
                <div key={val}>
                    <label>
                        <Field id={props.fieldName + '_' + val} name={props.fieldName} component="input" type="radio" value={val} />
                        &nbsp;
                        {val} {props.unitName}
                    </label>
                </div>
            )}
        </div>
    );
}

RadioButtons.propTypes = {
    fieldName: PropTypes.string.isRequired,
    unitArray: PropTypes.arrayOf(PropTypes.string).isRequired,
    unitName: PropTypes.string
};

// Specifies the default values for props:
RadioButtons.defaultProps = {
    unitName: ''
};

const searchReduxForm = reduxForm({
    form: 'search',
    enableReinitialize: true
})(SearchForm);

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ updateServiceTypesInForm }, dispatch);
}

export default connect(state => ({
    initialValues: defaultData,
    geolocation: state.geolocation
}), mapDispatchToProps)(searchReduxForm);
