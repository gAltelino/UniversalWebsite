let modalState = 0;
let modal = "";

$(document).ready(function () {
  $('produtos').imageMapResize();
});

function showModal(modal) {
  closeAll();
  $('#' + modal).modal('show')
  $('#' + modal).css("margin-right", $(window).width() - $('.modal-content').width());
  modalState = 1;
}

function closeModals() {
  if (modalState === 1) {
    closeAll();
    modalState = 0;
  }
}

function closeAll(){
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