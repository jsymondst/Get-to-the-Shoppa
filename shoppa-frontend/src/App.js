import React from "react";
import Nav from "./components/Nav";
import Login from "./components/Login";
import TestButtons from "./components/TestButtons";
import Main from "./components/Main";
import NavBar from "./components/NavBar";
import SideBarNew from "./components/SideBarNew";

const API_URL = "http://localhost:3001/";

class App extends React.Component {
    state = {
        user: "",
    };

    loggedIn = () => {
        return this.state.user.length > 0;
    };

    // checkIfLoggedIn = () => {
    //   const token = localStorage.getItem("userJWT");
    //   if (token) {
    //     return true
    //   } else {
    //     return false
    //   }
    // }

    getToken = () => {
        return localStorage.getItem("userJWT");
    };

    fetchGetWithToken = (path, method = "get") => {
        return fetch(`${API_URL}${path}`, {
            headers: {
                Authorization: `Bearer ${this.getToken()}`,
            },
        });
    };

    fetchPostWithToken = (path, payload) => {
        const configObj = {
            method: "POST",
            headers: {
                Authorization: `Bearer ${this.getToken()}`,
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(payload),
        };
        // console.log(configObj);
        return fetch(`${API_URL}${path}`, configObj);
    };

    deleteList = (id) => {
        const configObj = {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${this.getToken()}`,
            },
        };
        fetch(`${API_URL}lists/${id}`, configObj)
            .then((res) => res.json())
            .then(console.log);
    };

    checkIn = () => {
        this.fetchGetWithToken("checkin")
            .then((res) => res.json())
            .then((data) => {
                if (data.user) {
                    this.setState({ user: data.user.username });
                } else {
                    this.setState({ user: "" });
                    localStorage.removeItem("userJWT");
                }
            });
    };

    componentDidMount = () => {
        this.checkIn();
    };

    logOut = () => {
        this.setState({
            user: "",
        });
        localStorage.removeItem("userJWT");
    };

    renderLoginOrMain = () => {
        const { user } = this.state;
        if (this.loggedIn()) {
            return <Main user={user} />;
        } else {
            return <Login updateAppUser={this.updateAppUser} />;
        }
    };

    updateAppUser = (username) => {
        this.setState({
            user: username,
        });
    };

    //     render() {
    //         const { user } = this.state;
    //         return (
    //             <div>
    //                 <TestButtons
    //                     logOut={this.logOut}
    //                     user={user}
    //                     fetchGetWithToken={this.fetchGetWithToken}
    //                     fetchPostWithToken={this.fetchPostWithToken}
    //                     deleteList={this.deleteList}
    //                 />
    //                 {this.renderLoginOrMain()}
    //                 {/* <Main /> */}
    //             </div>
    //         );
    //     }
    //   }

    updateAppUser = (username) => {
        this.setState({
            user: username,
        });
    };

    render() {
        const { user } = this.state;
        return (
            <div>
                {/* <Nav
        logOut={this.logOut}
        user={user}
        /> */}
                <NavBar />
                <TestButtons
                    logOut={this.logOut}
                    user={user}
                    fetchGetWithToken={this.fetchGetWithToken}
                    fetchPostWithToken={this.fetchPostWithToken}
                    deleteList={this.deleteList}
                />
                {this.loggedIn() ? null : (
                    <Login updateAppUser={this.updateAppUser} />
                )}
                <SideBarNew />
                {/* <Main /> */}
            </div>
        );
    }
}

export default App;
