import React, {useState} from 'react';
const AddTaskForm = (props) => {
    const [inputVal, setinputVal] = useState("");
  
    const submit = (event) => {
      event.preventDefault();
      props.addTask(inputVal)
      setinputVal('')
    }
    const changeInputVal = (event) => {
      setinputVal(event.target.value)
    }
    return (
      <form onSubmit={submit} className="addTaskForm">
        <input type="text" value={inputVal} onChange={changeInputVal} ></input>
        <input type="submit" value={'ADD'}></input>
      </form>
    )
};
export default AddTaskForm;
