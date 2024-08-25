import React from 'react';
import './navbar.css';

const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark text-white bg-dark ">
      <a className="navbar-brand ms-4" href="#">Pizzeria Mamma Mía!</a>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ">
          <li className="nav-item">
            <a className="nav-link" href="#"><button type="button" class="btn btn-outline-secondary">🍕 Home</button></a>
          </li>
          {token ? (
            <>
              <li className="nav-item">
                <a className="nav-link" href="#"><button type="button" class="btn btn-outline-secondary">🔓 Profile</button></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"><button type="button" class="btn btn-outline-secondary">🔒 Logout</button></a>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <a className="nav-link" href="#"><button type="button" class="btn btn-outline-secondary">🔐 Login</button></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"><button type="button" class="btn btn-outline-secondary">🔐 Register</button></a>
              </li>
            </>
          )}
        </ul>
        <form className="position-absolute end-0 me-4">
            <button className="btn btn-outline-info" type="submit"><a className="nav-link btn-hover" href="#">🛒 Total: ${total.toLocaleString()}</a></button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;