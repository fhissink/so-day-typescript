define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.baseLayers = [{
            url: 'http://services.arcgisonline.nl/arcgis/rest/services/Basiskaarten/Donkergrijze_Canvas/MapServer'
        }];
    exports.basemapOptions = {
        title: 'Topo RD',
        id: 'topo-rd'
    };
    exports.mapViewOptions = {
        container: 'viewDiv',
        zoom: 14
    };
    exports.startLocation = {
        x: 135242,
        y: 455922,
        spatialReference: 28992
    };
    exports.featureLayers = [{
            url: 'https://services8.arcgis.com/31sIQNKWYVtjKJoO/arcgis/rest/services/SO_DAG/FeatureServer/0',
            id: 'my-measurepoint-layer',
            outFields: ['*']
        }];
});
//# sourceMappingURL=config.js.map