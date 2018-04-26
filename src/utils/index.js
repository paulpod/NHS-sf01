// Checks whether an object is empty (as Lodash's isEmpty does not seem to work with prototypically inherited classes (like the geolocation))
export function isEmpty(value) {
    for (var prop in value) {
        return false;
    }
    return true;
}
