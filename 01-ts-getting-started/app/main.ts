import Map = require('esri/Map');
import MapView = require('esri/views/MapView');

const map = new Map({
    basemap: 'streets'
});

const view = new MapView({
    map, //property shorthand notation
    container: 'viewDiv',
    center: [5.12, 52.09],
    zoom: 14
});






















