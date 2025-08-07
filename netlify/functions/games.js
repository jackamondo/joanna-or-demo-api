exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*', // CORS support
    },
    body: JSON.stringify({
      "customer": {
        "customerName": "Liv ",
        "customerEmail": "liv@appamondo.co.uk",
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
                "productName": "Mario Kart Wii",
                "productId": 858383,
                "sku": "0406654608",
                "image": "https://play-lh.googleusercontent.com/Nhdcc77MHYfXR9LoVhhkpnKbhwpZpCLKfl8dUwVhyqgflBQ5ROBtLsn_2fIongMYeoo6=s256-rw",
                "price": 15.00,
                "quantity": 1
              },
              {
                "orderNumber": "234567890",
                "orderStatus": "in progress",
                "productName": "Yoshi's Crafted World",
                "productId": 858383,
                "sku": "0406654608",
                "image": "https://upload.wikimedia.org/wikipedia/en/3/38/Yoshi%27s_Crafted_World.jpg",
                "price": 15.00,
                "quantity": 1
              },
              {
                "orderNumber": "987654321",
                "orderStatus": "delivered",
                "productName": "Super Mario 3D World",
                "productId": 858236,
                "sku": "0406634348",
                "image": "https://e.snmc.io/lk/fv/x/5bf098bed7abfa9c1f6ebf6d9ed74f17/9730451",
                "price": 41.99,
                "quantity": 1
              }
            ]
          }
    })
  };
}; 
