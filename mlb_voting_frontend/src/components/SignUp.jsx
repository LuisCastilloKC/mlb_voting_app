import React { Component } from 'react'

class SignUp extends Component{

    render(){
        return(
            <form>
                <h1>Sign Up Form</h1>
                <label>Username:</label>
                <input name='username' />
                <label>Password:</label>
                <input name='password' type='password'/>
                <label>First Name:</label>
                <input name='firstName' />
                <label>Last Name:</label>
                <input name='lastName' />
                <input type='submit' value='Register' />
            </form>
        );
    }

}
export default SignUp;