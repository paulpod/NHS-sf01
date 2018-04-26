export const required = value => (value ? undefined : 'Required');

export const correctPostCodeFormat = (value) => /^[a-z]{1,2}[0-9]{1,2}[a-z]{0,1} ?([0-9]{1}[a-z]{2}|[0-9]{2}[a-z]{1})$/i.test(value);
const POST_CODE_INVALID = 'Invalid postcode format';

export const validPostcode = value =>
    value && !correctPostCodeFormat(value)
        ? POST_CODE_INVALID
        : undefined;
