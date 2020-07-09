import React from "react";

export default class TestButton extends React.Component {
    loggedInContent = () => {
        const { user, logOut, deleteList } = this.props;
        const logMyLists = this.logMyLists;
        return (
            <div>
                <h1>Welcome, {user}</h1>
                <button onClick={logOut}>Logout</button>
                <button onClick={() => logMyLists()}>Log lists</button>
                <button onClick={() => this.createList("List1")}>
                    create list
                </button>
                <button onClick={() => deleteList(10)}>Delete List</button>
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

        return (
            <div className="testbuttons">
                {user.length > 0 ? this.loggedInContent() : null}
            </div>
        );
    }
}

