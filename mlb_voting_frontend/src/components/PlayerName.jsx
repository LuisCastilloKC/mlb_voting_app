import React, { useState } from 'react';
import { updatePlayerName } from '../actions/playerNamesActions'
import { connect } from 'react-redux'
import EditPlayerNameForm from './EditPlayerNameForm';
import { Wrapper } from './styled-component/Card.style'



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
        
        <Wrapper>
            <h3>{props.playerNameKey.name}</h3>
            <div>Vote count: {props.playerNameKey.votes}</div>
            <button onClick={handleVote}>Vote</button>
            <button onClick={()=> setShowForm(!showForm)}>Edit Player</button>
            {showForm && <EditPlayerNameForm playerName={props.playerNameKey} setShowForm={setShowForm}/>}
        </Wrapper>
        
        </>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        updatePlayerName: (playerName) => dispatch(updatePlayerName(playerName))
    }
}

export default connect(null, mapDispatchToProps)(PlayerName);