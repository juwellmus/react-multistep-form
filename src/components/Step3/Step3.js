import React from "react";
import {useFormik} from "formik";

const Step3 = (props) => {
    const { value } = props;

    const validate = values => {
        const errors = {};
        if (!values.age) {
            errors.age = 'Required';
        }

        if (!values.dob) {
            errors.dob = 'Required';
        }

        return errors;
    };

    const formik = useFormik({
        initialValues: {
            age: "",
            dob: ""
        },
        validate,
        onSubmit: (values, {resetForm}) => {
            props.handleChange(values);
            props.handleSubmit();
            resetForm();
        },
    });

    const previous = () => {
        props.prev(1);
    };

    return(
        <form onSubmit={formik.handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Age</label>
                <input
                    className="form-control"
                    type="number"
                    id="age"
                    name="age"
                    value={formik.values.age}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
            </div>
            <div className="form-group">
                <label htmlFor="email">Date of Birth</label>
                <input
                    className="form-control"
                    type="date"
                    id="dob"
                    name="dob"
                    value={formik.values.dob}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
            </div>
            <div style={{float: "right"}}>
                <button type="button" className="btn btn-primary" onClick={previous}>Previous</button>
                <button type="submit" className="btn btn-success">Submit</button>
            </div>
        </form>
    )
};

export default Step3;