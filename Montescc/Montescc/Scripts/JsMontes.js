if ($("#cursoActual").text() == 1) {
    $('#cuadroAjedrez').css('background', '#d45151');
    $('#cuadroAjedrez').css('padding', '1px');
}
if ($("#cursoActual").text() == 2) {
    $('#cuadroWeb').css('background', '#d45151');
    $('#cuadroWeb').css('padding', '1px');
}
if ($("#cursoActual").text() == 3) {
    $('#cuadroContabilidad').css('background', '#d45151');
    $('#cuadroContabilidad').css('padding', '1px');
}

$('#abreFormulario').click(function () {
    $('#correoContacto').val(""); $('#contenidoContacto').val("");
});

$('#botonContactanos').click(function () {
    if ($('#correoContacto').val().trim() != "" && $('#contenidoContacto').val().trim() != "") {
        $.ajax({
            type: "POST",
            async: true,
            cache: false,
            url: '/Home/CorreoContactanos',
            context: document.body,
            data: { correoVisita: $('#correoContacto').val(), contenidoCorreo: $('#contenidoContacto').val() },
            dataType: "json",
            beforeSend: function (objeto) {
                ventanaBloquearCorreoVisita();
            },
            complete: function () {
                $.unblockUI();
            },
            success: function (result) {
                if (result.Exito) {
                    alert("Gracias por escribirnos")
                    window.location.reload();
                }
                else {
                    alert("Inténtalo luego")
                    window.location.reload();
                }
            }
        });
    }
    else alert('Escriba los datos solicitados')
});

$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('.scrollup').fadeIn();
    } else {
        $('.scrollup').fadeOut();
    }
});

$('.scrollup').click(function () {
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
});

function checkKey(evt) {
    if (evt.ctrlKey) {
        switch (String.fromCharCode(evt.which).toLowerCase()) {
            case 's':
                //alert('sape')
                evt.preventDefault();
                evt.stopPropagation();
                return false;

                // aqui puede poner todas las tecla de combinacion que tiene programado el ie, para anularlo.

            default:
                break;
        }
    }
}

/*Reproducción de Audios*/
function playAudioGo(urlAudio) {

    $.each($('audio'), function () {
        this.pause(); // Stop playing
        this.currentTime = 0; // Reset time
    });

    setTimeout(function () {

        var audioAReproducir = document.getElementById(urlAudio).play();

        audioAReproducir.then(function () {

        }).catch(function (error) {
            location.reload(true);
        });        

    }, 150);


    //$("button").attr("disabled", "disable");
}

function habilitaPlayButton() {
    $("button").removeAttr("disabled");
}

$(function () {
    //$('.pop').on('click', function () {
    $('img').on('click', function () {
        $('.imagepreview').attr('src', $(this).attr('src')); // here asign the image to the modal when the user click the enlarge link
        $('#imagemodal').modal('show');

        /*$('.pop').attr('src', $(this).find('img').attr('src'));
        $('#imagemodal').modal('show');   */
    });
});

//$("img").hover(function () {
//    $('selector').css('cursor', 'pointer');
//});