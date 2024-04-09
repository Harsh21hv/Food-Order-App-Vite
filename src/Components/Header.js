import React, { useContext, useState } from 'react';
import { LOGO_URL } from '../utils/constants';
import { Link } from 'react-router-dom';
import userContext from '../utils/userContext';
import { useSelector } from 'react-redux';

const Header = () => {
  const [btn, setbtn] = useState('Login');

  const data = useContext(userContext);

  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className='shadow-lg m-2 flex justify-between'>
      <div className='logoContainer'>
        <img className='logo' src={LOGO_URL} alt='logo' />
      </div>
      <div className='navitems'>
        <ul>
          <li>
            <Link className='nav' to='/'>
              Home
            </Link>
          </li>
          <li>
            <Link className='nav' to='/about'>
              About
            </Link>
          </li>
          <li>
            <Link className='nav' to='/contact'>
              Support
            </Link>
          </li>
          <li className='font-medium'>
            <Link className='nav' to='/Cart'>
              🛒{cartItems.length}Cart
            </Link>
          </li>
          <button
            className='login'
            onClick={() => {
              btn === 'Login' ? setbtn('Logout') : setbtn('Login');
            }}
          >
            {btn}
          </button>
          <li>{data.loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
