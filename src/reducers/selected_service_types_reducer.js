import { UPDATED_SELECTED_SERVICE_TYPES } from '../actions/index';

export default function (state = [], action) {
    switch (action.type) {
    case UPDATED_SELECTED_SERVICE_TYPES:
        return action.payload;
    }
    return state;
}
