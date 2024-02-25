import * as Yup from 'yup';

import checkoutFormModel from './checkoutFormModel';

const {
    formField: {
        feet,
        inches,
        // weight,
        isCentimeter,
        // isKilogram,
        // age,
        // range,
    }
} = checkoutFormModel;

export default Yup.object().shape({
    [feet.name]: Yup.string(),
    [inches.name]: Yup.string(),
    // [weight.name]: Yup.string().required(`${weight.requiredErrorMsg}`),
    [isCentimeter.name]: Yup.bool(),
    // [isKilogram.name]: Yup.bool(),
})