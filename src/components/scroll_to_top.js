import { Component } from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import _ from 'lodash';

/* istanbul ignore next: difficult to unit test */
function doScrollToTop() {
    window.scrollTo(0, 0);
}

/**
 * https://reacttraining.com/react-router/web/guides/scroll-restoration
 */
export class ScrollToTop extends Component {
    static propTypes = {
        location: PropTypes.object,
        children: PropTypes.any,
    };

    componentDidUpdate(prevProps) {
        if (!_.isEqual(this.props.location, prevProps.location)) {
            doScrollToTop();
        }
    }

    render() {
        return this.props.children;
    }
}

export default withRouter(ScrollToTop);
