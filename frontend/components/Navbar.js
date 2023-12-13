/* eslint-disable no-unused-vars */
import React from 'react';

const Navbar = (props) => {
  const toggleMode = e => {
    e.preventDefault();
    props.setGeceModu(!props.geceModu);
  };
 const themeType=localStorage.getItem("theme");
 console.log("themeType",themeType);
  return (
    <nav className="navbar">
      <h1>Kripto İzleyici</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
            className={props.geceModu ? 'toggle toggled' : 'toggle'}
          //className={themeType?'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
