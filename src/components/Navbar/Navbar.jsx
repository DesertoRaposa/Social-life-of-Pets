import React from 'react';
import home from '../../img/home.png'
import rabbit from '../../img/rabbit.png'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
    <section className="nav">
      <div className="nav__image">
        <img
          src={rabbit}
          alt="logo"
        />
      </div>

      <nav className='navigation'>
        <div className="navigation__item">
          <img
            src={home}
            alt="logo"
          />
          <NavLink to="/profile" activeClassName="active">
            Profile
          </NavLink>
        </div>
        <div className="navigation__item">
          <img
            src={home}
            alt="logo"
          />
          <NavLink to="/dialogs" activeClassName="active">
            Messages
          </NavLink>
        </div>
        <div className="navigation__item">
          <img
            src={home}
            alt="logo"
          />
          <a href="/news">
            News
          </a>
        </div>
        <div className="navigation__item">
          <img
            src={home}
            alt="logo"
          />
          <a href="/music">
            Music
          </a>
        </div>
        <div className="navigation__item">
          <img
            src={home}
            alt="logo"
          />
          <a href="/settings">
            Settings
          </a>
        </div>
      </nav>
    </section>
  )
}

export default Navbar;