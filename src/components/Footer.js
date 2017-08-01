import React from 'react';

import footlogo from '../img/ML_Logo_foot.png';


export default class Footer extends React.Component {
  render() {
    return(
      <footer>
        <div className="footer_container">
          <a href="#" className="footer_logo">
            <img src={footlogo} alt="" />
          </a>
          <ul>
            <li><a href="#">Контакты</a></li>
            <li><a href="#">О проекте</a></li>
            <li><a href="#">Реклама</a></li>
          </ul>
          <div className="footer_social">
            <p>
              <i className="fa fa-vk"></i>
              <i className="fa fa-facebook"></i>
              <i className="fa fa-twitter"></i>
              <i className="fa fa-odnoklassniki"></i>
            </p>
          </div>
          <span>+18</span>
        </div>
      </footer>
    )
  }
}
