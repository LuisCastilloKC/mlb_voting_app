import React, { useState } from 'react';
import { updatePlayerName } from '../actions/playerNamesActions'
import { connect } from 'react-redux'



const PlayerName = (props) => {

    const handleVote = () => {
        props.updatePlayerName({
            id: props.playerNameKey.id,
            player_name: { 
                votes: props.playerNameKey.votes + 1
            }
        })
    }

    const [showForm, setShowForm] = useState(false)

    return(
        <>
            <h3>{props.playerNameKey.name}</h3>
            <h3>{props.playerNameKey.votes}</h3>
            <button onClick={handleVote}>Vote</button>
            <button onClick={()=> setShowForm(!showForm)}>Edit Player</button>
        </>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        updatePlayerName: (playerName) => dispatch(updatePlayerName(playerName))
    }
}

export default connect(null, mapDispatchToProps)(PlayerName);