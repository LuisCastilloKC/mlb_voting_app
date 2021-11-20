import React, { Component } from 'react'
import { editPoll } from '../actions/PollsActions'
import { connect } from 'react-redux'

class EditPollForm extends Component {

    state = {
        question: this.props.poll.question,
        id: this.props.poll.id
    }

    handleChange = (e) => {
        const { name, value } = e.target

        this.setState({ 
            [name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.editPoll(this.state)
        this.props.setShowEditForm(false)
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Edit Question:</label>
                <input type="text" value={this.state.question} onChange={this.handleChange} name="question" />
                <br />
                <input type="submit" value="Update Poll" />
            </form>
        )
    }
}

export default connect(null, { editPoll })(EditPollForm);