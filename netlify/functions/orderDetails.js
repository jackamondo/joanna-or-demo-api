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
                            "productName": "Lua 2 Bedside Crib - Thyme",
                            "productId": 858383,
                            "sku": "0406654608",
                            "image": "https://www.mamasandpapas.com/cdn/shop/files/mamas-papas-bedside-sleeping-lua-2-bedside-crib-thyme-1259591196.jpg?v=1791799360&width=2048",
                            "colour": "Thyme",
                            "size": "Womens uk 8",
                            "weight": 7.5,
                            "price": 229,
                            "quantity": 1
                        },
                        {
                            "productName": "Plum Floral Mesh Embroidery Dress",
                            "productId": 858236,
                            "sku": "0406634348",
                            "image": "https://www.mamasandpapas.com/cdn/shop/files/mamas-papas-dresses-skirts-plum-floral-mesh-embroidery-dress-1260262046.jpg?v=1791191022&width=2048",
                            "colour": "Plum",
                            "size": "Womens uk 8",
                            "weight": 0.6,
                            "price": 42,
                            "quantity": 1
                        }
                    ]
                }
            ]
      }
    })
  };
};
