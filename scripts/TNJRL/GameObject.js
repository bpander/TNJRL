define(function (require) {
    'use strict';

    var Util = require('TNJRL/Util');


    function GameObject () {

        this.x = 0;

        this.y = 0;

    }


    GameObject.prototype.update = Util.noop;


    GameObject.prototype.draw = Util.noop;


    return GameObject;
});
