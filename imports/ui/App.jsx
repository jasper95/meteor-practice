import React, { Component, PropTypes } from 'react';
import { Resolutions } from '../api/resolutions.js';
import { createContainer } from 'meteor/react-meteor-data';
import ResolutionsForm from './ResolutionsForm.jsx';
import Resolution from './Resolution.jsx';

class App extends Component {
  renderResolutions(){
    return this.props.resolutions.map((resolution) => {
      return (
        <Resolution key={resolution._id} resolution={resolution}/>
      )
    })
  }

  render(){
    return (
      <div>
        <h1>Resolutions - {Session.get('test')}</h1>
        <ResolutionsForm/>
        <ul className="resolutions">
          {this.renderResolutions()}
        </ul>
      </div>
    );
  }
}

App.propTypes = {
  resolutions : PropTypes.array.isRequired
}

export default createContainer(() => {
  Meteor.subscribe('resolutions');

  return {
    resolutions : Resolutions.find().fetch(),
  };
}, App);
