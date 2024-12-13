exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*', // CORS support
    },
    body: JSON.stringify({
      "customer": {
        "customerName": "Joanna Kime",
        "customerEmail": "joanna.test@appamondo.com",
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
            "orderNumber": "R123456789",
            "orderStatus": "in depot",
            "product": [
              {
                "productName": "Green Day 21st Century Breakdown Vinyl",
                "productId": 858383,
                "sku": "0406654608",
                "image": "https://m.media-amazon.com/images/I/71pihsEluKL._UF1000,1000_QL80_.jpg",
                "description": {
                  "colour": "Orange",
                  "width": 300,
                  "height": 200,
                  "depth": 210,
                  "weight": 0.75
                },
                "price": 21.99,
                "quantity": 1
              },
              {
                "productName": "Barbie Fairytopia",
                "productId": 858236,
                "sku": "0406634348",
                "image": "https://m.media-amazon.com/images/I/A1DjEe2mNrL._AC_UF894,1000_QL80_.jpg",
                "description": {
                  "colour": "Pink",
                  "width": 300,
                  "height": 200,
                  "depth": 210,
                  "weight": 0.6
                },
                "price": 2.99,
                "quantity": 1
              }
            ]
          }
        ]
      }
    })
  };
}; 