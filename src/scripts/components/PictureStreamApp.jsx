/**
 * @jsx React.DOM
 */

'use strict';

var _ = require('underscore');
(window !== window.top ? window.top : window)._ = _;

var React = require('react/addons');
var ReactTransitionGroup = React.addons.TransitionGroup;

// Export React so the devtools can find it
(window !== window.top ? window.top : window).React = React;

// CSS
require('../../styles/normalize.css');
require('../../styles/main.css');

var imageURL = require('../../images/yeoman.png');

var PictureViewer = require('./PictureViewer.jsx')

var PictureStreamApp = React.createClass({

  render: function() {
    return (
      <div className='main'>
        <ReactTransitionGroup transitionName="fade">
          <RouteHandler/>
        </ReactTransitionGroup>
      </div>
    );
  }
});

module.exports = PictureStreamApp;
