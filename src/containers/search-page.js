import React, { Component } from 'react';
import SearchForm from '../components/search-form';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { searchServices } from "../actions";
import { bindActionCreators } from 'redux';
import _ from 'lodash';

class SearchPage extends Component {
    constructor(props) {
        super(props);
        this.showResults = this.showResults.bind(this);
    }
    
    showResults(values) {
        // Add values to form being submitted which can't be hooked up to Redux form easily
        values.geolocation = this.props.geolocation;
        values.serviceTypeIds = _.map(this.props.selectedServiceTypes, 'value');

        this.props.searchServices(values);
    }
    
    static propTypes = {
        serviceTypes: PropTypes.array,
        geolocation: PropTypes.object,
        selectedServiceTypes: PropTypes.array,
        serviceResults: PropTypes.array,
        searchServices: PropTypes.func
    };

    render() {
        return (
            <div>
                {_.isEmpty(this.props.serviceResults) ? 
                    <SearchForm onSubmit={this.showResults} serviceTypes={this.props.serviceTypes}/> : 
                    JSON.stringify(this.props.serviceResults)}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        serviceTypes: state.serviceTypes,
        geolocation: state.geolocation,
        selectedServiceTypes: state.selectedServiceTypes,
        serviceResults: state.services
    };
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ searchServices }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
