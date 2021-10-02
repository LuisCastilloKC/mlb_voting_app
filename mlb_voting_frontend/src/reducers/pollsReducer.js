
export const pollsReducer = (state = {polls: []}, action) => {
    switch(action.type){
        case 'FETCH_POLLS':
            return {
                polls: action.payload
            }
        case 'UPDATE_PLAYER_NAME':
            const poll = state.poll.find(poll => poll.id === action.payload.poll_id)
            const playerName = poll.player_names.find(playerName => playerName.id === action.payload.id)
            return {

            }
            default:
                return state
    }
}