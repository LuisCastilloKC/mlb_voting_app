import React, { useState } from "react";
import { editPoll } from "../actions/PollsActions";
import { useDispatch } from "react-redux";

const EditPollForm = (props) => {
  const dispatch = useDispatch();
  const [poll, setPoll] = useState({
    question: props.poll.question,
    id: props.poll.id,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setPoll({
      ...poll,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editPoll(poll));
    props.setShowEditForm(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Edit Question:</label>
      <input
        type="text"
        value={poll.question}
        onChange={handleChange}
        name="question"
      />
      <br />
      <input type="submit" value="Update Poll" />
    </form>
  );
};

export default EditPollForm;
// class EditPollForm extends Component {

//     state = {
//         question: this.props.poll.question,
//         id: this.props.poll.id
//     }

//     handleChange = (e) => {
//         const { name, value } = e.target

//         this.setState({
//             [name]: value
//         })
//     }

//     handleSubmit = e => {
//         e.preventDefault()
//         this.props.editPoll(this.state)
//         this.props.setShowEditForm(false)
//     }

//     render(){
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <label>Edit Question:</label>
//                 <input type="text" value={this.state.question} onChange={this.handleChange} name="question" />
//                 <br />
//                 <input type="submit" value="Update Poll" />
//             </form>
//         )
//     }
// }

// export default connect(null, { editPoll })(EditPollForm);
