import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Converter from './ExchangeRates/Converter';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function Header() {
  const [mobile, setMobile] = useState(false);

  return (
    <div className='header'>
      <div className='header__top'>
        <div className='top__headerMiddle'>
          <h2 className='header__title'>STREAMIFY</h2>
        </div>
        <nav className={`navigation ${mobile ? 'menu-icon' : 'nav'}`}>
          <ul  className={`nav ${mobile ? 'nav-mobile' : ''}`}>
            <li><Link to="/" className="nav-link">Home</Link></li>
            <li><Link to="/Environment" className="nav-link">Environment</Link></li>
            <li><Link to="/Entertainment" className="nav-link">Entertainment</Link></li>
            <li><Link to="/Politics" className="nav-link">Politics</Link></li>
            <li><Link to="/Business" className="nav-link">Business</Link></li>
          </ul>
        </nav>
        <button className={mobile ? 'menu-icon' : 'nav'} onClick={() => setMobile(!mobile)}>
          {mobile ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>
    </div>
  );
}

export default Header;
