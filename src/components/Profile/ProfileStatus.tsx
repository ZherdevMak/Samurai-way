import React, {ChangeEvent} from 'react';

type ProfileStatusProps = {
    status: string
    updateStatus: (status: string) => void
}

// type CommonPropsType = RouteComponentProps<ProfileStatusProps> & ProfileContainerPropsType

class ProfileStatus extends React.Component<ProfileStatusProps> {
    state = {
        editMode: false,
        status:this.props.status
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
        this.props.updateStatus(this.state.status)

    }
    ChangeInput =(e:ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }
    componentDidUpdate(prevProps: Readonly<ProfileStatusProps>, prevState: Readonly<{}>) {
        console.log('did mount')
        if (prevProps.status!==this.props.status) {
            console.log('if')
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.ActivateEditMode}>{this.props.status || '---'}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onChange={(e)=>this.ChangeInput(e)} autoFocus={true} onBlur={this.DeactivateEditMode}
                               value={this.state.status}/>
                    </div>
                }
            </div>
        )
    }


}

export default ProfileStatus;