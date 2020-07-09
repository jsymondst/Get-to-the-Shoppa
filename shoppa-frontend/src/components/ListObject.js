import React from 'react'
import {List, Button, Icon} from 'semantic-ui-react'
import { getToken, deleteList} from './Fetches.js';



export default class ListObject extends React.Component { 
    render() { 
        const {icon, name, id} = this.props
        return (
                <List.Item>
                <List.Content>{name}</List.Content><br/>
                <Icon name='cart'/>
                {/* <Icon name='birthday cake'/> */}
                <List.Content floated='right'>
                <Button size='mini'>View / Edit</Button>
                <Button size='mini' onClick={()=>deleteList(id)}>Delete</Button>
                </List.Content>
                </List.Item>
        )
    }
}