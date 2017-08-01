import React from 'react';

import botbanner from '../img/botbanner.jpg';

export default class PostBottomBanner extends React.Component {
  render() {
    return(
      <div className="bottom-banner">
        <img src={botbanner} alt="" />
      </div>
    )
  }
}
