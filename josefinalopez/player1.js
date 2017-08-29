const biciJose = (map, x, y) => {
  const state = {
    map,
    x,
    y,
    width: map.tsize,
    height: map.tsize,
    name: 'un personaje',
    voice: 'Diego',
    speed: 256
  };

  return Object.assign({}, speaker(state), mover(state), {
    width: () => state.width,
    height: () => state.height,
    x: () => state.x,
    y: () => state.y,
    image: Loader.getImage('hero'),
  });
};


var bicijose2 = (map, x, y) => biciJose(map, x, y)


biciJose.image = 'josefinalopez/bici.png';


