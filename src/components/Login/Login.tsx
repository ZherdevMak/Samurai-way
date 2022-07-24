import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";

type FormDataType = {
    Login:string
    Password:string
    checkbox:boolean
}
const Login = () => {
    const onSubmitFinction = (formData:FormDataType) => {
    }
    return (
        <div>
            <h2>Login</h2>
            <LoginReduxForm onSubmit={onSubmitFinction}/>
        </div>
    );
};
export default Login

export const LoginForm :React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Login'} name={'Login'} component={'input'}/>
            </div>
            <div>
                <Field placeholder={'Password'} name={'Password'} component={'input'}/>
            </div>
            <div>
                <Field type={'checkbox'} name={'checkbox'} component={'input'}/> remember me
            </div>
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
