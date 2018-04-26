import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

const Action = props => {
    const { title, className, text, onAction, actionData } = props;

    const onClick = () => {
        if (_.isFunction(onAction)) {
            onAction(actionData);
        }
    };

    return (
        <i title={title} className={className} onClick={onClick}>
            {text}
        </i>
    );
};

Action.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    className: PropTypes.string,
    actionData: PropTypes.object,
    onAction: PropTypes.func
};

export default Action;
