define(["require", "exports", "dojo/_base/declare", "jimu/BaseWidget"], function (require, exports, declare, BaseWidget) {
    var Widget = (function () {
        function Widget() {
            this.baseClass = 'typescript-widget';
        }
        Widget.prototype.postCreate = function () {
            this.inherited(arguments);
        };
        Widget.prototype.startup = function () {
            this.inherited(arguments);
        };
        return Widget;
    }());
    return declare([BaseWidget], new Widget());
});
//# sourceMappingURL=Widget.js.map