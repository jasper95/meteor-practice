import React, { Component, PropTypes } from 'react'
import classnames from 'classnames';

export default class Resolution extends Component {
  toggleCheck(){
    const {resolution} = this.props;
    Meteor.call('resolutions.setComplete', resolution);
  }

  deleteResolution(){
    const {resolution} = this.props;
    Meteor.call('resolutions.remove', resolution);
  }

  render(){
    const {resolution} = this.props;
    const resolutionClassName = classnames({
      checked: resolution.complete
    })
    return (
      <li className={resolutionClassName}>
        <input
          type="checkbox"
          readOnly={true}
          checked={resolution.complete}
          onChange={this.toggleCheck.bind(this)}
        />
        <a href={`/resolutions/${resolution._id}`}>{resolution.text}</a>
        {resolution.complete ?
          (<span className="completed">Completed</span>) : ''
        }
        <button
          className="btn-cancel"
          onClick={this.deleteResolution.bind(this)}>
          &times;
        </button>
      </li>
    )
  }
}

Resolution.propTypes = {
  resolution : PropTypes.object.isRequired
}
