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
        "order": [
          {
            "orderNumber": "123456789",
            "orderStatus": "in depot",
            "product": [
              {
                "productName": "Blue Cardigain",
                "productId": 858383,
                "sku": "0406654608",
                "image": "https://i.pinimg.com/736x/50/d6/39/50d63995547de388a983be0511c27025.jpg",
                "description": {
                    "colour": "blue",
                    "size": womens uk 8,
                    "weight": 7.5
                },
                "price": 41.99,
                "quantity": 1
              },
              {
                "productName": "Colourful Necklace",
                "productId": 858236,
                "sku": "0406634348",
                "image": "https://i.pinimg.com/736x/22/3e/67/223e67bf354c2dac8ab3fcc4021d9f8f.jpg",
                "description": {
                    "colour": "Mixed",
                    "size": One size,
                    "weight": 0.6
                },
                "price": 21.99,
                "quantity": 1
              }
            ]
          }
        ]
      }
    })
  };
}; 
