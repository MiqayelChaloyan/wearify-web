import * as Yup from 'yup';

import checkoutFormModel from './checkoutFormModel';

const {
    formField: {
        feet,
        inches,
        isCentimeter,
    }
} = checkoutFormModel;

export default Yup.object().shape({
    [feet.name]: Yup
        .number()
        .positive()
        .integer()
        .min(90, "Min is 90")
        .max(230, "Max is 230")
        .typeError(`${feet.typeError}`),
    [inches.name]: Yup
        .number()
        .positive()
        .integer()
        .min(3, "Min is 3")
        .max(7, "Max is 7")
        .typeError(`${feet.typeError}`),
        // .test({
        //     test: function (value, { createError, path }) {
        //         const { isCentimeter } = this.parent;
        //         if (isCentimeter) {
        //             return createError({
        //                 path,
        //                 message: `${inches.requiredErrorMsg}`,
        //             })
        //         };
        //         return true;
        //     },
        // }),
    [isCentimeter.name]: Yup.bool(),
})