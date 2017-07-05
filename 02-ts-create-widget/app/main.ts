import Map = require('esri/Map');
import MapView = require('esri/views/MapView');
import TileLayer = require('esri/layers/TileLayer');
import FeatureLayer = require('esri/layers/FeatureLayer');
import Basemap = require('esri/Basemap');
import Point = require('esri/geometry/Point');

import { mapViewOptions, baseLayers, basemapOptions, startLocation, featureLayers } from './config/config';
import Chart from './widgets/chart';

basemapOptions.baseLayers = baseLayers.map(x => new TileLayer(x));
const basemap = new Basemap(basemapOptions);

const map = new Map({ 
    basemap,
    layers: featureLayers.map(l => new FeatureLayer(l))
});

mapViewOptions.map = map;
mapViewOptions.center = new Point(startLocation);

const view = new MapView(mapViewOptions);

const widget = new Chart(<any>{
    view
});
view.ui.add(widget, 'bottom-left');

