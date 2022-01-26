import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPolls } from '../actions/PollsActions'
import Poll from './Poll'
import PollsForm from './PollsForm'


class PollsContainer extends Component {


    componentDidMount(){
        this.props.fetchPolls()
    }

    render(){

        return (
            <div>
                <PollsForm />
                {this.props.polls.map(poll => <Poll key={poll.id} pollKey={poll} />)}
               


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