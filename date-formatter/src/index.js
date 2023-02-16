"use strict";
exports.__esModule = true;
var date_format_1 = require("./function/date-format");
var date = new Date(1478708162000);
var module = new date_format_1.Module(date);
console.log(module.getUpdatedTime());
