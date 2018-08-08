import React, {Component} from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import ProfileInfo from './ProfileInfo';
import Cards from './Cards';
import Activity from './Activity';


class ProfileContainer extends Component {
    constructor(props){
      super(props)
      //this is where we define initial state
    }

    componentDidMount() {
    // get user activity and cards from store
    }



    render() {
        return (
          <div>
          <ProfileInfo user={this.props.user}/>
          <Cards user={this.props.user}/>
          <Activity user={this.props.user}/>
          </div>
        );
    }
}

export default withRouter(ProfileContainer);
