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
            "orderDate": "06/02/2025",
            "product": [
              {
                "productName": "Evo One All-in-One Wireless Streaming Speaker",
                "productId": 858383,
                "sku": "0406654608",
                "image": "https://www.cambridgeaudio.com/sites/default/files/styles/responsive_3_2_1500w/public/media/images/Artboard%203.png.webp?h=df23a951&itok=dZvxTpet",
                "description": {
                    "colour": "Black",
                    "powerOutput": "14 x 50W into 4 Ohms",
                    "amplification": "Class-D"
                },
                "price": 41.99,
                "quantity": 1
              },
              {
                "productName": "Melomania M100",
                "productId": 858236,
                "sku": "0406634348",
                "image": "https://www.cambridgeaudio.com/sites/default/files/styles/responsive_1_1_1500w/public/media/images/2_M100.png.webp?h=e5565190&itok=W8uknh74",
                "description": {
                    "colour": "Black",
                    "size": "One size",
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
