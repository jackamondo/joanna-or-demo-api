exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*', // CORS support
    },
    body: JSON.stringify({
      "storeLocation": [
        {
        "nearest": "Farnborough",
        "address": "Unit 175 Invincible Road Farnborough GU14 7QU",
        "image": "https://asset.nobiadigital.com/image/upload/q_auto/f_auto/ar_0.9351,c_fill,w_720/v1/Magnet/Kitchens/Tatton/Tatton_Pebble_Front_Main_utility_room/?_a=ATAMhAA0"
        },
        {
          "nearest": "Reading",
          "address": "Unit 1B Reading Link Retail Park Reading RG2 OSN",
          "image": "https://asset.nobiadigital.com/image/upload/tr:q-70,f-auto,ar-1.3548-1,c-maintain_ratio,w-840/v1/Magnet/Kitchens/Ambleside/MAG01009_SUMMER_PHASE_ONE_FEB25_SC05_AMBLESIDE_LAKE_S02/?_a=DATAdtAAZAA0"
        },
        {
          "nearest": "Farham",
          "41-42 The Borough Farnham GU9 7NW",
          "image": "https://asset.nobiadigital.com/image/upload/q_auto/f_auto/ar_0.9351,c_fill,w_720/v1/Magnet/Kitchens/Ambleside/MAG002_AMBLESIDE_AUG23_SC02_AMBLESIDE_KITCHEN_MOSS_AND_LIMESTONE_S03_ADOBE_98/?_a=ATAMhAA0"
        },
        {
          "nearest": "Egham",
          "address": "21/23 The Precinct Egham Highsteet Egham TW20 9HN",
          "image": "https://asset.nobiadigital.com/image/upload/tr:q-70,f-auto,ar-1.3548-1,c-maintain_ratio,w-840/v1/Magnet/Kitchens/Luna/Luna_Grey_Main/?_a=DATAdtAAZAA0"
        }
      ]
    })
  };
}; 
