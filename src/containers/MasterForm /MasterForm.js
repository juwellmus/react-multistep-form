import React, { Component} from "react";
import Step1 from "../../components/Step1/Step1";
import Step2 from "../../components/Step2/Step2";
import Step3 from "../../components/Step3/Step3";
import './MasterForm.css'

class MasterForm extends Component{

    constructor(props) {
        super(props);

        this.state ={
            currentStep: 1,

            formData: {
                name: "",
                email: "",
                mobile: "",
                blood: "",
                age: "",
                dob: ""
            }

        }
    }

    next = (value) =>{
      const currentStep = this.state.currentStep;
        this.setState({
            currentStep: currentStep + value
        })
    };

    prev = (value) =>{
        const currentStep = this.state.currentStep;
        this.setState({
            currentStep: currentStep - value
        })
    };


    onChangeForm = (values) => {
        const formData = this.state.formData;
        this.setState({
            ...this.state,
            formData: {
                ...formData,
                ...values
            }
        });
        console.log(this.state.formData)
    };

    formSubmit = () =>{
        alert(JSON.stringify(this.state.formData, null, 2));
        this.setState({
            formData: {
                name: "",
                email: "",
                mobile: "",
                blood: "",
                age: "",
                dob: ""
            }
        })
    };

    render() {
        const { currentStep } = this.state;
        const { formData } = this.state;
        const values = { formData };
        let step = null;

        switch (currentStep) {
            case 1:
                step = <Step1
                    next={this.next}
                    handleChange={this.onChangeForm}
                    value={values}
                />;
                break;
            case 2:
                step = <Step2
                    next={this.next}
                    prev={this.prev}
                    handleChange={this.onChangeForm}
                    value={values}
                />;
                break;
            case 3:
                step=<Step3
                    prev={this.prev}
                    handleChange={this.onChangeForm}
                    handleSubmit={this.formSubmit}
                    value={values}
                />;
                break;
            default:
                step = <Step1
                    next={this.next}
                    handleChange={this.onChangeForm}
                    value={values}
                />;

        }
        return(
            <div className="card" style={{marginTop: "20px"}}>
                <div className="card-header">
                    <span className="card-title">Multi-Step Form</span>
                </div>
                <div className="card-body">
                    {
                        step
                    }
                </div>
            </div>
        )
    }
};

export default MasterForm;