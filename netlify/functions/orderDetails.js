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
                            "productName": "2004-06 England Away Shirt Rooney #9",
                            "productId": 858383,
                            "sku": "0406654608",
                            "image": "https://www.classicfootballshirts.co.uk/cdn-cgi/image/fit=contain,q=70,w=1024,h=1024,f=webp/pub/media/catalog/product//c/e/ce663ebb82f3cddb4329dc5e5cb4f73a1f6f409337a78aa48d225a130b72e696.jpeg",
                            "colour": "Red",
                            "size": "M",
                            "orderStatus": "delayed",
                            "weight": 7.5,
                            "price": 69.99,
                            "quantity": 1
                        },
                        {
                            "productName": "2019-20 Barcelona Home Shirt Messi #10 - 10/10 - (S)",
                            "productId": 858236,
                            "sku": "0406634348",
                            "image": "https://www.classicfootballshirts.co.uk/cdn-cgi/image/fit=contain,q=70,w=700,h=700,f=webp/pub/media/catalog/product//0/4/040226912033-1_weirjunjr19flzdk.jpg",
                            "colour": "Blue",
                            "size": "S",
                            "orderStatus": "delayed",
                            "weight": 0.6,
                            "price": 89.99,
                            "quantity": 1
                        }
                    ]
                }
            ]
      }
    })
  };
};
