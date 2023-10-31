import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  
  return (<>
    <div>
      
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand text-light">
            <img src="favicom111.png" alt="" style={{ maxHeight: "40px" }} />
            TextifyNow
          </Link>
          <button
            className="navbar-toggler bg-light"
            type="button text-light"
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
                <Link to="/" className="nav-link active mx-4 text-light" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link mx-4 text-light">
                  About
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-success" type="submit">
                Search
              </button>
             

            </form>
          </div>
        </div>
      </nav>
    </div>
    </>
  );
}
