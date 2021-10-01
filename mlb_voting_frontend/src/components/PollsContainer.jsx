import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPolls } from '../pollsActions'

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