import "./Navbar.css";

import React from "react";

const Navbar =React.memo(({search , setsearch, }) => {
  return (
    <div className="navbar">
      <div className="right-nav">
        <div className="logo">
          <i className="bi bi-house-door-fill"></i>
          <h2>MyHiroList</h2>
        </div>

        <div className="search">
          <input
            type="text"
            placeholder="search for anime...   "
            value={search}
            onChange={(e) => setsearch(e.target.value)}
          />
        </div>

        <div className="links">
          {/* <p>home</p> */}
        </div>



      </div>




      <div className="left-nav">
        <div className="option">
        <i class="bi bi-three-dots-vertical"></i>

        </div>
        <div className="login">
          <i className="bi bi-person"></i>
        </div>
      </div>
    </div>
  );
})

export default Navbar;
