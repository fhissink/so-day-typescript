// esri
import Widget = require('esri/widgets/Widget');
import MapView = require('esri/views/MapView');
import { subclass, declared, property } from 'esri/core/accessorSupport/decorators';
import { renderable, jsxFactory } from 'esri/widgets/support/widget';

// TODO: import chartjs library
// rename node_modules/chart.js to node_modules/chartjs to make this work

const CSS = {
  base: 'esri-widget esri-component chart-tool',
  chart: 'chart-placeholder'
};

// Creation of the Chart Widget
@subclass('esri.widgets.Chart')
export default class ChartWidget extends declared(Widget) {
  @property()
  view: MapView;

  postInitialize() {
    // bind to view click event and call the _onViewClicked function
  }

  render() {
    return (
      <div class={CSS.base}>
        <canvas class={`${CSS.chart}`} widget="400" height="400"></canvas>
      </div>
    );
  }

  private _onViewClicked({ x, y }) {
    // execute a hittest to get the feature that has been clicked
    
    // after that call the _createChart function 
  }

  private _createChart(graphic) {    
    // call the _getRelatedFeatureInfo function to get the related features

    // get the '2d' context from the canvas.

    // Create a chart from the related features
  }

  private _getRelatedFeatureInfo() {
      // execute a relationship query

      // return the relevant information so that it can be displayed in a chart
  }
}