import React from "react";
import TodoItem from "./TodoItem";

export default class ListCategories extends React.Component {
    renderItems = () => {
        const { items, clearList, handleDelete, handleEdit } = this.props;
        items.map((item) => {
            return (
                <TodoItem
                    key={item.id}
                    title={item.title}
                    handleDelete={() => handleDelete(item.id)}
                    handleEdit={() => handleEdit(item.id)}
                />
            );
        });
    };

    render() {
        return (
            <>
                <h1>Current List</h1>
                <div>{this.renderItems()}</div>
            </>
        );
    }
}
