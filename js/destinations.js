const destinations = [
	{
		id: "siem-reap",
		name: "Siem Reap",
		tagline: "The gateway to the ruins of Angkor",
		image:
			"https://angkorwildlife.com/wp-content/uploads/2024/08/12-must-visit-places-to-visit-in-siem-reap-cambodia-1.jpg",
		map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d250185.3941440069!2d103.8564!3d13.3633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310e046537e92b1d%3A0x4c1c2c1c1c1c1c1c!2sKrong%20Siem%20Reap!5e1!3m2!1sen!2skh!4v1",
		description:
			"Siem Reap is the gateway to the magnificent Angkor archaeological park, home to the world-famous Angkor Wat temple.",
		highlights: ["Angkor Wat", "Bayon Temple", "Ta Prohm", "Pub Street"],
		activities: ["Temple Tours", "Apsara Shows", "Cooking Classes"],
		bestTime: "Nov-Mar",
		weather: "Hot (25-35°C)",
		transport: { method: "Giant Ibis Bus", duration: "6 Hours" },
		tips: ["Buy Angkor Pass early", "Start at sunrise"],
		hotels: { budget: "Hostels", mid: "La Butterfly", luxury: "Belmond" },
	},
	{
		id: "phnom-penh",
		name: "Phnom Penh",
		tagline: "The vibrant capital city",
		image:
			"https://images.travelandleisureasia.com/wp-content/uploads/sites/5/2025/01/28131632/phnom-penh-fi.jpeg?tr=w-1200,q-60",
		map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d250189.674!2d104.9282!3d11.5564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310951f54e01d07d%3A0x1c1c1c1c1c1c1c1c!2sPhnom%20Penh!5e1!3m2!1sen!2skh!4v1",
		description:
			"Cambodia's bustling capital at the confluence of the Mekong and Tonle Sap rivers.",
		highlights: ["Royal Palace", "Tuol Sleng Museum", "Central Market"],
		activities: ["City Tours", "River Cruises", "Street Food"],
		bestTime: "Nov-Mar",
		weather: "Hot (26-36°C)",
		transport: { method: "N/A", duration: "0 Hours" },
		tips: ["Visit museums", "Stay riverside"],
		hotels: {
			budget: "Happy Guesthouse",
			mid: "The Bluefrog",
			luxury: "Raffles",
		},
	},
	{
		id: "battambang",
		name: "Battambang",
		map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d177950.2125064312!2d103.15602055!3d13.093932849999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31054996eaddd7e5%3A0x9c55ce955ce9e393!2sKrong%20Battambang!5e1!3m2!1sen!2skh!4v1776623050065!5m2!1sen!2skh",
		tagline: "Colonial architecture and countryside",
		image:
			"https://cdn.getyourguide.com/image/format=auto,fit=crop,gravity=auto,quality=60,width=375,height=375,dpr=2/tour_img/2abd49cb7c63a049d72bba69423afd9f1adebc8bc1c892da3b44e66100244ac0.jpg",
		description:
			"Cambodia's second-largest city with the best colonial architecture.",
		highlights: ["Colonial Buildings", "Phnom Banan", "Bamboo Train"],
		activities: ["Bike Tours", "Bamboo Train", "Cooking Classes"],
		bestTime: "Nov-Mar",
		weather: "Warm (24-32°C)",
		transport: { method: "Bus", duration: "3 Hours" },
		tips: ["Rent a bike", "Watch bats at sunset"],
		hotels: {
			budget: "Seng Hout",
			mid: "Battambang Resort",
			luxury: "La Villa",
		},
	},
	{
		id: "kampot",
		name: "Kampot",
		map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d177950.2125064312!2d104.2907!3d10.4865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310a80a16a1c1c1c%3A0x1c1c2c1c1c1c1c1c!2sKampot!5e1!3m2!1sen!2skh!4v1",
		tagline: "Fresh pepper and river views",
		image:
			"https://d34vm3j4h7f97z.cloudfront.net/original/4X/8/1/e/81e31f6817402c4a711d09891d53515e0ada2571.jpeg",
		description: "Quiet riverside town famous for world-class Kampot pepper.",
		highlights: ["Kampot River", "Pepper Farms", "Bokit Waterfall"],
		activities: ["Kayaking", "Farm Tours", "Cave Exploration"],
		bestTime: "Nov-May",
		weather: "Warm (25-34°C)",
		transport: { method: "Bus", duration: "3 Hours" },
		tips: ["Tour pepper farms", "Try fresh pepper"],
		hotels: { budget: "Rattana", mid: "River Resort", luxury: "Boutique" },
	},
	{
		id: "kep",
		map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d177950.2125064312!2d104.2909!3d10.4832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310a80a16a1c1c1c%3A0x1c1c2c1c1c1c1c1c!2sKep!5e1!3m2!1sen!2skh!4v1",
		name: "Kep",
		tagline: "Crab markets and quiet beaches",
		image: "https://www.asiakingtravel.com/cuploads/files/Kep_Crab_Statue_.jpg",
		description: "Coastal town renowned for fresh crab and relaxed beaches.",
		highlights: ["Crab Market", "Kep Beach", "Rabbit Island"],
		activities: ["Beach Hopping", "Snorkeling", "Crab Cooking"],
		bestTime: "Nov-May",
		weather: "Warm (26-34°C)",
		transport: { method: "Bus", duration: "3.5 Hours" },
		tips: ["Try crab morning", "Visit island by boat"],
		hotels: { budget: "Vanna Hotel", mid: "Knai Bang Chatt", luxury: "Keplux" },
	},
	{
		id: "sihanoukville",
		map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d177950.2125064312!2d103.5237!3d10.6278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310a80a16a1c1c1c%3A0x1c1c2c1c1c1c1c1c!2sKrong%20Sihanoukville!5e1!3m2!1sen!2skh!4v1",
		name: "Sihanoukville",
		tagline: "Beach resorts and island hopping",
		image:
			"https://d3pa5s1toq8zys.cloudfront.net/explore/wp-content/uploads/2024/07/Sihanoukville-campuchia-4.jpg",
		description:
			"Cambodia's premier beach destination with resorts and islands.",
		highlights: ["Ochheuteal Beach", "Koh Rong", "Ream Park"],
		activities: ["Island Hopping", "Snorkeling", "Beach Parties"],
		bestTime: "Nov-May",
		weather: "Hot (27-35°C)",
		transport: { method: "Expressway Bus", duration: "4 Hours" },
		tips: ["Book island trips", "Stay hydrated"],
		hotels: {
			budget: "Happy Guesthouse",
			mid: "Sea Flower",
			luxury: "Sihanoukville Resort",
		},
	},
	{
		id: "koh-rong",
		map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d177950.2125064312!2d103.36!3d10.548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310a80a16a1c1c1c%3A0x1c1c2c1c1c1c1c1c!2sKoh%20Rong!5e1!3m2!1sen!2skh!4v1",
		name: "Koh Rong",
		tagline: "Island paradise with glowing plankton",
		image:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsf7ILMU3iU48iLBZL0XNR_ucqjEcU3Lblxw&s",
		description: "Pristine island famous for bioluminescent plankton at night.",
		highlights: ["Long Set Beach", "Glowing Plankton", "Koh Touch"],
		activities: ["Night Swimming", "Snorkeling", "Jungle Treks"],
		bestTime: "Nov-May",
		weather: "Hot (27-35°C)",
		transport: { method: "Speedboat", duration: "45 Min" },
		tips: ["Bring cash", "Swim at night"],
		hotels: {
			budget: "Monkey Republic",
			mid: "Beach House",
			luxury: "Royal Sands",
		},
	},
	{
		id: "koh-trong",
		map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d177950.2125064312!2d106.0297!3d12.4778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310a80a16a1c1c1c%3A0x1c1c2c1c1c1c1c1c!2sKoh%20Trong!5e1!3m2!1sen!2skh!4v1",
		name: "Koh Trong",
		tagline: "Traditional stilt villages",
		image:
			"https://focus-cambodia.com/wp-content/uploads/2020/08/koh-trong-09.jpg",
		description: "Peaceful Mekong island with stilt houses and homestays.",
		highlights: ["Stilt Houses", "Wat Sopah", "Mekong Views"],
		activities: ["Cycling", "Boat Tours", "Homestay"],
		bestTime: "Nov-Feb",
		weather: "Warm (22-30°C)",
		transport: { method: "Boat", duration: "15 Min" },
		tips: ["Stay overnight", "Rent a bike"],
		hotels: { budget: "Homestay", mid: "Mekong Resort", luxury: "N/A" },
	},
	{
		id: "mondulkiri",
		map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d177950.2125064312!2d107.002!3d12.454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310a80a16a1c1c1c%3A0x1c1c2c1c1c1c1c1c!2sMondulkiri!5e1!3m2!1sen!2skh!4v1",
		name: "Mondulkiri",
		tagline: "Rolling hills and elephant sanctuaries",
		image:
			"https://www.tourismcambodia.com/img/travelguides/bou_sra_waterfall.jpg",
		description:
			"Remote province with hills, forests, and ethical elephant sanctuaries.",
		highlights: ["Elephant Sanctuary", "Bousra Waterfall", "Bunong Villages"],
		activities: ["Elephant Care", "Jungle Treks", "Waterfall Visits"],
		bestTime: "Nov-Mar",
		weather: "Cool (18-28°C)",
		transport: { method: "Minivan", duration: "7 Hours" },
		tips: ["Ethical sanctuaries only", "Bring layers"],
		hotels: {
			budget: "Nature Tree",
			mid: "Mondulkiri Resort",
			luxury: "Elephants Crossing",
		},
	},
	{
		id: "banlung",
		name: "Banlung (Ratanakiri)",
		map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d177950.2125064312!2d106.9513!3d13.7276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310a80a16a1c1c1c%3A0x1c1c2c1c1c1c1c1c!2sBanlung!5e1!3m2!1sen!2skh!4v1",
		tagline: "Volcanic lakes and jungle treks",
		image:
			"https://autourasia.com/uploads/Travel-Guide-Cambodia/rattanakiri/useful-infos-ratanakiri/700-lac-volcanique-Yeak-Lom%20-%20Copy.png",
		description:
			"Remote adventure destination with crater lakes and rainforests.",
		highlights: ["Yeak Laom Lake", "Virachey Park", "Ka Tien Falls"],
		activities: ["Jungle Treks", "Lake Swimming", "Homestays"],
		bestTime: "Nov-Mar",
		weather: "Warm (24-32°C)",
		transport: { method: "Minivan", duration: "9 Hours" },
		tips: ["Hire local guide", "Bring hiking shoes"],
		hotels: { budget: "Lake Hotel", mid: "Yaklom Lodge", luxury: "N/A" },
	},
	{
		id: "kampong-thom",
		name: "Kampong Thom",
		map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d177950.2125064312!2d104.9812!3d12.7119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310a80a16a1c1c1c%3A0x1c1c2c1c1c1c1c1c!2sKampong%20Thom!5e1!3m2!1sen!2skh!4v1",
		tagline: "Ancient temples and green jungles",
		image:
			"https://www.vivutravel.com/images/des-cambodia3/kampong-thom-travel-guide.jpg",
		description: "Home to pre-Angkorian Sambor Prei Kuk temples.",
		highlights: ["Sambor Prei Kuk", "Phnom Santuk", "Stung Proah Falls"],
		activities: ["Temple Tours", "Trekking", "Waterfall Visits"],
		bestTime: "Nov-Mar",
		weather: "Warm (24-32°C)",
		transport: { method: "Bus", duration: "3 Hours" },
		tips: ["Start early", "Hire guide"],
		hotels: { budget: "Sambor Hotel", mid: "Garden Resort", luxury: "N/A" },
	},
	{
		id: "preah-vihear",
		name: "Preah Vihear",
		map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d177950.2125064312!2d104.5287!3d14.4129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310a80a16a1c1c1c%3A0x1c1c2c1c1c1c1c1c!2sPreah%20Vihear!5e1!3m2!1sen!2skh!4v1",
		tagline: "Majestic cliffside temple",
		image:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHZxscAu7vBobMB11EZv9cIk3xZrHaqUi_rg&s",
		description: "Spectacular temple perched on a 525m cliff.",
		highlights: ["Preah Vihear Temple", "Mountain Views"],
		activities: ["Temple Tours", "Sunrise Views", "Photography"],
		bestTime: "Nov-Mar",
		weather: "Cool (18-28°C)",
		transport: { method: "Bus", duration: "6 Hours" },
		tips: ["Go for sunrise", "Allow full day"],
		hotels: { budget: "Guesthouse", mid: "Mountain Resort", luxury: "N/A" },
	},
	{
		id: "kratie",
		name: "Kratie",
		map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d177950.2125064312!2d106.0298!3d12.4881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310a80a16a1c1c1c%3A0x1c1c2c1c1c1c1c1c!2sKratie!5e1!3m2!1sen!2skh!4v1",
		tagline: "Irrawaddy dolphins and river cruises",
		image:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTliKHWytHm636srYnSrVirr6437WoBme7wjg&s",
		description: "Riverside town famous for Irrawaddy dolphin watching.",
		highlights: ["Dolphin Sanctuary", "Koh Trong Island"],
		activities: ["Dolphin Watching", "River Cruises", "Cycling"],
		bestTime: "Nov-Mar",
		weather: "Warm (24-32°C)",
		transport: { method: "Bus", duration: "5 Hours" },
		tips: ["Visit at dawn", "Book boat"],
		hotels: { budget: "Sambor Hotel", mid: "Mekong Resort", luxury: "OlyMee" },
	},
];

document.addEventListener("DOMContentLoaded", () => {
	const grid = document.getElementById("destination-grid");
	if (!grid) return;

	destinations.forEach((dest) => {
		const card = document.createElement("a");
		card.href = `destination-detail.html?id=${dest.id}`;
		card.className = "dest-card";
		card.innerHTML = `
      <img src="${dest.image}" alt="${dest.name}">
      <h3>${dest.name}</h3>
      <p>${dest.tagline}</p>
    `;
		grid.appendChild(card);
	});
});
