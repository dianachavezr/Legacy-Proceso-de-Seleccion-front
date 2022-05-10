import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import './Item.css'

const Item = ({ item, toggleItem, activeItems, active }) => {


    const { name, icon, items, id, pathname } = item;

    const isActive = activeItems.find((activeItem) => activeItem === id);
    const iconName = !isActive ? "fa-angle-down" : "fa-angle-up";

    const isActiveItem = active && 'active'
    


    return (
      <div className={`nav__item cursor-pointer ripple `}>
        <div
          className={`d-flex align-items-center justify-content-between  pointer`}
          onClick={toggleItem}
        >
          <div className='d-flex align-items-center  px-3'>
          <Link to={pathname? pathname:'#'}><i className={`${icon} nav__item-icon ${isActiveItem}`} /></Link>  
            <Link to={pathname? pathname:'#'} className={`mx-1 nav__item-label ${isActiveItem}`}>{name}</Link>
          </div>

          {items?.length > 0 && (
            <i className={`fas ${iconName} nav__item-iconArrow ${isActiveItem}`} />
          )}
        </div>
        
        {items.length > 0 && isActive && (
          <div className={`nav__subitem d-flex flex-column transition ${isActiveItem}`}>
            {items?.map((item, index) => (
              <Link to={item.pathname} key={index} className={`nav__subitem-label transition `} >{item.name}</Link>
            ))}
          </div>
        )}
      </div>
    );
  };

export default Item
