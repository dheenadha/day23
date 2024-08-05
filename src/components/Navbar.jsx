import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

function Navbar(props) {
  // Navbar
  return (
    <nav
      className="navbar navbar-expand-lg  border-bottom border-body"
      data-bs-theme="dark"
    >
      <div className="container-fluid ">
        <h1 className="navbar-brand ">Extremes</h1>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/">
                About
              </a>
            </li>
            <li className="nav-item dropdown ">
              <a
                className="nav-link dropdown-toggle active"
                href="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Shop
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/">
                    All products
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Popular items
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    New Arrivals
                  </a>
                </li>
              </ul>
            </li>
          </ul>

          <form className="d-flex mx-4">
            <button className="btn  border-white  text-white gap-1">
              <FontAwesomeIcon
                icon={faShoppingCart}
                size="xl"
                color="white"
              ></FontAwesomeIcon>{" "}
              Cart
              <span className="badge bg-dark text-white ms-2 rounded-pill">
                {" "}
                {props.cartValue}
              </span>
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
