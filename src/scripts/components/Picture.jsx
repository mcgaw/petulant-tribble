/**
 * @jsx React.DOM
 */

'use strict';

var React  = require('react');

var Picture = React.createClass({
  getInitialState: function() {
    return {};
  },
  
  componentDidMount : function() {
  },

  render: function() {
    return (
      <img classList="picture" ref="picture" src="{props.url}"></img>
      )
  }
})

module.exports = Picture;