import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AddTaskForm from './components/AddTaskForm';
import Task from './components/Task';

const Index = (props) => {
  const [tasks, settasks] = useState([
    {id:0,text:"task1",done:false},
    {id:1,text:"task2",done:false},
    {id:2,text:"task3",done:true},
  ]);


  const toggleTaskDone = (id) => {
    let newtasks = tasks.map((task) => {
      if(task.id === id && task.done){
        task.done = false
      }else if(task.id === id && !task.done){
        task.done = true
      }
      return task
    });
    settasks(newtasks)
  };


  const addTask = (tasktext) => {
    let newTask = {id:tasks.length ? tasks.length : 0,text:tasktext,done:false};
    let newtasks = [...tasks,newTask];
    settasks(newtasks);
  };

  
  const deleteTask = (id) => {
    tasks.splice(id, 1);
    settasks(tasks);
  }

  let doneTask = tasks.filter(task => task.done);
  let unDoneTask = tasks.filter(task => !task.done);

  let Tasks = [...unDoneTask,...doneTask].map(task => <Task {...task} key={task.id} toggleTaskDone={toggleTaskDone} deleteTask={deleteTask}/>)

  return (
    <div className="container">
      <div className="toDoListContainer">
        <h1>To do list</h1>
        <div className="listContainer">
          {Tasks}
        </div>
        <AddTaskForm  addTask={addTask}/>
      </div>
    </div>
  );
}



// ========================================

ReactDOM.render(<Index />, document.getElementById("root"));

