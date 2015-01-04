'use strict';

describe('Main', function () {

  beforeEach(function () {
  });

  it('should create a new instance of PictureStreamApp in a container div', function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    require('../../../src/scripts/components/main.jsx');

    expect(document.getElementsByClassName('picture-container')).not.toBe(null);
  });
});
