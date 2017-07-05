import Graphic = require('esri/Graphic');
import MapView = require('esri/views/MapView');
import FeatureLayer = require('esri/layers/FeatureLayer');
import RelationshipQuery = require('esri/tasks/support/RelationshipQuery');
import QueryTask = require('esri/tasks/QueryTask');
import FeatureSet = require('esri/tasks/support/FeatureSet');

interface Data {
    date: Date;
    value: number;
}

export default class ChartData {
    view: MapView;

    constructor(view: MapView) {
        this.view = view;
    }

    public getRelatedFeatureInfo(graphic: Graphic) {
        const layer = this.view.map.findLayerById('my-measurepoint-layer') as FeatureLayer;

        const queryTask = new QueryTask({
            url: `${layer.url}/${layer.layerId}`
        });

        const query = new RelationshipQuery();
        query.relationshipId = 0;
        query.definitionExpression = `PARENTID = '${graphic.attributes['GlobalID']}'`
        query.outFields = ['*'];

        return queryTask
            .executeRelationshipQuery(query)
            .then((results) => {
                const featureSet = results[graphic.attributes['OBJECTID']] as FeatureSet;
                const dataSet : Array<Data> = [];

                featureSet.features.forEach(feature => {
                    dataSet.push({
                        date: new Date(feature.attributes['DATE']),
                        value: feature.attributes['VALUE']
                    })
                });

                return dataSet;
            })
    }
}