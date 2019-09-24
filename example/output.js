'use strict';

function compass(attrs) {
  var node = (new DOMParser().parseFromString("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\n    <path d=\"M12 10.9c-.61 0-1.1.49-1.1 1.1s.49 1.1 1.1 1.1c.61 0 1.1-.49 1.1-1.1s-.49-1.1-1.1-1.1zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm2.19 12.19L6 18l3.81-8.19L18 6l-3.81 8.19z\"/>\n    <path d=\"M0 0h24v24H0z\" fill=\"none\"/>\n</svg>", 'text/xml')).firstChild;
  if (attrs) {
    Object.keys(attrs).forEach(function(key) {
      node.setAttribute(key, attrs[key]);
    });
  }
  return node;
}

function star(attrs) {
  var node = (new DOMParser().parseFromString("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\n    <path d=\"M0 0h24v24H0z\" fill=\"none\"/>\n    <path d=\"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z\"/>\n    <path d=\"M0 0h24v24H0z\" fill=\"none\"/>\n</svg>", 'text/xml')).firstChild;
  if (attrs) {
    Object.keys(attrs).forEach(function(key) {
      node.setAttribute(key, attrs[key]);
    });
  }
  return node;
}

document.body.appendChild(compass());

document.body.appendChild(compass({
  fill: '#2196f3'
}));

document.body.appendChild(star({
  fill: '#e91e63'
}));

document.body.appendChild(star({
  fill: '#9c27b0'
}));
