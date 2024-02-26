export default {
    formId: 'FORM-MEASUREMENTS',
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
        weight: {
            name: 'weight',
            requiredErrorMsg: 'Please enter your weight (between 25 and 200 kg).',
            typeError: 'Must be number',
        },
        isCentimeter: {
            name: 'isCentimeter',
        },
        isKilogram: {
            name: 'isKilogram',
        },
        age: {
            name: 'age',
            requiredErrorMsg: 'Please enter age between 12 and 90 years.',
            typeError: 'Must be number',
        },
        range: {
            name: 'range',
        },
    }
};