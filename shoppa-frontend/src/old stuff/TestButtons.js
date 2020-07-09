import React from 'react'
import { Input, Menu, Segment, Image, Button } from 'semantic-ui-react'
import logo from '../images/logo2.png'
import ListView from '../components/ListView'


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
                <Menu.Menu position='right'>
                    <h3>Welcome, {user}</h3>
                    <Menu.Item
                        name='Home'
                    />
                     {/* <Menu.Item
                        name='Log Lists'
                    /> */}
                    <Button onClick={() => logMyLists()}>Log lists</Button>
                    {/* <Menu.Item
                    name='Logout'
                    /> */}
                    <Button onClick={logOut}>Logout</Button>
                </Menu.Menu>
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

