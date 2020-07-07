import React from 'react'
import { Button, Image, List } from 'semantic-ui-react'

export default class TodoItem extends React.Component { 

    render() { 
        const {title, handleDelete, handleEdit} = this.props
        return ( 
            <div className="ul container">
            <List divided verticalAlign='middle'>
                <List.Item>
                <List.Content floated='right'>
                    <Button>Edit</Button>
                    <Button>Delete</Button>
                </List.Content>
                <Image avatar src='https://react.semantic-ui.com/images/avatar/small/lena.png' alt=""/>
                <List.Content>{title}</List.Content>
            </List.Item>
            </List>
            </div>
        )
    }
}