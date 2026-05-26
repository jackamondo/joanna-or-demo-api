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
            "orderStatus": "processing",
            "orderDate": "06/02/2025",
            "product": [
              {
                "productName": "Large Landscape Photo Book",
                "productId": 858383,
                "sku": "0406654608",
                "image": "https://www.photobox.co.uk/product-pictures/Photobook/binding/layflat.jpg?d=326x265",
                "description": {
                    "dimensions": "28 x 21 cm",
                    "pageCount": "49"
                },
                "price": 53.19,
                "quantity": 1
              },
              {
                "productName": "Portrait Canvas Print",
                "productId": 858236,
                "sku": "0406634348",
                "image": "https://www.photobox.co.uk/product-pictures/Canvas/product-page-slider/image-slider-1.jpg?d=700x700",
                "description": {
                    "dimensions": "50  70 cm"
                },
                "price": 69.99,
                "quantity": 1
              }
            ]
          }
        ]
      }
    })
  };
}; 
