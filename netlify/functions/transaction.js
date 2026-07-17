exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*", // CORS support
    },
    body: JSON.stringify({
      profile: {
        customerName: "Louise Crosby",
        customerEmails: [
          "louise.crosby@appamondo.com",
          "lcrosby@appamondo.com"
        ]
      },
      subscription: {
        orderId: "ORD-20260717-104582",
        plan: "Mondo Lite",
        status: "Active",
        billingFrequency: "Monthly",
        amount: {
          currency: "GBP",
          value: "26.99"
        },
        paymentMethod: {
          type: "Credit Card",
          lastFourDigits: "6945"
        },
        transactionDate: "2026-07-17",
        confirmationMessage: "Your Mondo Lite subscription has been successfully set up and is active."
      },
      metadata: {
        requestId: "txn_mock_001",
        lastUpdated: "2026-07-17T10:15:00Z"
      }
    })
  };
};
