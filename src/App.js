import React, {useState} from 'react';

import TaskIndicator from './components/TaskIndicator/TaskIndicator.component';

import InputForm from './components/InputForm/InputForm.component.jsx';

import ToDoList from './components/ToDoList/ToDoList.component';

import './App.css';

function App() {
  const [lists, setLists] = useState([
    { task: 'task1', id: 1 },

    { task: 'task2', id: 2 },

    { task: 'task3', id: 3 }
  ]);

  const [input, setInput] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const handleSubmit = (e) => {
    let list;
    e.preventDefault();
    if (input === '') {
      return;
    } else {
     list = {task: input, id:lists.length + 1};
    };

    setLists([...lists, list]);
    setInput('');
    document.getElementById('myForm').reset();
  }

  const handleDelete = (index) => {
    const filteredList = lists.filter(list => {
      return list.id !== index;
    })
    setLists(filteredList)
  }

  return (
    <div className='App'>
      <InputForm onChange={handleChange} onSubmit={handleSubmit}/>

      <ToDoList  lists={lists} onDelete={handleDelete}/>

      <TaskIndicator  number={lists.length}/>
    </div>
    
  )
}

export default App;
