import React from 'react';
import { connect } from 'react-redux';
import {parseJSON} from '../utils';

const actions = {
  initPage: (page) => ({
      type: 'PAGE_INIT',
      payload: {
        initedPage: page
      }
  }),
  initialize: (type) => (dispatch) => {
    dispatch(actions.initPage(type));
  }
}

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
  componentDidMount() {
    this.props.dispatch(actions.initialize('post'));
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
    )
  }
}

PostPage = connect(mapStateToProps)(PostPage);

export default PostPage;
