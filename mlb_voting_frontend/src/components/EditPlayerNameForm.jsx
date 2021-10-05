import React, { Component } from 'react'
import { updatePlayerName } from '../actions/playerNamesActions'
import { connect } from 'react-redux'

class EditPlayerNameForm extends Component {

    state = {
        name: this.props.playerName.name,
        poll_id: this.props.playerName.poll_id,
        id: this.props.playerName.id
    }

    handleChange = (e) => {
        const { name, value } = e.target

        this.setState({ 
            [name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.updatePlayerName(this.state)
        this.props.setShowForm(false)
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Edit Name:</label>
                <input type="text" value={this.state.name} onChange={this.handleChange} name="name" />
                <br />
                <input type="submit" value="Update Player" />
            </form>
        )
    }
}

export default connect(null, { updatePlayerName })(EditPlayerNameForm);