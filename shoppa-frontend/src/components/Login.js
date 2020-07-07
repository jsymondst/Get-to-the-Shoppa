import React from 'react'

export default class Login extends React.Component {


    state ={
        username: "",
        password: ""
    }

    handleLogin= (event)=>{
        event.preventDefault()
        const {username, password} = this.state
        const userData ={username, password};

        fetch("http://localhost:3001/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({user: userData}),
        })
            .then((res)=>res.json())
            .then((data)=> {
                console.log(data)
                if (data.user){
                    localStorage.setItem("userJWT", data.jwt);
                    alert(`Welcome, ${data.user.username}`);
                    this.props.updateAppUser(data.user.username)
                }                
            })

            

        
    }



    render(){
        const {username, password} = this.state
        return(
            <form className="login-form">
                <h1>Welcome. please log in.</h1>
                <input 
                id={'username'}
                type='text' 
                value={username} 
                onChange={(e)=>this.setState({username: e.target.value})}
                >
                </input>
                <br/>
                <input 
                id={'password'}
                type='password' 
                value={password} 
                onChange={(e)=>this.setState({password: e.target.value})}
                >
                </input>
                <br/>

                <button
                    type='submit'
                    onClick={this.handleLogin}
                >
                    Log in
                </button>
            </form>
        )

    }
    




}