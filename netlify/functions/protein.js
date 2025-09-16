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
        "customerEmail": "joanna.test@appamondo.com",
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
                "orderStatus": "processing",
                "productName": "Clear Protein",
                "productId": 858383,
                "sku": "0406654608",
                "image": "https://www.bulk.com/media/catalog/product/L/e/Lemon_Iced_Tea_Carousel_1_EN_e787.jpg?auto=webp&quality=80&crop=false&fit=cover&width=1080&resize-filter=bicubic",
                "price": 18.99,
                "quantity": 1
              },
              {
                "orderNumber": "123456789",
                "productName": "Collagen & Vitamin C",
                "productId": 858383,
                "sku": "0406654608",
                "image": "https://www.bulk.com/media/catalog/product/b/p/bpb_coll_vitc_orange_image_1_UK_7bcc.jpg?auto=webp&quality=80&crop=false&fit=cover&width=1080&resize-filter=bicubic",
                "price": 14.99,
                "quantity": 1
              },
              {
                "orderNumber": "123456789",
                "productName": "Protein Spread",
                "productId": 858236,
                "sku": "0406634348",
                "image": "https://www.bulk.com/media/catalog/product/B/P/BPF_PSPR_WCHA_Main_Image_f468.jpg?auto=webp&quality=80&crop=false&fit=cover&width=1080&resize-filter=bicubic",
                "price": 9.09,
                "quantity": 1
              }
            ]
          }
    })
  };
}; 
