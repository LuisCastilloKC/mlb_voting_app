import React from 'react';



const PlayerName = (props) => {

    const handleVote = () => {
        
    }

    return(
        <>
            <h3>{props.playerNameKey.name}</h3>
            <h3>{props.playerNameKey.votes}</h3>
            <button onClick={handleVote}>Vote</button>
        </>
    )
}

export default PlayerName;