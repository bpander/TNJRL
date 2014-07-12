define(function (require) {
    'use strict';

    var Util = require('TNJRL/Util');
    var Eventable = require('TNJRL/Eventable');


    function GameObject () {
        Eventable.call(this);

        this.x = 0;

        this.y = 0;

    }
    GameObject.prototype = Object.create(Eventable.prototype);
    GameObject.prototype.constructor = GameObject;


    GameObject.prototype.update = function (scene) {
        this.trigger('update');
    };


    GameObject.prototype.draw = Util.noop;


    return GameObject;
});
