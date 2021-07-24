"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storeDataOnServerError = exports.storeDataOnServer = exports.name$ = void 0;
const rxjs_1 = require("rxjs");
exports.name$ = rxjs_1.of('Alice', 'Ben', 'Charlie');
function storeDataOnServer(data) {
    return new rxjs_1.Observable(subscriber => {
        setTimeout(() => {
            subscriber.next(`Saved successfully: ${data}`);
            subscriber.complete();
        }, 5000);
    });
}
exports.storeDataOnServer = storeDataOnServer;
function storeDataOnServerError(data) {
    return new rxjs_1.Observable(subscriber => {
        setTimeout(() => {
            subscriber.error(new Error('Failure!'));
        }, 5000);
    });
}
exports.storeDataOnServerError = storeDataOnServerError;
