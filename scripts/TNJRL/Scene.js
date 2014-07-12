define(function (require) {
    'use strict';

    var GameObject = require('TNJRL/GameObject');


    function Scene (canvas) {

        this.canvas = canvas;

        this.context = canvas.getContext('2d');

        this.gameObjects = [];

        this.animationRequestId = -1;

        this.onRequestAnimationFrame = this.onRequestAnimationFrame.bind(this);
    }


    Scene.prototype.start = function () {
        this.updateAspectRatio();
        this.onRequestAnimationFrame();
    };


    Scene.prototype.updateAspectRatio = function () {
        this.canvas.width = this.canvas.clientWidth;
        this.canvas.height = this.canvas.clientHeight;
        return this;
    };


    Scene.prototype.onRequestAnimationFrame = function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.gameObjects.forEach(function (gameObject) {
            gameObject.update(this);
            gameObject.draw(this);
        }, this);
        this.animationRequestId = window.requestAnimationFrame(this.onRequestAnimationFrame);
    };


    Scene.prototype.add = function (gameObject) {
        if (gameObject instanceof GameObject) {
            this.gameObjects.push(gameObject);
        }
        return this;
    };


    Scene.prototype.remove = function (gameObject) {
        var index = this.gameObjects.indexOf(gameObject);
        if (index !== -1) {
            this.gameObjects.splice(index, 1);
        }
        return this;
    };


    return Scene;
});
