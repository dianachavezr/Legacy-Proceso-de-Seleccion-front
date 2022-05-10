import React, { useState } from "react";
import { useSelector } from "react-redux";
import { ITEMS, ITEMS_ASPIRANTS } from "../../api/data";
import Item from "../item/Item";
import "./Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  const [activeItems, setActiveItems] = useState([]);


  const auth = useSelector(state => state.auth)
  const {isLogged, isAdmin} = auth

  const toggleItem = (id) => {
    if (activeItems.find((active) => active === id)) {
      const nuewArry = activeItems.filter((active) => active !== id);
      setActiveItems(nuewArry);
    } else {
      setActiveItems([...activeItems, id]);
    }
  };
  const moveNav = () => {
    const bar = document.querySelector("#menu");
    bar.classList.toggle("move");
  };


  const isActive = ITEMS.findIndex(item => item.pathname === location.pathname)
  const isActiveAspirant = ITEMS_ASPIRANTS.findIndex(item => item.pathname === location.pathname)
  return (  
  <> 
  
    <div className="nav" id="menu">
      <Link to="/dashboard">
    <img className="Logo_Lapiz"
          src="https://i.ibb.co/ZM3jGdB/logoeducamasimbolo.png"
          alt="logo"/>
            </Link>
     
      <span className="nav__title">Menu</span>
      <div className="nav__items mt-2">
        <nav className="nav__fixed">
          {isAdmin &&
            isLogged &&
            ITEMS.map((item, index) => (
              <Item
                key={index}
                item={item}
                toggleItem={() => toggleItem(item.id)}
                activeItems={activeItems}
                active={index === isActive}
              />
            ))}

          {!isAdmin &&
            isLogged &&
            ITEMS_ASPIRANTS.map((item, index) => (
              <Item
                key={index}
                item={item}
                toggleItem={() => toggleItem(item.id)}
                activeItems={activeItems}
                active={index === isActiveAspirant} 
              />
            ))}
            <div>
              <a href='#close' title="close" className='close' style={{margin:"-56px -163px 0 0"}} onClick={moveNav}>X</a>
            </div>
        </nav>
      </div>
    </div>
     
    </>
  
  );
};

export default Nav;
