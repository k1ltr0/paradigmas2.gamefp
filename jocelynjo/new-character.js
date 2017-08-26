const joHero = (map, x, y) => {
  const state = {
    map,
    x,
    y,
    width: map.tsize,
    height: map.tsize,
    name: 'jo jo jo',
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


hero.image = 'assets/bot.png';

const jo = (map, x, y) => joHero(map, x, y);
jo.image = 'jocelynjo/jj.png';




