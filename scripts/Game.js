define(function (require) {
    'use strict';

    var Scene = require('TNJRL/Scene');
    var Ramona = require('characters/Ramona');


    function Game (canvas) {

        this.canvas = canvas;

        this.scene = new Scene(canvas);

    }


    Game.prototype.start = function () {
        var ramona = new Ramona();
        this.scene.start();
        this.scene.add(ramona);
        return this;
    };


    return Game;
});
