import React, { useState } from "react";
import Header from "../components/Header";
import ListForItem from "../components/ListForItem";

function ListItem({ items, newItems }) {
  const allItems = [...newItems, ...items];
  const [filteredItems, setFilteredItems] = useState(allItems);
  
  const handleSearch = (searchTerm) => {
    const filtered = allItems.filter(item =>
      item.item.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredItems(filtered);
  };

  return (
    <div>
      <Header onSearch={handleSearch} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {filteredItems.map(item => (
          <div key={item.id} className="p-4 border rounded-lg">
            <ListForItem
              item={item.item}
              price={item.price}
              shipping_method={item.shippingMethod}
              id={item.id}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListItem;
