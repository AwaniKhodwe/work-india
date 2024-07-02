import React from "react";
import Header from "../components/Header";
import GridForItem from "../components/GridForItem";

function GridItem({ items, newItems }) {
  const allItems = [...newItems, ...items];

  return (
    <div>
      <Header />
      <div className="grid grid-cols-3 gap-2 p-2">
        {allItems.map(item => (
          <div key={item.id} className="p-4 border rounded-lg">
            <GridForItem
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

export default GridItem;
