import React, { Component } from 'react'
import { addPoll } from '../actions/PollsActions'
import { connect } from 'react-redux'
import {H2Form, FormWrapper, InputQuestion, StyledForm, StyledButton, ButtonDiv } from './styled-component/PollQuestionForm.style'

class PollsForm extends Component {

    state = {
        question: ""
    }

    handleChange = (e) => {
        const { name, value } = e.target

        this.setState({ 
            [name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.addPoll(this.state)
        this.setState({
            question: ""
        })
    }

    
    
    render(){
        return (

    <FormWrapper>
        <StyledForm onSubmit={this.handleSubmit} >
            <H2Form>Create Poll</H2Form>
            <InputQuestion type="text" value={this.state.question} onChange={this.handleChange} name="question" />
            <ButtonDiv>
                <StyledButton type="submit">CREATE</StyledButton> 
            </ButtonDiv>
            
        </StyledForm>

    </FormWrapper>

        )
    }
}

export default connect(null, { addPoll })(PollsForm);