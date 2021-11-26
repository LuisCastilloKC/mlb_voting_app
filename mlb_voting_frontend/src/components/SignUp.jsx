import React, { Component } from 'react'
import { SignUpFormStyle, SignUpFormInputStyle } from '../components/styled-component/SignUpForm.style'

class SignUp extends Component{

    state = {
        username: '',
        password: '',
        firstName: '',
        lastName: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render(){
        return(
            <SignUpFormStyle> 
                <h1>Sign Up Form</h1>
                <label>Username:</label>
                <SignUpFormInputStyle name='username' value={this.state.username} onChange={this.handleChange} />  
                <label>Password:</label>
                <SignUpFormInputStyle name='password' type='password'/>
                <label>First Name:</label>
                <SignUpFormInputStyle name='firstName' />
                <label>Last Name:</label>
                <SignUpFormInputStyle name='lastName' />
                <SignUpFormInputStyle type='submit' value='Register' />
            </SignUpFormStyle>
        );
    }

}
export default SignUp;