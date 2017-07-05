define(["require", "exports", "esri/tasks/support/RelationshipQuery", "esri/tasks/QueryTask"], function (require, exports, RelationshipQuery, QueryTask) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ChartData = (function () {
        function ChartData(view) {
            this.view = view;
        }
        ChartData.prototype.getRelatedFeatureInfo = function (graphic) {
            var layer = this.view.map.findLayerById('my-measurepoint-layer');
            var queryTask = new QueryTask({
                url: layer.url + "/" + layer.layerId
            });
            var query = new RelationshipQuery();
            query.relationshipId = 0;
            query.definitionExpression = "PARENTID = '" + graphic.attributes['GlobalID'] + "'";
            query.outFields = ['*'];
            return queryTask
                .executeRelationshipQuery(query)
                .then(function (results) {
                var featureSet = results[graphic.attributes['OBJECTID']];
                var dataSet = [];
                featureSet.features.forEach(function (feature) {
                    dataSet.push({
                        date: new Date(feature.attributes['DATE']),
                        value: feature.attributes['VALUE']
                    });
                });
                return dataSet;
            });
        };
        return ChartData;
    }());
    exports.default = ChartData;
});
//# sourceMappingURL=ChartData.js.map