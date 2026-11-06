exports.handler = async (event, context) => {
    const product = {
        brand: "Tommee Tippee",
        productName: "Ultra UV 3-in-1 Steriliser, Dryer and Storage",
        productId: "ULTRA-UV-3-IN-1-UK",
        productUrl:
            "https://www.tommeetippee.com/en-gb/products/ultra-uv-3-in-1-steriliser-dryer-and-storage-uk"
    };

    const spareParts = [
        {
            sparePartId: "DEMO-UV-001",
            sparePartName: "Replacement Internal Tray",
            category: "Internal Components",
            compatibilityStatus: "Demo Compatibility",
            compatibleProducts: [
                {
                    brand: "Tommee Tippee",
                    productName: "Ultra UV 3-in-1 Steriliser, Dryer and Storage",
                    productId: "ULTRA-UV-3-IN-1-UK"
                }
            ],
            description:
                "Illustrative replacement tray for the Ultra UV steriliser.",
            price: "£XX.XX",
            availability: "Demo Stock",
            sparePartImage: null,
            sparePartLink: product.productUrl
        },
        {
            sparePartId: "DEMO-UV-002",
            sparePartName: "Replacement Bottle Rack",
            category: "Accessories",
            compatibilityStatus: "Demo Compatibility",
            compatibleProducts: [
                {
                    brand: "Tommee Tippee",
                    productName: "Ultra UV 3-in-1 Steriliser, Dryer and Storage",
                    productId: "ULTRA-UV-3-IN-1-UK"
                }
            ],
            description:
                "Illustrative replacement bottle rack for the Ultra UV steriliser.",
            price: "£XX.XX",
            availability: "Demo Stock",
            sparePartImage: null,
            sparePartLink: product.productUrl
        },
        {
            sparePartId: "DEMO-UV-003",
            sparePartName: "Replacement Accessory Holder",
            category: "Accessories",
            compatibilityStatus: "Demo Compatibility",
            compatibleProducts: [
                {
                    brand: "Tommee Tippee",
                    productName: "Ultra UV 3-in-1 Steriliser, Dryer and Storage",
                    productId: "ULTRA-UV-3-IN-1-UK"
                }
            ],
            description:
                "Illustrative replacement accessory holder for the Ultra UV steriliser.",
            price: "£XX.XX",
            availability: "Demo Stock",
            sparePartImage: null,
            sparePartLink: product.productUrl
        }
    ];

    return {
        statusCode: 200,
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Allow-Methods": "GET, OPTIONS"
        },
        body: JSON.stringify({
            customerMessage:
                "Here are the spare parts associated with your purchased product.",
            purchasedProduct: product,
            spareParts: spareParts
        })
    };
};
