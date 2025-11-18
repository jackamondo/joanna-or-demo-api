exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*', // CORS support
    },
    body: JSON.stringify({
      "discount": {
         "codes": [
         {
            "code": "HELLO15",
            "conditions": "This code is only valid for new customers and purchase over £50"
        },
        {
           "code": "BOGOFF",
           "conditions": "This code is only valid when buying two items that are not already discounted"
       }      
      ]
      }
    })
  };
}; 
