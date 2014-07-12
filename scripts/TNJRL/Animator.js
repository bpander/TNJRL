define(function (require) {
    'use strict';

    var Q = require('Q');


    function Animator (object, property, initial, final, duration, easing) {

        this.object = object;

        this.property = property;

        this.initial = initial;

        this.final = final;

        this.duration = duration || 10;

        this.easing = easing || Animator.EASING.DEFAULT;

        this.currentFrame = 0;

        this.doesRepeat = false;

        this.deferred = null;

        this.onObjectUpdate = this.onObjectUpdate.bind(this);

    }


    Animator.EASING = {
        DEFAULT: function (progress, initial, final) {
            return progress * (final - initial + 1);
        },
        STEP: function (progress, initial, final) {
            return Math.floor(progress * (final - initial + 1));
        }
    };


    Animator.prototype.playOnce = function () {
        this.deferred = Q.defer();
        this.object[this.property] = this.initial;
        this.object.on('update', this.onObjectUpdate);
        return this.deferred.promise;
    };


    Animator.prototype.repeat = function () {
        this.doesRepeat = true;
        this.playOnce();
        return this;
    };


    Animator.prototype.stop = function () {
        this.doesRepeat = false;
        this.object.off('update', this.onObjectUpdate);
        this.object[this.property] = this.initial;
        this.deferred.resolve();
        this.currentFrame = 0;
        return this;
    };


    Animator.prototype.onObjectUpdate = function () {
        if (this.currentFrame === this.duration) {
            if (this.doesRepeat) {
                this.currentFrame = 0;
            } else {
                this.stop();
                return;
            }
        }
        var progress = this.currentFrame / this.duration;
        this.object[this.property] = this.easing(progress, this.initial, this.final);
        this.currentFrame++;
    };


    return Animator;
});
