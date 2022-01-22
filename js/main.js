const swup = new Swup();

// ===== Scroll to Top ====

$(window).scroll(function () {
	if ($(this).scrollTop() >= 50) {
		// If page is scrolled more than 50px
		$("#return-to-top").fadeIn(200); // Fade in the arrow
	} else {
		$("#return-to-top").fadeOut(200); // Else fade out the arrow
	}
});

swup.on("clickLink", function () {
	window.scrollTo(0, 0);
	setTimeout(function () {}, 1);
});
swup.on("samePage", function () {
	window.scrollTo(0, 0);
});

function init() {
	if (document.querySelector("#typed") != null) {
		try {
			var typed = new Typed("#typed", {
				strings: [
					"Hey, I'm Andrew^2000",
					"Hey, I'm an at home chef^2000",
					"Hey, I'm a coffee nerd^3000",
				],
				typeSpeed: 100,
				backSpeed: 100,
				smartBackspace: true,
				loop: true,
			});
		} catch (err) {
			document.getElementById("typed").innerHTML = "Hey, I'm Andrew";
		}
	}
}
init();
document.addEventListener("swup:contentReplaced", init);
document.addEventListener("swup:contentReplaced", (event) => {
	try {
		swup.options.elements.forEach((selector) => {
			loadComponents(document.querySelector(selector)); // loads all components inside of replaced block
		});
	} catch (err) {
		console.log("oops something broke...");
	}
});
