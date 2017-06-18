import React, { Component, PropTypes } from 'react';
import { Resolutions } from '../api/resolutions.js';
import { createContainer } from 'meteor/react-meteor-data';

class ResolutionDetail extends Component {
  render(){
    const {resolution} = this.props
    if(resolution){
      return (
        <div>
            <h1>{resolution.text}</h1>
        </div>
      )
    } else {
      return (
        <div>NOT FOUND</div>
      )
    }
  }
}

export default createContainer((props) => {
  Meteor.subscribe('resolutions');

  return {
    resolution : Resolutions.findOne(props.id)
  };
}, ResolutionDetail);
