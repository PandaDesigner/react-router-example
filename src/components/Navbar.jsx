import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  const [collpase, setCollpase] = useState(true);

  return (
    <div
      className="navbar sticky-top navbar-expand-lg bg-primary text-white
	"
    >
      <div className="container-fluid d-flex justify-content-end container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="true"
          aria-label="Toggle navigation"
          onClick={() => setCollpase(!collpase)}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className={collpase ? 'collapse navbar-collapse' : 'navbar-collapse'}
          id="navbarNav"
        >
          <div className={collpase ? 'navbar-nav ' : 'navbar-nav mt-4'}>
            <NavLink
              className="nav-link link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover"
              //aria-current="page"
              to={'/'}
            >
              Inicio
            </NavLink>
            <NavLink
              className="nav-link link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover"
              to={'/nosotros'}
            >
              Nosotros
            </NavLink>
            <NavLink
              className="nav-link link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover"
              to={'/contacto'}
            >
              Contacto
            </NavLink>
            <NavLink
              className="nav-link link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover"
              to={'/blog'}
            >
              Blog
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};
