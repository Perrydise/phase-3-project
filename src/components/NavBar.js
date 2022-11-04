import React from "react"

function Navbar () {
    return (
        <div className="navbar">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        
        <a className="nav-link" href="/">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/Wishlist">Wish List</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/Pricedisplaypage">Price Display</a>
      </li>
    </ul>
  </div>
</nav>
        </div>
    )
}

export default NavBar