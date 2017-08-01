import React from 'react';

import logo from '../img/ML_Logo.png';
import searchicon from '../img/private-eye-magnifying-glass.png'

export default class Header extends React.Component {
  render() {
    return(
      <header>
        <div className="header_container">
          <div className="mobile-menu">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <a href="#" className="header_logo">
            <img src={logo} alt="" />
          </a>
          <ul className="nav-menu">
            <li><a href="#">Новости</a></li>
            <li><a href="#">Истории</a></li>
            <li><a href="#">Ответы</a></li>
            <li><a href="#">Видео</a></li>
          </ul>
          <div className="header_social">
            <p>
              <i className="fa fa-vk"></i>
              <i className="fa fa-facebook"></i>
              <i className="fa fa-twitter"></i>
              <i className="fa fa-odnoklassniki"></i>
            </p>
          </div>
          <span>
            <img src={searchicon} alt="" />
          </span>
        </div>

      </header>
    )
  }
}
