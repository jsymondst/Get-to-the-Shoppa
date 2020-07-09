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


const YourListsSideBar = ({ animation, direction, visible, handleImportList, handleAnimationChange }) => (
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
        <ListView handleImportList={handleImportList}
        handleAnimationChange={handleAnimationChange}
        
        />
      </Menu.Item>
    </Sidebar>
  )
  
  YourListsSideBar.propTypes = {
      animation: PropTypes.string,
      direction: PropTypes.string,
      visible: PropTypes.bool,
  }

  export default YourListsSideBar;