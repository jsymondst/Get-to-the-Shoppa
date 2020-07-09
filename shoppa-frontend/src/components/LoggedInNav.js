import React from 'react'
import { Input, Menu, Segment, Image, Button, Header } from 'semantic-ui-react'
import logo from '../images/logo2.png'
import ListView from './ListView'


export default class LoggedInNav extends React.Component {

    state = { 
        activeItem: false 
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: !this.state.activeItem})

    loggedInContent = () => {
        const { user, logOut, deleteList } = this.props;
        const logMyLists = this.logMyLists;
        return (
            <div>
                {/* <button onClick={() => this.createList("List1")}>
                    create list
                </button>
                <button onClick={() => deleteList(10)}>Delete List</button> */}
                <Menu pointing>
                <Menu.Menu position='center'>
                        <Image src={logo} size='small' alt="" />
                </Menu.Menu>
                <Menu.Item position='right' verticalAlign="bottom">
                    <Header textAlign="bottom" as="h3" floated='right'>Welcome back {user}</Header>
                </Menu.Item>
                    {/* <Menu.Item
                        name='Home'
                    /> */}
                     {/* <Menu.Item
                        name='Log Lists'
                    /> */}
                    {/* <Button onClick={() => logMyLists()}>Log lists</Button> */}
                    {/* <Menu.Item
                    name='Logout'
                    /> */}
                <Menu.Item>
                    <Button size="large" basic color='grey' content='grey' onClick={logOut}>Logout</Button>
                </Menu.Item>
                </Menu>
                </div>
        );
    };

  
    logMyLists = () => {
        const { fetchGetWithToken } = this.props;
        fetchGetWithToken("lists")
            .then((res) => res.json())
            .then(console.log);
    };

    createList = (listName) => {
        const { fetchPostWithToken } = this.props;
        const newList = { list: { name: listName, icon: "icon1" } };
        fetchPostWithToken("lists", newList)
            .then((res) => res.json())
            .then(console.log);
    };

    render() {
        const { user, logOut } = this.props;
        const {activeItem} = this.state
        return (
            <div className="testbuttons">
                {user.length > 0 ? this.loggedInContent() : null}
            </div>
        );
    }
}

