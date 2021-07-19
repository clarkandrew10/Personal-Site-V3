
const swup = new Swup();

// ===== Scroll to Top ====

$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) { // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200); // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200); // Else fade out the arrow
    }
});

console.log("Hello World")


swup.on('clickLink', function() {
  window.scrollTo(0, 0);
    setTimeout(function() {
        
    }, 1);

});
swup.on('samePage', function() {
    window.scrollTo(0, 0);
});