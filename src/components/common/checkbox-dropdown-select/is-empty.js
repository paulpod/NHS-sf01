import _ from 'lodash';

/**
 * Simplified implmentation of isEmpty.
 * Note: This is not complete and will return false positives for empty objects and likes.
 * However, it suffices for the limited use-case of this project.
 */
const isEmpty = o => !o || (_.isArray(o) && !o.length);

export default isEmpty;
