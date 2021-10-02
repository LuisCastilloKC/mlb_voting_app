
export const pollsReducer = (state = {polls: []}, action) => {
    switch(action.type){
        case 'FETCH_POLLS':
            return {
                polls: action.payload
            }
        case 'UPDATE_PLAYER_NAME':
            const poll = state.poll.find(poll => poll.id === action.payload.poll.id)
            return {

            }
            default:
                return state
    }
}