const belen = (map, x, y) => {

	console.log(hero(map, x, y));	 
	var h = hero(map, x, y); // Objeto
	h.say();
	h.name('Belen');
	h.voice('Diego');
	

  	return Object.assign({},h);
};

belen.image = 'brecabal/seba1.png';
