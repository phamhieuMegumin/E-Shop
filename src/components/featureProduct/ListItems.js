import React from "react";
import Items from "./Items";
import { DATA } from "../../constants/data";
function ListItems() {
  return (
    <div className="list-item">
      {DATA.map((item) => {
        return <Items key={item.id} listItem={item} />;
      })}
    </div>
  );
}

export default ListItems;
