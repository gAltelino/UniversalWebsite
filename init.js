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
  // $('.modal').css('height',$( window ).height()*1);
}

function hideModal(modal){
  console.log('try hide')
  $('#' + modal).modal('hide')
}

function closeModals(){
  console.log('close')
  $('#moto').modal('hide')
  $('#trem').modal('hide')
  $('#lancha').modal('hide')
  $('#couro').modal('hide')
  $('#oleoMotor').modal('hide')
  $('#engrenagem').modal('hide')
  $('#carro').modal('hide')
  $('#caminhao').modal('hide')
  $('#pocoAgua').modal('hide')
  $('#fundicao').modal('hide')
  $('#oleo').modal('hide')
  $('#posto').modal('hide')
  
}

