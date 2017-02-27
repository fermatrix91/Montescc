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
            { Espanol: "Qué hermoso(a)", AudioEspanol: "/audio/ParteDos/quehermoso.mp3", Ingles: "How beautiful", AudioIngles: "/audio/ParteDos/howbeautiful.mp3" },
            { Espanol: "Qué sorpresa", AudioEspanol: "/audio/ParteDos/quesorpresa.mp3", Ingles: "What a surprise", AudioIngles: "/audio/ParteDos/whatasurprise.mp3" },
            { Espanol: "Qué suerte", AudioEspanol: "/audio/ParteDos/quesuerte.mp3", Ingles: "How lucky", AudioIngles: "/audio/ParteDos/howlucky.mp3" },
            { Espanol: "Que tengas un buen día", AudioEspanol: "/audio/ParteDos/quetengasunbuendia.mp3", Ingles: "Have a nice day", AudioIngles: "/audio/ParteDos/haveaniceday.mp3" },
            { Espanol: "Qué triste", AudioEspanol: "/audio/ParteDos/quetriste.mp3", Ingles: "How sad", AudioIngles: "/audio/ParteDos/howsad.mp3" },
            { Espanol: "Quiero ir ahí", AudioEspanol: "/audio/ParteDos/quieroirahi.mp3", Ingles: "I want to go there", AudioIngles: "/audio/ParteDos/iwanttogothere.mp3" },
            { Espanol: "Quiero más", AudioEspanol: "/audio/ParteDos/quieromas.mp3", Ingles: "I want more", AudioIngles: "/audio/ParteDos/iwantmore.mp3" },
            { Espanol: "Quiero menos", AudioEspanol: "/audio/ParteDos/quieromenos.mp3", Ingles: "I want less", AudioIngles: "/audio/ParteDos/iwantless.mp3" },
            { Espanol: "Salgamos", AudioEspanol: "/audio/ParteDos/salgamos.mp3", Ingles: "Let´s go out", AudioIngles: "/audio/ParteDos/letsgoout.mp3" },
            { Espanol: "Sí", AudioEspanol: "/audio/ParteDos/si.mp3", Ingles: "Yes", AudioIngles: "/audio/ParteDos/yes.mp3" },
            { Espanol: "Sí, estoy libre", AudioEspanol: "/audio/ParteDos/siestoylibre.mp3", Ingles: "Yes, I´m free", AudioIngles: "/audio/ParteDos/yesamfree.mp3" },
            { Espanol: "Sí, estoy ocupado(a)", AudioEspanol: "/audio/ParteDos/siestoyocupado.mp3", Ingles: "Yes, I´m busy", AudioIngles: "/audio/ParteDos/yesambusy.mp3" },
            { Espanol: "Sí, hablo español", AudioEspanol: "/audio/ParteDos/sihabloespanol.mp3", Ingles: "Yes, I speak Spanish", AudioIngles: "/audio/ParteDos/yesispeakspanish.mp3" },
            { Espanol: "Sí, hablo inglés", AudioEspanol: "/audio/ParteDos/sihabloingles.mp3", Ingles: "Yes, I speak English", AudioIngles: "/audio/ParteDos/yesispeakenglish.mp3" },
            { Espanol: "Sí, por favor", AudioEspanol: "/audio/ParteDos/siporfavor.mp3", Ingles: "Yes, please", AudioIngles: "/audio/ParteDos/yesplease.mp3" },
            { Espanol: "Sí, un poco", AudioEspanol: "/audio/ParteDos/siunpoco.mp3", Ingles: "Yes, a little", AudioIngles: "/audio/ParteDos/yesalittle.mp3" },
            { Espanol: "Soy de...", AudioEspanol: "/audio/ParteDos/soyde.mp3", Ingles: "I´m from...", AudioIngles: "/audio/ParteDos/amfrom.mp3" },
            { Espanol: "Tarde", AudioEspanol: "/audio/ParteDos/tarde.mp3", Ingles: "Late", AudioIngles: "/audio/ParteDos/late.mp3" },
            { Espanol: "Te ayudaré", AudioEspanol: "/audio/ParteDos/teayudare.mp3", Ingles: "I´ll help you", AudioIngles: "/audio/ParteDos/illhelpyou.mp3" },
            { Espanol: "Te estaba esperando", AudioEspanol: "/audio/ParteDos/teestabaesperando.mp3", Ingles: "I was waiting for you", AudioIngles: "/audio/ParteDos/iwaswaitingforu.mp3" },
            { Espanol: "Te extraño", AudioEspanol: "/audio/ParteDos/teextrano.mp3", Ingles: "I miss you", AudioIngles: "/audio/ParteDos/imissyou.mp3" },
            { Espanol: "Te llamaré", AudioEspanol: "/audio/ParteDos/tellamare.mp3", Ingles: "I´ll call you", AudioIngles: "/audio/ParteDos/illcallyou.mp3" },
            { Espanol: "Temprano", AudioEspanol: "/audio/ParteDos/temprano.mp3", Ingles: "Early", AudioIngles: "/audio/ParteDos/early.mp3" },
            { Espanol: "Tengo hambre", AudioEspanol: "/audio/ParteDos/tengohambre.mp3", Ingles: "I´m hungry", AudioIngles: "/audio/ParteDos/amhungry.mp3" },
            { Espanol: "Tengo que ir", AudioEspanol: "/audio/ParteDos/tengoqueir.mp3", Ingles: "I need to go", AudioIngles: "/audio/ParteDos/ineedtogo.mp3" },
            { Espanol: "Tengo sed", AudioEspanol: "/audio/ParteDos/tengosed.mp3", Ingles: "I´m thirsty", AudioIngles: "/audio/ParteDos/amthirsty.mp3" },
            { Espanol: "Tengo sueño", AudioEspanol: "/audio/ParteDos/tengosueno.mp3", Ingles: "I´m sleepy", AudioIngles: "/audio/ParteDos/amsleepy.mp3" },
            { Espanol: "Tengo tarea", AudioEspanol: "/audio/ParteDos/tengotarea.mp3", Ingles: "I have homework", AudioIngles: "/audio/ParteDos/ihavehomework.mp3" },
            { Espanol: "Tengo una pregunta", AudioEspanol: "/audio/ParteDos/tengounapregunta.mp3", Ingles: "I have a question", AudioIngles: "/audio/ParteDos/ihaveaquestion.mp3" },
            { Espanol: "Tú también", AudioEspanol: "/audio/ParteDos/tutambien.mp3", Ingles: "You too", AudioIngles: "/audio/ParteDos/youtoo.mp3" },
            { Espanol: "Tuve un día increíble", AudioEspanol: "/audio/ParteDos/tuveundiaincreible.mp3", Ingles: "I had a fun day", AudioIngles: "/audio/ParteDos/ihadafunday.mp3" },
            { Espanol: "Tuve un día ocupado", AudioEspanol: "/audio/ParteDos/tuveundiaocupado.mp3", Ingles: "I had a busy day", AudioIngles: "/audio/ParteDos/ihadabusyday.mp3" },
            { Espanol: "Vamos a comer", AudioEspanol: "/audio/ParteDos/vamosacomer.mp3", Ingles: "Let´s eat", AudioIngles: "/audio/ParteDos/letseat.mp3" },
            { Espanol: "Ven aquí", AudioEspanol: "/audio/ParteDos/venaqui.mp3", Ingles: "Come here", AudioIngles: "/audio/ParteDos/comehere.mp3" },
            { Espanol: "Voy a dormir", AudioEspanol: "/audio/ParteDos/voyadormir.mp3", Ingles: "I´m going to sleep", AudioIngles: "/audio/ParteDos/amgoingtosleep.mp3" },
            { Espanol: "Yo estaba preocupado(a)", AudioEspanol: "/audio/ParteDos/yoestabapreocupado.mp3", Ingles: "I was worried", AudioIngles: "/audio/ParteDos/iwasworried.mp3" },
            { Espanol: "Yo también", AudioEspanol: "/audio/ParteDos/yotambien.mp3", Ingles: "Mee too", AudioIngles: "/audio/ParteDos/meetoo.mp3" },
            { Espanol: "¿Cómo dices en inglés...?", AudioEspanol: "/audio/ParteDos/_comodiceseningles.mp3", Ingles: "How do you say in English...?", AudioIngles: "/audio/ParteDos/howusayinenglish.mp3" },
            { Espanol: "¿Cómo está tu familia?", AudioEspanol: "/audio/ParteDos/_comoestatufamilia.mp3", Ingles: "How´s your family?", AudioIngles: "/audio/ParteDos/howsyourfamily.mp3" },
            { Espanol: "¿Cómo estás?", AudioEspanol: "/audio/ParteDos/_comoestas.mp3", Ingles: "How are you?", AudioIngles: "/audio/ParteDos/howareyou.mp3" },
            { Espanol: "¿Cómo estuvo tu día?", AudioEspanol: "/audio/ParteDos/_comoestuvotudia.mp3", Ingles: "How was your day?", AudioIngles: "/audio/ParteDos/howwasyourday.mp3" },
            { Espanol: "¿Cómo te sientes?", AudioEspanol: "/audio/ParteDos/_comotesientes.mp3", Ingles: "How do you feel?", AudioIngles: "/audio/ParteDos/howdoufeel.mp3" },
            { Espanol: "¿Cómo?", AudioEspanol: "/audio/ParteDos/_como.mp3", Ingles: "How?", AudioIngles: "/audio/ParteDos/how.mp3" },
            { Espanol: "¿Cuál es tu materia favorita?", AudioEspanol: "/audio/ParteDos/_cualestumateria.mp3", Ingles: "What´s your favorite subject?", AudioIngles: "/audio/ParteDos/whatsyourfavoritesubject.mp3" },
            { Espanol: "¿Cuál es tu nombre?", AudioEspanol: "/audio/ParteDos/_cualestunombre.mp3", Ingles: "What´s your name?", AudioIngles: "/audio/ParteDos/whatsyourname.mp3" },
            { Espanol: "¿Cuál es tu número de teléfono?", AudioEspanol: "/audio/ParteDos/_cualestunumero.mp3", Ingles: "What´s your phone number?", AudioIngles: "/audio/ParteDos/whatsyourphonenumber.mp3" },
            { Espanol: "¿Cuándo?", AudioEspanol: "/audio/ParteDos/_cuando.mp3", Ingles: "When?", AudioIngles: "/audio/ParteDos/when.mp3" },
            { Espanol: "¿Cuándo es tu cumpleaños?", AudioEspanol: "/audio/ParteDos/_cuandoestucumple.mp3", Ingles: "When is your birthday?", AudioIngles: "/audio/ParteDos/whenisyourbirthday.mp3" },
            { Espanol: "¿Cuándo estás libre?", AudioEspanol: "/audio/ParteDos/_cuandoestaslibre.mp3", Ingles: "When are you free?", AudioIngles: "/audio/ParteDos/whenareufree.mp3" },
            { Espanol: "¿Cuánto cuesta?", AudioEspanol: "/audio/ParteDos/_cuantocuesta.mp3", Ingles: "How much is it?", AudioIngles: "/audio/ParteDos/howmuchisit.mp3" },
            { Espanol: "¿Cuántos hermanos tienes?", AudioEspanol: "/audio/ParteDos/_cuantoshermanostienes.mp3", Ingles: "How many siblings do you have?", AudioIngles: "/audio/ParteDos/howmanysiblingsuhave.mp3" },
            { Espanol: "¿De dónde eres?", AudioEspanol: "/audio/ParteDos/_dedondeeres.mp3", Ingles: "Where are you from?", AudioIngles: "/audio/ParteDos/whereareyoufrom.mp3" },
            { Espanol: "¿Dónde es este lugar?", AudioEspanol: "/audio/ParteDos/_dondeesestelugar.mp3", Ingles: "Where is this place?", AudioIngles: "/audio/ParteDos/whereisthisplace.mp3" },
            { Espanol: "¿Dónde está el baño?", AudioEspanol: "/audio/ParteDos/_dondeestaelbano.mp3", Ingles: "Where´s the restroom?", AudioIngles: "/audio/ParteDos/wherestherestroom.mp3" },
            { Espanol: "¿Dónde lo conseguiste?", AudioEspanol: "/audio/ParteDos/_dondeloconseguiste.mp3", Ingles: "Where did you get it?", AudioIngles: "/audio/ParteDos/wheredidugetit.mp3" },
            { Espanol: "¿Dónde trabajas?", AudioEspanol: "/audio/ParteDos/_dondetrabajas.mp3", Ingles: "Where do you work?", AudioIngles: "/audio/ParteDos/wheredouwork.mp3" },
            { Espanol: "¿Dónde vives?", AudioEspanol: "/audio/ParteDos/_dondevives.mp3", Ingles: "Where do you live?", AudioIngles: "/audio/ParteDos/wheredoyoulive.mp3" },
            { Espanol: "¿Dónde?", AudioEspanol: "/audio/ParteDos/_donde.mp3", Ingles: "Where?", AudioIngles: "/audio/ParteDos/where.mp3" },
            { Espanol: "¿Dormiste bien?", AudioEspanol: "/audio/ParteDos/_dormistebien.mp3", Ingles: "Did you sleep well?", AudioIngles: "/audio/ParteDos/didusleepwell.mp3" },
            { Espanol: "¿En qué puedo ayudarte?", AudioEspanol: "/audio/ParteDos/_enquepuedoayudarte.mp3", Ingles: "How may I help you?", AudioIngles: "/audio/ParteDos/howmayihelpu.mp3" },
            { Espanol: "¿Entiendes?", AudioEspanol: "/audio/ParteDos/_entiendes.mp3", Ingles: "Do you understand?", AudioIngles: "/audio/ParteDos/douunderstand.mp3" },
            { Espanol: "¿Es difícil?", AudioEspanol: "/audio/ParteDos/_esdificil.mp3", Ingles: "Is it difficult?", AudioIngles: "/audio/ParteDos/isitdifficult.mp3" },
            { Espanol: "¿Es fácil?", AudioEspanol: "/audio/ParteDos/_esfacil.mp3", Ingles: "Is it easy?", AudioIngles: "/audio/ParteDos/isiteasy.mp3" },
            { Espanol: "¿Estás en casa?", AudioEspanol: "/audio/ParteDos/_estasencasa.mp3", Ingles: "Are you home?", AudioIngles: "/audio/ParteDos/areuhome.mp3" },
            { Espanol: "¿Estás libre?", AudioEspanol: "/audio/ParteDos/_estaslibre.mp3", Ingles: "Are you free?", AudioIngles: "/audio/ParteDos/areyoufree.mp3" },
            { Espanol: "¿Estás ocupado(a)?", AudioEspanol: "/audio/ParteDos/_estasocupado.mp3", Ingles: "Are you busy?", AudioIngles: "/audio/ParteDos/areyoubusy.mp3" },
            { Espanol: "¿Hablas español?", AudioEspanol: "/audio/ParteDos/_hablasespanol.mp3", Ingles: "Do you speak Spanish?", AudioIngles: "/audio/ParteDos/douspeakspanish.mp3" },
            { Espanol: "¿Hablas inglés?", AudioEspanol: "/audio/ParteDos/_hablasingles.mp3", Ingles: "Do you speak English?", AudioIngles: "/audio/ParteDos/douspeakenglish.mp3" },
            { Espanol: "¿Me puedes ayudar?", AudioEspanol: "/audio/ParteDos/_mepuedesayudar.mp3", Ingles: "Can you help me?", AudioIngles: "/audio/ParteDos/canyouhelpme.mp3" },
            { Espanol: "¿Por qué?", AudioEspanol: "/audio/ParteDos/_porque.mp3", Ingles: "Why?", AudioIngles: "/audio/ParteDos/why.mp3" },
            { Espanol: "¿Puedes creerlo?", AudioEspanol: "/audio/ParteDos/_puedescreerlo.mp3", Ingles: "Can you believe it?", AudioIngles: "/audio/ParteDos/canubelieveit.mp3" },
            { Espanol: "¿Puedes escribirlo, por favor?", AudioEspanol: "/audio/ParteDos/_puedesescribirloporfavor.mp3", Ingles: "Can you write it down please?", AudioIngles: "/audio/ParteDos/canuwritedownplease.mp3" },
            { Espanol: "¿Puedo llamarte más tarde?", AudioEspanol: "/audio/ParteDos/_puedollamartemastarde.mp3", Ingles: "Can I call you later?", AudioIngles: "/audio/ParteDos/canicallulater.mp3" },
            { Espanol: "¿Qué está pasando?", AudioEspanol: "/audio/ParteDos/_queestapasando.mp3", Ingles: "What´s happening?", AudioIngles: "/audio/ParteDos/whatshappening.mp3" },
            { Espanol: "¿Qué estás diciendo?", AudioEspanol: "/audio/ParteDos/_queestasdiciendo.mp3", Ingles: "What are you saying?", AudioIngles: "/audio/ParteDos/whatareusaying.mp3" },
            { Espanol: "¿Qué estás estudiando?", AudioEspanol: "/audio/ParteDos/_queestasestudiando.mp3", Ingles: "What are you studying?", AudioIngles: "/audio/ParteDos/whatareyoustudying.mp3" },
            { Espanol: "¿Qué estás haciendo?", AudioEspanol: "/audio/ParteDos/_queestashaciendo.mp3", Ingles: "What are you doing?", AudioIngles: "/audio/ParteDos/whatareyoudoing.mp3" },
            { Espanol: "¿Qué estás pensando?", AudioEspanol: "/audio/ParteDos/_queestaspensando.mp3", Ingles: "What are you thinking about?", AudioIngles: "/audio/ParteDos/whatuthinkingabout.mp3" },
            { Espanol: "¿Qué harás después?", AudioEspanol: "/audio/ParteDos/_queharasdespues.mp3", Ingles: "What will you do later?", AudioIngles: "/audio/ParteDos/whatwilludolater.mp3" },
            { Espanol: "¿Qué hay para beber?", AudioEspanol: "/audio/ParteDos/_quehayparabeber.mp3", Ingles: "What´s there to drink?", AudioIngles: "/audio/ParteDos/whatstheretodrink.mp3" },
            { Espanol: "¿Qué hay para comer?", AudioEspanol: "/audio/ParteDos/_quehayparacomer.mp3", Ingles: "What´s there to eat?", AudioIngles: "/audio/ParteDos/whatstheretoeat.mp3" },
            { Espanol: "¿Qué hiciste ayer?", AudioEspanol: "/audio/ParteDos/_quehicisteayer.mp3", Ingles: "What did you do yesterday?", AudioIngles: "/audio/ParteDos/whatdidudoyesterday.mp3" },
            { Espanol: "¿Qué hiciste esta mañana?", AudioEspanol: "/audio/ParteDos/_quehicisteestamanana.mp3", Ingles: "What did you do this morning?", AudioIngles: "/audio/ParteDos/whatdiduduthismorning.mp3" },
            { Espanol: "¿Qué hiciste hoy?", AudioEspanol: "/audio/ParteDos/_quehicistehoy.mp3", Ingles: "What did you do today?", AudioIngles: "/audio/ParteDos/whatdidudotoday.mp3" },
            { Espanol: "¿Qué pasó?", AudioEspanol: "/audio/ParteDos/_quepaso.mp3", Ingles: "What happened?", AudioIngles: "/audio/ParteDos/whathappend.mp3" },
            { Espanol: "¿Qué quiéres hacer?", AudioEspanol: "/audio/ParteDos/_quequiereshacer.mp3", Ingles: "What do you want to do?", AudioIngles: "/audio/ParteDos/whatuwantodo.mp3" },
            { Espanol: "¿Qué te gusta hacer en tu tiempo libre?", AudioEspanol: "/audio/ParteDos/_quetegustahacer.mp3", Ingles: "What do you like to do in your free time?", AudioIngles: "/audio/ParteDos/whatdouliketodoinurfreetime.mp3" },
            { Espanol: "¿Qué tipo de música te gusta?", AudioEspanol: "/audio/ParteDos/_quetipodemusica.mp3", Ingles: "What type of music do you like?", AudioIngles: "/audio/ParteDos/whattypeofmusicdoulike.mp3" },
            { Espanol: "¿Qué?", AudioEspanol: "/audio/ParteDos/_que.mp3", Ingles: "What?", AudioIngles: "/audio/ParteDos/what.mp3" },
            { Espanol: "¿Quién te gusta?", AudioEspanol: "/audio/ParteDos/_quientegusta.mp3", Ingles: "Who do you like?", AudioIngles: "/audio/ParteDos/whodoulike.mp3" },
            { Espanol: "¿Quién?", AudioEspanol: "/audio/ParteDos/_quien.mp3", Ingles: "Who?", AudioIngles: "/audio/ParteDos/who.mp3" },
            { Espanol: "¿Quieres algo de beber?", AudioEspanol: "/audio/ParteDos/_quieresalgodebeber.mp3", Ingles: "Do you want something to drink?", AudioIngles: "/audio/ParteDos/douwantsomethingtodrink.mp3" },
            { Espanol: "¿Quieres algo de comer?", AudioEspanol: "/audio/ParteDos/_quieresalgodecomer.mp3", Ingles: "Do you want something to eat?", AudioIngles: "/audio/ParteDos/douwantsomethingtoeat.mp3" },
            { Espanol: "¿Quiéres comer?", AudioEspanol: "/audio/ParteDos/_quierescomer.mp3", Ingles: "Do you want to eat?", AudioIngles: "/audio/ParteDos/doyouwanttoeat.mp3" },
            { Espanol: "¿Quiéres un poco?", AudioEspanol: "/audio/ParteDos/_quieresunpoco.mp3", Ingles: "Do you want some?", AudioIngles: "/audio/ParteDos/douwantsome.mp3" },
            { Espanol: "¿Se acabó?", AudioEspanol: "/audio/ParteDos/_seacabo.mp3", Ingles: "Is it finished?", AudioIngles: "/audio/ParteDos/isitfinished.mp3" },
            { Espanol: "¿Te gustó?", AudioEspanol: "/audio/ParteDos/_tegusto.mp3", Ingles: "Did you like it?", AudioIngles: "/audio/ParteDos/didulikeit.mp3" },
            { Espanol: "¿Te puedo ayudar?", AudioEspanol: "/audio/ParteDos/_tepuedoayudar.mp3", Ingles: "May I help you?", AudioIngles: "/audio/ParteDos/mayihelpyou.mp3" },
            { Espanol: "¿Tienes una pregunta?", AudioEspanol: "/audio/ParteDos/_tienesunapregunta.mp3", Ingles: "Do you have a question?", AudioIngles: "/audio/ParteDos/douhaveaquestion.mp3" },
            { Espanol: "¿Y tú?", AudioEspanol: "/audio/ParteDos/_ytu.mp3", Ingles: "And you?", AudioIngles: "/audio/ParteDos/andyou.mp3" }
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