import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { createItem } from '../../store/reducers/itemsReducer';

export default function CreateItem() {
    const dispatch = useDispatch();

    function handleSubmit(values, { setSubmitting, resetForm }) {
        dispatch(createItem(values.name, values.description, values.cost))
        resetForm()
        setSubmitting(false);
    }

    return (
        <React.Fragment>
            <h1>Create Item</h1>
            <hr/>
            <Formik
                initialValues={{name: "", description: "", cost: 0 }}
                validationSchema={Yup.object({
                    name: Yup.string()
                        .min(3, 'Must be 3 characters or more.')
                        .max(50, 'Must be 15 characters or less.')
                        .required('Required.'),
                    description: Yup.string()
                        .max(300, 'Must be 300 characters or less.'),
                    cost: Yup.number()
                        .min(0, 'Must be non negative.')
                        .required('Required.'),
                })}
                onSubmit={handleSubmit}
            >
                <Form>
                    <label style={{display:'block', fontWeight: 'bold'}} htmlFor="name">Name</label>
                    <Field name="name" type="text" placeholder="Item name" />
                    <ErrorMessage name="name">{msg => <span style={{color: 'red', marginLeft: '20px'}}>{msg}</span>}</ErrorMessage>

                    <hr/>
                    <label style={{display:'block', fontWeight: 'bold'}} htmlFor="description">Description</label>
                    <Field style={{width: '500px', height: '150px'}} name="description" as="textarea" placeholder="Description" />
                    <ErrorMessage name="description">{msg => <span style={{color: 'red', marginLeft: '20px'}}>{msg}</span>}</ErrorMessage>

                    <hr/>
                    <label style={{display:'block', fontWeight: 'bold'}} htmlFor="cost">Cost</label>
                    <Field name="cost" type="number" step="0.01" placeholder="Cost $" />
                    <ErrorMessage name="cost">{msg => <span style={{color: 'red', marginLeft: '20px'}}>{msg}</span>}</ErrorMessage>

                    <hr/>
                    <button type="submit">Submit</button>
                </Form>            
            </Formik>
        </React.Fragment>
    );
}