document.addEventListener("DOMContentLoaded", () => {
	// --- 1. Recommendation Engine Logic ---
	const recommendForm = document.getElementById("recommendation-form");

	if (recommendForm) {
		recommendForm.addEventListener("submit", (event) => {
			event.preventDefault(); // Prevent page reload

			// Get user inputs
			const vibe = document.getElementById("vibe").value;
			const budget = document.getElementById("budget").value;
			const duration = document.getElementById("duration").value;

			let resultName = "";
			let resultDesc = "";
			let resultImg = "";

			// Simple recommendation algorithm based on Vibe
			if (vibe === "history") {
				resultName = "Siem Reap & Angkor Wat";
				resultDesc = `Perfect for a ${duration}-day trip! Dive into the ancient Khmer empire. Whether you are a ${budget} traveler or looking for luxury, Siem Reap has hotels and street food to match your budget.`;
				resultImg = "images/siem-reap.jpg";
			} else if (vibe === "beach") {
				resultName = "Koh Rong Island";
				resultDesc = `Time to relax for ${duration} days! White sands and clear waters await. It's a great spot for ${budget} budgets, offering everything from hostels to high-end resorts.`;
				resultImg = "images/koh-rong.jpg";
			} else if (vibe === "nature") {
				resultName = "Mondulkiri Province";
				resultDesc = `Get ready for an adventure! Spend your ${duration} days trekking jungles and visiting ethical elephant sanctuaries.`;
				resultImg = "images/mondulkiri.jpg";
			} else if (vibe === "city") {
				resultName = "Phnom Penh";
				resultDesc = `Experience the bustling capital! Enjoy a mix of modern cafes, historical sites, and vibrant nightlife suited for a ${budget} budget.`;
				resultImg = "images/hero-bg.jpg"; // Reusing hero image as a placeholder
			}

			// Update DOM with results
			document.getElementById("match-name").textContent = resultName;
			document.getElementById("match-desc").textContent = resultDesc;
			document.getElementById("match-img").src = resultImg;

			// Unhide the result container
			document.getElementById("result-container").classList.remove("hidden");
		});
	}

	// --- 2. Contact Form Validation Logic ---
	const contactForm = document.getElementById("contact-form");

	if (contactForm) {
		contactForm.addEventListener("submit", (event) => {
			event.preventDefault();

			// Simple validation is handled by HTML 'required' attributes,
			// but we use JS here to show a success message creatively.
			contactForm.classList.add("hidden");
			document.getElementById("form-success").classList.remove("hidden");
		});
	}
});

