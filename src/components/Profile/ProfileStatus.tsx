import React from 'react';
import {RouteComponentProps} from "react-router-dom";
import {ProfileContainerPropsType} from "./ProfileContainer";

type ProfileStatusProps = {
    status: string
}
type CommonPropsType = RouteComponentProps<ProfileStatusProps> & ProfileContainerPropsType

class ProfileStatus extends React.Component<CommonPropsType> {
    state = {
        editMode: false
    }
    ActivateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    DeactivateEditMode = () => {
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.ActivateEditMode}>{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input autoFocus={true} onBlur={this.DeactivateEditMode} value={this.props.status}/>
                    </div>
                }
            </div>
        )
    }


}

export default ProfileStatus;