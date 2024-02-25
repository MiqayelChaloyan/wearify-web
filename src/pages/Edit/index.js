import { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { addData } from "../../store/features/initialDataSlice";

import { Form, Formik } from 'formik';
import checkoutFormModel from './checkoutFormModel';
import validationSchema from './validationSchema';

import InputField from "../../ui/input";
import ToggleSwitch from "../../ui/toggleSwitch";

import './style.css';


const Edit = () => {
    const [isCentimeterBool, setIsCentimeterBool] = useState(true);
    const state = useSelector((state) => state.state);
    const { formId, formField } = checkoutFormModel;
    const dispatch = useDispatch();

    const {
        feet,
        age,
        inches,
        range,
        isCentimeter,
        isKilogram,
        weight
    } = state;

    const handleToggle = () => setIsCentimeterBool(!isCentimeterBool);

    const [data, setData] = useState({
        feet,
        inches,
        isCentimeter
    });

    const _updateFields = (values) => {
        setData(prev => {
            return { ...prev, ...values }
        });
        dispatch(addData({ ...values }))
    };

    const _handleSubmit = () => {
        console.log('clear data');
    }

    return (
        <div>
            <div className='left'>
                <Formik
                    initialValues={data}
                    validationSchema={validationSchema}
                    onSubmit={_updateFields}
                >
                    {({ isSubmitting }) => (
                        <Form id={formId}>
                            <div>
                                <p className='title-row'> Height </p>
                                <div className='row-1'>
                                    <div className='input-box'>
                                        <InputField
                                            name={formField.feet.name}
                                            className='form-input-height'
                                        />
                                        <span className='unit'>ft</span>
                                    </div>
                                    {
                                        !isCentimeterBool &&
                                        <div className='input-box'>
                                            <InputField
                                                name={formField.inches.name}
                                                className='form-input-height'
                                            />
                                            <span className='unit'>in</span>
                                        </div>
                                    }
                                </div>
                                <div className='row-2'>
                                    <ToggleSwitch
                                        name={formField.isCentimeter.name}
                                        leftLabel='cm'
                                        rightLabel='in'
                                        onChange={handleToggle}
                                    />
                                </div>
                            </div>
                            <div className='buttons-edit-form'>
                                <button
                                    disabled={isSubmitting}
                                    type='submit'
                                    variant='contained'
                                    color='primary'
                                    className='button-edit'
                                >
                                    Add Profile
                                </button>
                                <button
                                    type='button'
                                    variant='contained'
                                    color='primary'
                                    className='button-clear'
                                    onClick={_handleSubmit}
                                >
                                    Clear Data
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
            <div className='right'>
                <div className='sizes'>
                    <p className='title-sizes'>Height</p>
                    <div className='height-person'>
                        <p className='person-size-text'>{feet || inches} {isCentimeter ? 'cm' : 'in'}</p>
                    </div>
                    <p className='title-sizes'>Weight</p>
                    <div className='weight-person'>
                        <p className='person-size-text'>{weight} {isKilogram ? 'kg' : 'ibs'}</p>
                    </div>
                </div>
                <div className='sizes'>
                    <p className='title-sizes'>Age</p>
                    <div className='age-person'>
                        <p className='person-size-text'>{age}</p>
                    </div>
                    <p className='title-sizes'>Fit</p>
                    <div className='feet-person'>
                        <p className='person-size-text'>{range}</p>
                    </div>
                    <p className='title-sizes'>Gender</p>
                    <div className='gender-person'>
                        <p className='person-size-text'>Female</p>
                    </div>
                </div>
            </div>
        </div >
    )
};

export default Edit;