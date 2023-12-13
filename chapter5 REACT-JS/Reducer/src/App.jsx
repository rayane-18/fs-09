import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addproduct } from "./redux/product_managment_Slice";

const App = () => {
  const productOBG = useSelector((state) => state.product_managment.ProductOBG);
  const dispatch = useDispatch();

  const handleAddProduct = (input) => {
    dispatch(addproduct(input));
  };
  const [input, setInput] = useState({
    todo: "",
    id: "",
  });
  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <input
        type="text"
        value={input.todo}
        name="todo"
        placeholder="Add"
        onChange={handleChange}
      />
      <button onClick={handleAddProduct(input)}>Add Product</button>
      <h1>Product Management App</h1>
      <ul>
        {productOBG.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
