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
                    thihandleDelete={() => handleDelete(item.id)}
                    handleEdit={() => handleEdit(item.id)}
                />
            );
        });
    };

    render() {
        return (
            <>
                <div>{this.renderItems()}</div>
            </>
        );
    }
}
