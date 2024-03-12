var endereco = $('#confirmPag');



$(document).ready(function () {
    $('#btnConfirmaItens').click(function () {
        $("#confirmPag").removeClass("d-none").css({ "display": "block", "position": "relative", "right": "-100%" })
            .animate({ "left": "0%" }, 300);
        });
});

$(document).ready(function() {
    $('#formFinalizar input').on('keyup', function() {
      var inputPreenchido = true;

      $('#formFinalizar input').each(function() {
        if ($(this).val() === '') {
          inputPreenchido = false;
          return false;
        }
      });

      if (inputPreenchido) {
        $('#btnFinalizar').prop('disabled', false);
      } else {
        $('#btnFinalizar').prop('disabled', true);
      }
    });
  });