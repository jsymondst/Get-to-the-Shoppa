import React , {Fragment} from 'react'


export default class Nav extends React.Component{

    
    loggedInContent = () =>{
        const {user, logOut} = this.props
        return (
            <Fragment>
                <h1>Welcome, {user}</h1>
                <button onClick={logOut}>Logout</button>
            </Fragment>
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