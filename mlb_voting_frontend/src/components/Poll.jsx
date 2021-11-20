import React, { useState } from 'react';
import PlayerName from './PlayerName'
import PlayerForm from './PlayerForm'
import { deletePoll } from '../actions/PollsActions'
import { connect } from 'react-redux'
import  EditPollForm from './EditPollForm'
import {PollQuestion, QuestionDiv } from './styled-component/PollQuestion.style'
import { Button } from './styled-component/Button.style'



const Poll = (props) => {

    const [showForm, setShowForm] = useState(false)
    const [showEditForm, setShowEditForm] = useState(false)


    return(
        <>
        <QuestionDiv> 
            <PollQuestion main>{props.pollKey.question}</PollQuestion>
                <div>
                    <Button onClick={()=> setShowForm(!showForm)}>Add a Player</Button>
                    <Button onClick={()=> props.deletePoll(props.pollKey.id)}>Delete Poll</Button>
                    <Button onClick={()=> setShowEditForm(!showEditForm)}>Edit Poll</Button>
                </div>
            {showEditForm && <EditPollForm setShowEditForm={setShowEditForm} poll={props.pollKey}/>}
            {showForm && <PlayerForm poll_id={props.pollKey.id}/>}
            {props.pollKey.player_names.map(playerName => <PlayerName key={playerName.id} playerNameKey={playerName} />)}
        </QuestionDiv>
        </>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        deletePoll: (pollId) => dispatch(deletePoll(pollId))
    }
}

export default connect(null, mapDispatchToProps)(Poll);