exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({
      customer: {
        customerId: "CUS-104857",
        customerName: "Louise Crosby",
        customerEmail: "louise.crosby@appamondo.com",
        customerPhone: "+44 9485 472 128",
        accountCreated: "2022-08-14",
        marketingOptIn: true,
        loyaltyTier: "Gold",
        loyaltyPoints: 1240,

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

        preferredLanguage: "en-GB",
        preferredCurrency: "GBP",

        paymentMethods: [
          {
            type: "Visa",
            last4: "4242",
            expiry: "10/28",
            default: true
          }
        ],

        order: [
          {
            orderNumber: "123456789",
            orderDate: "2025-02-10",
            orderStatus: "Delayed",
            estimatedDelivery: "2025-02-18",
            trackingNumber: "DHL123456789GB",
            courier: "DHL",
            trackingUrl: "https://www.dhl.com/track",
            subtotal: 217.99,
            shipping: 0.00,
            tax: 43.60,
            total: 261.59,

            product: [
              {
                productName: "ghd platinum+ styler",
                productId: 858383,
                sku: "0406654608",
                serialNumber: "GHDPLAT-983728473",
                image: "https://testamondo1732886182.zendesk.com/hc/theming_assets/01K9W9BCDMATJG227B7SXTX983",
                colour: "Black",
                price: 189.99,
                quantity: 1,

                warranty: {
                  registered: true,
                  registrationDate: "2025-02-14",
                  expiryDate: "2028-02-14",
                  status: "Active"
                },

                productSupport: {
                  eligibleForRepair: true,
                  replacementEligible: false,
                  careGuideAvailable: true
                }
              },
              {
                productName: "rehab split end sealer cream",
                productId: 858236,
                sku: "0406634348",
                image: "https://testamondo1732886182.zendesk.com/hc/theming_assets/01K9W9G56VXX0BGYJM6X0B48GQ",
                colour: "Gold",
                price: 28.00,
                quantity: 1
              }
            ]
          }
        ],

        registeredProducts: [
          {
            productName: "ghd platinum+ styler",
            serialNumber: "GHDPLAT-983728473",
            purchaseDate: "2025-02-10",
            warrantyExpires: "2028-02-14",
            status: "Registered"
          },
          {
            productName: "ghd helios hair dryer",
            serialNumber: "HELIOS-82736472",
            purchaseDate: "2023-11-04",
            warrantyExpires: "2026-11-04",
            status: "Registered"
          }
        ],

        recentSupportCases: [
          {
            ticketId: "GHD-100234",
            created: "2025-02-15",
            status: "Open",
            category: "Delivery",
            subject: "Order delayed in transit"
          },
          {
            ticketId: "GHD-100118",
            created: "2024-11-20",
            status: "Resolved",
            category: "Warranty Registration",
            resolution: "Warranty successfully registered."
          }
        ],

        recommendations: [
          {
            productId: 901100,
            productName: "ghd bodyguard heat protect spray",
            price: 23.95
          },
          {
            productId: 901101,
            productName: "ghd paddle brush",
            price: 26.00
          }
        ]
      }
    })
  };
};
