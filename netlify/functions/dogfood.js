exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*', // CORS support
    },
    body: JSON.stringify({
      "customer": {
        "customerName": "Dana Royle",
        "customerEmail": "dana.royle@appamondo.com",
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
                "productName": "Salmon - Adult Complete single",
                "productId": 858383,
                "sku": "0406654608",
                "image": "https://www.bellaandduke.com/wp-content/uploads/2024/10/meal_64_d.webp",
                "price": 15.00,
                "quantity": 1
              },
              {
                "orderNumber": "234567890",
                "orderStatus": "in progress",
                "productName": "Turkey - Adult Complete single",
                "productId": 858383,
                "sku": "0406654608",
                "image": "https://www.bellaandduke.com/wp-content/uploads/2025/01/BellaDuke-Raw-Dog-Food-Adult-Premium-Complete-Turkey-Frozen-Fresh-Dog-Food-Subscription-UK.webp",
                "price": 15.00,
                "quantity": 1
              },
              {
                "orderNumber": "987654321",
                "orderStatus": "delivered",
                "productName": "April Adult Complete Subscription",
                "productId": 858236,
                "sku": "0406634348",
                "image": "https://www.bellaandduke.com/wp-content/uploads/2025/01/BellaDuke-Raw-Dog-Food-Complete-Superfoods-Beef-Nutritious-Healthy-Natural-Fresh-Dog-Food-Subscription-UK.webp",
                "price": 41.99,
                "quantity": 1
              }
            ]
          }
    })
  };
}; 
