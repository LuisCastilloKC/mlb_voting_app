import React, { Component } from 'react'
import { addPlayer } from '../actions/playerNamesActions'
import { connect } from 'react-redux'

class PlayerForm extends Component {

    state = {
        name: "",
        poll_id: this.props.poll_id
    }

    handleChange = (e) => {
        const { name, value } = e.target

        this.setState({ 
            [name]: value
        })
    }
    
    handleSubmit = e => {
        e.preventDefault()
        this.props.addPlayer(this.state)
        this.setState({
            name: ""
        })
    }

    

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Player Name:</label>
                <input type="text" value={this.state.name} onChange={this.handleChange} name="name" />
                <br />
                <input type="submit" value="Create Player" />
            </form>
        )
    }
}

export default connect(null, { addPlayer })(PlayerForm);