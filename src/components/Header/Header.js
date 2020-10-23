import React, { useState } from "react";
import "./Header.css";
function Header() {
  const [menuList, setMenuList] = useState([
    {
      name: "Shop",
      isActive: true,
    },
    {
      name: "Vendors",
      isActive: false,
    },
    {
      name: "Blog",
      isActive: false,
    },
    {
      name: "contact us",
      isActive: false,
    },
    {
      name: "about",
      isActive: false,
    },
  ]);
  const handleClick = (getindex) => {
    const newList = [];
    menuList.forEach((item, index) => {
      if (index === getindex) {
        const newItem = item;
        newItem.isActive = true;
        newList.push(newItem);
      } else if (index !== getindex && item.isActive === true) {
        const newItem = item;
        newItem.isActive = false;
        newList.push(newItem);
      } else newList.push(item);
    });
    setMenuList(newList);
  };
  return (
    <div className="header">
      <div className="logo">Ridestyle</div>
      <nav>
        <ul>
          {menuList.map((item, index) => {
            return (
              <li
                key={index}
                className={item.isActive ? "active" : ""}
                onClick={() => handleClick(index)}
              >
                {item.name}
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="group-function">
        <ul>
          <li>
            <i className="fas fa-search"></i>
          </li>
          <li>
            <i className="far fa-user"></i>
          </li>
          <li>
            <i className="fas fa-shopping-cart"></i>
            <span>1</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
