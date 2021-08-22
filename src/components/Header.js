import { useState } from 'react';
import Button from './Button';
import mobilemenu from '../assets/imgs/mobile-menu.svg';

const Header = () => {
  const [displayMobileMenu, setDisplayMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setDisplayMobileMenu(!displayMobileMenu);
  };

  return (
    <header>
      <div className={`header-content container ${displayMobileMenu ? 'mobile-active' : ''}`}>
        <div className='logo mobile'>spense.</div>
        <div className='menu-wrapper'>
          <div className='logo'>spense.</div>
          <button onClick={toggleMobileMenu} className='mobile-menu-close'>
            X
          </button>
          <nav>
            <ul>
              <li>
                <a href='/'>Business</a>
              </li>
              <li>
                <a href='/'>Pricing</a>
              </li>
              <li>
                <a href='/'>Features</a>
              </li>
            </ul>
          </nav>
          <div className='account-links'>
            <Button text='Login' />
            <Button text='Get Started' />
          </div>
        </div>
        <button onClick={toggleMobileMenu} className='mobile-menu'>
          <img src={mobilemenu} alt='mobile menu' />
        </button>
      </div>
    </header>
  );
};

export default Header;
