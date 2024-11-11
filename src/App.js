import './app.css';
import { useState } from 'react';

function App() {

  const [toDos, setToDos] = useState([]);
  const [toDo, setToDo] = useState('');

  const deleteTodo = (id) => {
    setToDos(toDos.filter(todo => todo.id !== id));
  };

  return (
    <div className="app">
    <div className="mainHeading">
      <h1>ToDo List</h1>
    </div>
    <div className="subHeading">
      <br />
      <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
    </div>
    <div className="input">
      <input value={toDo} onChange={(e) => setToDo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
      <i onClick={() => setToDos([...toDos, {id:Date.now(), Text: toDo, status:false}])} className="fas fa-plus"></i>
    </div>
    <div className="todos">
      {
      toDos.map((obj) => {
        return(
      <div className="todo">
        <div className="left">
          <input onChange={(e)=> {
            console.log(e.target.checked)
            setToDos(toDos.filter(obj2 => {
              if(obj2.id === obj.id) {
                obj2.status = e.target.checked;
              }
              return obj2;
            }))
          }}
          value={obj.status}
           type="checkbox" name="" id="" />
          <p>{obj.Text}</p>
        </div>
        <div className="right">
          <i className="fas fa-times" onClick={() => {deleteTodo(obj.id)}}></i>
        </div>
      </div>
        )
      })};
  <div className='checked'>
      {toDos.map((obj) => {
        
        if(obj.status) {
          return(<h1>{obj.Text}</h1>);
        }
        return null
      })}
      </div>
    </div>
  </div>
  );
}

export default App;
