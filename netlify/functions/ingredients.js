exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*', // CORS support
    },
    body: JSON.stringify({
      "healthAndWellbeing": {
         "gummys": [
         {
            "name": "Ashwagandha Gummies",
            "allergens": "May contain milk, soya, cereals containing gluten, fish and crustaceans"
        },
        {
           "name": "Collagen Gummies",
           "allergens": "Fish. May also contain milk, soya, cereals containing gluten, fish and crustaceans"
       }      
      ]
      }
    })
  };
}; 
