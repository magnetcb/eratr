$( document ).ready(function() {
   new WOW().init();
});


$('.s-search').click( function () {
	$('.search-box').fadeIn(100);
});

 
$( document ).ready(function() {
    $('.b-top').fadeOut(1);
	$('.p-pre').fadeOut(0);
}); 

const items = document.querySelectorAll(".accordion a");

function toggleAccordion() {
  this.classList.toggle("active");
  this.nextElementSibling.classList.toggle("active");
  $('.accordion-item').addClass('activex'); 
}

items.forEach(item => item.addEventListener("click", toggleAccordion));

$(".go-top").mouseenter(function(){
       $('.b-top').fadeIn(100);
   });
   $(".go-top").mouseleave(function(){
       $('.b-top').fadeOut(100);
   });

$(".pre-box").mouseenter(function(){
       $('.p-pre').fadeIn(100);
   });
   $(".pre-box").mouseleave(function(){
       $('.p-pre').fadeOut(100);
   });
 
 
 
	(function($) { // Begin jQuery
	  $(function() { // DOM ready
	    // If a link has a dropdown, add sub menu toggle.
	    $('nav ul li a:not(:only-child)').click(function(e) {
	      $(this).siblings('.nav-dropdown').toggle();
	      // Close one dropdown when selecting another
	      $('.nav-dropdown').not($(this).siblings()).hide();
	      e.stopPropagation();
	    });
	    // Clicking away from dropdown will remove the dropdown class
	    $('html').click(function() {
	      $('.nav-dropdown').hide();
	    });
	    // Toggle open and close nav styles on click
	    $('#nav-toggle').click(function() {
	      $('.nav-list').slideToggle();
	    });
	    // Hamburger to X toggle
	    $('#nav-toggle').on('click', function() {
	      this.classList.toggle('active');
	    });
	  }); // end DOM ready
	})(jQuery); // end jQuery