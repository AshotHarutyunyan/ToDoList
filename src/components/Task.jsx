import React from 'react';
const Task = (props) => {
    const classname = `task task${props.done}`;
    return (
      <div className={classname} onClick={() => props.toggleTaskDone(props.id)}>
        <p>{props.text}</p>
        {props.done 
        ? <button onClick={(event)=>{
      event.preventDefault();props.deleteTask(props.id)}}><span role="img" aria-labelledby="CHACK">❌</span></button> 
        : null }
      </div>
    )
};
export default Task;