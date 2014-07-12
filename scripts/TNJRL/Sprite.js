define(function (require) {
    'use strict';

    var GameObject = require('TNJRL/GameObject');


    function Sprite () {
        GameObject.call(this);

        this.imagePath = '';

        this.image = document.createElement('img');

        this.width = 0;

        this.height = 0;

        this.frameIndex = 0;

        this.frames = [ new Frame() ];

        this.onImageLoad = this.onImageLoad.bind(this);

        this.init();
    }
    Sprite.prototype = Object.create(GameObject.prototype);
    Sprite.prototype.constructor = Sprite;


    Sprite.prototype.init = function () {
        this.image.addEventListener('load', this.onImageLoad);
        this.image.src = this.imagePath;
        return this;
    };


    Sprite.prototype.onImageLoad = function () {
        this.updateFrames();
    };


    Sprite.prototype.updateFrames = function () {
        var framesWide = Math.floor(this.image.width / this.width);
        var framesHigh = Math.floor(this.image.height / this.height);
        var i = 0;
        var j;
        this.frameIndex = 0;
        this.frames = [];
        for (; i !== framesHigh; i++) {
            for (j = 0; j !== framesWide; j++) {
                this.frames.push(new Frame(j * this.width, i * this.height));
            }
        }
        return this;
    };


    Sprite.prototype.update = function () {
        this.frameIndex = (this.frameIndex + 1) % this.frames.length;
    };


    Sprite.prototype.draw = function (scene) {
        scene.context.drawImage(
            this.image,
            this.frames[this.frameIndex].x,
            this.frames[this.frameIndex].y,
            this.width,
            this.height,
            this.x,
            this.y,
            this.width,
            this.height
        );
    };


    function Frame (x, y) {

        this.x = x || 0;

        this.y = y || 0;

    }


    return Sprite;
});
