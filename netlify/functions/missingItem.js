exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*', // CORS support
    },
    body: JSON.stringify({
      customer: {
        customerName: "Louise Crosby",
        customerEmail: "louise.crosby@appamondo.com",
        customerPhone: "+44 9485 472 128",
        billingAddress: {
          street: "47 Park Lane",
          city: "London",
          postCode: "LND 4A2",
          country: "United Kingdom"
        },
        shippingAddress: {
          street: "47 Park Lane",
          city: "London",
          postCode: "LND 4A2",
          country: "United Kingdom"
        },
        order: [
          {
            orderNumber: "123456789",
            orderStatus: "delivered",
            product: [
              {
                productName: "ProDec 11 Stainless Steel Scissors",
                productId: 858383,
                sku: "0406654608",
                quantity: 1
              },
              {
                productName: "Blackrock Hi-Vis Bodywarmer - Yellow size M",
                productId: 858236,
                sku: "0406634348",
                quantity: 1
              }
            ]
          }
        ]
      }
    })
  };
};
