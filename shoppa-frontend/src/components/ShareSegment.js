import React from 'react'
import { Header, Segment, Icon, Label } from 'semantic-ui-react'

const square = { width: 175, height: 175 }

const ShareSegment = () => (
  <div>
    <Segment circular style={square} color="teal">
      <Header as='h5'>
        Currently shared with 
        <Header.Subheader><br></br>
            <Label image>
                    <img src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
                    Jamie
                    <Icon name='delete' />
                    </Label>
                    <br></br>
                    <br></br>
                    <Label image>
                    <img src='https://react.semantic-ui.com/images/avatar/small/nan.jpg' />
                    Nana
                    <Icon name='delete' />
             </Label>
        </Header.Subheader>
      </Header>
    </Segment>
    {/* <Segment circular inverted style={square}>
      <Header as='h2' inverted>
        Buy Now
        <Header.Subheader>$10.99</Header.Subheader>
      </Header>
    </Segment> */}
  </div>
)

export default ShareSegment