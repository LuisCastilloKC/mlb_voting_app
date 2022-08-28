import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addPoll } from '../actions/PollsActions'
import {H2Form, FormWrapper, InputQuestion, StyledForm, StyledButton, ButtonDiv } from './styled-component/PollQuestionForm.style'


const PollsForm = () => {
    const dispatch = useDispatch()
    const [question, setQuestion] = useState({
        question: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setQuestion({
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addPoll(question))
        setQuestion({
            question: ""
        })
    }

    return(
        <FormWrapper>
        <StyledForm onSubmit={handleSubmit} >
           <H2Form>Create Poll</H2Form>
           <InputQuestion type="text" value={question.question} onChange={handleChange} name="question" />
            <ButtonDiv>
                <StyledButton type="submit">CREATE</StyledButton> 
            </ButtonDiv>
           
        </StyledForm>

    </FormWrapper>

    )
}

export default PollsForm
