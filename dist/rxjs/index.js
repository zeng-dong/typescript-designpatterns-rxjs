"use strict";
exports.__esModule = true;
var external_1 = require("./external");
external_1.name$.subscribe(function (value) { return console.log(value); });
//storeDataOnServer("new value").subscribe(value => console.log(value));
// prior to rxjs7 style
external_1.storeDataOnServerError("new value").subscribe(function (value) { return console.log(value); }, function (error) { return console.log('Error when saving: ', error.message); });
