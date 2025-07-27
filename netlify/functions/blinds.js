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
        "customerEmail": "louise.crosby@gamil.com",
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
            "orderStatus": "processing",
            "orderDate": "26/07/2025",
            "orderType": "Bespoke",
            "product": [
              {
                "productName": "Cecelia Orchid Roller Blind",
                "productId": 858383,
                "sku": "0406654608",
                "image": "https://www.247blinds.co.uk/media/catalog/product/r/o/roller_blind_cecelia_blackout_orchid_list_1.jpg?ds=202507",
                "dimensions": "120 x 90 cm",
                "price": 78.92,
                "quantity": 1
              },
              {
                "productName": "Trinity (Blackout) Baby Blue Electric Blackout Blind",
                "productId": 858236,
                "sku": "0406634348",
                "image": "https://www.247blinds.co.uk/media/catalog/product/m/o/motorised_roller_blind_trinity_blackout_baby_blue_list_5.jpg?ds=202507",
                "dimensions": "140 x 110 cm",
                "price": 170.99,
                "quantity": 1
              }
            ]
          }
        ]
      }
    })
  };
}; 
