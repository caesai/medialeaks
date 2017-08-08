import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import RightSideBar from '../components/RightSideBar';

import mart from '../img/list/7.jpg';
import news1 from '../img/list/1.jpg';
import news2 from '../img/list/8.jpg';
import news3 from '../img/list/9.jpg';
import news4 from '../img/list/10.jpg';
import news5 from '../img/list/11.jpg';
import news6 from '../img/list/12.jpg';
import news7 from '../img/list/13.jpg';
import news8 from '../img/list/5.jpg';
import news9 from '../img/list/3.jpg';
import news10 from '../img/list/6.jpg';
import news11 from '../img/list/2.jpg';
import news12 from '../img/list/4.jpg';
import news13 from '../img/list/14.jpg';

export default class ListTemplate extends React.Component {
  render() {
    return(
      <div>
        <Header />
          <div className="main-container">
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

            <div className="list-wrapper">
              <div className="posts-list">
                <h2>самое интересное в интернете сегодня</h2>

                <div className="list-row">

                  <div className="post-news">
                    <a href="#">
                      <div className="post-news_image">
                        <img src={mart} alt="" />
                      </div>
                      <div className="post-news_caption">
                        <p>«Нет гречки? Как так?» Гарик Мартиросян пожалел жителей Монако в инстаграме. Уже нет отбоя от желающих помочь</p>
                      </div>
                    </a>
                    <div className="post-news_credentials">
                      <p>13 июля 2017 г.</p>
                      <p>
                        <a href="#">Видео</a>
                      </p>
                    </div>
                  </div>

                  <div className="post-news">
                    <a href="#">
                      <div className="post-news_image">
                        <img src={news1} alt="" />
                      </div>
                      <div className="post-news_caption">
                        <p>«Пусть Путин выкосит». В России расцвёл борщевик, и в интернете хотят принять против него закон</p>
                      </div>
                    </a>
                    <div className="post-news_credentials">
                      <p>13 июля 2017 г.</p>
                      <p>
                        <a href="#">Новости</a>
                      </p>
                    </div>
                  </div>

                  <div className="post-news">
                    <a href="#">
                      <div className="post-news_image">
                        <img src={news2} alt="" />
                      </div>
                      <div className="post-news_caption">
                        <p>«Все белые выглядят одинаково». На выпускном вместо своей дочери отец заснял другую девушку</p>
                      </div>
                    </a>
                    <div className="post-news_credentials">
                      <p>13 июля 2017 г.</p>
                      <p>
                        <a href="#">Видео</a>
                      </p>
                    </div>
                  </div>

                </div>

                <div className="list-row">

                  <div className="post-news">
                    <a href="#">
                      <div className="post-news_image">
                        <img src={news3} alt="" />
                      </div>
                      <div className="post-news_caption">
                        <p>«Все белые выглядят одинаково». На выпускном вместо своей дочери отец заснял другую девушку</p>
                      </div>
                    </a>
                    <div className="post-news_credentials">
                      <p>13 июля 2017 г.</p>
                      <p>
                        <a href="#">Видео</a>
                      </p>
                    </div>
                  </div>

                  <div className="post-news">
                    <a href="#">
                      <div className="post-news_image">
                        <img src={news4} alt="" />
                      </div>
                      <div className="post-news_caption">
                        <p>«Пусть Путин выкосит». В России расцвёл борщевик, и в интернете хотят принять против него закон</p>
                      </div>
                    </a>
                    <div className="post-news_credentials">
                      <p>13 июля 2017 г.</p>
                      <p>
                        <a href="#">Видео</a>
                      </p>
                    </div>
                  </div>

                  <div className="post-news">
                    <a href="#">
                      <div className="post-news_image">
                        <img src={news5} alt="" />
                      </div>
                      <div className="post-news_caption">
                        <p>Как пережить лето-2017 и выйти из схватки победителем</p>
                      </div>
                    </a>
                    <div className="post-news_credentials">
                      <p>13 июля 2017 г.</p>
                      <p>
                        <a href="#">Новости</a>
                      </p>
                    </div>
                    </div>
                  </div>

                  <div className="list-row">

                    <div className="post-news">
                      <a href="#">
                        <div className="post-news_image">
                          <img src={news6} alt="" />
                        </div>
                        <div className="post-news_caption">
                          <p>«Нет гречки? Как так?» Гарик Мартиросян пожалел жителей Монако в инстаграме. Уже нет отбоя от желающих помочь</p>
                        </div>
                      </a>
                      <div className="post-news_credentials">
                        <p>13 июля 2017 г.</p>
                        <p>
                          <a href="#">Новости</a>
                        </p>
                      </div>
                    </div>

                    <div className="post-news partnership">
                      <a href="#">
                        <div className="partnership_title">
                          <h3>Партнерский</h3>
                        </div>
                        <div className="post-news_caption">
                          <p>«Все белые выглядят одинаково». На выпускном вместо своей дочери отец заснял другую девушку</p>
                        </div>
                      </a>
                      <div className="post-news_credentials">
                        <p>13 июля 2017 г.</p>
                        <p>
                          <a href="#">Видео</a>
                        </p>
                      </div>
                      <div className="white-bg"></div>
                    </div>

                    <div className="post-news">
                      <a href="#">
                        <div className="post-news_image">
                          <img src={news7} alt="" />
                        </div>
                        <div className="post-news_caption">
                          <p>«Все белые выглядят одинаково». На выпускном вместо своей дочери отец заснял другую девушку</p>
                        </div>
                      </a>
                      <div className="post-news_credentials">
                        <p>13 июля 2017 г.</p>
                        <p>
                          <a href="#">Новости</a>
                        </p>
                      </div>
                      </div>
                    </div>

                    <div className="list-row">
                      <div className="post-news">
                        <a href="#">
                          <div className="post-news_image">
                            <img src={news8} alt="" />
                          </div>
                          <div className="post-news_caption">
                            <p>«Нет гречки? Как так?» Гарик Мартиросян пожалел жителей Монако в инстаграме. Уже нет отбоя от желающих помочь</p>
                          </div>
                        </a>
                        <div className="post-news_credentials">
                          <p>13 июля 2017 г.</p>
                          <p>
                            <a href="#">Новости</a>
                          </p>
                        </div>
                      </div>

                      <div className="post-news">
                        <a href="#">
                          <div className="post-news_image">
                            <img src={news9} alt="" />
                          </div>
                          <div className="post-news_caption">
                            <p>«Все белые выглядят одинаково». На выпускном вместо своей дочери отец заснял другую девушку</p>
                          </div>
                        </a>
                        <div className="post-news_credentials">
                          <p>13 июля 2017 г.</p>
                          <p>
                            <a href="#">Видео</a>
                          </p>
                        </div>
                      </div>

                      <div className="post-news">
                        <a href="#">
                          <div className="post-news_image">
                            <img src={news10} alt="" />
                          </div>
                          <div className="post-news_caption">
                            <p>«Все белые выглядят одинаково». На выпускном вместо своей дочери отец заснял другую девушку</p>
                          </div>
                        </a>
                        <div className="post-news_credentials">
                          <p>13 июля 2017 г.</p>
                          <p>
                            <a href="#">Новости</a>
                          </p>
                        </div>
                      </div>

                      <div className="list-row">
                        <div className="post-news">
                          <a href="#">
                            <div className="post-news_image">
                              <img src={news11} alt="" />
                            </div>
                            <div className="post-news_caption">
                              <p>«Нет гречки? Как так?» Гарик Мартиросян пожалел жителей Монако в инстаграме. Уже нет отбоя от желающих помочь</p>
                            </div>
                          </a>
                          <div className="post-news_credentials">
                            <p>13 июля 2017 г.</p>
                            <p>
                              <a href="#">Новости</a>
                            </p>
                          </div>
                        </div>

                        <div className="post-news">
                          <a href="#">
                            <div className="post-news_image">
                              <img src={news12} alt="" />
                            </div>
                            <div className="post-news_caption">
                              <p>«Все белые выглядят одинаково». На выпускном вместо своей дочери отец заснял другую девушку</p>
                            </div>
                          </a>
                          <div className="post-news_credentials">
                            <p>13 июля 2017 г.</p>
                            <p>
                              <a href="#">Видео</a>
                            </p>
                          </div>
                        </div>

                        <div className="post-news">
                          <a href="#">
                            <div className="post-news_image">
                              <img src={news13} alt="" />
                            </div>
                            <div className="post-news_caption">
                              <p>«Все белые выглядят одинаково». На выпускном вместо своей дочери отец заснял другую девушку</p>
                            </div>
                          </a>
                          <div className="post-news_credentials">
                            <p>13 июля 2017 г.</p>
                            <p>
                              <a href="#">Новости</a>
                            </p>
                          </div>
                        </div>
                      </div>
                  </div>

                  <div className="more-posts_btn">
                    <span className="h3">загрузить еще</span>
                  </div>

              </div>

              <RightSideBar />
            </div>
          </div>
        <Footer />
      </div>
    )
  }
}
