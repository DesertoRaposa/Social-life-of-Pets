import React from 'react';
import rabbit from '../../img/rabbit.png';

const Header = () => {
  return (
    <section className='header'>
      <div className="header__image">
      <img
        src={rabbit}
        alt="logo"
      />
      </div>
    </section>
  );
};

export default Header;
