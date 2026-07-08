exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*', // CORS support
    },
    body: JSON.stringify({
      "DateCode": {
          "codeDetails": {
            "code": "22070701823AC48",
            "in_warranty": "FALSE"
          },
        "last_updated": "2025-02-25T15:45:00Z"
      }
    })
  };
}; 
