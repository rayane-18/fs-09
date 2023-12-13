import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./redux/counterSlice";
import { useCallback, useMemo, useState } from "react";
import { addTodo, deletetodo, updateTodo } from "./redux/todoSlice";

const App = () => {
  // Selecting counter state from the Redux store
  const counter = useSelector((state) => state.count.counter);

  // Selecting todo array from the Redux store
  const todo = useSelector((state) => state.todos.todoArr);

  // State to manage input values
  const [input, setInput] = useState({
    todo: "",
    id: "",
  });

  // Redux dispatch function
  const dispatch = useDispatch();

  // Handle input change
  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  // Update todo item
  const update = (id) => {
    // Find the todo item by id
    const index = todo.find((i) => i.id === id);

    // Set input values to the found todo item for updating
    setInput(index);
  };

  // Add or update todo item in the Redux store
  const addTodoArr = (id) => {
    // Find the todo item by id
    const index = todo.find((i) => i.id === id);

    // If the item exists, dispatch updateTodo action; otherwise, dispatch addTodo action
    if (index) {
      dispatch(updateTodo(input));
    } else {
      // Generate a random id for the new todo item
      const newId = Math.random().toString(36).slice(2, 8);
      dispatch(addTodo({ ...input, id: newId }));
    }
  };

  // Remove todo item from the Redux store
  const removeFromTodos = (id) => {
    dispatch(deletetodo(id));
  };

  return (
    <div>
      {/* Input for adding or updating todo item */}
      <input
        type="text"
        value={input.todo}
        name="todo"
        placeholder="Add"
        onChange={handleChange}
      />

      {/* Button to add or update todo item */}
      <button onClick={() => addTodoArr(input.id)}>Add todo</button>

      {/* Display todo items */}
      {todo.map((t) => {
        return (
          <div className="t" key={t.id}>
            <h1>{t.todo}</h1>

            {/* Button to remove todo item */}
            <button onClick={() => removeFromTodos(t.id)}>Remove</button>

            {/* Button to update todo item */}
            <button onClick={() => update(t.id)}>Update</button>
          </div>
        );
      })}
    </div>
  );
};

export default App;
