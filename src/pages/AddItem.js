import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

function AddItem({ addNewItem }) {
  const navigate = useNavigate();
  const [items, setItems] = useState({
    item: "",
    price: "",
    shippingMethod: "",
  });

  const options = ["Same Day Delivery", "None"];

  function handleChange(event) {
    setItems((prevItem) => ({
      ...prevItem,
      [event.target.name]: event.target.value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    addNewItem(items);
    navigate("/"); // Navigate to the home page after adding the item
  }

  return (
    <div>
      <Header />
      <div className="flex justify-center mt-36">
        <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
          <input
            className="p-2 border border-gray-300 rounded"
            name="item"
            value={items.item}
            onChange={handleChange}
            type="text"
            placeholder="Enter Item Name"
          />
          <input
            className="p-2 border border-gray-300 rounded"
            name="price"
            value={items.price}
            onChange={handleChange}
            type="number"
            placeholder="Enter Item Price"
          />
          <select
            className="p-2 border border-gray-300 rounded"
            name="shippingMethod"
            value={items.shippingMethod}
            onChange={handleChange}
          >
            <option value="">Shipping Method</option>
            {options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
          <button type="submit" className="bg-green-500 text-white p-2 rounded">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddItem;
