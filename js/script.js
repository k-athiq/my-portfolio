
// Navbar Transparent to White when scrolling
$(window).scroll(function() {
  var offset = $(window).scrollTop();
  console.log(offset);
  $('.navbar').toggleClass('white', offset > 50);
});





$('#myCarousel').carousel({
    interval: 3000,
 })


