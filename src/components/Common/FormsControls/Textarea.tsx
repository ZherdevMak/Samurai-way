import React from 'react';
import stl from './textArea.module.css'

export type TextAreaType = {
    input: any,
    meta: any,
    types:any
}
export const TextArea: React.FC<TextAreaType> = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={stl.formControl + ' ' + (hasError ? stl.error: "")}>
            <div>
                {props.types === 'input'?
                <input {...input}{...props}/>:
                    <textarea {...input}{...props}/>}
            </div>
            {hasError && <span>'Some Error'</span>}
        </div>
    );
};
export const Text = TextArea
