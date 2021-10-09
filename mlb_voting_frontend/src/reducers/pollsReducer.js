
export const pollsReducer = (state = {polls: []}, action) => {
    switch(action.type){
        case 'FETCH_POLLS':
            return {
                polls: action.payload
            }
        case 'ADD_POLL':
            return {
                polls: [...state.polls, action.payload]
                }
        case 'ADD_PLAYER':
            let pollWithNewPlayer = state.polls.find(poll => poll.id === action.payload.poll_id)
            return {
                polls: state.polls.map(pollObj => pollObj.id === pollWithNewPlayer.id ? {...pollWithNewPlayer, player_names: [
                    ...pollWithNewPlayer.player_names,
                    action.payload
                ]} : pollObj)
            }
            case 'DELETE_POLL':
                return {
                    polls: state.polls.filter(poll => poll.id !== action.payload)
                }
            case 'EDIT_POLL':
                return {
                    polls: [...state.polls.map(poll => poll.id === action.payload.id ? action.payload : poll)]
                }
        case 'UPDATE_PLAYER_NAME':
            const poll = state.polls.find(poll => poll.id === action.payload.poll_id)
    
            poll.player_names = poll.player_names.map(playerName => playerName.id === action.payload.id ? action.payload : playerName)

            return {
                polls: state.polls.map(pollObj => pollObj.id === poll.id ? poll : pollObj)
            }
            default:
                return state
    }
}