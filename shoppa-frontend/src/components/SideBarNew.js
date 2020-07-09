import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Main from './Main'
import ListView from './ListView'
import {
  Button,
  Checkbox,
  Grid,
  Header,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar,
} from 'semantic-ui-react'

const VerticalSidebar = ({ animation, direction, visible }) => (
  <Sidebar
    as={Menu}
    animation={animation}
    direction={direction}
    icon='labeled'
    // inverted
    vertical
    visible={visible}
    width='very wide'
  >
    <Menu.Item as='a'>
      <ListView />
    </Menu.Item>
  </Sidebar>
)


VerticalSidebar.propTypes = {
    animation: PropTypes.string,
    direction: PropTypes.string,
    visible: PropTypes.bool,
}

export default class SidebarExampleTransitions extends Component {
    state = {
      animation: 'overlay',
      direction: 'left',
      dimmed: false,
      visible: false,
    }
  
handleAnimationChange = (animation) => () =>
      this.setState((prevState) => ({ animation, visible: !prevState.visible }))
  
handleDirectionChange = (direction) => () =>
      this.setState({ direction, visible: false })
  
render() {
    const { animation, dimmed, direction, visible } = this.state

  
    return (
        <div>
          {/* <Button
            active={direction === 'left'}
            onClick={this.handleDirectionChange('left')}
          >
            Left
          </Button> */}
        <br></br>
          <Button onClick={this.handleAnimationChange('scale down')}>
          View your Shopping Lists 
         </Button>

        <Sidebar.Pushable as={Segment}>
            <VerticalSidebar
              animation={animation}
              direction={direction}
              visible={visible}
            />
          <Sidebar.Pusher dimmed={dimmed && visible}>
            <Segment basic>
                <Main />
              {/* <Header as='h3'>Application Content</Header>
              <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' /> */}
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}
