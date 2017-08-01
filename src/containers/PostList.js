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
    return fetch(DEV_SITE + '/wp-json/wp/v2/posts',{
      method: 'get',
      credentials: 'include',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      }
    })
    .then(parseJSON)
    .then(posts => {
      this.setState({
        posts: posts
      });
    })
    .catch((error) => console.log(error));
  }
  render(){
    return(
      <div>
        <ul>
          {
            this.state.posts.map(item => (
              <li key={item.id}>
                <Link to={`/${item.id}`}>
                  {item.title.rendered}
                </Link>
                {item.excerpt.rendered}
                  {console.log(item)}
              </li>
            ))
          }
        </ul>
        BlogList
      </div>
    )
  }
}

PostList = connect(mapStateToProps)(PostList);

export default PostList;
