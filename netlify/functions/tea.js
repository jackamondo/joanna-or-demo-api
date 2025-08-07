exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*', // CORS support
    },
    body: JSON.stringify({
      "customer": {
        "customerName": "Henrique Boclin",
        "customerEmail": "h.boclin@appamondo.com",
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
                "productName": "Match Latte",
                "productId": 858383,
                "sku": "0406654608",
                "image": "https://www.romylondonuk.com/wp-content/uploads/2025/04/Matcha-Latte-Starbucks-Recipe_THUMB.jpg",
                "price": 15.00,
                "quantity": 1
              },
              {
                "orderNumber": "234567890",
                "orderStatus": "in progress",
                "productName": "Breakfast Tea",
                "productId": 858383,
                "sku": "0406654608",
                "image": "https://www.lifeisbetterwithtea.com/wp-content/uploads/2021/09/English-Breakfast-Tea-with-milk-square.jpeg",
                "price": 15.00,
                "quantity": 1
              },
              {
                "orderNumber": "987654321",
                "orderStatus": "delivered",
                "productName": "Green Tea",
                "productId": 858236,
                "sku": "0406634348",
                "image": "https://domf5oio6qrcr.cloudfront.net/medialibrary/8468/Tea.jpg",
                "price": 41.99,
                "quantity": 1
              }
            ]
          }
    })
  };
}; 
