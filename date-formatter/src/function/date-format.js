"use strict";
exports.__esModule = true;
exports.Module = void 0;
var Module = /** @class */ (function () {
    function Module(lastUpdated) {
        this.lastUpdated = lastUpdated;
    }
    Module.prototype.getUpdatedTime = function () {
        var options = {
            day: "numeric", month: "numeric", year: "numeric"
        };
        return this.lastUpdated.toLocaleDateString();
    };
    return Module;
}());
exports.Module = Module;
