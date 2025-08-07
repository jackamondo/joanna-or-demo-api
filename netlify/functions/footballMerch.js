exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*', // CORS support
    },
    body: JSON.stringify({
      "customer": {
        "customerName": "Hayley Williams",
        "customerEmail": "hwtest@appamondo.com",
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
                "productName": "Birmingham FC Home Strip",
                "productId": 858383,
                "sku": "0406654608",
                "image": "https://i0.wp.com/soccerlords.co.uk/wp-content/uploads/2024/07/cbd994db-ce93-457a-9dc0-35b52ce0ad4f_converted.png?fit=2000%2C2000&ssl=1",
                "price": 35.00,
                "quantity": 1
              },
              {
                "orderNumber": "234567890",
                "orderStatus": "in progress",
                "productName": "Birmingham FC Away Strip",
                "productId": 858383,
                "sku": "0406654608",
                "image": "https://i0.wp.com/soccerlords.co.uk/wp-content/uploads/2024/08/58f5cfe6-d676-4f2e-9c58-fddee13c769a_converted-1.png?fit=2000%2C2000&ssl=1",
                "price": 35.00,
                "quantity": 1
              },
              {
                "orderNumber": "987654321",
                "orderStatus": "delivered",
                "productName": "Birmingham FC 1992 Retro Shirt",
                "productId": 858236,
                "sku": "0406634348",
                "image": "https://cdn1.uksoccershop.com/images/re_1691487865_birmingham-city-1992-retro-home-football-shirt.jpg",
                "price": 41.99,
                "quantity": 1
              }
            ]
          }
    })
  };
}; 
