import React from 'react'
import ShareSegment from './ShareSegment'
import { Grid, Icon, Label, Container, Button, Segment} from 'semantic-ui-react'

export default class ControlsBar extends React.Component { 

   render() { 
       return ( 
           <>
           <Container>
               <ShareSegment />
               <br></br>
               <Grid.Row>
                <Button color="teal"><Icon name='save'/>Save List</Button>
                <Button color="teal"><Icon name='share'/>Share list</Button>
                <Button><Icon name='delete'/>Delete list</Button>
                </Grid.Row>
            </Container>
            </>
        );
    }
}
