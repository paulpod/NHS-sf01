import getPartialState from './get-partial-state';
import _ from 'lodash';

function flattenTree(tree, simple, showPartialState) {
    const forest = _.isArray(tree) ? tree : [tree];

    const list = walkNodes({
        nodes: forest,
        simple,
        showPartialState
    });
    return list;
}

/**
 * If the node didn't specify anything on its own
 * figure out the initial state based on parent
 * @param {object} node [current node]
 * @param {object} parent [node's immediate parent]
 */
function setInitialStateProps(node, parent = {}) {
    const stateProps = ['checked', 'disabled'];
    for (let index = 0; index < stateProps.length; index++) {
        const prop = stateProps[index];

        // if and only if, node doesn't explicitly define a prop, grab it from parent
        if (node[prop] === undefined && parent[prop] !== undefined) {
            node[prop] = parent[prop];
        }
    }
}

function walkNodes({ nodes, list = new Map(), parent, depth = 0, simple, showPartialState }) {
    nodes.forEach((node, i) => {
        node._depth = depth;

        if (parent) {
            node._id = node.id || `${parent._id}-${i}`;
            node._parent = parent._id;
            parent._children.push(node._id);
        } else {
            node._id = node.id || `${i}`;
        }

        setInitialStateProps(node, parent);

        list.set(node._id, node);
        if (!simple && node.children) {
            node._children = [];
            walkNodes({
                nodes: node.children,
                list,
                parent: node,
                depth: depth + 1,
                showPartialState
            });

            if (showPartialState && !node.checked) {
                node.partial = getPartialState(node);

                // re-check if all children are checked. if so, check thyself
                if (node.children.every(c => c.checked)) {
                    node.checked = true;
                }
            }

            node.children = undefined;
        }
    });
    return list;
}

export default flattenTree;
