import React from "react";
import comp from './Dialogs.module.css'
import {v1} from "uuid";
import Item from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import {DialogPropsType} from "./DialogsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../Common/FormsControls/Textarea";
import {maxLengthCreator, requiredField} from "../../Utils/Validators/Validators";

export type messageProps = {
    'message': string
}
export type FormDataType = {
    'messageBody': string
}
const maxLength10 =  maxLengthCreator(5)


export function Dialogs(props: DialogPropsType) {



    const addPost = (values:FormDataType) => {

        props.addPost(values.messageBody)
    }

    const dialogs = props.dialogs.dialogs.map((d) => {
        return (
            <div key={v1()}>
                <div><Item name={d.name} id={d.id}/></div>
            </div>
        )
    })

    const addMessage = props.dialogs.messages.map((m: { message: string; }) => {

        return (
            <div key={v1()}>
                <div><Message message={m.message}/></div>
            </div>
        )
    })
    return (<div className={comp.dialogs}>
            <div className={comp.dialogsItems}>
                {dialogs}
            </div>
            <div>
                <div className={comp.messages}>
                    {addMessage}
                </div>
                <AddMessageReduxForm onSubmit={addPost}/>
            </div>
        </div>
    )
}

export const AddMessageForm :React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Message'} name={'messageBody'} component={Input} types={'input'} validate={[requiredField,maxLength10]}/>
            </div>
            <button>Add Post</button>
        </form>

    )
}
const AddMessageReduxForm = reduxForm<FormDataType>({
        form: 'messageBody'
    }
)(AddMessageForm)

