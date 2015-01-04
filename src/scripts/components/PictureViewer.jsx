/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
var PictureStore = require('../stores/PictureStore.js');
var Picture = require('./Picture.jsx');


var _ = require('underscore');

var  PictureViewer = React.createClass({

  displayName: 'Picture Viewer',

  getInitialState: function() {
    return {pictures: []};
  },

  setInitialState: function(pictures) {
    this.setState({pictures: pictures});
  },

  pictureListUpdated: function(pictures) {
    if (this.isMounted()) {
      this.setState({pictures: pictures});
    }
  },

  componentDidMount: function() {
      this.unsubscribe = PictureStore.listen( this.pictureListUpdated );
  },

  componentWillUnmount: function() {
    //TO-DO find why this is required
    if (this.unsubscribe) this.unsubscribe;
  },

  render: function() {
    var pictureElements = this.state.pictures.map(function (picture) {
      return (
        <Picture key={picture.url} url={picture.url}></Picture>
      );
    });
    return (<div id="pictureViewer" ref="pictureViewer" classList="picture-container">{pictureElements}</div>);
  }
})


module.exports = PictureViewer;
