import checkoutFormModel from './checkoutFormModel';

const {
    formField: {
        feet,
        inches,
        weight,
        isCentimeter,
        isKilogram,
        age,
        range,
    }
} = checkoutFormModel;

export default {
    [feet.name]: '',
    [inches.name]: '',
    [weight.name]: '',
    [isCentimeter.name]: true,
    [isKilogram.name]: true,
    [age.name]: '',
    [range.name]: 'AVERAGE',
};
