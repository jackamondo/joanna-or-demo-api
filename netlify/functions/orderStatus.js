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
          "delivery": [
            {
              "orderStatus": "Out for Delivery",
              "order_nubmer": "987654321",
              "deliveryDate": "19/11/2025",
              "tracking_link": "SPB123456789012",
              "product_name": "Layflat XL Landscape Photo Book",
              "image": "https://www.photobox.co.uk/product-pictures/Photobook/binding/layflat.jpg?d=326x265",
              "orderPrice": 405.99,
              "quanitity": "1"
            },
            {
              "delivery_status": "in transit",
              "order_nubmer": "SBP098765432109",
              "expected_delivery_date": "20/04/2025",
              "tracking_link": "SBP098765432109",
              "product_name": "Personalised jigsaw",
              "image": "https://www.photobox.co.uk/product-pictures/product-overview/jigsaw.jpg?d=460x368",
              "price": 20.99,
              "quanitity": "1"
            },
            {
              "delivery_status": "in transit",
              "order_nubmer": "SPB098765432109",
              "expected_delivery_date": "20/04/2025",
              "tracking_link": "SBP098765432109",
              "product_name": "Persoanlised Cushion",
              "image": "https://www.photobox.co.uk/product-pictures/product-overview/cushion.jpg?d=460x368",
              "price": 20.99,
              "quanitity": "1"
            }
          ]
       } 
    })
  };
}; 
