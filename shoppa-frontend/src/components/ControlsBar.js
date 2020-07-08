import React from 'react'
import ShareSegment from './ShareSegment'
import { Icon, Label, Container, Button, Segment} from 'semantic-ui-react'

export default class ControlsBar extends React.Component { 

   render() { 
       return ( 
           <>
           <Container>
               <ShareSegment />
               <br></br>
               <div>
                <Button color="teal"><Icon name='share'/>Share list</Button>
                <Button><Icon name='delete'/>Delete list</Button>
                </div>
            </Container>
            </>
       )
   }

}