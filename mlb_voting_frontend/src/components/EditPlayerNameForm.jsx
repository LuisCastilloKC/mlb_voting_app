import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updatePlayerName } from "../actions/playerNamesActions";

const EditPlayerNameForm = (props) => {
  const dispatch = useDispatch();
  const [playerNameObj, setPlayerNameObj] = useState({
    name: props.playerName.name,
    poll_id: props.playerName.poll_id,
    id: props.playerName.id,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPlayerNameObj({
      ...playerNameObj,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updatePlayerName(playerNameObj));
    props.setShowForm(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Edit Name:</label>
      <input
        type="text"
        value={playerNameObj.name}
        onChange={handleChange}
        name="name"
      />
      <br />
      <input type="submit" value="Update Player" />
    </form>
  );
};

export default EditPlayerNameForm;
