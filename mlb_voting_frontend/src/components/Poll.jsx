
import React, { useState } from 'react';
import PlayerName from './PlayerName'
import PlayerForm from './PlayerForm'

const Poll = (props) => {

    const [showForm, setShowForm] = useState(false)

    return(
        <>
            <h1>{props.pollKey.question}</h1>
            <button onClick={()=> setShowForm(!showForm)}>Add a Player</button>
            {showForm && <PlayerForm poll_id={props.pollKey.id}/>}
            {props.pollKey.player_names.map(playerName => <PlayerName playerNameKey={playerName} />)}
        </>
    )
}

export default Poll;