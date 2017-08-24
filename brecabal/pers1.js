const sebastian = (map, x, y) => {

	console.log(hero(map, x, y));	 
	var h = hero(map, x, y); // Objeto
	h.say();
	h.name('Sebastian');
	h.voice('Diego');
	

  	return Object.assign({},h);
};

sebastian.image = 'brecabal/seba.png';
