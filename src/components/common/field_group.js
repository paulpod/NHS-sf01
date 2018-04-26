import React, { Component } from 'react';
import PropTypes from "prop-types";
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';
import HelpBlock from 'react-bootstrap/lib/HelpBlock';

export class FieldGroup extends Component {
    static propTypes = {
        id: PropTypes.string,
        label: PropTypes.string,
        className: PropTypes.string,
        input: PropTypes.any,
        meta: PropTypes.shape({
            touched: PropTypes.bool,
            error: PropTypes.string,
            warning: PropTypes.string,
        }),
    };

    render() {
        let validationState;
        const {id, label, className, input, meta, ...props} = this.props;
        const {touched, error, warning, active} = meta;

        if (active) {
            validationState = undefined;
        }

        else if (touched && error) {
            validationState = 'error';
        }
        
        else if (touched && warning) {
            validationState = 'warning';
        }

        else if (touched) {
            validationState = 'success';
        }

        return (
            <FormGroup
                className={className}
                controlId={id}
                validationState={validationState}
            >
                {label && <ControlLabel>{label}</ControlLabel>}
                <FormControl
                    {...props} {...input}
                    data-locator={id !== undefined ? id : null}
                />
                <FormControl.Feedback/>
                {touched && (
                    (error && !active && <HelpBlock>{error}</HelpBlock> ) ||
                    (warning && <HelpBlock>{warning}</HelpBlock>)
                )}
            </FormGroup>
        );
    }
}
