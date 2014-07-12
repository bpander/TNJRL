define(function (require) {
    'use strict';


    function Eventable () {

        this.bindings = {};

    }


    Eventable.prototype.on = function (eventType, eventHandler) {
        var eventHandlers = this.bindings[eventType];
        if (eventHandlers === undefined) {
            eventHandlers = this.bindings[eventType] = [];
        }
        eventHandlers.push(eventHandler);

        return this;
    };


    Eventable.prototype.off = function (eventType, eventHandler) {
        var eventHandlers = this.bindings[eventType];
        var i = eventHandlers instanceof Array ? eventHandlers.length : 0;
        while (i-- !== 0) {
            if (eventHandlers[i] === eventHandler) {
                eventHandlers.splice(i, 1);
            }
        }
        if (eventHandlers.length === 0) {
            delete this.bindings[eventType];
        }

        return this;
    };


    Eventable.prototype.trigger = function (eventType) {
        var eventHandlers = this.bindings[eventType];
        if (eventHandlers instanceof Array) {
            eventHandlers.forEach(function (eventHandler) {
                eventHandler();
            });
        }

        return this;
    };


    return Eventable;
})