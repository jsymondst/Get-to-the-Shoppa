import React from "react";

export default class Nav extends React.Component {
    loggedInContent = () => {
        const { user, logOut } = this.props;
        const logMyLists = this.logMyLists;
        return (
            <div>
                <h1>Welcome, {user}</h1>
                <button onClick={logOut}>Logout</button>
                <button onClick={() => logMyLists()}>Log lists</button>
            </div>
        );
    };

    logMyLists = () => {
        console.log("fired");
        const { fetchWithToken } = this.props;
        fetchWithToken("lists")
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
