import React from "react";
import {useFormik} from "formik";

const Step2 = (props) => {

    const { value } = props;

    const validate = values => {
        const errors = {};
        if (!values.mobile) {
            errors.mobile = 'Required';
        }

        if (!values.blood) {
            errors.blood = 'Required';
        }

        return errors;
    };

    const formik = useFormik({
        initialValues: {
            mobile: value.formData.mobile,
            blood: value.formData.blood
        },
        validate,
        onSubmit: values => {
            props.handleChange(values);
            props.next(1);
        },
    });

    const previous = () => {
        props.prev(1);
    };

    return(
        <form onSubmit={formik.handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Mobile No.</label>
                <input
                    className="form-control"
                    type="number"
                    id="mobile"
                    name="mobile"
                    value={formik.values.mobile}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
            </div>
            <div className="form-group">
                <label htmlFor="email">Blood Group</label>
                <input
                    className="form-control"
                    type="text"
                    id="blood"
                    name="blood"
                    value={formik.values.blood}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
            </div>
            <div style={{float: "right"}}>
                <button type="button" className="btn btn-primary" onClick={previous} >Previous</button>
                <button type="submit" className="btn btn-success">Next</button>
            </div>
        </form>
    )
};

export default Step2;