import React from 'react'

export default class EditableTextItem extends React.Component{

    state={
        content:"starting content",
        editable: false
    }

    toggleEditable=()=>{
        this.setState({
            editable: !this.state.editable
        })
    }

    setContent=(e)=>{
        let newValue = e.target.value
        this.setState({
            content: newValue
        })
    }

    render(){
        const {editable, content} = this.state
        return(
            <>
                <span contentEditable={editable} onChange={this.setContent}>{content}</span>
                <button onClick={this.toggleEditable}>/</button>
            </>
        )

    }

}