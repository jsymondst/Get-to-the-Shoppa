import React from "react";

export default class Nav extends React.Component {
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
                <button onClick={() => deleteList(7)}>Delete List</button>
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
            <div className="nav-bar">
                {user.length > 0 ? this.loggedInContent() : null}
            </div>
        );
    }
}

const fakeCreateListFetch = (listName) => {
    return new Promise((resolve, reject) => {
        resolve({ name: listName, id: 1 });
    });
};
