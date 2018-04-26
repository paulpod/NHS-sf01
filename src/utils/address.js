import { correctPostCodeFormat } from './validation';

const postcodeHasWhitespace = postcode => /\s/g.test(postcode) ? true : false;

const addWhitespaceToFullPostcode = postcode => postcode.replace(/^(.*)(\d)/, "$1 $2");

export const formatPostcode = postcode => {
    if (correctPostCodeFormat(postcode)) {
        postcode =  postcodeHasWhitespace(postcode) ? postcode.toUpperCase() : addWhitespaceToFullPostcode(postcode).toUpperCase();
    }
    return postcode; //do not capitalise if postcode is not correct format
};
