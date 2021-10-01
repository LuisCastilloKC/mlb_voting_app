import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPolls } from '../actions/pollsActions'

class PollsContainer extends Component {

    componentDidMount(){
        this.props.fetchPolls()
    }

    render(){
        return (
            <div>
                Polls Container
            </div>
        );
    }
}

export default connect(null, { fetchPolls })(PollsContainer);