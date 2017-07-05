export const baseLayers = [{
    url: 'http://services.arcgisonline.nl/arcgis/rest/services/Basiskaarten/Donkergrijze_Canvas/MapServer'
}]

export const basemapOptions : any = {
    title: 'Topo RD',
    id: 'topo-rd'
}

export const mapViewOptions : any = {
    container: 'viewDiv',
    zoom: 14
}

export const startLocation = { 
    x: 135242, 
    y: 455922, 
    spatialReference: 28992 
}

export const featureLayers = [{
    url: 'https://services8.arcgis.com/31sIQNKWYVtjKJoO/arcgis/rest/services/SO_DAG/FeatureServer/0',
    id: 'my-measurepoint-layer',
    outFields: ['*']
}]

