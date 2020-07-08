import React from 'react'
import { Button, Image, List, Icon } from 'semantic-ui-react'

export default class ListView extends React.Component { 
    render() { 
        return (
        <List divided verticalAlign='middle'>
            <List.Item>
              <List.Content>Billy's birthday</List.Content><br/>
              <Icon name='birthday cake'/>
              <List.Content floated='right'>
              <Button size='mini'>View</Button>
                <Button size='mini'>Edit</Button>
                <Button size='mini'>Delete</Button>
              </List.Content>
            </List.Item><br/>
            <List.Item>
              <List.Content>Nana's groceries</List.Content><br/>
              <Icon name='shopping cart'/>
              <List.Content floated='right'>
              <Button size='mini'>View</Button>
                <Button size='mini'>Edit</Button>
                <Button size='mini'>Delete</Button>
              </List.Content>
            </List.Item>
        </List>
        )
    }
}