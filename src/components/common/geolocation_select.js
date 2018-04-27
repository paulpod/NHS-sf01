import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateDeviceLocation } from '../../actions/index';
import _ from 'lodash';

class GeolocationSelect extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fetchingPosition: false,
            position: undefined,
            error: false
        };
    }

    componentWillMount() {
        if (_.isObject(window)) {
            return;
        }

        if (!('geolocation' in window.navigator)) {
            return;
        }
    }

    renderDetectionSucceededOrFailedText() {
        var onClickHandler = this.resetCurrentPosition;
        var linkText = "Forget this";
        var description = "Using detected location";
        if (this.state.error) {
            onClickHandler = this.getCurrentPosition;
            linkText = "Try again";
            description = "Unable to use your location";
        }
        return (
            <div>
                <img src="./assets/images/location-arrow-grey.svg" alt="triangle with all three sides equal" height="20px"/>
                &nbsp;&nbsp;{description}
                <button id="resetOrTryAgainLocationButton" type="button" className="btn btn-link" onClick={onClickHandler}>
                    {linkText}
                </button>
            </div>
        );
    }

    renderLocationText() {
        if ((this.state.position) || (this.state.error)) {
            return this.renderDetectionSucceededOrFailedText();
        } else {
            return (
                <div>
                    <img src="./assets/images/location-arrow-blue.svg" alt="triangle with all three sides equal" height="20px"/>
                    <button id="getLocationButton" type="button" className="btn btn-link" onClick={this.getCurrentPosition}>
                        Use my current location
                    </button>
                </div>
            );
        }
    }

    getCurrentPosition = () => {
        this.setState({ fetchingPosition: true });

        return window.navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({ position, fetchingPosition: false, error: false }, () =>
                    this.props.updateDeviceLocation(position.coords)
                );
            },
            err => {
                this.setState({ err, fetchingPosition: false, error: true }, () =>
                    this.props.updateDeviceLocation({})
                );
            },
        );
    }

    resetCurrentPosition = () => {
        this.props.updateDeviceLocation({});
        this.setState({position: undefined});
    }

    render() {
        return (
            <div>
                {this.renderLocationText()}
            </div>
        );
    }
}

GeolocationSelect.propTypes = {
    input: PropTypes.object,
    updateDeviceLocation: PropTypes.func
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ updateDeviceLocation }, dispatch);
}

export default connect(null, mapDispatchToProps)(GeolocationSelect);
