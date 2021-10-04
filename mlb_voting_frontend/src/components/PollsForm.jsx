import React, { Component } from 'react'

class PollsForm extends Component {

    state = {
        question: ""
    }

    handleChange = (e) => {
        const { question, value } = e.target

        this.setState({ 
            [question]: value
        })
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <label>question:</label>
                <input type='text' value={this.state.question} onChange={this.handleChange} name="question" />
                <br />
                <input type="submit" value="Create Poll" />
            </form>
        )
    }
}

export default PollsForm;