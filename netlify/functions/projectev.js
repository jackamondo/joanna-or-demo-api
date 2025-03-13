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
        "accountNumber": "123456789"
      },
      "products": [
        {
          "product": {
            "productName": "7.3kWPro Earth RFID Charger",
            "image": "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_768/https://www.projectev.co.uk/wp-content/uploads/2022/04/7kW-RFID-Tethered-4-PNG.png",
            "purhcaseDate" : "13/01/2025"
          },
        "product": {
          "productName": "APEX-22S-T-4G",
          "image": "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_768/https://www.projectev.co.uk/wp-content/uploads/2024/03/APEX-Front-Small.webp",
          "purhcaseDate" : "26/11/2024"
        }   
      ]
    }
    })
  };
}; 
