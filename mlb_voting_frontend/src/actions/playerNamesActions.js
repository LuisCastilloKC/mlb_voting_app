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