exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*', // CORS support
    },
    body: JSON.stringify({
    "orderNumber": "X96966",
    "email": "kc@appamondo.com",
    "customer": {
        "firstName": "Sarah",
        "lastName": "Hardy",
        "phone": "+44 7475 424 608"
    },
    "billingAddress": {
        "street": "1428 Derry  Street",
        "city": "Maine, New England",
        "postCode": "HO7 6OH",
        "country": "United Kingdom"
    },
    "shippingAddress": {
        "street": "1428 Derry Street",
        "city": "Maine, New England",
        "postCode": "HO7 6OH",
        "country": "United Kingdom"
    },
    "order": [
        {
            "product": [
                {
                    "items": {
	                      "orderStatus": "Held in depot",
                        "productName": "balloon",
                        "quantity": 1,
                        "unitPrice": 19.99,
                        "image": "https://d3vappret1737628622.zendesk.com/hc/theming_assets/01JJ9RTBMXPXMCH41BFCKRTX7X"
                    }
                },
                {
                    "items": {
	                      "orderStatus": "In Transit",
                        "productName": "clown mask",
                        "quantity": 1,
                        "unitPrice": 30.99,
                        "image": "https://d3vappret1737628622.zendesk.com/hc/theming_assets/01JJ9RVFGT2724B1RXCMMGJ0AH"
                    }
                }
            ]
        }
    ]
})
  };
}; 
