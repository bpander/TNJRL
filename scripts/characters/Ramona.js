define(function (require) {
    'use strict';

    var Sprite = require('TNJRL/Sprite');
    var Animator = require('TNJRL/Animator');


    function Ramona () {
        Sprite.call(this);

        this.imagePath = 'images/sprite_ramona.png';

        this.width = 72;

        this.height = 97;

        this.walkAnimator = new Animator(this, 'frameIndex', 0, 9, 20, Animator.EASING.STEP);

        this.init();
    }
    Ramona.prototype = Object.create(Sprite.prototype);
    Ramona.prototype.constructor = Ramona;


    return Ramona;
});
