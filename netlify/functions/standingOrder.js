exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*', // CORS support
    },
    body: JSON.stringify({
      "items": {
         "status": 
         {
            "appliance": "Xbox Series X",
           "fullfilmentDate": "05/12/2025"
        }    
      
      }
    })
  };
}; 
