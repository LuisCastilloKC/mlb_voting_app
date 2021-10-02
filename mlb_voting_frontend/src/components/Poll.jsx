
import React from 'react';
import PlayerName from './PlayerName'

const Poll = (props) => {
    return(
        <>
            <h1>{props.pollKey.question}</h1>
            {props.pollKey.player_names.map(playerName => <PlayerName playerNameKey={playerName} />)}
        </>
    )
}

export default Poll;