import React, { useState } from "react";
import { useDispatch } from 'react-redux'
import { addPlayer } from "../actions/playerNamesActions";


const PlayerForm = ({ poll_id }) => {
    const dispatch = useDispatch()

  const [playerName, setPlayerName] = useState({
    name: "",
    poll_id: poll_id
  });

  const handleChange = (e) => {
    const {name, value} = e.target;

    setPlayerName({
      ...playerName,
      [name]: value
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

