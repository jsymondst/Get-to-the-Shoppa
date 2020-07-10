import React from "react";
import {
    Button,
    Form,
    Checkbox,
    Grid,
    Header,
    Icon,
    Image,
    Menu,
    Segment,
    Sidebar,
    Input,
} from "semantic-ui-react";

export default class ListHeader extends React.Component {
    state = {
        name: this.props.name,
        editable: false,
    };

    toggleEditable = () => {
        const { editable, name } = this.state;
        const { itemMethods, fullListIndex } = this.props;

        if (editable) {
            itemMethods.editItem(fullListIndex, name);
        }

        this.setState({
            editable: !this.state.editable,
        });
    };

    setContent = (e) => {
        const { itemMethods, fullListIndex } = this.props;
        let newValue = e.target.value;
        this.setState({
            name: newValue,
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            editable: false,
        });
        this.props.updateName(this.state.name);
    };

    editHeaderForm = () => {
        return (
            <form onSubmit={this.handleSubmit}>
                <Input
                    type={"text"}
                    value={this.state.name}
                    onChange={this.setContent}
                ></Input>
                <Button basic type={"submit"}>
                    <Icon name="edit outline" />
                </Button>
            </form>
        );
    };

    staticHeader = () => {
        const { name } = this.state;
        return (
            <Grid>
                <Grid.Column width={3}>
                    <h1>{name}</h1>
                </Grid.Column>
                <Grid.Column>
                    <Button onClick={this.toggleEditable}>
                        <Icon name="edit" />
                    </Button>
                </Grid.Column>
            </Grid>
        );
    };

    render() {
        const { editable } = this.state;

        return <>{editable ? this.editHeaderForm() : this.staticHeader()}</>;
    }
}
