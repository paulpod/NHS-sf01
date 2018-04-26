import { SUBMIT_SERVICE_SEARCH } from '../actions/index';

export default function (state = [], action) {
    switch (action.type) {
    case SUBMIT_SERVICE_SEARCH:
        return action.payload.data.success.services;
    }
    return state;
}
