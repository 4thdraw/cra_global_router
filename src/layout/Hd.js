// Header.js
import React , { useState , useEffect }from 'react';
import { Link } from 'react-router-dom';

import { HamburgerIcon , CloseIcon} from '../ui/ui';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../mystyle.scss'

const Header = ({data, setLeng}) => {

  useEffect(() => {
    const toggleMenu = document.getElementById('togglemenu');
    toggleMenu.addEventListener('click', () => {
      toggleMenu.classList.toggle('active');
    })

  }, [])

 
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-center">
      <div className="container">
        {/* 로고 - 왼쪽 정렬 */}
        <Link className="navbar-brand me-auto" to="/">
          <img src="/logo.png" alt="로고" style={{ height: '40px' }} />
        </Link>
        <button id="togglemenu" className='d-lg-none' >
          <CloseIcon></CloseIcon> 
          <HamburgerIcon></HamburgerIcon>
        </button>       

        {/* 메뉴 - 가운데 정렬 */}
        <ul className="navbar-nav mx-auto mb-2 mb-lg-0 d-none d-lg-flex">
          {
            Object.entries(data).map((v, i)=>{
              return(
                <li className="nav-item">  
                   <Link className="nav-link" to={v[1]["path"]} >{v[1]["label"]}</Link>               
                  
                </li>
              )
            })
          }
        
        </ul>

        {/* 언어선택 - 오른쪽 정렬 */}
        <div>
          <Link to="/en" onClick={() => setLeng('en')}>EN</Link>
          <Link to="/" onClick={() => setLeng('kr')}>KR</Link>
          <Link to="/cn" onClick={() => setLeng('cn')}>CN</Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
