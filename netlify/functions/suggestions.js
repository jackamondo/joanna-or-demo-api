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
            orderStatus: "delayed",
            product: [
              {
                "orderNumber": "123456789",
                "orderStatus": "processing",
                "productName": "Clear Whey Isolate - Peach Iced Tea",
                "productId": 858383,
                "sku": "0406654608",
                "image": "https://www.bulk.com/media/catalog/product/b/p/bpb_cwhe_peach_iced_tea_image_1_UK_f6cc.jpg?auto=webp&quality=80&crop=false&fit=cover&width=768.375&resize-filter=bicubic",
                "price": 18.99,
                "quantity": 1,
                "description": "FUEL YOUR SESSIONS: premium hydrolysed protein isolate, SMASH YOUR DAILY PROTEIN GOALS: 20g clear protein in every scoop, MAXIMISE YOUR RESULTS: with our award-winning formula, TRACK YOUR MACROS: each serving contains just 86 calories and is sugar free, TASTE THE GAINS: your daily protein-packed refreshment",
                "ingredients": "Whey Protein Hydrolysate (Milk), Flavouring, Anti-Foaming Agents (Polydimethylsiloxane, Silicon Dioxide), Sweetener (Sucralose), Acid (Citric Acid), Colour (Beetroot Red).",
                "suitableFor": "Halal, Vegetarian"
              }
            ]
          }
        ]
      }
    })
  };
};
