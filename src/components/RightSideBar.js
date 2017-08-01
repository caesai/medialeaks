import React from 'react';

import rightsidebanner from '../img/rightsidebanner.jpg';
import sidebarbanner from '../img/sidebarbanner.jpg';

export default class RightSideBar extends React.Component {
  render() {
    return(
      <div className="sidebar_right">

        <img src={sidebarbanner} alt="" />

        <div className="didgest">
          <span className="h3">Самое читаемое</span>

          <div className="didgest_news">
            <div className="didgest_image"></div>
            <div className="didgest_caption">
              <a href="#">
                <p>Тираннозавр, зомби и взрывающаяся голова. Какие эмодзи ждут нас в будущем и как общаться ими уже сейчас</p>
              </a>
              <div className="didgest_credential">
                <p className="didgest_date">13 июля 2017 г.</p>
                <p className="didgest_category">Видео</p>
              </div>
            </div>
          </div>

          <div className="didgest_news">
            <div className="didgest_image"></div>
            <div className="didgest_caption">
              <a href="#">
                <p>«Улетаю с этой планеты». Паук так съел сверчка, что всем нам теперь хочется смотреть себе под ноги</p>
              </a>
              <div className="didgest_credential">
                <p className="didgest_date">13 июля 2017 г.</p>
                <p className="didgest_category">Видео</p>
              </div>
            </div>
          </div>

          <img src={rightsidebanner} className="rightsidebanner" alt="" />

          <div className="history-ofaday">
            <span className="h3">История дня</span>
            <div className="history-ofaday_caption">
              <a href="#">
                <p>Когда включили «Деспасито». Как песня музыкантов из Пуэрто-Рико стала хитом этого лета и превратилась в мем</p>
              </a>
              <div className="didgest_credential">
                <p className="didgest_date">13 июля 2017 г.</p>
                <p className="didgest_category">Видео</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
