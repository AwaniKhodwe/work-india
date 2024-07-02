import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import ListItem from './pages/ListItem';
import GridItem from './pages/GridItem';
import AddItem from './pages/AddItem';

function App() {
  const [items, setItems] = useState([]);
  const [newItems, setNewItems] = useState([]);

  useEffect(() => {
    axios.get("https://run.mocky.io/v3/484a4684-87a9-462b-9cf0-25bc33c6fa1a")
      .then(response => {
        setItems(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  const addNewItem = (item) => {
    setNewItems(prevItems => [item, ...prevItems]);
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ListItem items={items} newItems={newItems} />} />
        <Route path="/GridItem" element={<GridItem items={items} newItems={newItems} />} />
        <Route path="/AddItem" element={<AddItem addNewItem={addNewItem} />} />
      </Routes>
    </div>
  );
}

export default App;
