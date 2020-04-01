import React from "react";
import { useFormik } from 'formik';

const Step1 = (props) => {
    const { value } = props;
    const validate = values => {
        const errors = {};
        if (!values.name) {
            errors.name = 'Required';
        }
        
        if (!values.email) {
            errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }

        return errors;
    };

    const formik = useFormik({
        initialValues: {
            name: value.formData.name,
            email: value.formData.email
        },
        validate,
        onSubmit: values => {
            props.handleChange(values);
            props.next(1);
        },
    });
    return(
        <form onSubmit={formik.handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                    className="form-control"
                    type="text"
                    id="name"
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.name && formik.errors.name ? (
                    <div>{formik.errors.name}</div>
                ) : null}
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                    className="form-control"
                    type="email"
                    id="email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email ? (
                    <div>{formik.errors.email}</div>
                ) : null}
            </div>
            <div style={{float: "right"}}>
                <button type="submit" className="btn btn-success" >Next</button>
            </div>
        </form>

    )
};

export default Step1;