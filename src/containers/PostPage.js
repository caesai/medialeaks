import React from 'react';
import { connect } from 'react-redux';
import {parseJSON} from '../utils';

import RightSideBar from '../components/RightSideBar';
import MostReadable from '../components/MostReadable';
import PostBottomBanner from '../components/PostBottomBanner';

const mapStateToProps = (state) => ({
  location: state.router.location
});

const DEV_SITE = 'http://medialeaks.ru';

class PostPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      post: null
    };
  }
  componentWillMount () {
    return fetch(DEV_SITE + '/wp-json/wp/v2/posts/' + this.props.params.id,{
      method: 'get',
      credentials: 'include',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      }
    })
    .then(parseJSON)
    .then(post => {
      this.setState({
        post: post
      });
    })
    .catch((error) => console.log(error));
  }
  render(){
    if (!this.state.post) return <div>Загрузка...</div>
    return(
      <div className="post_template">
        <div className="post_wrapper">
          <div className="post">

            <div className="post_title">
              <div>
                <h1>{this.state.post.title.rendered}</h1>
              </div>
            </div>
            <div className="post_content">
              <div dangerouslySetInnerHTML={{ __html : this.state.post.content.rendered }}></div>
            </div>
          </div>
          <RightSideBar />
          <PostBottomBanner />
        </div>
        <MostReadable />
      </div>
    )
  }
}

PostPage = connect(mapStateToProps)(PostPage);

export default PostPage;
