import { FETCH_SERVICE_TYPES } from '../actions/index';

function transformForReactSelect(element) {
    return { value: element.uid, label: element.description };
}

export default function (state = [], action) {
    switch (action.type) {
    case FETCH_SERVICE_TYPES:
        return action.payload.map(transformForReactSelect);
    }
    return state;
}
