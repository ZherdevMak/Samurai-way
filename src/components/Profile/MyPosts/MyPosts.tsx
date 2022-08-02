import React from "react";
import comp from './MyPosts.module.css'
import Post from "./Post/Post";
import {v1} from "uuid";
import {MyPostsPropsType} from "../MyPostsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../Utils/Validators/Validators";
import {TextArea} from "../../Common/FormsControls/Textarea";

const maxLength10 =  maxLengthCreator(10)

// type PostType = {
//     message: string
//     likesCount: number
//     id: number
// }
// type MyPostsType = {
//     post:PostType[]
//     addPost:()=>void
//     newPostOnChange:(text:string)=>void
//     newPostValue:string
// }
export type FormDataType = {
    'newPostText': string
}
function MyPosts(props: MyPostsPropsType) {
    const addPost = (values:FormDataType) => {
        debugger
        props.addPost(values.newPostText)
    }
    const posts = props.posts.map((p) => <Post key={v1()} message={p.message} likesCount={p.likesCount} id={p.id}/>)

    return (<div>
        <article className={comp.posts}>
            My posts
            <article>
                <AddNewPostReduxForm onSubmit={addPost}/>
            </article>
        </article>
        {posts}
    </div>)
}

export default MyPosts
const AddNewPostForm:React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (

        <form onSubmit={props.handleSubmit}>
            <Field name={'newPostText'} component={TextArea} types={'input'} validate={[requiredField, maxLength10]}/>
            <button>Add Post</button>
            <button>Remove</button>
        </form>

    )
}
const AddNewPostReduxForm = reduxForm<FormDataType>({
        form: 'newPostText'
    }
)(AddNewPostForm)