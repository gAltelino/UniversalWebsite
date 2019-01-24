// (function ($) {
//   $(function () {

//     $('.sidenav').sidenav();
//     $('.parallax').parallax();

//   }); // end of document ready
// })(jQuery); // end of jQuery name space

$(document).ready(function () {
  $('produtos').imageMapResize();
});


function showModal(modal){
  $('#' + modal).modal('show')
}

function hideModal(modal){
  console.log('try hide')
  $('#' + modal).modal('hide')
}