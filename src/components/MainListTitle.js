import React from 'react';

export default class MainListTitle extends React.Component {
  render() {
    return (
      <div className="list-head">
        <div className="main-news-title">
          <a href="#">
            <h2>«Дали кумыса, не показали туалет». Интернет гадает, почему у Кейджа потерянное лицо на фото
            из Казахстана</h2>
          </a>
        </div>
        <div className="main-news-title">
          <a href="#">
            <span className="main-news-date">5 часов назад</span>
            <h2>«Пусть Путин выкосит». В России расцвёл борщевик, и в интернете хотят принять против него закон</h2>
          </a>
        </div>
      </div>
    )
  }
}
