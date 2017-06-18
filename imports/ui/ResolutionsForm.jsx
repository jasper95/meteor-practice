import React, {Component} from 'react';
import { Resolutions } from '../api/resolutions';

export default class ResolutionsForm extends Component {

  handleSubmit(e){
    e.preventDefault();
    let text = this.refs.resolution.value.trim();
    if(text){
      Meteor.call('resolutions.insert', text, (err, data) => {
        if(err){
          Bert.alert("Please login before submitting", 'danger', 'fixed-top', 'fa-frown-o');
        }
      });
    } else {

    }

  }

  render(){
    return (
      <form className="new-resolution" onSubmit={this.handleSubmit.bind(this)}>
        <input
          type="text"
          ref="resolution"
          placeholder="Finish React Meteor Series"
        />
      </form>
    )
  }
}
