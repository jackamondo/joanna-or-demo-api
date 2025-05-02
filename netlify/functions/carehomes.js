exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*', // CORS support
    },
    body: JSON.stringify({
      {
	"uk": [
	{
		"region": "northEast",
		"location": [
		{
			"city": "Newcastle",
			"areaCode": "NE1",
			"homes": [
			{
				"name": "carehome1",
				"postcode": "postcode",
				"image": "url",
				"careType": "dementia"
			},
			{
				"name": "carehome2",
				"postcode": "postcode",
				"image": "url",
				"careType": "dementia"
			},
			{
				"name": "carehome3",
				"postcode": "postcode",
				"image": "url",
				"careType": "dementia"
			}
			]
		},
		{
			"city": "Hartlepool",
			"areaCode": "TS27",
			"homes": [
			{
				"name": "carehome1",
				"postcode": "postcode",
				"image": "url",
				"careType": "dementia"
			},
			{
				"name": "carehome2",
				"postcode": "postcode",
				"image": "url",
				"careType": "dementia"
			},
			{
				"name": "carehome3",
				"postcode": "postcode",
				"image": "url",
				"careType": "dementia"
			}
			]
		},
		{
			"city": "Sunderland",
			"areaCode": "SR1",
			"homes": [
			{
				"name": "carehome1",
				"postcode": "postcode",
				"image": "url",
				"careType": "dementia"
			},
			{
				"name": "carehome2",
				"postcode": "postcode",
				"image": "url",
				"careType": "dementia"
			},
			{
				"name": "carehome3",
				"postcode": "postcode",
				"image": "url",
				"careType": "dementia"
			}
			]
		}
		]
	}
	]
	}
    })
  };
}; 
