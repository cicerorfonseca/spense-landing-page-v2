import { useState } from 'react';
import Button from './Button';
import mobilemenu from '../assets/imgs/mobile-menu.svg';

const Header = () => {
  const [displayMobileMenu, setDisplayMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setDisplayMobileMenu(!displayMobileMenu);
  };

  return (
    <header className={`container ${displayMobileMenu ? 'mobile-active' : ''}`}>
      <div className='logo'>spence.</div>
      <div className='menu-wrapper'>
        <button onClick={toggleMobileMenu} className='mobile-menu-close'>
          X
        </button>
        <nav>
          <ul>
            <li>Business</li>
            <li>Pricing</li>
            <li>Features</li>
          </ul>
        </nav>
        <div className='account-links'>
          <Button buttonType='primary' text='Login' />
          <Button buttonType='primary' text='Get Started' />
        </div>
      </div>
      <button onClick={toggleMobileMenu} className='mobile-menu'>
        <img src={mobilemenu} alt='mobile menu' />
      </button>
    </header>
  );
};

export default Header;
