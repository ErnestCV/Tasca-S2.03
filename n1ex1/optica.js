use('optica');

db.proveidors.insertOne(
	{
		"_id": 1,
		"nom": "Proveïdor 1",
		"adreca": {
			"carrer": "carrer1",
			"numero": "107A",
			"pis": "4",
			"porta": "C",
			"ciutat": "Barcelona",
			"codi postal": "08013",
			"pais": "Espanya"
		},
		"telefon": "666000666",
		"fax": "936754872",
		"nif": "12345678N"
	}
);

db.ulleres.insertOne(
	{
		"_id": 1,
		"marca": "Ray-Ban",
		"graduacio": {
			"ull_dret": 1.25,
			"ull_esquerre": 0.75
		},
		"tipus_montura": "pasta",
		"color_montura": "negre",
		"color_vidres": "negre",
		"preu": 239.99,
		"proveidor": 1,
		"venda": {
			"client": 1,
			"empleat": "Ernest Company"
		}
	}
);

db.clients.insertMany([
	{
		"_id": 1,
		"nom": "Laura Martí",
		"adreca": {
			"carrer": "carrer1",
			"numero": "105",
			"pis": "2",
			"porta": "A",
			"ciutat": "Barcelona",
			"codi postal": "08013",
			"pais": "Espanya"
		},
		"telefon": "665456766",
		"email": "test@test.com",
		"data_registre": new Date("2022-07-15T15:14:23Z"),
	},
	{
		"_id": 2,
		"nom": "Joan Puig",
		"adreca": {
			"carrer": "carrer2",
			"numero": "104",
			"pis": "3",
			"porta": "A",
			"ciutat": "Barcelona",
			"codi postal": "08013",
			"pais": "Espanya"
		},
		"telefon": "665456762",
		"email": "test2@test.com",
		"data_registre": new Date("2022-07-15T18:44:27Z"),
		"referral": 1
	}
]);
