// dojo
import declare = require('dojo/_base/declare');
import domConstruct = require('dojo/dom-construct');
import on = require('dojo/on');

//esri
import Map = require('esri/map');

// jimu
import BaseWidget = require('jimu/BaseWidget');

interface IWidget {
  baseClass: string;
  map: Map;
  config: any;
  nls: any;
  inherited: (args: Object) => void;
  postCreate: () => void;
  startup: () => void;
}

class Widget implements IWidget {
    inherited: (args: Object) => void;

    baseClass: string = 'typescript-widget';

    map: Map;

    config: any;

    nls: any;

    public postCreate(): void {
        this.inherited(arguments);
    }

    public startup(): void {
        this.inherited(arguments);
    }
}

export = declare([BaseWidget], new Widget());