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
                "price": "£2.78"
              }
            ]
          }
        ]
      }
    })
  };
}; 
