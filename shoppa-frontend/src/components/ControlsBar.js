import React from "react";
import ShareSegment from "./ShareSegment";
import {
    Grid,
    Icon,
    Label,
    Container,
    Button,
    Segment,
} from "semantic-ui-react";

export default class ControlsBar extends React.Component {
    render() {
        const { saveList } = this.props.listControlMethods;
        return (
            <>
                <Container verticalAlign="middle">
                    <ShareSegment />
                    <br></br>
                    <Button
                        color="teal"
                        onClick={() => {
                            saveList();
                        }}
                    >
                        <Icon name="save" />
                        Save List
                    </Button>
                    <br></br>
                    <br></br>
                    <Button color="teal">
                        <Icon name="share" />
                        Share list
                    </Button>
                    <br></br>
                    <br></br>
                    <Button>
                        <Icon name="delete" />
                        Delete list
                    </Button>
                </Container>
            </>
        );
    }
}
