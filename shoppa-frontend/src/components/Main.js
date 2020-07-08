import React from 'react'
import InputNew from './InputNew'
import ControlsBar from './ControlsBar'
import ListView from './ListView'
import ListCategories from './ListCategories'
import { Grid } from 'semantic-ui-react'
// import Speech from './components/Speech'

export default class Main extends React.Component {
    state = {
        items: [],
        item: "",
        editItem: false,
    };

    handleChange = (e) => {
        console.log(e.target.value);
        this.setState({
            item: e.target.value,
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const newItem = {
            title: this.state.item,
        };

        const updatedItems = [...this.state.items, newItem];

        this.setState({
            items: updatedItems,
            item: "",
            editItem: false,
        });
    };

    clearList = () => {
        console.log("cleared");
    };
    handleEdit = (id) => {};
    handleDelete = (id) => {};

    render() {
        return (
            <>
            {/* <p>logged in as {this.props.user}</p> */}
            <Grid celled>
                <Grid.Row className="segment centered">
                    <Grid.Column width={9}>
                                <InputNew
                                    item={this.state.item}
                                    handleChange={this.handleChange}
                                    handleSubmit={this.handleSubmit}
                                    editItem={this.state.editItem}
                                />
                                <ListCategories 
                                    items={this.state.items}
                                    handleDelete={this.handleDelete} 
                                    handleEdit={this.handleEdit}
                                    clearList={this.clearList}
                                />
                    </Grid.Column>
                    <Grid.Column width={6}>
                    <ControlsBar />
                    </Grid.Column>
                    </Grid.Row>
                </Grid>
            </>
        );
    }
}
