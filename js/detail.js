document.addEventListener("DOMContentLoaded", () => {
	const params = new URLSearchParams(window.location.search);
	const destId = params.get("id");

	if (!destId) {
		window.location.href = "destinations.html";
		return;
	}

	const destination = destinations.find((d) => d.id === destId);

	if (!destination) {
		window.location.href = "destinations.html";
		return;
	}

	document.title = `${destination.name} | Wander KH`;

	document.getElementById("detail-hero").style.backgroundImage = `url('${destination.image}')`;
	document.getElementById("map-frame").src = destination.map;
	document.getElementById("dest-name").textContent = destination.name;
	document.getElementById("dest-tagline").textContent = destination.tagline;
	document.getElementById("dest-description").textContent =
		destination.description;

	document.getElementById("fact-best-time").textContent = destination.bestTime;
	document.getElementById("fact-duration").textContent =
		destination.transport.duration;
	document.getElementById("fact-transport").textContent =
		destination.transport.method;
	document.getElementById("fact-weather").textContent = destination.weather;

	document.getElementById("transport-method").textContent =
		destination.transport.method;
	document.getElementById("transport-duration").textContent =
		destination.transport.duration;

	const highlightsList = document.getElementById("dest-highlights");
	highlightsList.innerHTML = "";
	destination.highlights.forEach((item) => {
		const li = document.createElement("li");
		li.textContent = item;
		highlightsList.appendChild(li);
	});

	const activitiesList = document.getElementById("dest-activities");
	activitiesList.innerHTML = "";
	destination.activities.forEach((item) => {
		const li = document.createElement("li");
		li.textContent = item;
		activitiesList.appendChild(li);
	});

	const accomSection = document.getElementById("accommodation-section");
	accomSection.innerHTML = `
		<div class="accommodation-grid">
			<div class="accom-card budget"><h4>Budget</h4><p>${destination.hotels.budget}</p></div>
			<div class="accom-card mid"><h4>Mid-Range</h4><p>${destination.hotels.mid}</p></div>
			${destination.hotels.luxury !== "N/A" ? `<div class="accom-card luxury"><h4>Luxury</h4><p>${destination.hotels.luxury}</p></div>` : ""}
		</div>
	`;
});
