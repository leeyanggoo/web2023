import React from 'react'

import {Link} from 'react-router-dom';

function Header(props) {
  return (
    <header id="header" className={`${props.attr[0]} ${props.attr[1]} ${props.attr[2]}`} aria-level="1">
      <div className="header__inner container">
        <h1 className="header__logo Chosun">
          <Link to="/">
            詩요일 <em>세상의 모든 시</em>
          </Link>
        </h1>
        <nav className="header__nav" role="navigation">
          <ul>
            <li>
              <Link to="/member">웹진 소개</Link>
            </li>
            <li>
              <Link to="/port">오늘의 시</Link>
            </li>
            <li>
              <Link to="/unsplash">연재</Link>
            </li>
            <li>
              <Link to="/movie">출간</Link>
            </li>
            <li>
              <Link to="/youtube">정기구독</Link>
            </li>
            <li>
              <Link to="/home">문의</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
export default Header;
