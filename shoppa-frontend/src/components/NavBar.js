import React from 'react'
import { Input, Menu, Segment, Image } from 'semantic-ui-react'
import logo from '../images/logo2.png'
import ListView from './ListView'

export default class NavBar extends React.Component { 

    state = { 
        activeItem: false 
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: !this.state.activeItem})

    render() { 
        const {activeItem} = this.state
        return (
             <div>
        <Menu pointing>
          {/* <Menu.Item
            name='Your Task Lists'
            // active={activeItem === 'home'}
            onClick={this.handleItemClick}
          /> */}
          {/* <Menu.Item
            name='messages'
            active={activeItem === 'messages'}
            onClick={this.handleItemClick}
          /> */}
          <Menu.Menu position='center'>
                <Image src={logo} size='small' alt="" />
          </Menu.Menu>
          <Menu.Menu position='right'>
            <Menu.Item
                name='Home'
            />
             <Menu.Item
            name='Logout'
            />
            {/* <Menu.Item>
              <Input icon='search' placeholder='Search...' />
            </Menu.Item> */}
          </Menu.Menu>
        </Menu>
        {/* <Segment> */}
           {/* {activeItem == true ? <ListView /> : null } */}
        {/* </Segment> */}
      </div>
        )
    }
}