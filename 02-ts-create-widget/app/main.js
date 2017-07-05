define(["require", "exports", "esri/Map", "esri/views/MapView", "esri/layers/TileLayer", "esri/layers/FeatureLayer", "esri/Basemap", "esri/geometry/Point", "./config/config", "./widgets/chart"], function (require, exports, Map, MapView, TileLayer, FeatureLayer, Basemap, Point, config_1, chart_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    config_1.basemapOptions.baseLayers = config_1.baseLayers.map(function (x) { return new TileLayer(x); });
    var basemap = new Basemap(config_1.basemapOptions);
    var map = new Map({
        basemap: basemap,
        layers: config_1.featureLayers.map(function (l) { return new FeatureLayer(l); })
    });
    config_1.mapViewOptions.map = map;
    config_1.mapViewOptions.center = new Point(config_1.startLocation);
    var view = new MapView(config_1.mapViewOptions);
    var widget = new chart_1.default({
        view: view
    });
    view.ui.add(widget, 'bottom-left');
});
//# sourceMappingURL=main.js.map