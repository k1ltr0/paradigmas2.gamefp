const gloria = (map, x, y) => {
	const h = hero(map, x, y);
	h.say();
	h.voice();
	h.name();
	//alert("llega")
	return Object.assign({}, h)
}
gloria.image = 'marciamillanao/characters/gloria.png';