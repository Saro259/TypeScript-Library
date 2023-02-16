

import { Module } from "./function/date-format";
let date = new Date(1478708162000);
let module = new Module(date);
console.log(module.getUpdatedTime());

