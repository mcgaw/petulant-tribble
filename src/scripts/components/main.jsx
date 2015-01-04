/** @jsx React.DOM */


var PictureStreamApp = require('./PictureStreamApp.jsx');
var React = require('react');
var Router = 	require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var Routes = Router.Routes; 
var RouteHandler = Router.RouteHandler;


React.renderComponent((
	<Routes location="history">
    <Route path="/" handler={PictureStreamApp}>
    
    </Route>
	</Routes>

), document.getElementById('content'));

	