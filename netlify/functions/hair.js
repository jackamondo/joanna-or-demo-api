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
             "productName": "ghd platinum+ styler",
             "productId": 858383,
             "sku": "0406654608",
             "image": "https://testamondo1732886182.zendesk.com/hc/theming_assets/01K9W9BCDMATJG227B7SXTX983,
             "colour": "Black",
             "price": 189.99,
             "quantity": 1
           },
           {
             "productName": "rehab split end sealer cream",
             "productId": 858236,
             "sku": "0406634348",
             "image": "https://testamondo1732886182.zendesk.com/hc/theming_assets/01K9W9G56VXX0BGYJM6X0B48GQ",
             "colour": "Gold",
             "price": 28.00,
             "quantity": 1
            }
            ]
       }}
    })
  };
}; 
