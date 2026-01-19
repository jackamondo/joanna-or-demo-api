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
        "acountNumber": "123456789"
      },
      "account": {
          "balance": {
            "currency": "GBP",
            "amount": "4250.75"
          },
        "last_updated": "2025-02-25T15:45:00Z"
      },
      "wifiStatus": {
        "currentStatus": "Train delayed",
        "latestMessage": "Due to line works that were not complete in time."
      }
    })
  };
}; 
