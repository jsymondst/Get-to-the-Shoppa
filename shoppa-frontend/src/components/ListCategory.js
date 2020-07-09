import React from "react";
import TodoItem from "./TodoItem";
import { Search, Grid, Header, Segment, Button, Menu } from 'semantic-ui-react'

export default class ListCategory extends React.Component {
    renderItems = () => {
        const { items, clearList, handleDelete, handleEdit, deleteItem } = this.props;
        return items.map((item) => {
            return (
                <TodoItem
                    key={item.id}
                    product={item.product}
                    fullListIndex={item.fullListIndex}
                    // deleteItem={this.props.deleteItem}
                    itemMethods={this.props.itemMethods}
                    handleDelete={() => handleDelete(item.id)}
                    handleEdit={() => handleEdit(item.id)}
                    checkItem={this.props.checkItem}
                />
            );
        });
    };

    render() {
        return (
            <Grid.Column width={5}>
                <h1>{this.props.category}</h1>
                <div>{this.renderItems()}</div>
            </Grid.Column>
        );
    }
}
