import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import {parseJSON, _parseJSON} from '../utils';

const mapStateToProps = (state) => ({
  isAuthenticating   : state.auth.isAuthenticating,
  statusText         : state.auth.statusText,
  location: state.router.location
});

const DEV_SITE = 'http://medialeaks.ru';

class PostList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      posts: []
    }
  }
  componentWillMount () {
    return fetch(DEV_SITE + '/wp-json/wp/v2/posts?_embed',{
      method: 'get',
      credentials: 'include',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      }
    })
    .then(parseJSON)
    .then(posts => {
      console.log(posts);
      this.setState({
        posts: posts
      });
    })
    .catch((error) => console.log(error));
  }
  render(){
    let posts = this.state.posts || [];
    let postsRow = posts.map(function(item){
      return (
        <div className="post-news" key={item.id}>
          <Link to={`/${item.id}`}>
            <div className="post-news_image">
            { item.featured_image }
              {item._embedded['wp:featuredmedia'].map((media, key) => {
                return <img src={media.source_url} alt="" key={key} />
              })}
            </div>
            <div className="post-news_caption">
              <p>{item.title.rendered}</p>
            </div>
          </Link>
          <div className="post-news_credentials">
            <p>{item.date}</p>
            <p>
              <a href="#">Видео</a>
            </p>
          </div>
        </div>
      )
    }).reduce(function(r, element, index){
      index % 3 === 0 && r.push([]);
      r[r.length - 1].push(element);
      return r;
    }, []).map(function(rowContent, key) {
        return <div className="list-row" key={key}>{rowContent}</div>;
    });
    return(
      <div className="main-container">
        <div className="list-wrapper">
          <div className="posts-list">
            <h2>самое интересное в интернете сегодня</h2>
            {postsRow}
            <div className="more-posts_btn">
              <span className="h3">загрузить еще</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

PostList = connect(mapStateToProps)(PostList);

export default PostList;
