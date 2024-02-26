export default {
    formId: 'UPDATE-MEASUREMENTS',
    formField: {
        feet: {
            name: 'feet',
            requiredErrorMsg: 'Please enter your height (between 90 and 230 cm).',
            typeError: 'Must be number',
        },
        inches: {
            name: 'inches',
            requiredErrorMsg: 'Please enter your height (between 3 ft 0 in and 7 ft 6 in).',
            typeError: 'Must be number',
        },
        isCentimeter: {
            name: 'isCentimeter',
        },
    }
};