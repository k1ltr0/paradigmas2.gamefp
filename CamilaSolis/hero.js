const camiHero = (map, x, y) => {
  const state = {
    map,
    x,
    y,
    width: map.tsize,
    height: map.tsize,
    name: 'Camila',
    voice: 'Camila',
    speed: 256
  };

  return Object.assign({}, speaker(state), mover(state), {
    width: () => state.width,
    height: () => state.height,
    x: () => state.x,
    y: () => state.y,
    image: Loader.getImage('hero'),
  });
}

const cami = (map, x, y) => camiHero(map, x, y);
cami.image = 'CamilaSolis/hero.png'
//camiHero.image = 'CamilaSolis/hero.png';