exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*', // CORS support
    },
    body: JSON.stringify({
      "subscriptions": {
         "wineBox": [
         {
            "status": "processing",
            "name": "Perez Cruz Grenache 2021",
           "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBirT_krRrp8u4smkLOmIs0bGuRZmjrFeWmA&s"
        },
        {
            "status": "processing",
            "name": "Schola Sarmenti Nerio Reserve Nardo DOC 2021",
           "image": "https://images.ctfassets.net/qygihzjkzuyj/2Tq8e0G7TvhDxoIDI2Ptvs/b14b2cfcab0a61cba718b8496275a922/CI_TDW_Valtravieso.jpg"
        },
        {
            "status": "processing",
            "name": "Pizo Cariñena 2024",
           "image": "https://www.ocado.com/images-v3/eafa5127-d256-497b-9609-4869092accd6/8063eec3-a6e4-42fe-9a06-3a2a962ab625/500x500.jpg"
        }
      ]
      }
    })
  };
}; 
