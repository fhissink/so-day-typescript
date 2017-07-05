define(["require", "exports", "esri/Map", "esri/views/MapView"], function (require, exports, Map, MapView) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    debugger;
    var map = new Map({
        basemap: 'streets'
    });
    var view = new MapView({
        map: map,
        container: 'viewDiv',
        center: [5.12, 52.09],
        zoom: 14
    });
});
//# sourceMappingURL=main.js.map