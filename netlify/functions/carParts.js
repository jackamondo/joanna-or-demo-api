exports.handler = async (event, context) => {
	return {
		statusCode: 200,
		headers: {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*', // CORS support
		},
		body: JSON.stringify(
			{
				"carDetails": {
					"licencePlate": "SN63 KUU",
					"car": "Hyundia X20",
					"variant": "MK1 (JC) 2010 MPV",
					"engine": "1591ccm 123HP 92KW (Petrol)"
				},
				"wiperTypes": [
					{
						"compatabilityStatus": "Compatible",
						"type": "Flat Blade",
						"compatibleCars": [
							{
								"make": "Ford",
								"model": "Focus",
								"yearRange": "2011–2018"
							},
							{
								"make": "Volkswagen",
								"model": "Golf",
								"yearRange": "2013–2019"
							},
							{
								"make": "Audi",
								"model": "A3",
								"yearRange": "2010–2016"
							}
						],
						"wiperDetails": [
							{
								"wiperName": "Bosch 3397014354 2x Wiper Blades (Pair) Flat / Aero type",
								"wiperImage": "https://media.partsinmotion.co.uk/images/v1/5179197.width-660.res-70.jpg",
								"wiperLink": "https://www.partsinmotion.co.uk/car-parts/wash-wipe/wiper-arms-blades/bosch2xwiperbladespairflataerotype3397014354-detail"
							},
							{
								"wiperName": "Valeo VF481 2x Wiper Blades (Pair) Flat / Aero type",
								"wiperImage": "https://media.partsinmotion.co.uk/images/v1/5443385.width-660.res-70.jpg",
								"wiperLink": "https://www.partsinmotion.co.uk/car-parts/wash-wipe/wiper-arms-blades/valeo2xwiperbladespairflataerotypefrontvf481-detail"
							},
							{
								"wiperName": "Quinton Hazell QDW131 2x Wiper Blades (Pair) Flat / Aero type",
								"wiperImage": "https://media.partsinmotion.co.uk/images/v1/5387967.width-660.res-70.jpg",
								"wiperLink": "https://www.partsinmotion.co.uk/car-parts/wash-wipe/wiper-arms-blades/quinton-hazell-wiper-blade-qdw131-detail"
							}
						]
					},
					{
						"type": "Traditional Frame",
						"compatibleCars": [
							{
								"make": "Toyota",
								"model": "Corolla",
								"yearRange": "2005–2012"
							},
							{
								"make": "Honda",
								"model": "Civic",
								"yearRange": "2001–2008"
							},
							{
								"make": "Mazda",
								"model": "3",
								"yearRange": "2004–2009"
							}
						]
					},
					{
						"type": "Hybrid Blade",
						"compatibleCars": [
							{
								"make": "BMW",
								"model": "3 Series",
								"yearRange": "2012–2018"
							},
							{
								"make": "Mercedes-Benz",
								"model": "C-Class",
								"yearRange": "2014–2020"
							},
							{
								"make": "Lexus",
								"model": "IS",
								"yearRange": "2013–2019"
							}
						]
					}
				]
			}
		)
	};
};
