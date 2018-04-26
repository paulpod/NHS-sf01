import { UPDATE_DEVICE_LOCATION } from '../actions/index';

export default function (state = {}, action) {
    switch (action.type) {
    case UPDATE_DEVICE_LOCATION:
        return action.payload;
    }
    return state;
}
