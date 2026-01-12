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
                    "orderStatus": "delayed",
                    "product": [
                        {
                            "productName": "Pink Jumper",
                            "productId": 858383,
                            "sku": "0406654608",
                            "image": "https://testamondo1732886182.zendesk.com/hc/theming_assets/01K5E0Z4XNZXM4YQFEFEYBA9WQ",
                            "colour": "Pink",
                            "size": "Womens uk 8",
                            "weight": 7.5,
                            "price": 25.99,
                            "quantity": 1
                        },
                        {
                            "productName": "Blue jeans",
                            "productId": 858236,
                            "sku": "0406634348",
                            "image": "https://testamondo1732886182.zendesk.com/hc/theming_assets/01K5E11A3MA76QHQVBYR6YA3AG",
                            "colour": "Blue",
                            "size": "Womens uk 8",
                            "weight": 0.6,
                            "price": 35.99,
                            "quantity": 1
                        }
                    ]
                }
            ]
      }
    })
  };
};
