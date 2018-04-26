import _ from 'lodash';

const toKebabCase = str => str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();

const getDataset = (o = {}) =>
    _.keys(o).reduce((acc, cur) => {
        acc[`data-${toKebabCase(cur)}`] = o[cur];
        return acc;
    }, {});

export { getDataset };
