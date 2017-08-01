import React from 'react';
import {connect} from 'react-redux';

import Header from '../components/Header';
import Footer from '../components/Footer';

const mapStateToProps = (state) => ({
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
        {this.props.children ? <div>{this.props.children}</div> : ''}
        <Footer />
      </div>
    )
  }
}

MainView = connect(mapStateToProps)(MainView);

export default MainView;
