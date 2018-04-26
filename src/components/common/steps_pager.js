import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Pager from "react-bootstrap/lib/Pager";
import Button from "react-bootstrap/lib/Button";
import ButtonGroup from "react-bootstrap/lib/ButtonGroup";
import withRouter from "react-router-dom/withRouter";

export class StepsPager extends Component {
    static DEFAULT_NEXT_NAME = 'Next step';
    static DEFAULT_PREVIOUS_NAME = 'Previous step';

    static propTypes = {
        previousStepName: PropTypes.string,
        nextStepName: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
        previousStepPath: PropTypes.string,
        nextStepPath: PropTypes.string,
        nextStepDisabled: PropTypes.bool.isRequired,
        onSelectNext: PropTypes.func,
        onSelectPrevious: PropTypes.func,
        history: PropTypes.object.isRequired
    };

    onClick = (path, callback) => {
        if (path) {
            this.props.history.push(path);
        }

        if (callback) {
            callback();
        }
    };

    render() {
        return (
            <Pager>
                <ButtonGroup vertical className="pull-left">
                    <Button
                        onClick={() => { this.onClick(this.props.nextStepPath, this.props.onSelectNext); }}
                        disabled={this.props.nextStepDisabled}
                        bsStyle="success"
                        bsSize="large"
                    >{
                            (this.props.hasOwnProperty('nextStepName') && this.props.nextStepName !== null) ? this.props.nextStepName : StepsPager.DEFAULT_NEXT_NAME
                        } &rarr;</Button>
                    <Button
                        onClick={() => { this.onClick(this.props.previousStepPath, this.props.onSelectPrevious); }}
                        bsSize="large"
                        bsStyle="link"
                    >&larr; {
                            (this.props.hasOwnProperty('previousStepName') && this.props.previousStepName !== null) ? this.props.previousStepName : StepsPager.DEFAULT_PREVIOUS_NAME
                        }</Button>
                </ButtonGroup>
            </Pager>
        );
    }
}

export default withRouter(StepsPager);
