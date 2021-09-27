import './App.css';
import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

const App = () =>
{
  const [isAdd, setIsAdd] = useState(false);
  const [todoName, setTodoName] = useState('');
  const [todoMsg, setTodoMsg] = useState('');
  const [todoList, setTodoList] = useState([]);
  const submitHandler = (e) => {
    e.preventDefault();
    const todoItem = { id: uuid(), todoName, todoMsg };
    setTodoList([...todoList, todoItem]);
    
  }

  const removeHandler = (id) => {
    const newTodoList = todoList.filter((todoItem) => { return todoItem.id != id });
    setTodoList(newTodoList);
  }

  return <>
    <section>
      <label htmlFor="isAdd">Add TodoItem?</label>
      <input type="checkbox" id="isAdd" name="isAdd" value={isAdd}
        onChange={() => {
          setIsAdd(!isAdd);
        }} />
      {isAdd ?(<form onSubmit={(e)=>submitHandler(e)}>
        <label htmlFor="todoName">What to do?</label>
        <input type="text" name="todoName" id="todoName"
          value={todoName} onChange={(e) => { setTodoName(e.target.value);}}/>
        <label htmlFor="todoMsg">Message</label>
        <input type="text" name="todoMsg" id="todoMsg"
          value={todoMsg} onChange={(e) => { setTodoMsg(e.target.value); }}/>
        <button type="submit">Add TODO</button>
      </form>) : null}
      
    {todoList.map((todoItem) => {
          const { id, todoName, todoMsg } = todoItem;
          return (
            <div key={id}>
              <h4>{todoName}</h4>
              <p>{todoMsg}</p>
              <button onClick={() => { removeHandler(id) }}>remove</button>
            </div>
          );
    })}
      <button onClick={() => { setTodoList([])} }>Remove All</button>
        </section>
  </>;
}

export default App;
