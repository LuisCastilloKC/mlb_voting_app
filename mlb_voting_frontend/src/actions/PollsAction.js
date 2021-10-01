
export const fetchPolls = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/polls')
        .then(resp => resp.json())
        .then(polls => console.log('fetchPolls', polls))
    }
}