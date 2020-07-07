import React from 'react'

export default class Nav extends React.Component{

    
    loggedInContent = () =>{
        const {user, logOut} = this.props
        return (
            <div>
                <h1>Welcome, {user}</h1>
                <button onClick={logOut}>Logout</button>
            </div>
        )
    }

    render(){
        const {user, logOut} = this.props
        
        return (
            <div className="nav-bar">
                {user.length >0 ? this.loggedInContent(): null}                
                
            </div>
        )
    }


}