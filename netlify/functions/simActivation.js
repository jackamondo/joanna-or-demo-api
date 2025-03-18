exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*', // CORS support
    },
    body: JSON.stringify({
      "profile": {
        "customerName": "Louise Crosby",
        "customerEmail": "louise.crosby@appamondo.com",
        "customerPhone": "+44 9485 472 128",
        "customerReference": "WL5737583742"
      },
      "account": {
          "sim": {
            "status": "active",
            "activationDate": "18/03/2025"
          },
         "sims": [
         {
            "simProvider": "Three",
            "image": "https://blogtelecomarketing.wordpress.com/wp-content/uploads/2011/11/group-three1.jpg"
        },
        {
           "simProvider": "O2",
           "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjgEfvTkJJEbpA5cp0kZ3VAVphNRrFOR8_Gw&s"
       }      
      ]
      }
    })
  };
}; 
