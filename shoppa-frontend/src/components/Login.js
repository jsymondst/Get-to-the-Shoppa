import React from "react";
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import logo from '../images/logobig.png'

export default class Login extends React.Component {
    state = {
        username: "",
        password: "",
    };

    handleLogin = (event) => {
        event.preventDefault();
        const { username, password } = this.state;
        const userData = { username, password };

        fetch("http://localhost:3001/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({ user: userData }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.user) {
                    localStorage.setItem("userJWT", data.jwt);
                    alert(`Welcome, ${data.user.username}`);
                    this.props.updateAppUser(data.user.username);
                }
            });
    };

    render() {
        const { username, password } = this.state;
        return (
            <Grid textAlign='center' style={{ height: '80vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
                <Image verticalAlign="middle" src={logo} alt=""/>
              <Header as='h2' color='teal' textAlign='center'>
              Log-in to your account
              </Header>
              <Form size='large' className="login-form">
                <Segment stacked>
                  <Form.Input 
                  fluid icon='user' 
                  iconPosition='left' 
                  placeholder='Username' 
                  id={"username"}
                  type="text"
                  value={username}
                  onChange={(e) =>
                      this.setState({ username: e.target.value })
                  }/>
                  <Form.Input
                    fluid
                    icon='lock'
                    iconPosition='left'
                    placeholder='Password'
                    type='password'
                    id={"password"}
                    type="password"
                    value={password}
                    onChange={(e) =>
                        this.setState({ password: e.target.value })
                    }
                  />
                  <Button color='teal' fluid size='large'
                  type="submit" onClick={this.handleLogin}
                  >
                    Login
                  </Button>
                </Segment>
              </Form>
              <Message>
                New to us? <a href='#'>Sign Up</a>
              </Message>
            </Grid.Column>
          </Grid>

            // <form className="login-form">
            //     <h1>Welcome. please log in.</h1>
            //     <input
            //         id={"username"}
            //         type="text"
            //         value={username}
            //         onChange={(e) =>
            //             this.setState({ username: e.target.value })
            //         }
            //     ></input>
            //     <br />
            //     <input
            //         id={"password"}
            //         type="password"
            //         value={password}
            //         onChange={(e) =>
            //             this.setState({ password: e.target.value })
            //         }
            //     ></input>
            //     <br />

            //     <button type="submit" onClick={this.handleLogin}>
            //         Log in
            //     </button>
            // </form>
        );
    }

}
