import React from "react";
import { Icon, Label, Container, Button } from "semantic-ui-react";

export default class ControlsBar extends React.Component {
    render() {
        return (
            <>
                <div>
                    <Button>
                        <Icon name="share" />
                        Share list
                    </Button>
                    <h5>This list is currently shared with</h5>
                    <Container>
                        <Label image>
                            <img src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg" />
                            Jamie
                            <Icon name="delete" />
                        </Label>
                        <Label image>
                            <img src="https://react.semantic-ui.com/images/avatar/small/nan.jpg" />
                            Nana
                            <Icon name="delete" />
                        </Label>
                    </Container>
                </div>
            </>
        );
    }
}
