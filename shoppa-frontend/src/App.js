import React from 'react';
import './App.css';
import Nav from './Nav'
import Main from './Main'
import Login from './Login'

const API_URL = "http://localhost:3001/"



class App extends React.Component {

  state={
    user:"",
  }

  loggedIn =() =>{
    return (this.state.user.length > 0)
  }

  // checkIfLoggedIn = () => {
  //   const token = localStorage.getItem("userJWT");
  //   if (token) {
  //     return true
  //   } else {
  //     return false
  //   }
  // }

  getToken = () =>{
    return localStorage.getItem("userJWT");
  }
  

  checkIn = () => {
    fetch(`${API_URL}checkin`, {
      headers: {
        Authorization: `Bearer ${this.getToken()}`,
      },
    })
      .then((res) => res.json())
      .then((data)=>{
        if (data.user){
          this.setState({user: data.user.username});
        } else {
          this.setState({user: ""});
          localStorage.removeItem("userJWT");
        }
      });
  };

  componentDidMount=()=>{
    this.checkIn()
  }

  logOut = () =>{
    this.setState({
      user: ""
    })
    localStorage.removeItem("userJWT")
  }



  renderLoginOrMain =()=>{
    const {user} = this.state
    if (this.loggedIn()){
      return <Main user={user} />
    } else {
      return <Login updateAppUser={this.updateAppUser}/>
    }
  }

  updateAppUser = (username) =>{
    this.setState({
      user: username
    })
  }



  render() {
    const {user} = this.state
    return (
      <div>
        <Nav 
        logOut={this.logOut}
        user={user}
        />
        {this.renderLoginOrMain()}
      </div>
      
    );
  }
}

export default App;
