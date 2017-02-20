var appModulo = angular.module('inglesApp', []);

appModulo.controller('inglesController', ['$scope', '$sce', function ($scope, $sce) {
    $scope.NivelActual = $('#nivelActual').text();

    $('#cuadroInglesEspanol').css('background', '#d45151');
    $('#cuadroInglesEspanol').css('padding', '1px');

    NivelUno();

    ////////////////////////////************Textos Nivel Uno Inglés************//////////////////////////////////
    function NivelUno() {

        $('#unoBTN').css('background-color', '#333');

        $scope.registroUnoIngles = [
            { Espanol: "Adiós", AudioEspanol: "/audio/nivelUno/adios.mp3", Ingles: "Goodbye", AudioIngles: "/audio/videoUno/goodbye.mp3" },
            { Espanol: "Aquí", AudioEspanol: "/audio/nivelUno/aqui.mp3", Ingles: "Here", AudioIngles: "/audio/videoUno/here.mp3" },
            { Espanol: "Ayer", AudioEspanol: "/audio/nivelUno/ayer.mp3", Ingles: "Yesterday", AudioIngles: "/audio/videoUno/yesterday.mp3" },
            { Espanol: "Bienvenido(a)", AudioEspanol: "/audio/nivelUno/bienvenido.mp3", Ingles: "Welcome", AudioIngles: "/audio/videoUno/welcome.mp3" },
            { Espanol: "Buen día", AudioEspanol: "/audio/nivelUno/buendia.mp3", Ingles: "Good day", AudioIngles: "/audio/videoUno/goodday.mp3" },
            { Espanol: "Buen trabajo", AudioEspanol: "/audio/nivelUno/buentrabajo.mp3", Ingles: "Good job", AudioIngles: "/audio/videoUno/goodjob.mp3" },
            { Espanol: "Buena idea", AudioEspanol: "/audio/nivelUno/buenaidea.mp3", Ingles: "Good idea", AudioIngles: "/audio/videoUno/goodidea.mp3" },
            { Espanol: "Buena suerte", AudioEspanol: "/audio/nivelUno/buenasuerte.mp3", Ingles: "Good luck", AudioIngles: "/audio/videoUno/goodluck.mp3" },
            { Espanol: "Buenas noches", AudioEspanol: "/audio/nivelUno/buenasnoches.mp3", Ingles: "Good night", AudioIngles: "/audio/videoUno/goodnight.mp3" },
            { Espanol: "Buenas tardes", AudioEspanol: "/audio/nivelUno/buenastardes1.mp3", Ingles: "Good afternoon", AudioIngles: "/audio/videoUno/goodafternoon.mp3" },
            { Espanol: "Buenas tardes", AudioEspanol: "/audio/nivelUno/buenastardes2.mp3", Ingles: "Good evening (5-7 p.m.)", AudioIngles: "/audio/videoUno/goodevening.mp3" },
            { Espanol: "Creo que no", AudioEspanol: "/audio/nivelUno/creoqueno.mp3", Ingles: "I don´t think so", AudioIngles: "/audio/videoUno/idontthinkso.mp3" },
            { Espanol: "Creo que sí", AudioEspanol: "/audio/nivelUno/creoquesi.mp3", Ingles: "I think so", AudioIngles: "/audio/videoUno/ithinkso.mp3" },
            { Espanol: "Cuánto tiempo sin verte", AudioEspanol: "/audio/nivelUno/cuantotiempo.mp3", Ingles: "Long time no see", AudioIngles: "/audio/videoUno/longtimenosee.mp3" },
            { Espanol: "De nada", AudioEspanol: "/audio/nivelUno/denada.mp3", Ingles: "Your welcome", AudioIngles: "/audio/videoUno/yourewelcome.mp3" },
            { Espanol: "Después estaré libre", AudioEspanol: "/audio/nivelUno/despuesestarel.mp3", Ingles: "I´ll be free later", AudioIngles: "/audio/videoDos/illbefreelater.mp3" },
            { Espanol: "Después estaré ocupado(a)", AudioEspanol: "/audio/nivelUno/despuesestareo.mp3", Ingles: "I´ll be busy later", AudioIngles: "/audio/videoDos/illbebusylater.mp3" },
            { Espanol: "Después tengo un examen", AudioEspanol: "/audio/nivelUno/despuestengo.mp3", Ingles: "I have an exam later", AudioIngles: "/audio/videoDos/ihaveanexamlater.mp3" },
            { Espanol: "Día", AudioEspanol: "/audio/nivelUno/dia.mp3", Ingles: "Day", AudioIngles: "/audio/videoUno/day.mp3" },
            { Espanol: "Entiendo", AudioEspanol: "/audio/nivelUno/entiendo.mp3", Ingles: "I understand", AudioIngles: "/audio/videoUno/iunderstand.mp3" },
            { Espanol: "Entra", AudioEspanol: "/audio/nivelUno/entra.mp3", Ingles: "Come in", AudioIngles: "/audio/videoUno/comein.mp3" },
            { Espanol: "Envíame un mensaje cuando estés libre", AudioEspanol: "/audio/nivelUno/enviameunmensaje.mp3", Ingles: "Message me when you´re free", AudioIngles: "/audio/videoDos/messagemewhenurefree.mp3" },
            { Espanol: "Eres tan amable", AudioEspanol: "/audio/nivelUno/erestanamable.mp3", Ingles: "You´re so nice", AudioIngles: "/audio/videoDos/youaresonice.mp3" },
            { Espanol: "Es aburrido", AudioEspanol: "/audio/nivelUno/esaburrido.mp3", Ingles: "It´s boring", AudioIngles: "/audio/videoDos/itsboring.mp3" },
            { Espanol: "Es delicioso", AudioEspanol: "/audio/nivelUno/esdelicioso.mp3", Ingles: "It´s delicious", AudioIngles: "/audio/videoUno/itsdelicious.mp3" },
            { Espanol: "Es difícil", AudioEspanol: "/audio/nivelUno/esdificil.mp3", Ingles: "It´s difficult", AudioIngles: "/audio/videoUno/itsdifficult.mp3" },
            { Espanol: "Es fácil", AudioEspanol: "/audio/nivelUno/esfacil.mp3", Ingles: "It´s easy", AudioIngles: "/audio/videoUno/itseasy.mp3" },
            { Espanol: "Es un día lluvioso", AudioEspanol: "/audio/nivelUno/esundialluvioso.mp3", Ingles: "It´s a rainy day", AudioIngles: "/audio/videoUno/itsarainyday.mp3" },
            { Espanol: "Es un hermoso día", AudioEspanol: "/audio/nivelUno/esunhermosodia.mp3", Ingles: "It´s a beautiful day", AudioIngles: "/audio/videoUno/itsabeautifulday.mp3" },
            { Espanol: "Es un placer", AudioEspanol: "/audio/nivelUno/esunplacer.mp3", Ingles: "It´s a pleasure", AudioIngles: "/audio/videoUno/itsapleasure.mp3" },
            { Espanol: "Está bien", AudioEspanol: "/audio/nivelUno/estabien.mp3", Ingles: "It´s fine", AudioIngles: "/audio/videoUno/itsfine.mp3" },
            { Espanol: "Está lloviendo", AudioEspanol: "/audio/nivelUno/estalloviendo.mp3", Ingles: "It´s raining", AudioIngles: "/audio/videoUno/itsraining.mp3" },
            { Espanol: "Está nevando", AudioEspanol: "/audio/nivelUno/estanevando.mp3", Ingles: "It´s snowing", AudioIngles: "/audio/videoUno/itssnowing.mp3" },
            { Espanol: "Está nublado", AudioEspanol: "/audio/nivelUno/estanublado.mp3", Ingles: "It´s cloudy", AudioIngles: "/audio/videoUno/itscloudy.mp3" },
            { Espanol: "Está soleado", AudioEspanol: "/audio/nivelUno/estasoleado.mp3", Ingles: "It´s sunny", AudioIngles: "/audio/videoUno/itssunny.mp3" },
            { Espanol: "Estoy bien", AudioEspanol: "/audio/nivelUno/estoybien.mp3", Ingles: "I´m fine", AudioIngles: "/audio/videoUno/amfine.mp3" },
            { Espanol: "Estoy buscando trabajo", AudioEspanol: "/audio/nivelUno/estoybuscandotrabajo.mp3", Ingles: "I´m looking for a job", AudioIngles: "/audio/videoDos/amlookingforajob.mp3" },
            { Espanol: "Estoy cansado(a)", AudioEspanol: "/audio/nivelUno/estoycansado.mp3", Ingles: "I´m tired", AudioIngles: "/audio/videoUno/amtired.mp3" },
            { Espanol: "Estoy con mi familia", AudioEspanol: "/audio/nivelUno/estoyconmifamilia.mp3", Ingles: "I´m with my family", AudioIngles: "/audio/videoDos/amwithmyfamily.mp3" },
            { Espanol: "Estoy con mis amigos", AudioEspanol: "/audio/nivelUno/estoyconmisamigos.mp3", Ingles: "I´m with my friends", AudioIngles: "/audio/videoDos/amwithmyfriends.mp3" },
            { Espanol: "Estoy confundido(a)", AudioEspanol: "/audio/nivelUno/estoyconfundido.mp3", Ingles: "I´m confused", AudioIngles: "/audio/videoDos/amconfused.mp3" },
            { Espanol: "Estoy esperando", AudioEspanol: "/audio/nivelUno/estoyesperando.mp3", Ingles: "I´m waiting", AudioIngles: "/audio/videoDos/amwaiting.mp3" },
            { Espanol: "Estoy perdido(a)", AudioEspanol: "/audio/nivelUno/estoyperdido.mp3", Ingles: "I´m lost", AudioIngles: "/audio/videoDos/amlost.mp3" },
            { Espanol: "Estoy preparando la cena", AudioEspanol: "/audio/nivelUno/estoypreparandolacena.mp3", Ingles: "I´m cooking dinner", AudioIngles: "/audio/videoDos/amcookingdinner.mp3" },
            { Espanol: "Fecha", AudioEspanol: "/audio/nivelUno/fecha.mp3", Ingles: "Date", AudioIngles: "/audio/videoUno/date.mp3" },
            { Espanol: "Feliz año nuevo", AudioEspanol: "/audio/nivelUno/felizanonuevo.mp3", Ingles: "Happy New Year", AudioIngles: "/audio/videoUno/happynewyear.mp3" },
            { Espanol: "Feliz cumpleaños", AudioEspanol: "/audio/nivelUno/felizcumpleanos.mp3", Ingles: "Happy birthday", AudioIngles: "/audio/videoUno/happybirthday.mp3" },
            { Espanol: "Feliz navidad", AudioEspanol: "/audio/nivelUno/feliznavidad.mp3", Ingles: "Merry Christmas", AudioIngles: "/audio/videoUno/merryChristmas.mp3" },
            { Espanol: "Gracias por la comida", AudioEspanol: "/audio/nivelUno/graciasporlacomida.mp3", Ingles: "Thanks for the food", AudioIngles: "/audio/videoUno/thanksforthefood.mp3" },
            { Espanol: "Gracias por preguntar", AudioEspanol: "/audio/nivelUno/graciasporpreguntar.mp3", Ingles: "Thanks for asking", AudioIngles: "/audio/videoDos/thanksforasking.mp3" },
            { Espanol: "Gracias por tu ayuda", AudioEspanol: "/audio/nivelUno/graciasportuayuda.mp3", Ingles: "Thanks for your help", AudioIngles: "/audio/videoUno/thanksforyourhelp.mp3" },
            { Espanol: "Gracias", AudioEspanol: "/audio/nivelUno/gracias.mp3", Ingles: "Thank you", AudioIngles: "/audio/videoUno/thankyou.mp3" },
            { Espanol: "Hasta luego", AudioEspanol: "/audio/nivelUno/hastaluego.mp3", Ingles: "See you later", AudioIngles: "/audio/videoUno/seeyoulater.mp3" },
            { Espanol: "Hasta mañana", AudioEspanol: "/audio/nivelUno/hastamanana.mp3", Ingles: "See you tomorrow", AudioIngles: "/audio/videoUno/seeyoutomorrow.mp3" },
            { Espanol: "Hasta pronto", AudioEspanol: "/audio/nivelUno/hastapronto.mp3", Ingles: "See you soon", AudioIngles: "/audio/videoUno/seeyousoon.mp3" },
            { Espanol: "Hola", AudioEspanol: "/audio/nivelUno/hola.mp3", Ingles: "Hello", AudioIngles: "/audio/videoUno/hello.mp3" },
            { Espanol: "Hoy", AudioEspanol: "/audio/nivelUno/hoy.mp3", Ingles: "Today", AudioIngles: "/audio/videoUno/today.mp3" },
            { Espanol: "Inténtalo otra vez", AudioEspanol: "/audio/nivelUno/intentalootravez.mp3", Ingles: "Try again", AudioIngles: "/audio/videoUno/tryagain.mp3" },
            { Espanol: "La mañana", AudioEspanol: "/audio/nivelUno/lamanana.mp3", Ingles: "Morning", AudioIngles: "/audio/videoUno/morning.mp3" },
            { Espanol: "La tarde", AudioEspanol: "/audio/nivelUno/latarde1.mp3", Ingles: "Afternoon", AudioIngles: "/audio/videoUno/afternoon.mp3" },
            { Espanol: "La tarde", AudioEspanol: "/audio/nivelUno/latarde1.mp3", Ingles: "Evening (5-7 pm)", AudioIngles: "/audio/videoUno/evening.mp3" },
            { Espanol: "Llámame", AudioEspanol: "/audio/nivelUno/llamame.mp3", Ingles: "Call me", AudioIngles: "/audio/videoUno/callme.mp3" },
            { Espanol: "Llegué tarde", AudioEspanol: "/audio/nivelUno/lleguetarde.mp3", Ingles: "I arrived late", AudioIngles: "/audio/videoUno/iarrivedlate.mp3" },
            { Espanol: "Llegué temprano", AudioEspanol: "/audio/nivelUno/lleguetemprano.mp3", Ingles: "I arrived early", AudioIngles: "/audio/videoUno/iarrivedearly.mp3" },
            { Espanol: "Lo siento", AudioEspanol: "/audio/nivelUno/losiento.mp3", Ingles: "I´m sorry", AudioIngles: "/audio/videoUno/amsorry.mp3" },
            { Espanol: "Mañana", AudioEspanol: "/audio/nivelUno/manana.mp3", Ingles: "Tomorrow", AudioIngles: "/audio/videoUno/tomorrow.mp3" },
            { Espanol: "Me gusta", AudioEspanol: "/audio/nivelUno/megusta.mp3", Ingles: "I like it", AudioIngles: "/audio/videoUno/ilikeit.mp3" },
            { Espanol: "Me encanta escuchar música", AudioEspanol: "/audio/nivelUno/meencantaescuchar.mp3", Ingles: "I like listening to music", AudioIngles: "/audio/videoDos/ilikelisteningtomusic.mp3" },
            { Espanol: "Me gusta leer libros", AudioEspanol: "/audio/nivelUno/megustaleer.mp3", Ingles: "I like reading books", AudioIngles: "/audio/videoDos/ilikereadingbooks.mp3" },
            { Espanol: "Me gusta tu camisa", AudioEspanol: "/audio/nivelUno/megustatucamisa.mp3", Ingles: "I like your shirt", AudioIngles: "/audio/videoDos/ilikeyourshirt.mp3" },
            { Espanol: "Me gusta ver películas", AudioEspanol: "/audio/nivelUno/megustaverp.mp3", Ingles: "I like watching movies", AudioIngles: "/audio/videoDos/ilikewatchingmovies.mp3" },
            { Espanol: "Me gusta ver televisión", AudioEspanol: "/audio/nivelUno/megustavert.mp3", Ingles: "I like watching television", AudioIngles: "/audio/videoDos/ilikewatchingtelevision.mp3" },
            { Espanol: "Me gustas", AudioEspanol: "/audio/nivelUno/megustas.mp3", Ingles: "I like you", AudioIngles: "/audio/videoUno/ilikeu.mp3" },
            { Espanol: "Mejórate pronto", AudioEspanol: "/audio/nivelUno/mejoratepronto.mp3", Ingles: "Get well soon", AudioIngles: "/audio/videoUno/getwellsoon.mp3" },
            { Espanol: "Me siento bien", AudioEspanol: "/audio/nivelUno/mesientobien.mp3", Ingles: "I feel okay", AudioIngles: "/audio/videoDos/ifeelok.mp3" },
            { Espanol: "Me siento enfermo(a)", AudioEspanol: "/audio/nivelUno/mesientoenfermo.mp3", Ingles: "I feel sick", AudioIngles: "/audio/videoDos/ifeelsick.mp3" },
            { Espanol: "Me siento perezoso(a)", AudioEspanol: "/audio/nivelUno/mesientoperezoso.mp3", Ingles: "I feel lazy", AudioIngles: "/audio/videoDos/ifeellazy.mp3" },
            { Espanol: "Me siento raro(a)", AudioEspanol: "/audio/nivelUno/mesientoraro.mp3", Ingles: "I feel weird", AudioIngles: "/audio/videoDos/ifeelweird.mp3" },
            { Espanol: "Mi día fue bueno", AudioEspanol: "/audio/nivelUno/midiafuebueno.mp3", Ingles: "My day was good", AudioIngles: "/audio/videoUno/mydaywasgood.mp3" },
            { Espanol: "Mi día fue malo", AudioEspanol: "/audio/nivelUno/midiafuemalo.mp3", Ingles: "My day was bad", AudioIngles: "/audio/videoUno/mydaywasbad.mp3" },
            { Espanol: "Mi nombre es", AudioEspanol: "/audio/nivelUno/minombrees.mp3", Ingles: "My name is", AudioIngles: "/audio/videoUno/mynameis.mp3" },
            { Espanol: "Mucho gusto", AudioEspanol: "/audio/nivelUno/muchogusto.mp3", Ingles: "Nice to meet you", AudioIngles: "/audio/videoUno/nicetomeetyou.mp3" },
            { Espanol: "Muy bien", AudioEspanol: "/audio/nivelUno/muybien.mp3", Ingles: "Very good", AudioIngles: "/audio/videoUno/verygood.mp3" },
            { Espanol: "Muy mal", AudioEspanol: "/audio/nivelUno/muymal.mp3", Ingles: "Very bad", AudioIngles: "/audio/videoUno/verybad.mp3" },
            { Espanol: "Nada", AudioEspanol: "/audio/nivelUno/nada.mp3", Ingles: "Nothing", AudioIngles: "/audio/videoUno/nothing.mp3" },
            { Espanol: "Necesito ayuda", AudioEspanol: "/audio/nivelUno/necesitoayuda.mp3", Ingles: "I need help", AudioIngles: "/audio/videoUno/ineedhelp.mp3" },
            { Espanol: "Necesito practicar mi inglés", AudioEspanol: "/audio/nivelUno/necesitopracticar.mp3", Ingles: "I need to practice my English", AudioIngles: "/audio/videoDos/ineedtopracticemyenglish.mp3" },
            { Espanol: "No entiendo", AudioEspanol: "/audio/nivelUno/noentiendo.mp3", Ingles: "I don´t understand", AudioIngles: "/audio/videoUno/idontunderstand.mp3" },
            { Espanol: "No lo puedo creer", AudioEspanol: "/audio/nivelUno/nolopuedocreer.mp3", Ingles: "I can´t believe it", AudioIngles: "/audio/videoUno/icantbelieveit.mp3" },
            { Espanol: "No", AudioEspanol: "/audio/nivelUno/no.mp3", Ingles: "No", AudioIngles: "/audio/videoUno/no.mp3" },
            { Espanol: "No, gracias", AudioEspanol: "/audio/nivelUno/nogracias.mp3", Ingles: "No, thanks", AudioIngles: "/audio/videoUno/nothanks.mp3" },
            { Espanol: "Noche", AudioEspanol: "/audio/nivelUno/noche.mp3", Ingles: "Night", AudioIngles: "/audio/videoUno/night.mp3" },
            { Espanol: "No puedo esperar que acabe la escuela", AudioEspanol: "/audio/nivelUno/nopuedoesperarqueacabelae.mp3", Ingles: "I can´t wait for school to end", AudioIngles: "/audio/videoDos/icantwaitforschooltoend.mp3" },
            { Espanol: "No puedo esperar que sea verano", AudioEspanol: "/audio/nivelUno/nopuedoesperarqueseav.mp3", Ingles: "I can´t wait for summer", AudioIngles: "/audio/videoDos/icantwaitforsummer.mp3" },
            { Espanol: "No tengo empleo", AudioEspanol: "/audio/nivelUno/notengoempleo.mp3", Ingles: "I´m unemployed", AudioIngles: "/audio/videoDos/amunemployeed.mp3" },
            { Espanol: "Otra vez", AudioEspanol: "/audio/nivelUno/otravez.mp3", Ingles: "Again", AudioIngles: "/audio/videoUno/again.mp3" },
            { Espanol: "Por ahí", AudioEspanol: "/audio/nivelUno/porahi.mp3", Ingles: "Over there", AudioIngles: "/audio/videoUno/overthere.mp3" },
            { Espanol: "Por favor, habla más despacio", AudioEspanol: "/audio/nivelUno/porfavorhablamasdespacio.mp3", Ingles: "Please, speak more slowly", AudioIngles: "/audio/videoUno/pleasespeakmoreslowly.mp3" },
            { Espanol: "Por favor, siéntate", AudioEspanol: "/audio/nivelUno/porfavorsientate.mp3", Ingles: "Please, sit down", AudioIngles: "/audio/videoUno/pleasesitdown.mp3" },
            { Espanol: "Qué genial", AudioEspanol: "/audio/nivelUno/quegenial.mp3", Ingles: "How cool", AudioIngles: "/audio/videoUno/howcool.mp3" }            
        ];


        $('#divTablaUno').append('<section class="table" ng-controller="inglesUnoController" class=""></section>');
        var tabla = $('#divTablaUno').children();

        $scope.registroUnoInglesA = [];

        for (var i = 0 ; i < $scope.registroUnoIngles.length ; i++) {
            var color = "white";
            if (i % 2 == 0)
                color = "#f5f5f5";

            $scope.registroUnoInglesA.push({
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