var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "esri/widgets/Widget", "esri/core/accessorSupport/decorators", "esri/widgets/support/widget", "dojo/dom-class", "dojo/query", "chartjs", "./../utils/ChartData"], function (require, exports, Widget, decorators_1, widget_1, domClass, query, Chart, ChartData_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CSS = {
        base: 'esri-widget esri-component chart-tool',
        button: 'btn btn-block btn-primary',
        defaultText: 'chart-default-text',
        chart: 'chart-placeholder',
        hidden: 'hidden',
        show: 'show'
    };
    // Creation of the Chart Widget
    var ChartWidget = (function (_super) {
        __extends(ChartWidget, _super);
        function ChartWidget() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ChartWidget.prototype.postInitialize = function () {
            this.chartData = new ChartData_1.default(this.view);
            this.view.on('click', this._onViewClicked.bind(this));
        };
        ChartWidget.prototype.render = function () {
            return (widget_1.jsxFactory.createElement("div", { class: CSS.base },
                widget_1.jsxFactory.createElement("p", { class: CSS.defaultText + " " + CSS.show }, "Click on a feature to load the chart!"),
                widget_1.jsxFactory.createElement("canvas", { class: CSS.chart + " " + CSS.hidden, widget: "400", height: "400" })));
        };
        ChartWidget.prototype._onViewClicked = function (_a) {
            var _this = this;
            var x = _a.x, y = _a.y;
            this.view.hitTest({ x: x, y: y })
                .then(function (response) {
                var graphic = response.results[0].graphic;
                _this._createChart(graphic);
            });
        };
        ChartWidget.prototype._createChart = function (graphic) {
            var text = query("." + CSS.defaultText)[0];
            var canvas = query("." + CSS.chart)[0];
            var context = canvas.getContext('2d');
            domClass.replace(text, CSS.hidden, CSS.show);
            domClass.replace(canvas, CSS.show, CSS.hidden);
            this.chartData
                .getRelatedFeatureInfo(graphic)
                .then(function (data) {
                var chart = new Chart(context, {
                    type: 'line',
                    data: {
                        labels: data.map(function (d) { return d.date.getDate() + 1 + " - " + (d.date.getMonth() + 1) + " - " + d.date.getFullYear(); }),
                        datasets: [{
                                label: 'Neerslag in mm',
                                backgroundColor: 'rgba(64, 164, 223, 0.5)',
                                borderColor: 'rgba(64, 164, 223, 1)',
                                data: data.map(function (d) { return d.value; }),
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
        };
        return ChartWidget;
    }(decorators_1.declared(Widget)));
    __decorate([
        decorators_1.property()
    ], ChartWidget.prototype, "view", void 0);
    ChartWidget = __decorate([
        decorators_1.subclass('esri.widgets.Chart')
    ], ChartWidget);
    exports.default = ChartWidget;
});
//# sourceMappingURL=chart.js.map