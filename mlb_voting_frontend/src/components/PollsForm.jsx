import React, { Component } from 'react'
import { addPoll } from '../actions/pollsActions'
import { connect } from 'react-redux'

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
            <form onSubmit={this.handleSubmit}>
                <label>Create a Question:</label>
                <input type="text" value={this.state.question} onChange={this.handleChange} name="question" />
                <br />
                <input type="submit" value="Create Poll" />
            </form>
        )
    }
}

export default connect(null, { addPoll })(PollsForm);