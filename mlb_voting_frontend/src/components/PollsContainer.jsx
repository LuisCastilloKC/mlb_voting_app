import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPolls } from '../actions/pollsActions'
import Poll from './Poll'

class PollsContainer extends Component {
    componentDidMount(){
        this.props.fetchPolls()
    }

    render(){
        return (
            <div>
                Polls Container
                {this.props.polls.map(poll => <Poll pollKey={poll} />)}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        polls: state.polls.polls
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchPolls: () => dispatch(fetchPolls())
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(PollsContainer);