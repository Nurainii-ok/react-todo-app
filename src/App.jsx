import { useState } from "react";

function App() {
  // state untuk menyimpan list todo
  const [todos, setTodos] = useState([]);

  // state untuk input todo baru
  const [newTodo, setNewTodo] = useState("");

  // fungsi menambah todo
  const addTodo = () => {
    if (newTodo.trim() === "") return;

    const todo = {
      id: Date.now(),
      title: newTodo,
      completed: false,
    };

    setTodos([...todos, todo]);
    setNewTodo("");
  };

  // fungsi toggle selesai / belum
  const toggleTodo = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id
        ? { ...todo, completed: !todo.completed }
        : todo
    );

    setTodos(updatedTodos);
  };

  // fungsi hapus todo
  const deleteTodo = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Todo List</h2>

      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Tambah todo"
      />
      <button onClick={addTodo}>Tambah</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              onClick={() => toggleTodo(todo.id)}
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                cursor: "pointer",
              }}
            >
              {todo.title}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>Hapus</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
