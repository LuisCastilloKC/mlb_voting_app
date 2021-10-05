import React, { Component } from 'react'
import { addPoll } from '../actions/pollsActions'
import { connect } from 'react-redux'

class PlayerForm extends Component {

    state = {
        name: "",
        poll_id: this.poll_id
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
                <label>Player Name:</label>
                <input type="text" value={this.state.question} onChange={this.handleChange} name="name" />
                <br />
                <input type="submit" value="Create Poll" />
            </form>
        )
    }
}

export default connect(null, { addPoll })(PlayerForm);