require([
    'Game'
], function (
    Game
) {
    'use strict';

    var canvas = document.getElementById('js-tnjrl');

    window.game = new Game(canvas);
    window.game.start();
});
