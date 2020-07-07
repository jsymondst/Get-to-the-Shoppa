import React from 'react'
import { Button, Image, List, Icon } from 'semantic-ui-react'

export default class ListView extends React.Component { 
    render() { 
        return (
        <List divided verticalAlign='middle'>
            <List.Item>
              <Icon name='birthday cake'/>
              <List.Content>Billy's birthday</List.Content>
              <List.Content floated='right'>
                <Button size='mini'>Edit</Button>
                <Button size='mini'>Delete</Button>
              </List.Content>
            </List.Item>
            <List.Item>
              <Icon name='shopping cart'/>
              <List.Content>Nana's groceries</List.Content>
              <List.Content floated='right'>
                <Button size='mini'>Edit</Button>
                <Button size='mini'>Delete</Button>
              </List.Content>
            </List.Item>
        </List>
        )
    }
}