import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { v4 as uuidv4 } from 'uuid';
import Footer from './components/Footer';

function App() { 

  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [showFinished, setShowFinished] = useState(true);

  useEffect(() => {
    let todoString = localStorage.getItem("todos");
    if (todoString) {
      let todos = JSON.parse(todoString);
      setTodos(todos);
    }
  }, []);

  const saveToLS = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const toggleFinished = () => {
    setShowFinished(!showFinished);
  };

  const handleEdit = (id) => { 
    let t = todos.find(i => i.id === id);
    setTodo(t.todo);
    let newTodos = todos.filter(item => item.id !== id); 
    setTodos(newTodos);
    saveToLS();
  };

  const handleDelete = (id) => {  
    let newTodos = todos.filter(item => item.id !== id); 
    setTodos(newTodos);
    saveToLS();
  };

  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
    setTodo("");
    saveToLS();
  };

  const handleChange = (e) => { 
    setTodo(e.target.value);
  };

  const handleCheckbox = (e) => { 
    let id = e.target.name;  
    let index = todos.findIndex(item => item.id === id);
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
    saveToLS();
  };

  return (
    <>
      <Navbar /> 
      <div className="mx-3 md:container md:mx-auto my-5 rounded-xl p-5 bg-gray-900 min-h-[80vh] md:w-[35%] text-gray-200">
        <h1 className="font-bold text-center text-3xl text-cyan-400">TaskForge - Shape Your Productivity</h1>
        <div className="addTodo my-5 flex flex-col gap-4">
          <h2 className="text-2xl font-bold">Add a New Mission</h2>
          <div className="flex">
            <input onChange={handleChange} value={todo} type="text" className="w-full rounded-full px-5 py-1 bg-gray-700 text-gray-200" />
            <button 
              onClick={handleAdd} 
              disabled={todo.length <= 3} 
              className="bg-cyan-700 mx-2 rounded-full hover:bg-cyan-800 disabled:bg-gray-500 p-4 py-2 text-sm font-bold text-white">
              Add Task
            </button>
          </div>
        </div>
        <input 
          className="my-4" 
          id="show" 
          onChange={toggleFinished} 
          type="checkbox" 
          checked={showFinished} 
        /> 
        <label className="mx-2" htmlFor="show">Display Completed</label> 
        <div className="h-[1px] bg-gray-500 opacity-50 w-[90%] mx-auto my-2"></div>
        <h2 className="text-2xl font-bold">Your Tasks</h2>
        <div className="todos">
          {todos.length === 0 && <div className="m-5 text-gray-400">No tasks available. Start by adding one!</div>}
          {todos.map(item => (
            (showFinished || !item.isCompleted) && 
            <div key={item.id} className="todo flex my-3 justify-between bg-gray-800 p-3 rounded-lg">
              <div className="flex gap-5"> 
                <input name={item.id} onChange={handleCheckbox} type="checkbox" checked={item.isCompleted} />
                <div className={item.isCompleted ? "line-through text-gray-500" : ""}>{item.todo}</div>
              </div>
              <div className="buttons flex h-full">
                <button 
                  onClick={() => handleEdit(item.id)} 
                  className="bg-cyan-700 hover:bg-cyan-800 p-2 py-1 text-sm font-bold text-white rounded-md mx-1">
                  <FaEdit />
                </button>
                <button 
                  onClick={() => handleDelete(item.id)} 
                  className="bg-red-700 hover:bg-red-800 p-2 py-1 text-sm font-bold text-white rounded-md mx-1">
                  <AiFillDelete />
                </button>
              </div> 
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
