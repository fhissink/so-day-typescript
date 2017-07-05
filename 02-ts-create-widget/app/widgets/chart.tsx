// Import the modules
// esri
import Widget = require('esri/widgets/Widget');
import MapView = require('esri/views/MapView');
import { subclass, declared, property } from 'esri/core/accessorSupport/decorators';
import { renderable, jsxFactory } from 'esri/widgets/support/widget';

//dojo
import domClass = require('dojo/dom-class');
import query = require('dojo/query');

import Chart = require('chartjs');
import ChartData from './../utils/ChartData';

const CSS = {
  base: 'esri-widget esri-component chart-tool',
  button: 'btn btn-block btn-primary',
  defaultText: 'chart-default-text',
  chart: 'chart-placeholder',
  hidden: 'hidden',
  show: 'show'
};

// Creation of the Chart Widget
@subclass('esri.widgets.Chart')
export default class ChartWidget extends declared(Widget) {
  @property()
  view: MapView;

  chartData: ChartData;

  postInitialize() {
    this.chartData = new ChartData(this.view);

    this.view.on('click', this._onViewClicked.bind(this));
  }

  render() {
    return (
      <div class={CSS.base}>
        <p class={`${CSS.defaultText} ${CSS.show}`}>Click on a feature to load the chart!</p>
        <canvas class={`${CSS.chart} ${CSS.hidden}`} widget="400" height="400"></canvas>
      </div>
    );
  }

  private _onViewClicked({ x, y }) {
    this.view.hitTest({ x, y })
      .then(response => {
        const graphic = response.results[0].graphic;
        this._createChart(graphic);
      });
  }

  private _createChart(graphic) {
    const text = query(`.${CSS.defaultText}`)[0];
    const canvas = query(`.${CSS.chart}`)[0] as HTMLCanvasElement;
    const context = canvas.getContext('2d');

    domClass.replace(text, CSS.hidden, CSS.show);
    domClass.replace(canvas, CSS.show, CSS.hidden);

    this.chartData
      .getRelatedFeatureInfo(graphic)
      .then(data => {
        const chart = new Chart(context, {
          type: 'line',
          data: {
            labels: data.map(d => `${d.date.getDate() + 1} - ${d.date.getMonth() + 1} - ${d.date.getFullYear()}`),
            datasets: [{
              label: 'Neerslag in mm',
              backgroundColor: 'rgba(64, 164, 223, 0.5)',
              borderColor: 'rgba(64, 164, 223, 1)',
              data: data.map(d => d.value),
              fill: true
            }]
          },
          options: {
            title: {
              display: true,
              text: 'Neerslag weergave'
            }
          }
        });
      });

  }
}