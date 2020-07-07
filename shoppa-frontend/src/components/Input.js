import React from 'react';
import {Button, Form} from 'semantic-ui-react'

export default class Input extends React.Component { 
    render() { 
        const {item, handleChange, handleSubmit, editItem} = this.props
        return ( 
            <Form onSubmit={handleSubmit}>
                <Form.Field>
                    <label>Enter a list item</label>
                    <input placeholder="Type in a list item" 
                    onChange={handleChange}
                    value={item}
                    />
                </Form.Field>
                <Button type='submit'>Submit</Button>
            </Form>
        )
    }
}

