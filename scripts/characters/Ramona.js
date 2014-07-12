define(function (require) {
    'use strict';

    var Sprite = require('TNJRL/Sprite');


    function Ramona () {
        Sprite.call(this);

        this.imagePath = 'images/sprite_ramona.png';

        this.width = 72;

        this.height = 97;

        this.init();
    }
    Ramona.prototype = Object.create(Sprite.prototype);
    Ramona.prototype.constructor = Ramona;


    return Ramona;
});
