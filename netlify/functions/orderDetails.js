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
                            "productName": "Advanced Anti-Colic Baby Bottles",
                            "productId": 858383,
                            "sku": "0406654608",
                            "image": "https://www.tommeetippee.com/cdn/shop/files/wxdnbdykb9qdjqfwrtgd_4hdj8zzydoan1yz5.jpg",
                            "colour": "Clear",
                            "price": 19.99,
                            "quantity": 1
                        },
                        {
                            "productName": "Ultra UV Steriliser, Dryer and Storage",
                            "productId": 858236,
                            "sku": "0406634348",
                            "image": "https://www.tommeetippee.com/cdn/shop/files/42395510_Ultrauv_3_in_1_Steriliser_Dryer_and_Storage_Slate.jpg",
                            "colour": "Black",
                            "price": 124.99,
                            "quantity": 1
                        }
                    ]
                }
            ]
      }
    })
  };
};
