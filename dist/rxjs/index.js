"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const external_1 = require("./external");
external_1.name$.subscribe(value => console.log(value));
//storeDataOnServer("new value").subscribe(value => console.log(value));
// prior to rxjs7 style
external_1.storeDataOnServerError("new value").subscribe(value => console.log(value), error => console.log('Error when saving: ', error.message));
