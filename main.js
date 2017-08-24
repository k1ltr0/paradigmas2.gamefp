'use strict';


window.addEventListener('load', function () {

  var game = new Game([
    new ExampleMap1(),
    new ExampleMap2()
  ], [
    //KnightHero
    //Hero,
    knight,
    tree,
    fire
    //hero
  ]);

  game.appendTo(document.body);
  game.run();

});
