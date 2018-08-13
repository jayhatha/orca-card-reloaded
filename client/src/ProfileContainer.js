import React, {Component} from 'react';
import {Helmet} from 'react-helmet';
import {withRouter} from 'react-router-dom';
import ProfileInfo from './ProfileInfo';
import Cards from './Cards';
import Activity from './Activity';


class ProfileContainer extends Component {
    render() {
      return (
        <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>ORCA | {this.props.user.first}'s Profile</title>
        </Helmet>
        <ProfileInfo user={this.props.user} card={this.props.card}/>
        <Cards user={this.props.user} card={this.props.card}/>
        <Activity user={this.props.user} card={this.props.card}/>
        </div>
      );
    }
}

export default withRouter(ProfileContainer);
