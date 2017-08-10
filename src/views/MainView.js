import React from 'react';
import {connect} from 'react-redux';

import Header from '../components/Header';
import Footer from '../components/Footer';
import MainListTitle from '../components/MainListTitle';
import RightSideBar from '../components/RightSideBar';
import MostReadable from '../components/MostReadable';
import PostBottomBanner from '../components/PostBottomBanner';

const mapStateToProps = (state) => ({
  initedPage: state.page.initedPage,
  isAuthenticating   : state.auth.isAuthenticating,
  statusText         : state.auth.statusText,
  location: state.router.location
});

class MainView extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <Header />
        <div className="main-container">
          {this.props.initedPage === 'list' ?  <MainListTitle /> : ''}
          <div className="list-wrapper">
            {this.props.children ? this.props.children : ''}
            <RightSideBar />
            {this.props.initedPage === 'post' ? <div> <PostBottomBanner />  <MostReadable /> </div> : ''}
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

MainView = connect(mapStateToProps)(MainView);

export default MainView;
