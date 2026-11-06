exports.handler = async (event, context) => {
    return {
        statusCode: 200,
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify({
            spareParts: [
                {
                    sparePartId: "UV001",
                    sparePartName: "Replacement Internal Tray",
                    category: "Internal Components",
                    compatibilityStatus: "Compatible",
                    sparePartImage: null,
                    sparePartLink: "https://www.tommeetippee.com/en-gb/products/ultra-uv-3-in-1-steriliser-dryer-and-storage-uk"
                },
                {
                    sparePartId: "UV002",
                    sparePartName: "Replacement Bottle Rack",
                    category: "Accessories",
                    compatibilityStatus: "Compatible",
                    sparePartImage: null,
                    sparePartLink: "https://www.tommeetippee.com/en-gb/products/ultra-uv-3-in-1-steriliser-dryer-and-storage-uk"
                },
                {
                    sparePartId: "UV003",
                    sparePartName: "Replacement Accessory Holder",
                    category: "Accessories",
                    compatibilityStatus: "Compatible",
                    sparePartImage: null,
                    sparePartLink: "https://www.tommeetippee.com/en-gb/products/ultra-uv-3-in-1-steriliser-dryer-and-storage-uk"
                },
                {
                    sparePartId: "UV004",
                    sparePartName: "Replacement Door Seal",
                    category: "Replacement Components",
                    compatibilityStatus: "Compatible",
                    sparePartImage: null,
                    sparePartLink: "https://www.tommeetippee.com/en-gb/products/ultra-uv-3-in-1-steriliser-dryer-and-storage-uk"
                }
            ]
        })
    };
};
