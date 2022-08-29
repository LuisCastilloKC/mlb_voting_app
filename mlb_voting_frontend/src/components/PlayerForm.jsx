import React, { useState } from "react";
import { useDispatch } from 'react-redux'
import { addPlayer } from "../actions/playerNamesActions";


const PlayerForm = ({ poll_id }) => {
    const dispatch = useDispatch()

  const [playerName, setPlayerName] = useState({
    name: "",
    poll_id: poll_id,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setPlayerName({
      ...playerName,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addPlayer(playerName))
    setPlayerName({
        name: "",
        poll_id: null
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Player Name:</label>
      <input
        type="text"
        value={playerName.name}
        onChange={handleChange}
        name="name"
      />
      <br />
      <input type="submit" value="Create Player" />
    </form>
  );
};

export default PlayerForm;

// class PlayerForm extends Component {

//     state = {
//         name: "",
//         poll_id: this.props.poll_id
//     }

//     handleChange = (e) => {
//         const { name, value } = e.target

//         this.setState({
//             [name]: value
//         })
//     }

//     handleSubmit = e => {
//         e.preventDefault()
//         this.props.addPlayer(this.state)
//         this.setState({
//             name: ""
//         })
//     }

//     render(){
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <label>Player Name:</label>
//                 <input type="text" value={this.state.name} onChange={this.handleChange} name="name" />
//                 <br />
//                 <input type="submit" value="Create Player" />
//             </form>
//         )
//     }
// }

// export default connect(null, { addPlayer })(PlayerForm);
