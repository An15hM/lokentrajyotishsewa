// $(document).scroll(function() {
//     var y = $(this).scrollTop();
//     if (y > 200) {
//         $('#main-navigation').addClass("sticky");
//     } 
//     else{
//         $('#main-navigation').removeClass("sticky");
//     }
// });






var world = document.querySelectorAll(".active-country");
for (var i = 0; i < world.length; i++) {
	var country = world[i];
	country.setAttribute("data-toggle", "tooltip");
	country.setAttribute("data-placement", "top");
	country.setAttribute("title", country.getAttribute("id"));
}

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

$(".close-jackethead").on('click', function(e){
    $(this).parent().parent().parent().fadeOut()
})

$(".jacket-head").on('click', function(e){
    if (e.target.nodeName !== 'IMG') {
        $(this).fadeOut();
    }
})

$('.premium-dropdown-item').hover(
    function() {
     $(this).find('.premium-dropdownmenu').show()
    },
    function() {
        $(this).find('.premium-dropdownmenu').hide()
    }
  );



