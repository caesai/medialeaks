import React from 'react';
import { connect } from 'react-redux';
import {parseJSON, _parseJSON} from '../utils';
import 'whatwg-fetch';
import base64 from 'base-64';

const mapStateToProps = (state) => ({
  isAuthenticating   : state.auth.isAuthenticating,
  statusText         : state.auth.statusText,
  location: state.router.location
});

const DEV_SITE = 'http://dev1.medialeaks.ru';

class PostList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      posts: []
    }
  }
  componentWillMount () {
    // return fetch(DEV_SITE + '/wp-json/wp/v2/posts',{
    //   method: 'get',
    //   credentials: 'include',
    //   // mode: 'no-cors',
    //   headers: {
    //       'Accept': 'application/json',
    //       'Content-Type': 'application/json',
    //       'Authorization': 'Basic ' + Buffer.from('test:eZk3qxEsrtu6BdCYfGXncgjKV').toString('base64')
    //   }
    // })
    // .then((response) => {
    //   console.log(response);
    // })
    // .then(posts => {
    //   console.log(posts);
    //   this.setState({
    //     posts: posts
    //   });
    // })
    // .catch((error) => console.log(error));
  }
  render(){
    return(
      <div>
        <ul>
          {
            // this.state.posts.map(item => (
            //   <li key={item.id}>
            //     <Link to={`/${item.id}`}>
            //       {item.title.rendered}
            //     </Link>
            //   </li>
            // ))
          }
        </ul>
        BlogList
      </div>
    )
  }
}

PostList = connect(mapStateToProps)(PostList);

export default PostList;
