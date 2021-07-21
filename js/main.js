const swup = new Swup();

// ===== Scroll to Top ====

$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) { // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200); // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200); // Else fade out the arrow
    }
});


swup.on('clickLink', function() {
    window.scrollTo(0, 0);
    setTimeout(function() {

    }, 1);

});
swup.on('samePage', function() {
    window.scrollTo(0, 0);
});

function init() {
    if (document.querySelector('#typed') != null) {
        var typed = new Typed('#typed', {
            strings: ['Hi, I\'m <br>Andrew^2000','Hi, I\'m glad <br>your he','Hi, I\'m glad <br>you\'re here <br>:)','Hi, I\'m a <br>coffee lover ^1000 ☕️','Hi, I\'m a <br>home chef ^1000 🥘'],
            typeSpeed: 100,
            backSpeed: 150,
            smartBackspace: true,
            loop: true
        });
    }

}
init();
document.addEventListener('swup:contentReplaced', init);



document.addEventListener('swup:contentReplaced', event => {
    swup.options.elements.forEach((selector) => {
        loadComponents(document.querySelector(selector)); // loads all components inside of replaced block
    })
});