import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  location: state.router.location
});

class PostPage extends React.Component {
  constructor(props){
    super(props);
  }
  componentDidMount() {
    console.log('Page');
  }
  render(){
    return(
      <div>
        BlogPage
      </div>
    )
  }
}

PostPage = connect(mapStateToProps)(PostPage);

export default PostPage;
