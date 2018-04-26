import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import ServiceTypesReducer from './service_types_reducer';
import GeolocationReducer from './geolocation_reducer';
import SelectedServiceTypesReducer from './selected_service_types_reducer';
import ServicesReducer from  './services_reducer';

const rootReducer = combineReducers({
    form: reduxFormReducer,
    serviceTypes: ServiceTypesReducer,
    geolocation: GeolocationReducer,
    selectedServiceTypes: SelectedServiceTypesReducer,
    services: ServicesReducer
});

export default rootReducer;
