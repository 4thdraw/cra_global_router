// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = ({data, setLeng}) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-center">
      <div className="container">
        {/* 로고 - 왼쪽 정렬 */}
        <Link className="navbar-brand me-auto" to="/">
          <img src="/logo.png" alt="로고" style={{ height: '40px' }} />
        </Link>

        {/* 메뉴 - 가운데 정렬 */}
        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
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
           <button onClick={()=>{ setLeng('en'); }}>EN</button>
           <button onClick={()=>{ setLeng('kr'); }}>KR</button>
           <button onClick={()=>{ setLeng('cn'); }}>CN</button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
