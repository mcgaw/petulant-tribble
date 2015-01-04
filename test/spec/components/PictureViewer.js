'use strict';

var React = require('react/addons');
var ReactTestUtils = React.addons.TestUtils;
var rewire = require('rewire');

describe('picture viewer tests', function() {

	var Picture = require('../../../src/scripts/components/Picture.jsx');
	var PictureViewer = require('../../../src/scripts/components/PictureViewer.jsx');
	var Actions = require('../../../src/scripts/actions.js');
	var container = document.createElement('div');

	beforeEach(function () {
		jasmine.Clock.useMock();
  	});

  	afterEach(function() {
  	})

	it('shows the empty list of images', function() {

		var rendered = React.renderComponent(PictureViewer(), container);

		expect(rendered.refs.pictureViewer).not.toBe(null);

		React.unmountComponentAtNode(container);
	});



	it('adds shows the image added to the state', function() {

		var rendered = React.renderComponent(PictureViewer(), container);

		rendered.setState({pictures: [{url: '/pictures/1.jpg'}, {url: '/pictures/2.jpg'}]	});

		expect(ReactTestUtils.scryRenderedComponentsWithType(rendered, Picture).length).toBe(2);	

		React.unmountComponentAtNode(container);
	});


	it('registers with the PictureStore', function() {

		var spyPictureStore = jasmine.createSpyObj('PictureStore', ['listen']);
		var rewiredPictureViewer = rewire('../../../src/scripts/components/PictureViewer.jsx');

		rewiredPictureViewer.__set__("PictureStore", spyPictureStore)

		var rendered = React.renderComponent(rewiredPictureViewer(), container);

		expect(spyPictureStore.listen).toHaveBeenCalled();

		React.unmountComponentAtNode(container);
	});

	
	it('reacts to changes in the picture store', function() {
		var rendered = React.renderComponent(PictureViewer(), container);

		Actions.newPicturesAvailable([{url: '/pictures/new1.jpg'}, {url: '/pictures/new2.jpg'}]);

		// setTimeout is used in the reflux library
		jasmine.Clock.tick(1000);

		expect(ReactTestUtils.scryRenderedComponentsWithType(rendered, Picture).length).toBe(2);
	});


});

