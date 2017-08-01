import React from 'react';

import '../scss/base.scss';

/* Images */
import logo from '../img/ML_Logo.png';
import footlogo from '../img/ML_Logo_foot.png';
import searchicon from '../img/private-eye-magnifying-glass.png'
import avatar from '../img/avatar.png';
import ronal from '../img/ronal.jpg';
import baskov from '../img/baskov2.jpg';
import instagram from '../img/Instagram-logo.png';
import timati from '../img/timati.jpg';
import sidebarbanner from '../img/sidebarbanner.jpg';
import middlebanner from '../img/middlebanner.jpg';
import botbanner from '../img/botbanner.jpg';
import original from '../img/original.jpg';

export default class Template extends React.Component {
  render(){
    return(
      <div>
      <header>
        <div className="header_container">
          <a href="#" className="header_logo">
            <img src={logo} alt="" />
          </a>
          <ul>
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
      <div className="post_template">
        <div className="post_wrapper">
          <div className="post">
            <div className="post_title">
              <div>
                <p className="post_date">19 июля 13:00</p>
                <h1>Запись на тестовом сайте. Новая. добавил вот</h1>
              </div>
            </div>

            <div className="post_content">
            <h2>Подзаголовок про Николаса Кейджа, который снимался в хороших фильмах в начале 90х, а потом что-то пошло не так.</h2>

            <div className="author_avatar">
              <img alt="" src={avatar} className="avatar" height="52" width="52" />
              <p>Татьяна Тютюнова</p>
              <div className="author_social">
              <span className="vk_btn">
                <i className="fa fa-vk"></i>
                345
              </span>
              <span className="fb_btn">
                <i className="fa fa-facebook"></i>
                243
              </span>
              <span className="tw_btn">
                <i className="fa fa-twitter"></i>
              </span>
              <span className="ok_btn">
                <i className="fa fa-odnoklassniki"></i>
                5
              </span>
              </div>
            </div>

            <p>На первую игру футбольного клуба <a href="http://medialeaks.ru/wp-admin/">«Ахмат» под новым названием приехало неожиданно много звёзд российской эстрады</a> и даже мировая футбольная знаменитость Рональдиньо. Звёзды активно рассказывали о своём времяпрепровождении на матче в Грозном в инстаграме: фигурист Евгений Плющенко и телеведущая Яна Рудковская фотографировались с легендой бразильского футбола, а певец Николай Басков позировал рядом с Кадыровым и даже танцевал перед ним лезгинку. </p>
            <p>В начале июня футбольный клуб <a href="https://vk.com">«Терек» переименовали в «Ахмат»</a>: в честь первого президента Чеченской Республики Ахмата Кадырова, отца нынешнего президента Чечни Рамзана. Это решение было встречено болельщиками клуба очень остро. В соцсетях фанаты выражали своё негодование, а многие и вообще писали, что больше болеть за клуб не будут.</p>

            <div className="post_quote">
              <p>На этом моё боление за клуб прекращается. И даже если 10 раз возьмут Лигу Чемпионов, для меня этой команды нет. ФК «Терек» перестал существовать лично для меня. Я ухожу из этой группы, выкидываю свой шарф, если кому нужен, могу подарить, и совет вам всем: поступайте точно так же, как я, забудьте эту команду, её больше нет. И отпишитесь отсюда, вы сделаете правильный выбор, поверьте, и время не будете зря тратить, и нервы, — пишет один из пользователей сайта «ВКонтакте» в комментариях к посту в одном из фанатских сообществ клуба. </p>
            </div>

            <p>В воскресенье, 16 июля, команда первый раз сыграла под новым названием в матче первого тура Российской футбольной премьер-лиги с клубом «Амкар». Несмотря на многочисленных болельщиков, отвернувшихся от команды, народу на стадионе было немало. Но многим этот матч запомнился не только заполненными трибунами и победой «Ахмата» со счётом 1:0, а огромным количеством звёздных гостей, его посетивших.</p>

            <div className="more_block seealso">
              <span>Читайте на Medialeaks:</span> <a href="#">Что-что телфония телефония? Гид по виртуальной АТС для чайников.</a>
            </div>

            <div className="social-qoute_widget">
              <a href="#">
                <div className="widget_title">
                  <div className="social-network_icon">
                    <i className="fa fa-vk"></i>
                  </div>
                  <div className="social-network_author">
                    <h3>Correct Names</h3>
                  </div>
                  <div className="social-network_source">Оригинал</div>
                </div>
              </a>
              <div className="widget-image">
                <img src={ronal} />
              </div>
              <div className="widget-caption">
                <p>Но были и те, кто упустил шанс сфотографироваться с Рональдиньо. Например, Николай Басков, спевший на открытии матча, решил, что лучше запечатлеть себя с Рамзаном Кадыровым. И даже станцевал перед ним лезгинку.</p>
              </div>
            </div>

            <div className="middle-banner">
              <img src={middlebanner} alt="" />
            </div>

            <div className="social-qoute_widget">
              <a href="#">
                <div className="widget_title">
                  <div className="social-network_icon">
                    <i className="fa fa-twitter"></i>
                  </div>
                  <div className="social-network_author">
                    <h3>Correct Names</h3>
                    <span>@correct Names</span>
                  </div>
                  <div className="social-network_source">Оригинал</div>
                </div>
              </a>
              <div className="widget-caption">
                <p>Каков уровень морали и интеллекта должен быть? Жизнь показывает продажность,бесталанность,клоунаду мира шоубизнеса.На Западе они не нужны.</p>
              </div>
            </div>

            <p>Но пользователи соцсетей не оценили танцевальные умения певца.</p>

            <div className="social-qoute_widget">
              <a href="#">
                <div className="widget_title">
                  <div className="social-network_icon">
                    <i className="fa fa-facebook"></i>
                  </div>
                  <div className="social-network_author">
                    <h3>Correct Names</h3>
                  </div>
                  <div className="social-network_source">Оригинал</div>
                </div>
              </a>
              <div className="widget-image">
                <img src={baskov} />
              </div>
              <div className="widget-caption">
                <p>Но были и те, кто упустил шанс сфотографироваться с Рональдиньо. Например, Николай Басков, спевший на открытии матча, решил, что лучше запечатлеть себя с Рамзаном Кадыровым. И даже станцевал перед ним лезгинку.</p>
              </div>
            </div>

            <div className="social-qoute_widget">
              <a href="#">
                <div className="widget_title">
                  <div className="social-network_icon">
                    <img src={instagram} className="instagram" />
                  </div>
                  <div className="social-network_author">
                    <h3>Correct Names</h3>
                  </div>
                  <div className="social-network_source">Оригинал</div>
                </div>
              </a>
              <div className="widget-image">
                <img src={timati}  alt="" />
              </div>
              <div className="widget-caption">
                <p>В Грозный на исторический первый матч прибывают почетные гости, среди них звезды спорта и эстрады, Роналдиньо, Николай Басков, Тимати, Валерия, Иосиф Пригожин, Игорь Верник, Виктория Лопырева, а также главный тренер сборной России Станислав Черчесов, Президент РФПЛ Сергей Прядкин и другие.</p>
                <p>Несколько знаменитых имён были раскрыты болельщикам ещё до матча в официальном аккаунте футбольного клуба в инстаграме.</p>
              </div>
            </div>

            <div className="social-qoute_widget">

              <div className="widget-caption">
                <p>Хотя некоторые были искренне рады и удивлены его приезду.</p>
                <div className="social-network_source_btn">Оригинал</div>
                <div className="hidden-caption">
                  <img src={original} alt="" />
                </div>

              </div>
            </div>

            <p>Имя отца Рамзана Кадырова было увековечено не только в названии футбольного клуба, но и в названии моста, находящегося в Санкт-Петербурге. Такая инициатива была встречена пользователями интернета так же болезненно, как и позднее переименование «Терека». Они вспоминали теракт на стадионе в Грозном, в результате которого погиб Ахмат Кадыров, рисовали фотожабы и предлагали новые места для переименования.</p>

            <div className="post_tags">
              <span>Ахмат</span>
              <span>Рональдиньо</span>
              <span>Кадыров</span>
              <span>Спорт</span>
              <span>Футбол</span>
            </div>

            <div className="post_social">
              <span className="vk_btn">
                <i className="fa fa-vk"></i>
                345
              </span>
              <span className="fb_btn">
                <i className="fa fa-facebook"></i>
                243
              </span>
              <span className="tw_btn">
                <i className="fa fa-twitter"></i>
              </span>
              <span className="ok_btn">
                <i className="fa fa-odnoklassniki"></i>
                5
              </span>
              <span className="disclaimer">Если вы нашли ошибку, пожалуйста, выделите фрагмент текста и нажмите Ctrl+Enter.</span>
            </div>
          </div>
        </div>

        <div className="sidebar_right">
          <img src={sidebarbanner} alt="" />
          <div className="didgest">
            <span className="h3">Самое читаемое</span>

            <div className="didgest_news">
              <div className="didgest_image"></div>
              <div className="didgest_caption">
                <p>Тираннозавр, зомби и взрывающаяся голова. Какие эмодзи ждут нас в будущем и как общаться ими уже сейчас</p>
                <div className="didgest_credential">
                  <p className="didgest_date">13 июля 2017 г.</p>
                  <p className="didgest_category">Видео</p>
                </div>
              </div>
            </div>

            <div className="didgest_news">
            <div className="didgest_image"></div>
              <div className="didgest_caption">
                <p>«Улетаю с этой планеты». Паук так съел сверчка, что всем нам теперь хочется смотреть себе под ноги</p>
                <div className="didgest_credential">
                  <p className="didgest_date">13 июля 2017 г.</p>
                  <p className="didgest_category">Видео</p>
                </div>
              </div>
            </div>

            <div className="history-ofaday">
              <span className="h3">История дня</span>
              <div className="history-ofaday_caption">
                <p>Когда включили «Деспасито». Как песня музыкантов из Пуэрто-Рико стала хитом этого лета и превратилась в мем</p>
                <div className="didgest_credential">
                  <p className="didgest_date">13 июля 2017 г.</p>
                  <p className="didgest_category">Видео</p>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>

        <div className="bottom-banner">
          <img src={botbanner} alt="" />
        </div>

        <div className="most-readable">
          <h2>Самое читаемое на medialeaks</h2>
          <div className="mr_row">
            <div className="mr_block">
              <div className="mr_block_border">
                <a href="#">«Быстрее, чем растает мороженое». Как превратить мечту в большой бизнес с помощью звонков
                  <div><span className="likes">
                    <i className="fa fa-heart"></i>
                    5
                  </span>
                  <span className="sees">
                    <i className="fa fa-eye"></i>
                    10
                  </span></div>
                </a>
              </div>
            </div>
            <div className="mr_block">
              <div className="mr_block_border">
                <a href="#">«Быстрее, чем растает мороженое». Как превратить мечту в большой бизнес с помощью звонков
                  <div><span className="likes">
                    <i className="fa fa-heart"></i>
                    5
                  </span>
                  <span className="sees">
                    <i className="fa fa-eye"></i>
                    10
                  </span></div>
                </a>
              </div>
            </div>

            <div className="mr_block">
              <div className="mr_block_border">
                <a href="#">«Быстрее, чем растает мороженое». Как превратить мечту в большой бизнес с помощью звонков
                  <div><span className="likes">
                    <i className="fa fa-heart"></i>
                    5
                  </span>
                  <span className="sees">
                    <i className="fa fa-eye"></i>
                    10
                  </span></div>
                </a>
              </div>
            </div>
            </div>
            <div className="mr_row">
            <div className="mr_block">
              <div className="mr_block_border">
                <a href="#">«Быстрее, чем растает мороженое». Как превратить мечту в большой бизнес с помощью звонков
                  <div><span className="likes">
                    <i className="fa fa-heart"></i>
                    5
                  </span>
                  <span className="sees">
                    <i className="fa fa-eye"></i>
                    10
                  </span></div>
                </a>
              </div>
            </div>

            <div className="mr_block">
              <div className="mr_block_border">
                <a href="#">«Быстрее, чем растает мороженое». Как превратить мечту в большой бизнес с помощью звонков
                  <div><span className="likes">
                    <i className="fa fa-heart"></i>
                    5
                  </span>
                  <span className="sees">
                    <i className="fa fa-eye"></i>
                    10
                  </span></div>
                </a>
              </div>
            </div>
            <div className="mr_block">
              <div className="mr_block_border">
                <a href="#">«Быстрее, чем растает мороженое». Как превратить мечту в большой бизнес с помощью звонков
                  <div><span className="likes">
                    <i className="fa fa-heart"></i>
                    5
                  </span>
                  <span className="sees">
                    <i className="fa fa-eye"></i>
                    10
                  </span></div>
                </a>
              </div>
            </div>
          </div>
        </div>



      </div>
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
    </div>

    )
  }
}
