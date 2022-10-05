import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../Common/FormsControls/Textarea";
import {maxLengthCreator, requiredField} from "../../Utils/Validators/Validators";
import {connect} from "react-redux";
import {loginTC} from "../Redux/Auth-reducer";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../Redux/ReduxStore";
import stl from '../Common/FormsControls/textArea.module.css'

type FormDataType = {
    email: string
    Password: string
    rememberMe: boolean
}
const maxLength10 = maxLengthCreator(30)
const Login = (props: any) => {
    const onSubmitFinction = (formData: FormDataType) => {
        props.loginTC(formData.email, formData.Password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (
        <div>
            <h2>Login</h2>
            <LoginReduxForm onSubmit={onSubmitFinction}/>
        </div>
    );

};
const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {loginTC})(Login)

export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Email'} name={'email'} component={Input}
                       validate={[requiredField, maxLength10]}/>
            </div>
            <div>
                <Field placeholder={'Password'} name={'Password'} component={Input}
                       validate={[requiredField, maxLength10]}/>
            </div>
            <div>
                <Field type={'checkbox'} name={'rememberMe'} component={'input'}/> remember me
            </div>
            {props.error && <span className={stl.formError}>
                {props.error}
            </span>}

            <div>
                <button>Login</button>
            </div>
        </form>

    );
};

const LoginReduxForm = reduxForm<FormDataType>({
        form: 'login'
    }
)(LoginForm)
