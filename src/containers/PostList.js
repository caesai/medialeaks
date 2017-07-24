import React from 'react';
import { connect } from 'react-redux';
import {parseJson} from '../utils';

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
  // componentWillMount () {
  //   return fetch(DEV_SITE + '/wp-json/wp/v2/posts',{
  //     mode: 'no-cors'
  //   })
  //   .then(parseJson)
  //   .then(posts => {
  //     this.setState({
  //       posts: posts
  //     });
  //   })
  // }
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
