import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames/bind';
import debounce from 'lodash.debounce';
import styles from '../../../style/scss/main.scss';

const cx = cn.bind(styles);

const Input = props => {
    const { inputRef, placeholderText = 'Choose...', onFocus, onBlur } = props;

    const delayedCallback = debounce(
        e => {
            props.onInputChange(e.target.value);
        },
        50,
        { leading: true }
    );

    const onInputChange = e => {
        e.persist();
        delayedCallback(e);
    };

    return (
        <ul className={cx('tag-list')}>
            <li className={cx('tag-item')}>
                <input
                    type="text"
                    ref={inputRef}
                    className={cx('search')}
                    placeholder={placeholderText}
                    onChange={onInputChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                />
            </li>
        </ul>
    );
};

Input.propTypes = {
    tags: PropTypes.array,
    placeholderText: PropTypes.string,
    onInputChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onTagRemove: PropTypes.func,
    inputRef: PropTypes.func
};

export default Input;
