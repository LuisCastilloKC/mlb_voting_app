
import React, { useState } from 'react';
import PlayerName from './PlayerName'
import PlayerForm from './PlayerForm'
import { deletePoll } from '..actions/pollsActions'

const Poll = (props) => {

    const [showForm, setShowForm] = useState(false)

    return(
        <>
            <h1>{props.pollKey.question}</h1>
            <button onClick={()=> setShowForm(!showForm)}>Add a Player</button>
            <button onClick={()=> props.deletePoll(props.pollKey.id)}>Delete Poll</button>
            {showForm && <PlayerForm poll_id={props.pollKey.id}/>}
            {props.pollKey.player_names.map(playerName => <PlayerName playerNameKey={playerName} />)}
        </>
    )
}

export default Poll;