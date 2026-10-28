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
        "customerEmail": "louise.crosby@appamondo.com",
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
        "users": [
    {"id": 1, "name": "Avery Morgan", "email": "avery.morgan@example.com"},
    {"id": 2, "name": "Jordan Ellis", "email": "jordan.ellis@example.com"},
    {"id": 3, "name": "Taylor Brooks", "email": "taylor.brooks@example.com"},
    {"id": 4, "name": "Casey Bennett", "email": "casey.bennett@example.com"},
    {"id": 5, "name": "Riley Parker", "email": "riley.parker@example.com"},
    {"id": 6, "name": "Morgan Hayes", "email": "morgan.hayes@example.com"},
    {"id": 7, "name": "Jamie Foster", "email": "jamie.foster@example.com"},
    {"id": 8, "name": "Cameron Reed", "email": "cameron.reed@example.com"},
    {"id": 9, "name": "Quinn Sullivan", "email": "quinn.sullivan@example.com"},
    {"id": 10, "name": "Drew Coleman", "email": "drew.coleman@example.com"},
    {"id": 11, "name": "Alex Rivera", "email": "alex.rivera@example.com"},
    {"id": 12, "name": "Samira Patel", "email": "samira.patel@example.com"},
    {"id": 13, "name": "Noah Chen", "email": "noah.chen@example.com"},
    {"id": 14, "name": "Maya Thompson", "email": "maya.thompson@example.com"},
    {"id": 15, "name": "Ethan Clarke", "email": "ethan.clarke@example.com"},
    {"id": 16, "name": "Sofia Ramirez", "email": "sofia.ramirez@example.com"},
    {"id": 17, "name": "Liam Walker", "email": "liam.walker@example.com"},
    {"id": 18, "name": "Isla Mitchell", "email": "isla.mitchell@example.com"},
    {"id": 19, "name": "Oliver Grant", "email": "oliver.grant@example.com"},
    {"id": 20, "name": "Amara Okafor", "email": "amara.okafor@example.com"},
    {"id": 21, "name": "Lucas Wright", "email": "lucas.wright@example.com"},
    {"id": 22, "name": "Chloe Adams", "email": "chloe.adams@example.com"},
    {"id": 23, "name": "Elijah Scott", "email": "elijah.scott@example.com"},
    {"id": 24, "name": "Zara Khan", "email": "zara.khan@example.com"},
    {"id": 25, "name": "Henry Lewis", "email": "henry.lewis@example.com"},
    {"id": 26, "name": "Nina Shah", "email": "nina.shah@example.com"},
    {"id": 27, "name": "Leo Martinez", "email": "leo.martinez@example.com"},
    {"id": 28, "name": "Grace Turner", "email": "grace.turner@example.com"},
    {"id": 29, "name": "Felix Anderson", "email": "felix.anderson@example.com"},
    {"id": 30, "name": "Layla Hassan", "email": "layla.hassan@example.com"},
    {"id": 31, "name": "Oscar Hughes", "email": "oscar.hughes@example.com"},
    {"id": 32, "name": "Ruby Collins", "email": "ruby.collins@example.com"},
    {"id": 33, "name": "Arjun Mehta", "email": "arjun.mehta@example.com"},
    {"id": 34, "name": "Eva Nelson", "email": "eva.nelson@example.com"},
    {"id": 35, "name": "Miles Carter", "email": "miles.carter@example.com"},
    {"id": 36, "name": "Freya Wilson", "email": "freya.wilson@example.com"},
    {"id": 37, "name": "Theo Nguyen", "email": "theo.nguyen@example.com"},
    {"id": 38, "name": "Ivy Roberts", "email": "ivy.roberts@example.com"},
    {"id": 39, "name": "Adam Fischer", "email": "adam.fischer@example.com"},
    {"id": 40, "name": "Leila Mansour", "email": "leila.mansour@example.com"},
    {"id": 41, "name": "Jasper Evans", "email": "jasper.evans@example.com"},
    {"id": 42, "name": "Clara Jensen", "email": "clara.jensen@example.com"},
    {"id": 43, "name": "Daniel Kim", "email": "daniel.kim@example.com"},
    {"id": 44, "name": "Elena Rossi", "email": "elena.rossi@example.com"},
    {"id": 45, "name": "Finn Murphy", "email": "finn.murphy@example.com"},
    {"id": 46, "name": "Anika Das", "email": "anika.das@example.com"},
    {"id": 47, "name": "Hugo Laurent", "email": "hugo.laurent@example.com"},
    {"id": 48, "name": "Stella Dawson", "email": "stella.dawson@example.com"},
    {"id": 49, "name": "Owen Blake", "email": "owen.blake@example.com"},
    {"id": 50, "name": "Priya Kapoor", "email": "priya.kapoor@example.com"}
  ]
      }
    })
  };
}; 
