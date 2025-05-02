exports.handler = async (event, context) => {
	return {
		statusCode: 200,
		headers: {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*', // CORS support
		},
		body: JSON.stringify(
			{
				"uk": [
					{
						"region": "northEast",
						"location": [
							{
								"city": "Newcastle",
								"areaCode": "NE1",
								"homes": [
									{
										"name": "Tyne Grange Care Home",
										"postcode": "NE4 8RR",
										"image": "https://lh3.googleusercontent.com/p/AF1QipNgMDOj5fyRw8xRUg2H6TSK2Mm9ssBTXLIi9164=s1360-w1360-h1020-rw",
										"careType": "dementia",
										"careHomeLink": "https://www.exemplarhc.com/our-care/our-homes/tyne-grange"
									},
									{
										"name": "Westwood Lodge Care Home",
										"postcode": "NE4 6UR",
										"image": "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrbed5O_Pp4h9jZ5F2RcOCArqLpBHmletlmsbOty_bQ7x9k5RfrIblnU9hrpsDH7VuDU6tHsIBkJVhMfE-stRgrgk3hqVmSpU2PelaI_t2nW-fcLRN5nlilV7gvi3HGjtb6x9PX=s1360-w1360-h1020-rw",
										"careType": "dementia",
										"careHomeLink": "https://www.carehome.co.uk/carehome.cfm/searchazref/20004502WESB"
									},
									{
										"name": "Briardene Care Home",
										"postcode": "postcode",
										"image": "https://lh3.googleusercontent.com/p/AF1QipNpzG7OsVcxT2DHbxQjukWwieoj-D3dG33AMgxM=s1360-w1360-h1020-rw",
										"careType": "dementia",
										"careHomeLink": "https://mariposacare.com/carehome/briardene/"
									}
								]
							},
							{
								"city": "Hartlepool",
								"areaCode": "TS27",
								"homes": [
									{
										"name": "Lindisfarne Care Home",
										"postcode": "TS25 4JR",
										"image": "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=gSR8NBme1bzstSLLyL5Tbg&cb_client=search.gws-prod.gps&yaw=173.89433&pitch=0&thumbfov=100&w=1040&h=350",
										"careType": "dementia",
										"careHomeLink": "http://www.gainfordcarehomes.com/our-homes/lindisfarne-hartlepool/"
									},
									{
										"name": "Charlotte Grange Care Home",
										"postcode": "TS26 9JY",
										"image": "https://lh3.googleusercontent.com/p/AF1QipMpUwrOZMEmMEBHhZ1mcmkI5GbzE8Pl6CNTtczJ=s1360-w1360-h1020-rw",
										"careType": "dementia",
										"careHomeLink": "http://www.eachstepcare.co.uk/"
									},
									{
										"name": "Westview Lodge",
										"postcode": "TS24 0BW",
										"image": "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=SGQNVd8CVjUcdwWhzZhEYg&cb_client=search.gws-prod.gps&yaw=43.451717&pitch=0&thumbfov=100&w=1040&h=350",
										"careType": "dementia",
										"careHomeLink": "https://www.martoncarehomes.co.uk/our-care-homes/westview-lodge-care-home/"
									}
								]
							},
							{
								"city": "Sunderland",
								"areaCode": "SR1",
								"homes": [
									{
										"name": "Archers Park Dementia Care Home",
										"postcode": "SR3 3DJ",
										"image": "https://lh3.googleusercontent.com/p/AF1QipMf8mHkJbxdsJO9325aunvYOwOm_0qP02JpSDdJ=w520-h350-n-k-no",
										"careType": "dementia",
										"careHomeLink": "https://orchardcarehomes.com/carehomes/archers-park-farringdon-sunderland"
									},
									{
										"name": "Falstone Court and Falstone Manor Care",
										"postcode": "SR6 9NQ",
										"image": "https://lh3.googleusercontent.com/p/AF1QipO7hD-rlT1UlKkis0m8aQwssmY74TXMwkXo0mjD=w520-h350-n-k-no",
										"careType": "dementia",
										"careHomeLink": "https://www.hc-one.co.uk/Carehomes/Falstone-Manor.aspx"
									},
									{
										"name": "Cedar House Care Home",
										"postcode": "SR2 7TW",
										"image": "https://lh3.googleusercontent.com/p/AF1QipOX_s_QPn-KuuEo_Jrk8KqoqJYpMk8QvBD3H4mm=s1360-w1360-h1020-rw",
										"careType": "dementia",
										"careHomeLink": "http://www.cedarhousecarehome.com/"
									}
								]
							}
						]
					}
				]
			}
		)
	};
};
