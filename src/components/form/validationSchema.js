import * as Yup from 'yup';

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

export default [
  Yup.object().shape({
    [feet.name]: Yup
      .number()
      .positive()
      .integer()
      .min(90, "Min is 90")
      .max(230, "Max is 230")
      .required(`${feet.requiredErrorMsg}`)
      .typeError(`${feet.typeError}`),
    [inches.name]: Yup
      .number()
      .positive()
      .integer()
      .min(3, "Min is 3")
      .max(7, "Max is 7")
      .typeError(`${feet.typeError}`),
      // .test({
      //   test: function (value, { createError, path }) {
      //     const { isCentimeter } = this.parent;
      //     if (isCentimeter) {
      //       return createError({
      //         path,
      //         message: `${inches.requiredErrorMsg}`,
      //       })
      //     };
      //     return true;
      //   },
      // }),
    [weight.name]: Yup
      .number()
      .positive()
      .integer()
      .min(25, "Min is 25")
      .max(200, "Max is 200")
      .typeError(`${weight.typeError}`)
      .required(`${weight.requiredErrorMsg}`),
    [isCentimeter.name]: Yup.bool(),
    [isKilogram.name]: Yup.bool(),
  }),
  Yup.object().shape({
    [age.name]: Yup
      .number()
      .positive()
      .integer()
      .min(12, "Min is 12")
      .max(90, "Max is 90")
      .typeError(`${age.typeError}`)
      .required(`${age.requiredErrorMsg}`),
  }),
  Yup.object().shape({
    [range.name]: Yup.string(),
  }),
];