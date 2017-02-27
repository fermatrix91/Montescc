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
            { Espanol: "Adiós", AudioEspanol: "/audio/ParteUno/adios.mp3", Ingles: "Goodbye", AudioIngles: "/audio/ParteUno/goodbye.mp3" },
            { Espanol: "Aquí", AudioEspanol: "/audio/ParteUno/aqui.mp3", Ingles: "Here", AudioIngles: "/audio/ParteUno/here.mp3" },
            { Espanol: "Ayer", AudioEspanol: "/audio/ParteUno/ayer.mp3", Ingles: "Yesterday", AudioIngles: "/audio/ParteUno/yesterday.mp3" },
            { Espanol: "Bienvenido(a)", AudioEspanol: "/audio/ParteUno/bienvenido.mp3", Ingles: "Welcome", AudioIngles: "/audio/ParteUno/welcome.mp3" },
            { Espanol: "Buen día", AudioEspanol: "/audio/ParteUno/buendia.mp3", Ingles: "Good day", AudioIngles: "/audio/ParteUno/goodday.mp3" },
            { Espanol: "Buen trabajo", AudioEspanol: "/audio/ParteUno/buentrabajo.mp3", Ingles: "Good job", AudioIngles: "/audio/ParteUno/goodjob.mp3" },
            { Espanol: "Buena idea", AudioEspanol: "/audio/ParteUno/buenaidea.mp3", Ingles: "Good idea", AudioIngles: "/audio/ParteUno/goodidea.mp3" },
            { Espanol: "Buena suerte", AudioEspanol: "/audio/ParteUno/buenasuerte.mp3", Ingles: "Good luck", AudioIngles: "/audio/ParteUno/goodluck.mp3" },
            { Espanol: "Buenas noches", AudioEspanol: "/audio/ParteUno/buenasnoches.mp3", Ingles: "Good night", AudioIngles: "/audio/ParteUno/goodnight.mp3" },
            { Espanol: "Buenas tardes", AudioEspanol: "/audio/ParteUno/buenastardes1.mp3", Ingles: "Good afternoon", AudioIngles: "/audio/ParteUno/goodafternoon.mp3" },
            { Espanol: "Buenas tardes", AudioEspanol: "/audio/ParteUno/buenastardes2.mp3", Ingles: "Good evening (5-7 p.m.)", AudioIngles: "/audio/ParteUno/goodevening.mp3" },
            { Espanol: "Creo que no", AudioEspanol: "/audio/ParteUno/creoqueno.mp3", Ingles: "I don´t think so", AudioIngles: "/audio/ParteUno/idontthinkso.mp3" },
            { Espanol: "Creo que sí", AudioEspanol: "/audio/ParteUno/creoquesi.mp3", Ingles: "I think so", AudioIngles: "/audio/ParteUno/ithinkso.mp3" },
            { Espanol: "Cuánto tiempo sin verte", AudioEspanol: "/audio/ParteUno/cuantotiempo.mp3", Ingles: "Long time no see", AudioIngles: "/audio/ParteUno/longtimenosee.mp3" },
            { Espanol: "De nada", AudioEspanol: "/audio/ParteUno/denada.mp3", Ingles: "Your welcome", AudioIngles: "/audio/ParteUno/yourewelcome.mp3" },
            { Espanol: "Después estaré libre", AudioEspanol: "/audio/ParteUno/despuesestarel.mp3", Ingles: "I´ll be free later", AudioIngles: "/audio/ParteUno/illbefreelater.mp3" },
            { Espanol: "Después estaré ocupado(a)", AudioEspanol: "/audio/ParteUno/despuesestareo.mp3", Ingles: "I´ll be busy later", AudioIngles: "/audio/ParteUno/illbebusylater.mp3" },
            { Espanol: "Después tengo un examen", AudioEspanol: "/audio/ParteUno/despuestengo.mp3", Ingles: "I have an exam later", AudioIngles: "/audio/ParteUno/ihaveanexamlater.mp3" },
            { Espanol: "Día", AudioEspanol: "/audio/ParteUno/dia.mp3", Ingles: "Day", AudioIngles: "/audio/ParteUno/day.mp3" },
            { Espanol: "Entiendo", AudioEspanol: "/audio/ParteUno/entiendo.mp3", Ingles: "I understand", AudioIngles: "/audio/ParteUno/iunderstand.mp3" },
            { Espanol: "Entra", AudioEspanol: "/audio/ParteUno/entra.mp3", Ingles: "Come in", AudioIngles: "/audio/ParteUno/comein.mp3" },
            { Espanol: "Envíame un mensaje cuando estés libre", AudioEspanol: "/audio/ParteUno/enviameunmensaje.mp3", Ingles: "Message me when you´re free", AudioIngles: "/audio/ParteUno/messagemewhenurefree.mp3" },
            { Espanol: "Eres tan amable", AudioEspanol: "/audio/ParteUno/erestanamable.mp3", Ingles: "You´re so nice", AudioIngles: "/audio/ParteUno/youaresonice.mp3" },
            { Espanol: "Es aburrido", AudioEspanol: "/audio/ParteUno/esaburrido.mp3", Ingles: "It´s boring", AudioIngles: "/audio/ParteUno/itsboring.mp3" },
            { Espanol: "Es delicioso", AudioEspanol: "/audio/ParteUno/esdelicioso.mp3", Ingles: "It´s delicious", AudioIngles: "/audio/ParteUno/itsdelicious.mp3" },
            { Espanol: "Es difícil", AudioEspanol: "/audio/ParteUno/esdificil.mp3", Ingles: "It´s difficult", AudioIngles: "/audio/ParteUno/itsdifficult.mp3" },
            { Espanol: "Es fácil", AudioEspanol: "/audio/ParteUno/esfacil.mp3", Ingles: "It´s easy", AudioIngles: "/audio/ParteUno/itseasy.mp3" },
            { Espanol: "Es un día lluvioso", AudioEspanol: "/audio/ParteUno/esundialluvioso.mp3", Ingles: "It´s a rainy day", AudioIngles: "/audio/ParteUno/itsarainyday.mp3" },
            { Espanol: "Es un hermoso día", AudioEspanol: "/audio/ParteUno/esunhermosodia.mp3", Ingles: "It´s a beautiful day", AudioIngles: "/audio/ParteUno/itsabeautifulday.mp3" },
            { Espanol: "Es un placer", AudioEspanol: "/audio/ParteUno/esunplacer.mp3", Ingles: "It´s a pleasure", AudioIngles: "/audio/ParteUno/itsapleasure.mp3" },
            { Espanol: "Está bien", AudioEspanol: "/audio/ParteUno/estabien.mp3", Ingles: "It´s fine", AudioIngles: "/audio/ParteUno/itsfine.mp3" },
            { Espanol: "Está lloviendo", AudioEspanol: "/audio/ParteUno/estalloviendo.mp3", Ingles: "It´s raining", AudioIngles: "/audio/ParteUno/itsraining.mp3" },
            { Espanol: "Está nevando", AudioEspanol: "/audio/ParteUno/estanevando.mp3", Ingles: "It´s snowing", AudioIngles: "/audio/ParteUno/itssnowing.mp3" },
            { Espanol: "Está nublado", AudioEspanol: "/audio/ParteUno/estanublado.mp3", Ingles: "It´s cloudy", AudioIngles: "/audio/ParteUno/itscloudy.mp3" },
            { Espanol: "Está soleado", AudioEspanol: "/audio/ParteUno/estasoleado.mp3", Ingles: "It´s sunny", AudioIngles: "/audio/ParteUno/itssunny.mp3" },
            { Espanol: "Estoy bien", AudioEspanol: "/audio/ParteUno/estoybien.mp3", Ingles: "I´m fine", AudioIngles: "/audio/ParteUno/amfine.mp3" },
            { Espanol: "Estoy buscando trabajo", AudioEspanol: "/audio/ParteUno/estoybuscandotrabajo.mp3", Ingles: "I´m looking for a job", AudioIngles: "/audio/ParteUno/amlookingforajob.mp3" },
            { Espanol: "Estoy cansado(a)", AudioEspanol: "/audio/ParteUno/estoycansado.mp3", Ingles: "I´m tired", AudioIngles: "/audio/ParteUno/amtired.mp3" },
            { Espanol: "Estoy con mi familia", AudioEspanol: "/audio/ParteUno/estoyconmifamilia.mp3", Ingles: "I´m with my family", AudioIngles: "/audio/ParteUno/amwithmyfamily.mp3" },
            { Espanol: "Estoy con mis amigos", AudioEspanol: "/audio/ParteUno/estoyconmisamigos.mp3", Ingles: "I´m with my friends", AudioIngles: "/audio/ParteUno/amwithmyfriends.mp3" },
            { Espanol: "Estoy confundido(a)", AudioEspanol: "/audio/ParteUno/estoyconfundido.mp3", Ingles: "I´m confused", AudioIngles: "/audio/ParteUno/amconfused.mp3" },
            { Espanol: "Estoy esperando", AudioEspanol: "/audio/ParteUno/estoyesperando.mp3", Ingles: "I´m waiting", AudioIngles: "/audio/ParteUno/amwaiting.mp3" },
            { Espanol: "Estoy perdido(a)", AudioEspanol: "/audio/ParteUno/estoyperdido.mp3", Ingles: "I´m lost", AudioIngles: "/audio/ParteUno/amlost.mp3" },
            { Espanol: "Estoy preparando la cena", AudioEspanol: "/audio/ParteUno/estoypreparandolacena.mp3", Ingles: "I´m cooking dinner", AudioIngles: "/audio/ParteUno/amcookingdinner.mp3" },
            { Espanol: "Fecha", AudioEspanol: "/audio/ParteUno/fecha.mp3", Ingles: "Date", AudioIngles: "/audio/ParteUno/date.mp3" },
            { Espanol: "Feliz año nuevo", AudioEspanol: "/audio/ParteUno/felizanonuevo.mp3", Ingles: "Happy New Year", AudioIngles: "/audio/ParteUno/happynewyear.mp3" },
            { Espanol: "Feliz cumpleaños", AudioEspanol: "/audio/ParteUno/felizcumpleanos.mp3", Ingles: "Happy birthday", AudioIngles: "/audio/ParteUno/happybirthday.mp3" },
            { Espanol: "Feliz navidad", AudioEspanol: "/audio/ParteUno/feliznavidad.mp3", Ingles: "Merry Christmas", AudioIngles: "/audio/ParteUno/merryChristmas.mp3" },
            { Espanol: "Gracias por la comida", AudioEspanol: "/audio/ParteUno/graciasporlacomida.mp3", Ingles: "Thanks for the food", AudioIngles: "/audio/ParteUno/thanksforthefood.mp3" },
            { Espanol: "Gracias por preguntar", AudioEspanol: "/audio/ParteUno/graciasporpreguntar.mp3", Ingles: "Thanks for asking", AudioIngles: "/audio/ParteUno/thanksforasking.mp3" },
            { Espanol: "Gracias por tu ayuda", AudioEspanol: "/audio/ParteUno/graciasportuayuda.mp3", Ingles: "Thanks for your help", AudioIngles: "/audio/ParteUno/thanksforyourhelp.mp3" },
            { Espanol: "Gracias", AudioEspanol: "/audio/ParteUno/gracias.mp3", Ingles: "Thank you", AudioIngles: "/audio/ParteUno/thankyou.mp3" },
            { Espanol: "Hasta luego", AudioEspanol: "/audio/ParteUno/hastaluego.mp3", Ingles: "See you later", AudioIngles: "/audio/ParteUno/seeyoulater.mp3" },
            { Espanol: "Hasta mañana", AudioEspanol: "/audio/ParteUno/hastamanana.mp3", Ingles: "See you tomorrow", AudioIngles: "/audio/ParteUno/seeyoutomorrow.mp3" },
            { Espanol: "Hasta pronto", AudioEspanol: "/audio/ParteUno/hastapronto.mp3", Ingles: "See you soon", AudioIngles: "/audio/ParteUno/seeyousoon.mp3" },
            { Espanol: "Hola", AudioEspanol: "/audio/ParteUno/hola.mp3", Ingles: "Hello", AudioIngles: "/audio/ParteUno/hello.mp3" },
            { Espanol: "Hoy", AudioEspanol: "/audio/ParteUno/hoy.mp3", Ingles: "Today", AudioIngles: "/audio/ParteUno/today.mp3" },
            { Espanol: "Inténtalo otra vez", AudioEspanol: "/audio/ParteUno/intentalootravez.mp3", Ingles: "Try again", AudioIngles: "/audio/ParteUno/tryagain.mp3" },
            { Espanol: "La mañana", AudioEspanol: "/audio/ParteUno/lamanana.mp3", Ingles: "Morning", AudioIngles: "/audio/ParteUno/morning.mp3" },
            { Espanol: "La tarde", AudioEspanol: "/audio/ParteUno/latarde1.mp3", Ingles: "Afternoon", AudioIngles: "/audio/ParteUno/afternoon.mp3" },
            { Espanol: "La tarde", AudioEspanol: "/audio/ParteUno/latarde1.mp3", Ingles: "Evening (5-7 pm)", AudioIngles: "/audio/ParteUno/evening.mp3" },
            { Espanol: "Llámame", AudioEspanol: "/audio/ParteUno/llamame.mp3", Ingles: "Call me", AudioIngles: "/audio/ParteUno/callme.mp3" },
            { Espanol: "Llegué tarde", AudioEspanol: "/audio/ParteUno/lleguetarde.mp3", Ingles: "I arrived late", AudioIngles: "/audio/ParteUno/iarrivedlate.mp3" },
            { Espanol: "Llegué temprano", AudioEspanol: "/audio/ParteUno/lleguetemprano.mp3", Ingles: "I arrived early", AudioIngles: "/audio/ParteUno/iarrivedearly.mp3" },
            { Espanol: "Lo siento", AudioEspanol: "/audio/ParteUno/losiento.mp3", Ingles: "I´m sorry", AudioIngles: "/audio/ParteUno/amsorry.mp3" },
            { Espanol: "Mañana", AudioEspanol: "/audio/ParteUno/manana.mp3", Ingles: "Tomorrow", AudioIngles: "/audio/ParteUno/tomorrow.mp3" },
            { Espanol: "Me gusta", AudioEspanol: "/audio/ParteUno/megusta.mp3", Ingles: "I like it", AudioIngles: "/audio/ParteUno/ilikeit.mp3" },
            { Espanol: "Me encanta escuchar música", AudioEspanol: "/audio/ParteUno/meencantaescuchar.mp3", Ingles: "I like listening to music", AudioIngles: "/audio/ParteUno/ilikelisteningtomusic.mp3" },
            { Espanol: "Me gusta leer libros", AudioEspanol: "/audio/ParteUno/megustaleer.mp3", Ingles: "I like reading books", AudioIngles: "/audio/ParteUno/ilikereadingbooks.mp3" },
            { Espanol: "Me gusta tu camisa", AudioEspanol: "/audio/ParteUno/megustatucamisa.mp3", Ingles: "I like your shirt", AudioIngles: "/audio/ParteUno/ilikeyourshirt.mp3" },
            { Espanol: "Me gusta ver películas", AudioEspanol: "/audio/ParteUno/megustaverp.mp3", Ingles: "I like watching movies", AudioIngles: "/audio/ParteUno/ilikewatchingmovies.mp3" },
            { Espanol: "Me gusta ver televisión", AudioEspanol: "/audio/ParteUno/megustavert.mp3", Ingles: "I like watching television", AudioIngles: "/audio/ParteUno/ilikewatchingtelevision.mp3" },
            { Espanol: "Me gustas", AudioEspanol: "/audio/ParteUno/megustas.mp3", Ingles: "I like you", AudioIngles: "/audio/ParteUno/ilikeu.mp3" },
            { Espanol: "Mejórate pronto", AudioEspanol: "/audio/ParteUno/mejoratepronto.mp3", Ingles: "Get well soon", AudioIngles: "/audio/ParteUno/getwellsoon.mp3" },
            { Espanol: "Me siento bien", AudioEspanol: "/audio/ParteUno/mesientobien.mp3", Ingles: "I feel okay", AudioIngles: "/audio/ParteUno/ifeelok.mp3" },
            { Espanol: "Me siento enfermo(a)", AudioEspanol: "/audio/ParteUno/mesientoenfermo.mp3", Ingles: "I feel sick", AudioIngles: "/audio/ParteUno/ifeelsick.mp3" },
            { Espanol: "Me siento perezoso(a)", AudioEspanol: "/audio/ParteUno/mesientoperezoso.mp3", Ingles: "I feel lazy", AudioIngles: "/audio/ParteUno/ifeellazy.mp3" },
            { Espanol: "Me siento raro(a)", AudioEspanol: "/audio/ParteUno/mesientoraro.mp3", Ingles: "I feel weird", AudioIngles: "/audio/ParteUno/ifeelweird.mp3" },
            { Espanol: "Mi día fue bueno", AudioEspanol: "/audio/ParteUno/midiafuebueno.mp3", Ingles: "My day was good", AudioIngles: "/audio/ParteUno/mydaywasgood.mp3" },
            { Espanol: "Mi día fue malo", AudioEspanol: "/audio/ParteUno/midiafuemalo.mp3", Ingles: "My day was bad", AudioIngles: "/audio/ParteUno/mydaywasbad.mp3" },
            { Espanol: "Mi nombre es", AudioEspanol: "/audio/ParteUno/minombrees.mp3", Ingles: "My name is", AudioIngles: "/audio/ParteUno/mynameis.mp3" },
            { Espanol: "Mucho gusto", AudioEspanol: "/audio/ParteUno/muchogusto.mp3", Ingles: "Nice to meet you", AudioIngles: "/audio/ParteUno/nicetomeetyou.mp3" },
            { Espanol: "Muy bien", AudioEspanol: "/audio/ParteUno/muybien.mp3", Ingles: "Very good", AudioIngles: "/audio/ParteUno/verygood.mp3" },
            { Espanol: "Muy mal", AudioEspanol: "/audio/ParteUno/muymal.mp3", Ingles: "Very bad", AudioIngles: "/audio/ParteUno/verybad.mp3" },
            { Espanol: "Nada", AudioEspanol: "/audio/ParteUno/nada.mp3", Ingles: "Nothing", AudioIngles: "/audio/ParteUno/nothing.mp3" },
            { Espanol: "Necesito ayuda", AudioEspanol: "/audio/ParteUno/necesitoayuda.mp3", Ingles: "I need help", AudioIngles: "/audio/ParteUno/ineedhelp.mp3" },
            { Espanol: "Necesito practicar mi inglés", AudioEspanol: "/audio/ParteUno/necesitopracticar.mp3", Ingles: "I need to practice my English", AudioIngles: "/audio/ParteUno/ineedtopracticemyenglish.mp3" },
            { Espanol: "No entiendo", AudioEspanol: "/audio/ParteUno/noentiendo.mp3", Ingles: "I don´t understand", AudioIngles: "/audio/ParteUno/idontunderstand.mp3" },
            { Espanol: "No lo puedo creer", AudioEspanol: "/audio/ParteUno/nolopuedocreer.mp3", Ingles: "I can´t believe it", AudioIngles: "/audio/ParteUno/icantbelieveit.mp3" },
            { Espanol: "No", AudioEspanol: "/audio/ParteUno/no.mp3", Ingles: "No", AudioIngles: "/audio/ParteUno/no.mp3" },
            { Espanol: "No, gracias", AudioEspanol: "/audio/ParteUno/nogracias.mp3", Ingles: "No, thanks", AudioIngles: "/audio/ParteUno/nothanks.mp3" },
            { Espanol: "Noche", AudioEspanol: "/audio/ParteUno/noche.mp3", Ingles: "Night", AudioIngles: "/audio/ParteUno/night.mp3" },
            { Espanol: "No puedo esperar que acabe la escuela", AudioEspanol: "/audio/ParteUno/nopuedoesperarqueacabelae.mp3", Ingles: "I can´t wait for school to end", AudioIngles: "/audio/ParteUno/icantwaitforschooltoend.mp3" },
            { Espanol: "No puedo esperar que sea verano", AudioEspanol: "/audio/ParteUno/nopuedoesperarqueseav.mp3", Ingles: "I can´t wait for summer", AudioIngles: "/audio/ParteUno/icantwaitforsummer.mp3" },
            { Espanol: "No tengo empleo", AudioEspanol: "/audio/ParteUno/notengoempleo.mp3", Ingles: "I´m unemployed", AudioIngles: "/audio/ParteUno/amunemployeed.mp3" },
            { Espanol: "Otra vez", AudioEspanol: "/audio/ParteUno/otravez.mp3", Ingles: "Again", AudioIngles: "/audio/ParteUno/again.mp3" },
            { Espanol: "Por ahí", AudioEspanol: "/audio/ParteUno/porahi.mp3", Ingles: "Over there", AudioIngles: "/audio/ParteUno/overthere.mp3" },
            { Espanol: "Por favor, habla más despacio", AudioEspanol: "/audio/ParteUno/porfavorhablamasdespacio.mp3", Ingles: "Please, speak more slowly", AudioIngles: "/audio/ParteUno/pleasespeakmoreslowly.mp3" },
            { Espanol: "Por favor, siéntate", AudioEspanol: "/audio/ParteUno/porfavorsientate.mp3", Ingles: "Please, sit down", AudioIngles: "/audio/ParteUno/pleasesitdown.mp3" },
            { Espanol: "Qué genial", AudioEspanol: "/audio/ParteUno/quegenial.mp3", Ingles: "How cool", AudioIngles: "/audio/ParteUno/howcool.mp3" }            
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