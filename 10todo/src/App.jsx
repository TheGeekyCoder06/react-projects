import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { TodoProvider } from "./contexts";
import { useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prevTodos) => [{ id: Date.now(), ...todo }, ...prevTodos]);
  };

  const updateTodo = (id, todo) => {
    setTodos((prevTodos) =>
      prevTodos.map((t) => (t.id === id ? { ...t, ...todo } : t))
    );
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((t) => t.id !== id));
  };

  const toggleCompleted = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((t) =>
        t.id === id ? { ...t, isCompleted: !t.isCompleted } : t
      )
    );
  };

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos && storedTodos.length > 0) {
      setTodos(storedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleCompleted }}
    >
      <div className="bg-[#172842] min-h-screen py-8 w-full">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;