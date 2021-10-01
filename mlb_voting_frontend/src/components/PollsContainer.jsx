import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPolls } from '../actions/pollsActions'

class PollsContainer extends Component {
    render(){
        return (
            <div>
                Polls Container
            </div>
        );
    }
}

export default connect(null, {fetchPolls})(PollsContainer);