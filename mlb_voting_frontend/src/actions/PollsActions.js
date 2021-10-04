
export const fetchPolls = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/polls')
        .then(resp => resp.json())
        .then(polls => dispatch({ type: 'FETCH_POLLS', payload: polls}))
    }
}

export const addPoll = poll => {
    fetch('http://localhost:3000/polls', {
        method: 'POST', 
        body: JSON.stringify(poll),
        headers: { 'content-Type': 'application/json' }
    })
    .then(resp => resp.json())
    .then(poll => dispatch({ type: 'ADD_POLL',payload: polls }))
}