import React from "react";

function ListForItem(props) {
  return (
<div className="flex mx-auto" style={{ height: '50px', width: '343px' }}>
  <img src="https://placehold.co/400x400.png" style={{ height: '50px', width: '50px' }} alt="placeholder" />
  <div className=" pl-2 flex flex-col justify-center">
    <p>{props.item}</p>
    <p className="text-slate-500">MRP: {props.price}</p>
    
  </div>
  <div className="pt-6 pl-12">
  <p className="">{props.shipping_method}</p>
  </div>
  <br></br>
</div>

  );
}

export default ListForItem;