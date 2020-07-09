import React from "react";
import { Button, Image, List, Icon} from "semantic-ui-react";

export default class TodoItem extends React.Component {
    state = { 
        checked: false,
        editable:false,
        name: this.props.product,
    }

    checkItem = (id) => { 
         this.setState({ 
          checked: !this.state.checked
            })
      }


    handleImportButton = ()=>{
        const {id, handleImportList, handleAnimationChange} = this.props
        handleImportList(id)
    }

    toggleEditable =() =>{
        const {editable, name} = this.state
        const {itemMethods, fullListIndex} = this.props

        if(editable){
            itemMethods.editItem(fullListIndex, name )
        }
        
        this.setState({
            editable: !this.state.editable
        })    
    }

    setContent=(e)=>{
        const {itemMethods, fullListIndex} = this.props
        let newValue = e.target.value
        this.setState({
            name: newValue
        })
    }




    render() {
        const { product, handleDelete, handleEdit, deleteItem, fullListIndex , itemMethods} = this.props;
        const {name, editable} = this.state
        return (
            <div className="ul container" style={{ 
                textDecoration: this.state.checked ? "line-through" : ""
            }}>
                <List divided verticalAlign="middle">
                    <List.Item>
                        <List.Content floated="right">
                        <Button.Group compact size="mini">
                            <Button 
                            basic 
                            color='teal' 
                            content='Teal'
                            onClick={this.toggleEditable}
                            // onClick={() => this.checkItem(id)}
                            ><Icon name='edit'/></Button>
                            <Button 
                            basic 
                            color='teal' 
                            content='Teal'
                            onClick={()=>itemMethods.checkItem(fullListIndex)}
                            // onClick={() => this.checkItem(id)}
                            ><Icon name='check'/></Button>
                            {/* <Button /> */}
                            <Button 
                                basic 
                                color='red' 
                                content='Red'
                                onClick={()=>itemMethods.deleteItem(fullListIndex)}
                            ><Icon name='delete'/></Button>
                        </Button.Group>
                        </List.Content>
                        <Image
                            avatar
                            src="https://react.semantic-ui.com/images/avatar/small/lena.png"
                            alt=""
                        />
                        <List.Content>
                            {editable? 
                            <input type="text" value ={name} onChange={this.setContent}></input>
                            : 
                            <span>{name}</span>
                            }
                        </List.Content>
                    </List.Item>
                </List>
            </div>
        );
    }
}
