var appModulo = angular.module('inglesApp', []);

appModulo.controller('inglesController', ['$scope', '$sce', function ($scope, $sce) {
    $scope.NivelActual = $('#nivelActual').text();

    $('#cuadroInglesEspanol').css('background', '#d45151');
    $('#cuadroInglesEspanol').css('padding', '1px');

    NivelDos();

    function NivelDos() {
        $('#tabUno').removeClass('active');
        $('#paginaUno').removeClass('active');

        $('#tabDos').addClass('active');
        $('#paginaDos').removeClass('tab-pane');
        $('#paginaDos').removeClass('fade');
        $('#paginaDos').addClass('active');
        $('#paginaDos').css('display', 'block');

        $('#dosBTN').css('background-color', '#333');

        $scope.registroUnoIngles = [
            { Espanol: "Qué hermoso(a)", AudioEspanol: "/audio/nivelUno/quehermoso.mp3", Ingles: "How beautiful", AudioIngles: "/audio/videoUno/howbeautiful.mp3" },
            { Espanol: "Qué sorpresa", AudioEspanol: "/audio/nivelUno/quesorpresa.mp3", Ingles: "What a surprise", AudioIngles: "/audio/videoUno/whatasurprise.mp3" },
            { Espanol: "Qué suerte", AudioEspanol: "/audio/nivelUno/quesuerte.mp3", Ingles: "How lucky", AudioIngles: "/audio/videoDos/howlucky.mp3" },
            { Espanol: "Que tengas un buen día", AudioEspanol: "/audio/nivelUno/quetengasunbuendia.mp3", Ingles: "Have a nice day", AudioIngles: "/audio/videoUno/haveaniceday.mp3" },
            { Espanol: "Qué triste", AudioEspanol: "/audio/nivelUno/quetriste.mp3", Ingles: "How sad", AudioIngles: "/audio/videoDos/howsad.mp3" },
            { Espanol: "Quiero ir ahí", AudioEspanol: "/audio/nivelUno/quieroirahi.mp3", Ingles: "I want to go there", AudioIngles: "/audio/videoUno/iwanttogothere.mp3" },
            { Espanol: "Quiero más", AudioEspanol: "/audio/nivelUno/quieromas.mp3", Ingles: "I want more", AudioIngles: "/audio/videoUno/iwantmore.mp3" },
            { Espanol: "Quiero menos", AudioEspanol: "/audio/nivelUno/quieromenos.mp3", Ingles: "I want less", AudioIngles: "/audio/videoUno/iwantless.mp3" },
            { Espanol: "Salgamos", AudioEspanol: "/audio/nivelUno/salgamos.mp3", Ingles: "Let´s go out", AudioIngles: "/audio/videoUno/letsgoout.mp3" },
            { Espanol: "Sí", AudioEspanol: "/audio/nivelUno/si.mp3", Ingles: "Yes", AudioIngles: "/audio/videoUno/yes.mp3" },
            { Espanol: "Sí, estoy libre", AudioEspanol: "/audio/nivelUno/siestoylibre.mp3", Ingles: "Yes, I´m free", AudioIngles: "/audio/videoUno/yesamfree.mp3" },
            { Espanol: "Sí, estoy ocupado(a)", AudioEspanol: "/audio/nivelUno/siestoyocupado.mp3", Ingles: "Yes, I´m busy", AudioIngles: "/audio/videoUno/yesambusy.mp3" },
            { Espanol: "Sí, hablo español", AudioEspanol: "/audio/nivelUno/sihabloespanol.mp3", Ingles: "Yes, I speak Spanish", AudioIngles: "/audio/videoUno/yesispeakspanish.mp3" },
            { Espanol: "Sí, hablo inglés", AudioEspanol: "/audio/nivelUno/sihabloingles.mp3", Ingles: "Yes, I speak English", AudioIngles: "/audio/videoUno/yesispeakenglish.mp3" },
            { Espanol: "Sí, por favor", AudioEspanol: "/audio/nivelUno/siporfavor.mp3", Ingles: "Yes, please", AudioIngles: "/audio/videoUno/yesplease.mp3" },
            { Espanol: "Sí, un poco", AudioEspanol: "/audio/nivelUno/siunpoco.mp3", Ingles: "Yes, a little", AudioIngles: "/audio/videoUno/yesalittle.mp3" },
            { Espanol: "Soy de...", AudioEspanol: "/audio/nivelUno/soyde.mp3", Ingles: "I´m from...", AudioIngles: "/audio/videoUno/amfrom.mp3" },
            { Espanol: "Tarde", AudioEspanol: "/audio/nivelUno/tarde.mp3", Ingles: "Late", AudioIngles: "/audio/videoUno/late.mp3" },
            { Espanol: "Te ayudaré", AudioEspanol: "/audio/nivelUno/teayudare.mp3", Ingles: "I´ll help you", AudioIngles: "/audio/videoUno/illhelpyou.mp3" },
            { Espanol: "Te estaba esperando", AudioEspanol: "/audio/nivelUno/teestabaesperando.mp3", Ingles: "I was waiting for you", AudioIngles: "/audio/videoDos/iwaswaitingforu.mp3" },
            { Espanol: "Te extraño", AudioEspanol: "/audio/nivelUno/teextrano.mp3", Ingles: "I miss you", AudioIngles: "/audio/videoUno/imissyou.mp3" },
            { Espanol: "Te llamaré", AudioEspanol: "/audio/nivelUno/tellamare.mp3", Ingles: "I´ll call you", AudioIngles: "/audio/videoUno/illcallyou.mp3" },
            { Espanol: "Temprano", AudioEspanol: "/audio/nivelUno/temprano.mp3", Ingles: "Early", AudioIngles: "/audio/videoUno/early.mp3" },
            { Espanol: "Tengo hambre", AudioEspanol: "/audio/nivelUno/tengohambre.mp3", Ingles: "I´m hungry", AudioIngles: "/audio/videoUno/amhungry.mp3" },
            { Espanol: "Tengo que ir", AudioEspanol: "/audio/nivelUno/tengoqueir.mp3", Ingles: "I need to go", AudioIngles: "/audio/videoUno/ineedtogo.mp3" },
            { Espanol: "Tengo sed", AudioEspanol: "/audio/nivelUno/tengosed.mp3", Ingles: "I´m thirsty", AudioIngles: "/audio/videoUno/amthirsty.mp3" },
            { Espanol: "Tengo sueño", AudioEspanol: "/audio/nivelUno/tengosueno.mp3", Ingles: "I´m sleepy", AudioIngles: "/audio/videoUno/amsleepy.mp3" },
            { Espanol: "Tengo tarea", AudioEspanol: "/audio/nivelUno/tengotarea.mp3", Ingles: "I have homework", AudioIngles: "/audio/videoUno/ihavehomework.mp3" },
            { Espanol: "Tengo una pregunta", AudioEspanol: "/audio/nivelUno/tengounapregunta.mp3", Ingles: "I have a question", AudioIngles: "/audio/videoDos/ihaveaquestion.mp3" },
            { Espanol: "Tú también", AudioEspanol: "/audio/nivelUno/tutambien.mp3", Ingles: "You too", AudioIngles: "/audio/videoUno/youtoo.mp3" },
            { Espanol: "Tuve un día increíble", AudioEspanol: "/audio/nivelUno/tuveundiaincreible.mp3", Ingles: "I had a fun day", AudioIngles: "/audio/videoDos/ihadafunday.mp3" },
            { Espanol: "Tuve un día ocupado", AudioEspanol: "/audio/nivelUno/tuveundiaocupado.mp3", Ingles: "I had a busy day", AudioIngles: "/audio/videoDos/ihadabusyday.mp3" },
            { Espanol: "Vamos a comer", AudioEspanol: "/audio/nivelUno/vamosacomer.mp3", Ingles: "Let´s eat", AudioIngles: "/audio/videoUno/letseat.mp3" },
            { Espanol: "Ven aquí", AudioEspanol: "/audio/nivelUno/venaqui.mp3", Ingles: "Come here", AudioIngles: "/audio/videoUno/comehere.mp3" },
            { Espanol: "Voy a dormir", AudioEspanol: "/audio/nivelUno/voyadormir.mp3", Ingles: "I´m going to sleep", AudioIngles: "/audio/videoUno/amgoingtosleep.mp3" },
            { Espanol: "Yo estaba preocupado(a)", AudioEspanol: "/audio/nivelUno/yoestabapreocupado.mp3", Ingles: "I was worried", AudioIngles: "/audio/videoDos/iwasworried.mp3" },
            { Espanol: "Yo también", AudioEspanol: "/audio/nivelUno/yotambien.mp3", Ingles: "Mee too", AudioIngles: "/audio/videoUno/meetoo.mp3" },
            { Espanol: "¿Cómo dices en inglés...?", AudioEspanol: "/audio/nivelUno/_comodiceseningles.mp3", Ingles: "How do you say in English...?", AudioIngles: "/audio/videoUno/howusayinenglish.mp3" },
            { Espanol: "¿Cómo está tu familia?", AudioEspanol: "/audio/nivelUno/_comoestatufamilia.mp3", Ingles: "How´s your family?", AudioIngles: "/audio/videoUno/howsyourfamily.mp3" },
            { Espanol: "¿Cómo estás?", AudioEspanol: "/audio/nivelUno/_comoestas.mp3", Ingles: "How are you?", AudioIngles: "/audio/videoUno/howareyou.mp3" },
            { Espanol: "¿Cómo estuvo tu día?", AudioEspanol: "/audio/nivelUno/_comoestuvotudia.mp3", Ingles: "How was your day?", AudioIngles: "/audio/videoUno/howwasyourday.mp3" },
            { Espanol: "¿Cómo te sientes?", AudioEspanol: "/audio/nivelUno/_comotesientes.mp3", Ingles: "How do you feel?", AudioIngles: "/audio/videoDos/howdoufeel.mp3" },
            { Espanol: "¿Cómo?", AudioEspanol: "/audio/nivelUno/_como.mp3", Ingles: "How?", AudioIngles: "/audio/videoUno/how.mp3" },
            { Espanol: "¿Cuál es tu materia favorita?", AudioEspanol: "/audio/nivelUno/_cualestumateria.mp3", Ingles: "What´s your favorite subject?", AudioIngles: "/audio/videoDos/whatsyourfavoritesubject.mp3" },
            { Espanol: "¿Cuál es tu nombre?", AudioEspanol: "/audio/nivelUno/_cualestunombre.mp3", Ingles: "What´s your name?", AudioIngles: "/audio/videoUno/whatsyourname.mp3" },
            { Espanol: "¿Cuál es tu número de teléfono?", AudioEspanol: "/audio/nivelUno/_cualestunumero.mp3", Ingles: "What´s your phone number?", AudioIngles: "/audio/videoUno/whatsyourphonenumber.mp3" },
            { Espanol: "¿Cuándo?", AudioEspanol: "/audio/nivelUno/_cuando.mp3", Ingles: "When?", AudioIngles: "/audio/videoUno/when.mp3" },
            { Espanol: "¿Cuándo es tu cumpleaños?", AudioEspanol: "/audio/nivelUno/_cuandoestucumple.mp3", Ingles: "When is your birthday?", AudioIngles: "/audio/videoDos/whenisyourbirthday.mp3" },
            { Espanol: "¿Cuándo estás libre?", AudioEspanol: "/audio/nivelUno/_cuandoestaslibre.mp3", Ingles: "When are you free?", AudioIngles: "/audio/videoDos/whenareufree.mp3" },
            { Espanol: "¿Cuánto cuesta?", AudioEspanol: "/audio/nivelUno/_cuantocuesta.mp3", Ingles: "How much is it?", AudioIngles: "/audio/videoUno/howmuchisit.mp3" },
            { Espanol: "¿Cuántos hermanos tienes?", AudioEspanol: "/audio/nivelUno/_cuantoshermanostienes.mp3", Ingles: "How many siblings do you have?", AudioIngles: "/audio/videoUno/howmanysiblingsuhave.mp3" },
            { Espanol: "¿De dónde eres?", AudioEspanol: "/audio/nivelUno/_dedondeeres.mp3", Ingles: "Where are you from?", AudioIngles: "/audio/videoUno/whereareyoufrom.mp3" },
            { Espanol: "¿Dónde es este lugar?", AudioEspanol: "/audio/nivelUno/_dondeesestelugar.mp3", Ingles: "Where is this place?", AudioIngles: "/audio/videoDos/whereisthisplace.mp3" },
            { Espanol: "¿Dónde está el baño?", AudioEspanol: "/audio/nivelUno/_dondeestaelbano.mp3", Ingles: "Where´s the restroom?", AudioIngles: "/audio/videoUno/wherestherestroom.mp3" },
            { Espanol: "¿Dónde lo conseguiste?", AudioEspanol: "/audio/nivelUno/_dondeloconseguiste.mp3", Ingles: "Where did you get it?", AudioIngles: "/audio/videoDos/wheredidugetit.mp3" },
            { Espanol: "¿Dónde trabajas?", AudioEspanol: "/audio/nivelUno/_dondetrabajas.mp3", Ingles: "Where do you work?", AudioIngles: "/audio/videoDos/wheredouwork.mp3" },
            { Espanol: "¿Dónde vives?", AudioEspanol: "/audio/nivelUno/_dondevives.mp3", Ingles: "Where do you live?", AudioIngles: "/audio/videoUno/wheredoyoulive.mp3" },
            { Espanol: "¿Dónde?", AudioEspanol: "/audio/nivelUno/_donde.mp3", Ingles: "Where?", AudioIngles: "/audio/videoUno/where.mp3" },
            { Espanol: "¿Dormiste bien?", AudioEspanol: "/audio/nivelUno/_dormistebien.mp3", Ingles: "Did you sleep well?", AudioIngles: "/audio/videoDos/didusleepwell.mp3" },
            { Espanol: "¿En qué puedo ayudarte?", AudioEspanol: "/audio/nivelUno/_enquepuedoayudarte.mp3", Ingles: "How may I help you?", AudioIngles: "/audio/videoUno/howmayihelpu.mp3" },
            { Espanol: "¿Entiendes?", AudioEspanol: "/audio/nivelUno/_entiendes.mp3", Ingles: "Do you understand?", AudioIngles: "/audio/videoUno/douunderstand.mp3" },
            { Espanol: "¿Es difícil?", AudioEspanol: "/audio/nivelUno/_esdificil.mp3", Ingles: "Is it difficult?", AudioIngles: "/audio/videoDos/isitdifficult.mp3" },
            { Espanol: "¿Es fácil?", AudioEspanol: "/audio/nivelUno/_esfacil.mp3", Ingles: "Is it easy?", AudioIngles: "/audio/videoDos/isiteasy.mp3" },
            { Espanol: "¿Estás en casa?", AudioEspanol: "/audio/nivelUno/_estasencasa.mp3", Ingles: "Are you home?", AudioIngles: "/audio/videoDos/areuhome.mp3" },
            { Espanol: "¿Estás libre?", AudioEspanol: "/audio/nivelUno/_estaslibre.mp3", Ingles: "Are you free?", AudioIngles: "/audio/videoUno/areyoufree.mp3" },
            { Espanol: "¿Estás ocupado(a)?", AudioEspanol: "/audio/nivelUno/_estasocupado.mp3", Ingles: "Are you busy?", AudioIngles: "/audio/videoUno/areyoubusy.mp3" },
            { Espanol: "¿Hablas español?", AudioEspanol: "/audio/nivelUno/_hablasespanol.mp3", Ingles: "Do you speak Spanish?", AudioIngles: "/audio/videoUno/douspeakspanish.mp3" },
            { Espanol: "¿Hablas inglés?", AudioEspanol: "/audio/nivelUno/_hablasingles.mp3", Ingles: "Do you speak English?", AudioIngles: "/audio/videoUno/douspeakenglish.mp3" },
            { Espanol: "¿Me puedes ayudar?", AudioEspanol: "/audio/nivelUno/_mepuedesayudar.mp3", Ingles: "Can you help me?", AudioIngles: "/audio/videoUno/canyouhelpme.mp3" },
            { Espanol: "¿Por qué?", AudioEspanol: "/audio/nivelUno/_porque.mp3", Ingles: "Why?", AudioIngles: "/audio/videoUno/why.mp3" },
            { Espanol: "¿Puedes creerlo?", AudioEspanol: "/audio/nivelUno/_puedescreerlo.mp3", Ingles: "Can you believe it?", AudioIngles: "/audio/videoUno/canubelieveit.mp3" },
            { Espanol: "¿Puedes escribirlo, por favor?", AudioEspanol: "/audio/nivelUno/_puedesescribirloporfavor.mp3", Ingles: "Can you write it down please?", AudioIngles: "/audio/videoUno/canuwritedownplease.mp3" },
            { Espanol: "¿Puedo llamarte más tarde?", AudioEspanol: "/audio/nivelUno/_puedollamartemastarde.mp3", Ingles: "Can I call you later?", AudioIngles: "/audio/videoDos/canicallulater.mp3" },
            { Espanol: "¿Qué está pasando?", AudioEspanol: "/audio/nivelUno/_queestapasando.mp3", Ingles: "What´s happening?", AudioIngles: "/audio/videoUno/whatshappening.mp3" },
            { Espanol: "¿Qué estás diciendo?", AudioEspanol: "/audio/nivelUno/_queestasdiciendo.mp3", Ingles: "What are you saying?", AudioIngles: "/audio/videoUno/whatareusaying.mp3" },
            { Espanol: "¿Qué estás estudiando?", AudioEspanol: "/audio/nivelUno/_queestasestudiando.mp3", Ingles: "What are you studying?", AudioIngles: "/audio/videoUno/whatareyoustudying.mp3" },
            { Espanol: "¿Qué estás haciendo?", AudioEspanol: "/audio/nivelUno/_queestashaciendo.mp3", Ingles: "What are you doing?", AudioIngles: "/audio/videoUno/whatareyoudoing.mp3" },
            { Espanol: "¿Qué estás pensando?", AudioEspanol: "/audio/nivelUno/_queestaspensando.mp3", Ingles: "What are you thinking about?", AudioIngles: "/audio/videoUno/whatuthinkingabout.mp3" },
            { Espanol: "¿Qué harás después?", AudioEspanol: "/audio/nivelUno/_queharasdespues.mp3", Ingles: "What will you do later?", AudioIngles: "/audio/videoDos/whatwilludolater.mp3" },
            { Espanol: "¿Qué hay para beber?", AudioEspanol: "/audio/nivelUno/_quehayparabeber.mp3", Ingles: "What´s there to drink?", AudioIngles: "/audio/videoUno/whatstheretodrink.mp3" },
            { Espanol: "¿Qué hay para comer?", AudioEspanol: "/audio/nivelUno/_quehayparacomer.mp3", Ingles: "What´s there to eat?", AudioIngles: "/audio/videoUno/whatstheretoeat.mp3" },
            { Espanol: "¿Qué hiciste ayer?", AudioEspanol: "/audio/nivelUno/_quehicisteayer.mp3", Ingles: "What did you do yesterday?", AudioIngles: "/audio/videoUno/whatdidudoyesterday.mp3" },
            { Espanol: "¿Qué hiciste esta mañana?", AudioEspanol: "/audio/nivelUno/_quehicisteestamanana.mp3", Ingles: "What did you do this morning?", AudioIngles: "/audio/videoUno/whatdiduduthismorning.mp3" },
            { Espanol: "¿Qué hiciste hoy?", AudioEspanol: "/audio/nivelUno/_quehicistehoy.mp3", Ingles: "What did you do today?", AudioIngles: "/audio/videoUno/whatdidudotoday.mp3" },
            { Espanol: "¿Qué pasó?", AudioEspanol: "/audio/nivelUno/_quepaso.mp3", Ingles: "What happened?", AudioIngles: "/audio/videoUno/whathappend.mp3" },
            { Espanol: "¿Qué quiéres hacer?", AudioEspanol: "/audio/nivelUno/_quequiereshacer.mp3", Ingles: "What do you want to do?", AudioIngles: "/audio/videoUno/whatuwantodo.mp3" },
            { Espanol: "¿Qué te gusta hacer en tu tiempo libre?", AudioEspanol: "/audio/nivelUno/_quetegustahacer.mp3", Ingles: "What do you like to do in your free time?", AudioIngles: "/audio/videoDos/whatdouliketodoinurfreetime.mp3" },
            { Espanol: "¿Qué tipo de música te gusta?", AudioEspanol: "/audio/nivelUno/_quetipodemusica.mp3", Ingles: "What type of music do you like?", AudioIngles: "/audio/videoUno/whattypeofmusicdoulike.mp3" },
            { Espanol: "¿Qué?", AudioEspanol: "/audio/nivelUno/_que.mp3", Ingles: "What?", AudioIngles: "/audio/videoUno/what.mp3" },
            { Espanol: "¿Quién te gusta?", AudioEspanol: "/audio/nivelUno/_quientegusta.mp3", Ingles: "Who do you like?", AudioIngles: "/audio/videoUno/whodoulike.mp3" },
            { Espanol: "¿Quién?", AudioEspanol: "/audio/nivelUno/_quien.mp3", Ingles: "Who?", AudioIngles: "/audio/videoUno/who.mp3" },
            { Espanol: "¿Quieres algo de beber?", AudioEspanol: "/audio/nivelUno/_quieresalgodebeber.mp3", Ingles: "Do you want something to drink?", AudioIngles: "/audio/videoUno/douwantsomethingtodrink.mp3" },
            { Espanol: "¿Quieres algo de comer?", AudioEspanol: "/audio/nivelUno/_quieresalgodecomer.mp3", Ingles: "Do you want something to eat?", AudioIngles: "/audio/videoUno/douwantsomethingtoeat.mp3" },
            { Espanol: "¿Quiéres comer?", AudioEspanol: "/audio/nivelUno/_quierescomer.mp3", Ingles: "Do you want to eat?", AudioIngles: "/audio/videoUno/doyouwanttoeat.mp3" },
            { Espanol: "¿Quiéres un poco?", AudioEspanol: "/audio/nivelUno/_quieresunpoco.mp3", Ingles: "Do you want some?", AudioIngles: "/audio/videoUno/douwantsome.mp3" },
            { Espanol: "¿Se acabó?", AudioEspanol: "/audio/nivelUno/_seacabo.mp3", Ingles: "Is it finished?", AudioIngles: "/audio/videoDos/isitfinished.mp3" },
            { Espanol: "¿Te gustó?", AudioEspanol: "/audio/nivelUno/_tegusto.mp3", Ingles: "Did you like it?", AudioIngles: "/audio/videoUno/didulikeit.mp3" },
            { Espanol: "¿Te puedo ayudar?", AudioEspanol: "/audio/nivelUno/_tepuedoayudar.mp3", Ingles: "May I help you?", AudioIngles: "/audio/videoUno/mayihelpyou.mp3" },
            { Espanol: "¿Tienes una pregunta?", AudioEspanol: "/audio/nivelUno/_tienesunapregunta.mp3", Ingles: "Do you have a question?", AudioIngles: "/audio/videoDos/douhaveaquestion.mp3" },
            { Espanol: "¿Y tú?", AudioEspanol: "/audio/nivelUno/_ytu.mp3", Ingles: "And you?", AudioIngles: "/audio/videoUno/andyou.mp3" }
        ];


        $('#divTablaDos').append('<section class="table" ng-controller="inglesController" class=""></section>');
        var tabla = $('#divTablaDos').children();

        $scope.registroUnoInglesB = [];

        for (var i = 0 ; i < $scope.registroUnoIngles.length ; i++) {
            var color = "white";
            if (i % 2 == 0)
                color = "#f5f5f5";

            $scope.registroUnoInglesB.push({
                sape: $sce.trustAsHtml('<article style="background:' + color + ' ;margin:10px 0 0 0;" class="col-xs-12 col-sm-12 col-md-6 col-lg-6 seccionesIngles>' +
                                '<div>' +

                                    '<div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">' +
                                        '<audio onended="habilitaPlayButton();" src="' + $scope.registroUnoIngles[i].AudioEspanol + '" id="' + $scope.registroUnoIngles[i].AudioEspanol + '" style="display: none;" class="formatoAudio" controls>browser does not support the <code>audio</code> element</audio>' +
                                    '	<button onclick="playAudioGo(\'' + $scope.registroUnoIngles[i].AudioEspanol + '\');" class="btn btn-success botonPlay"><span class="glyphicon glyphicon-play"></span></button> ' +
                                    '</div>' +

                                    '<div class="col-xs-10 col-sm-10 col-md-10 col-lg-10">' +
                                        $scope.registroUnoIngles[i].Espanol
                                    + '</div>' +

                                '</div>		' +
                            '</article>' +

                            '<article style="background:' + color + ' ;margin:10px 0 0 0;" class="col-xs-12 col-sm-12 col-md-6 col-lg-6 seccionesIngles>' +
                                '<div>' +

                                    '<div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">' +
                                        '<audio onended="habilitaPlayButton();" src="' + $scope.registroUnoIngles[i].AudioIngles + '" id="' + $scope.registroUnoIngles[i].AudioIngles + '" style="display: none;" class="formatoAudio" controls>browser does not support the <code>audio</code> element</audio>' +
                                    '	<button onclick="playAudioGo(\'' + $scope.registroUnoIngles[i].AudioIngles + '\');" class="btn btn-success botonPlay"><span class="glyphicon glyphicon-play"></span></button> ' +
                                    '</div>' +

                                    '<div class="col-xs-10 col-sm-10 col-md-10 col-lg-10">' +
                                        $scope.registroUnoIngles[i].Ingles
                                    + '</div>' +

                                '</div>		' +
                            '</article>')
            });
        }
    }


}]);