import React from 'react';
import stl from './textArea.module.css'

export type TextAreaType = {
    input: any,
    meta:any
    types:any,
    child:any

}
// export const TextArea: React.FC<TextAreaType> = ({input, meta, ...props}) => {
//     debugger
//     const hasError = meta.touched && meta.error
//     let err:string = meta.error
//     return (
//         <div className={stl.formControl + ' ' + (hasError ? stl.error: "")}>
//             <div>
//                 {props.types === 'input'?
//                 <input {...input}{...err}{...props} />:
//                     <textarea {...input}{...props}/>}
//             </div>
//             {hasError && <span>'Some Error'</span>}
//         </div>
//     );
// };
export const FormControl: React.FC<TextAreaType> = ({input, meta,child, ...props}) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={stl.formControl + ' ' + (hasError ? stl.error: "")}>
            <div>
                {props.children}
            </div>
            {/*{hasError && <span>'Some Error'</span>}*/}
        </div>
    );
};
export const Textarea = (props:any) => {
    const {input, meta,child, ...restprops} = props
    return <FormControl {...props}><textarea {...input} {...restprops}/></FormControl>
}
export const Input = (props:any) => {
    const {input, meta,child, ...restprops} = props
    return <FormControl {...props}><input {...input} {...restprops}/></FormControl>
}
