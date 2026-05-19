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
                            "productName": "Yellow Gold Plated 19cm Cubic Zirconia Malachite Clover Bracelet",
                            "productId": 858383,
                            "sku": "0406654608",
                            "orderStatus": "delayed",
                            "image": "https://media.beaverbrooks.co.uk/i/beaverbrooks/S142616_0?$BB_NPLP_R$",
                            "colour": "Green",
                            "size": "Womens uk 8",
                            "weight": 7.5,
                            "price": 115,
                            "quantity": 1
                        },
                        {
                            "productName": "Sif Jakobs Roccanova 18ct Yellow Gold Plated Green Cubic Zirconia Necklace",
                            "productId": 858236,
                            "sku": "0406634348",
                            "orderStatus": "delayed",
                            "image": "https://media.beaverbrooks.co.uk/i/beaverbrooks/S146056_0/Sif-Jakobs-Roccanova-18ct-Yellow-Gold-Plated-Green-Cubic-Zirconia-Necklace-0146056?$PDP_L_R$&$Sale_Badge_BB$",
                            "colour": "Green",
                            "size": "Womens uk 8",
                            "weight": 0.6,
                            "price": 115,
                            "quantity": 1
                        }
                    ]
                }
            ]
      }
    })
  };
};
