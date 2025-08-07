exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*', // CORS support
    },
    body: JSON.stringify({
      "customer": {
        "customerName": "Louise Crosby",
        "customerEmail": "louise.crosby@appamondo.com",
        "customerPhone": "+44 9485 472 128",
        "billingAddress": {
          "street": "47 Park Lane",
          "city": "London",
          "postCode": "LND 4A2",
          "country": "United Kingdom"
        },
        "shippingAddress": {
          "street": "47 Park Lane",
          "city": "London",
          "postCode": "LND 4A2",
          "country": "United Kingdom"
        },
        "oysterCard": [
          {
            "cardId": "123456789",
            "recentTravel": [
              {
                "line": "Red",
                "startDestination": "West Acton",
                "endDestination": "Lancaster Gate",
                "price": "£2.78",
                "image": "https://upload.wikimedia.org/wikipedia/commons/9/95/LUL-S-Stock-arrives-Croxley.jpg",
                "buttonLink": "https://www.thetrainline.com/"
              },
              {
                "line": "Blue",
                "startDestination": "West Acton",
                "endDestination": "Lancaster Gate",
                "price": "£1.20",
                "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.mobility.siemens.com%2Fglobal%2Fen%2Fportfolio%2Freferences%2Fmetro-london.html&psig=AOvVaw0xbDvDYpfAyO1nfgpOleT9&ust=1754641463319000&source=images&cd=vfe&opi=89978449&ved=0CBYQjRxqFwoTCKj50Pui-I4DFQAAAAAdAAAAABAE",
                "buttonLink": "https://www.thetrainline.com/"
              },
              {
                "line": "Green",
                "startDestination": "West Acton",
                "endDestination": "Lancaster Gate",
                "price": "£3.40",
                "image": "https://upload.wikimedia.org/wikipedia/commons/d/da/Class_377s_at_London_Victoria_platforms_18_%26_19.jpg",
                "buttonLink": "https://www.thetrainline.com/"
              }
            ]
          }
        ]
      }
    })
  };
}; 
