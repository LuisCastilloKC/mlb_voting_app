import React, { Component } from 'react'

class PollsForm extends Component {

    state = {
        question: ""
    }


    render(){
        return (
            <form>
                <label>Create a Poll</label>
                <input type="text" value={this.state.question} onChange={this.handleChange} name="question" />
                <br />
                <input type="submit" value="Create Poll" />
            </form>
        )
    }
}

export default PollsForm;