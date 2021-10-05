export const updatePlayerName = (playerName) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/player_names/${playerName.id}`,{
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                'accept': 'application/json'
            },
            body: JSON.stringify(playerName)
        })
        .then(resp => resp.json())
        .then(playerName => dispatch({ type: 'UPDATE_PLAYER_NAME', payload: playerName}))
    }
}

export const addPlayer = playerName => {
    return dispatch =>{ 
    fetch('http://localhost:3000/player_names', {
        method: 'POST', 
        body: JSON.stringify(playerName),
        headers: { 'content-Type': 'application/json' }
    })
    .then(resp => resp.json())
    .then(playerData => dispatch({ type: 'ADD_PLAYER',payload: playerData }))
    }
}