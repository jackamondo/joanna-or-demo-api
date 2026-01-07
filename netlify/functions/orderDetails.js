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
                            "productName": "Grenade Soft Core Creme Egg Protein Bar",
                            "productId": 858383,
                            "sku": "0406654608",
                            "image": "https://www.grenade.com/cdn/shop/files/Grenade_Softcore_CremeEgg_Secondaries_1.jpg?v=1763633551&width=1346",
                          "orderStatus": "delayed",
                            "weight": 7.5,
                            "price": 30.00,
                            "quantity": 1
                        },
                        {
                            "productName": "Birthday Cake Protein Bar",
                            "productId": 858236,
                            "sku": "0406634348",
                            "image": "https://www.grenade.com/cdn/shop/files/BDC_Secondarys_2025_1.jpg?v=1753717667&width=1346",
                          "orderStatus": "delayed",
                            "weight": 0.6,
                            "price": 22.22,
                            "quantity": 1
                        }
                    ]
                }
            ]
      }
    })
  };
}; 
