var appModulo = angular.module('inglesApp', []);

appModulo.controller('inglesController', ['$scope', '$sce', function ($scope, $sce) {
    $scope.NivelActual = $('#nivelActual').text();

    $('#cuadroInglesEspanol').css('background', '#d45151');
    $('#cuadroInglesEspanol').css('padding', '1px');

    //if ($scope.NivelActual == 1)
    NivelUno();
    //if ($scope.NivelActual == 2)
    NivelDos();
    //if ($scope.NivelActual == 3)
    NivelTres();
    if ($scope.NivelActual == 4)
        NivelCuatro();
    if ($scope.NivelActual == 5)
        NivelCinco();
    if ($scope.NivelActual == 6)
        NivelSeis();
    if ($scope.NivelActual == 7)
        NivelSiete();

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
            { Espanol: "Qué genial", AudioEspanol: "/audio/nivelUno/quegenial.mp3", Ingles: "How cool", AudioIngles: "/audio/videoUno/howcool.mp3" },
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

    function NivelDos() {
        $('#dosBTN').css('background-color', '#333');

        $scope.registroUnoIngles = [
            { Espanol: "Acabo de llegar a casa", AudioEspanol: "/audio/nivelDos/02001AcaboDeLlegarACasa.mp3", Ingles: "I just got home", AudioIngles: "/audio/videoDos/ijustgothome.mp3" },
            { Espanol: "Agradezco tu ayuda", AudioEspanol: "/audio/nivelDos/02002AgradezcoTuAyuda.mp3", Ingles: "I appreciate your help", AudioIngles: "/audio/videoTres/iAppreciateYourHelp.mp3" },
            { Espanol: "Alguien me está llamando", AudioEspanol: "/audio/nivelDos/02003AlguienMeEstaLlamando.mp3", Ingles: "Someone is calling me", AudioIngles: "/audio/videoTres/someoneIsCallingMe.mp3" },
            { Espanol: "Aquí es de noche", AudioEspanol: "/audio/nivelDos/02004AquiEsDeNoche.mp3", Ingles: "It´s night here", AudioIngles: "/audio/videoTres/itsNightHere.mp3" },
            { Espanol: "Aquí es medianoche", AudioEspanol: "/audio/nivelDos/02005AquiEsMedianoche.mp3", Ingles: "It´s midnight here", AudioIngles: "/audio/videoTres/itsMidNightHere.mp3" },
            { Espanol: "Aquí estaré", AudioEspanol: "/audio/nivelDos/02006AquiEstare.mp3", Ingles: "I will be here", AudioIngles: "/audio/videoTres/iWillBeHere.mp3" },
            { Espanol: "Aquí tienes", AudioEspanol: "/audio/nivelDos/02007AquiTienes.mp3", Ingles: "Here you go", AudioIngles: "/audio/videoTres/hereYouGo.mp3" },
            { Espanol: "Baja el volumen", AudioEspanol: "/audio/nivelDos/02008BajaElVolumen.mp3", Ingles: "Turn the volume down", AudioIngles: "/audio/videoDos/turnthevolumedown.mp3" },
            { Espanol: "Con nadie estoy", AudioEspanol: "/audio/nivelDos/02009ConNadieEstoy.mp3", Ingles: "I´m with nobody", AudioIngles: "/audio/videoTres/amWithNobody.mp3" },
            { Espanol: "Dime cuando estés listo(a)", AudioEspanol: "/audio/nivelDos/02010DimeCuandoEstesListo.mp3", Ingles: "Tell me when you´re ready", AudioIngles: "/audio/videoDos/tellmewhenureready.mp3" },
            { Espanol: "Dime más", AudioEspanol: "/audio/nivelDos/02011DimeMas.mp3", Ingles: "Tell me more", AudioIngles: "/audio/videoDos/tellmemore.mp3" },
            { Espanol: "Dime si necesitas ayuda", AudioEspanol: "/audio/nivelDos/02012DimeSiNecesitasAyuda.mp3", Ingles: "Tell me if you need help", AudioIngles: "/audio/videoTres/helpMeIfYouNeedHelp.mp3" },
            { Espanol: "Dormí como bebé", AudioEspanol: "/audio/nivelDos/02013DormiComoBebe.mp3", Ingles: "I slept like a baby", AudioIngles: "/audio/videoDos/isleptlikeababy.mp3" },
            { Espanol: "Él es mi esposo", AudioEspanol: "/audio/nivelDos/02014ElEsMiEsposo.mp3", Ingles: "He´s my husband", AudioIngles: "/audio/videoTres/heIsMyHusband.mp3" },
            { Espanol: "El inglés es difícil", AudioEspanol: "/audio/nivelDos/02015ElInglesEsDificil.mp3", Ingles: "English is difficult", AudioIngles: "/audio/videoDos/englishisdifficult.mp3" },
            { Espanol: "El inglés es fácil", AudioEspanol: "/audio/nivelDos/02016ElInglesEsFacil.mp3", Ingles: "English is easy", AudioIngles: "/audio/videoDos/englishiseasy.mp3" },
            { Espanol: "El teléfono está sonando", AudioEspanol: "/audio/nivelDos/02017ElTelefonoEstaSonando.mp3", Ingles: "The phone is ringing", AudioIngles: "/audio/videoTres/thePhoneIsRinging.mp3" },
            { Espanol: "Ella es mi esposa", AudioEspanol: "/audio/nivelDos/02018EllaEsMiEsposa.mp3", Ingles: "She´s my wife", AudioIngles: "/audio/videoTres/sheIsMyWife.mp3" },
            { Espanol: "Eres un(a) buen(a) maestro(a)", AudioEspanol: "/audio/nivelDos/02019EresUnBuenMaestro.mp3", Ingles: "You´re a good teacher", AudioIngles: "/audio/videoTres/youAreAGoodTeacher.mp3" },
            { Espanol: "Es algo importante", AudioEspanol: "/audio/nivelDos/02020EsAlgoImportante.mp3", Ingles: "It´s something important", AudioIngles: "/audio/videoTres/itsSomethingImportant.mp3" },
            { Espanol: "Es cierto", AudioEspanol: "/audio/nivelDos/02021EsCierto.mp3", Ingles: "It´s true", AudioIngles: "/audio/videoDos/itstrue.mp3" },
            { Espanol: "Es emocionante", AudioEspanol: "/audio/nivelDos/02022EsEmocionante.mp3", Ingles: "It´s exciting", AudioIngles: "/audio/videoDos/itsexciting.mp3" },
            { Espanol: "Es gracioso porque es cierto", AudioEspanol: "/audio/nivelDos/02023EsGraciosoPorqueEsCierto.mp3", Ingles: "It´s funny because it´s true", AudioIngles: "/audio/videoDos/itsfunnybecauseitstrue.mp3" },
            { Espanol: "Es hora de alistarme", AudioEspanol: "/audio/nivelDos/02024EsHoraDeAlistarme.mp3", Ingles: "It´s time for me to get ready", AudioIngles: "/audio/videoTres/itsTimeForMeToGetReady.mp3" },
            { Espanol: "Es hora de cenar", AudioEspanol: "/audio/nivelDos/02025EsHoraDeCenar.mp3", Ingles: "It´s time for dinner", AudioIngles: "/audio/videoTres/itsTimeForDinner.mp3" },
            { Espanol: "Es hora de ir", AudioEspanol: "/audio/nivelDos/02026EsHoraDeIr.mp3", Ingles: "It´s time to leave", AudioIngles: "/audio/videoTres/itsTimeToLeave.mp3" },
            { Espanol: "Es impresionante", AudioEspanol: "/audio/nivelDos/02027EsImpresionante.mp3", Ingles: "It´s awesome", AudioIngles: "/audio/videoDos/itsawesome.mp3" },
            { Espanol: "Es inspirador(a)", AudioEspanol: "/audio/nivelDos/02028EsInspirador.mp3", Ingles: "It´s inspiring", AudioIngles: "/audio/videoDos/itsinspiring.mp3" },
            { Espanol: "Es interesante", AudioEspanol: "/audio/nivelDos/02029EsInteresante.mp3", Ingles: "It´s interesting", AudioIngles: "/audio/videoDos/itsinteresting.mp3" },
            { Espanol: "Es mío(a)", AudioEspanol: "/audio/nivelDos/02030EsMio.mp3", Ingles: "It´s mine", AudioIngles: "/audio/videoTres/itsMine.mp3" },
            { Espanol: "Es muy útil", AudioEspanol: "/audio/nivelDos/02031EsMuyUtil.mp3", Ingles: "It´s very helpful", AudioIngles: "/audio/videoDos/itsveryhelpful.mp3" },
            { Espanol: "Es normal", AudioEspanol: "/audio/nivelDos/02032EsNormal.mp3", Ingles: "It´s normal", AudioIngles: "/audio/videoDos/itsnormal.mp3" },
            { Espanol: "Es ruidoso(a)", AudioEspanol: "/audio/nivelDos/02033EsRuidoso.mp3", Ingles: "It´s noisy", AudioIngles: "/audio/videoDos/itsnoisy.mp3" },
            { Espanol: "Es terrible", AudioEspanol: "/audio/nivelDos/02034EsTerrible.mp3", Ingles: "It´s terrible", AudioIngles: "/audio/videoDos/itsterrible.mp3" },
            { Espanol: "Es un buen trabajo", AudioEspanol: "/audio/nivelDos/02035EsUnBuenTrabajo.mp3", Ingles: "It´s a good job", AudioIngles: "/audio/videoTres/itsAGoodJob.mp3" },
            { Espanol: "Es un error", AudioEspanol: "/audio/nivelDos/02036EsUnError.mp3", Ingles: "It´s a mistake", AudioIngles: "/audio/videoDos/itsamistake.mp3" },
            { Espanol: "Es un milagro", AudioEspanol: "/audio/nivelDos/02037EsUnMilagro.mp3", Ingles: "It´s a miracle", AudioIngles: "/audio/videoDos/itsamiracle.mp3" },
            { Espanol: "Es un secreto", AudioEspanol: "/audio/nivelDos/02038EsUnSecreto.mp3", Ingles: "It´s a secret", AudioIngles: "/audio/videoDos/itsasecret.mp3" },
            { Espanol: "Espérame", AudioEspanol: "/audio/nivelDos/02039Esperame.mp3", Ingles: "Wait for me", AudioIngles: "/audio/videoDos/waitforme.mp3" },
            { Espanol: "Espero verte pronto", AudioEspanol: "/audio/nivelDos/02040EsperoVertePronto.mp3", Ingles: "I hope to see you soon", AudioIngles: "/audio/videoDos/ihopetoseeyousoon.mp3" },
            { Espanol: "Está callado(a)", AudioEspanol: "/audio/nivelDos/02041EstaCallado.mp3", Ingles: "It´s quiet", AudioIngles: "/audio/videoDos/itsquiet.mp3" },
            { Espanol: "Está funcionando", AudioEspanol: "/audio/nivelDos/02042EstaFuncionando.mp3", Ingles: "It´s working", AudioIngles: "/audio/videoDos/itsworking.mp3" },
            { Espanol: "Está mejor", AudioEspanol: "/audio/nivelDos/02043EstaMejor.mp3", Ingles: "It´s better", AudioIngles: "/audio/videoDos/itsbetter.mp3" },
            { Espanol: "Está oscuro", AudioEspanol: "/audio/nivelDos/02044EstaOscuro.mp3", Ingles: "It´s dark", AudioIngles: "/audio/videoTres/itsDark.mp3" },
            { Espanol: "Está peor", AudioEspanol: "/audio/nivelDos/02045EstaPeor.mp3", Ingles: "It´s worse", AudioIngles: "/audio/videoDos/itsworse.mp3" },
            { Espanol: "Estaba pensando en ti", AudioEspanol: "/audio/nivelDos/02046EstabaPensandoEnTi.mp3", Ingles: "I was thinking of you", AudioIngles: "/audio/videoDos/iwasthinkingofyou.mp3" },
            { Espanol: "Están todos callados", AudioEspanol: "/audio/nivelDos/02047EstanTodosCallados.mp3", Ingles: "Everyone is quiet", AudioIngles: "/audio/videoTres/everyoneIsQuiet.mp3" },
            { Espanol: "Estos son mis hijos", AudioEspanol: "/audio/nivelDos/02048EstonSonMisHijos.mp3", Ingles: "These are my children", AudioIngles: "/audio/videoTres/theseAreMyChildren.mp3" },
            { Espanol: "Estoy aburrido(a)", AudioEspanol: "/audio/nivelDos/02049EstoyAburrido.mp3", Ingles: "I´m bored", AudioIngles: "/audio/videoTres/amBored.mp3" },
            { Espanol: "Estoy aquí", AudioEspanol: "/audio/nivelDos/02050EstoyAqui.mp3", Ingles: "I´m here", AudioIngles: "/audio/videoDos/amhere.mp3" },
            { Espanol: "Estoy aquí para ayudar", AudioEspanol: "/audio/nivelDos/02051EstoyAquiParaAyudar.mp3", Ingles: "I´m here to help", AudioIngles: "/audio/videoDos/amheretohelp.mp3" },
            { Espanol: "Estoy casado(a)", AudioEspanol: "/audio/nivelDos/02052EstoyCasado.mp3", Ingles: "I´m married", AudioIngles: "/audio/videoTres/amMarried.mp3" },
            { Espanol: "Estoy cerca", AudioEspanol: "/audio/nivelDos/02053EstoyCerca.mp3", Ingles: "I´m close", AudioIngles: "/audio/videoTres/amClose.mp3" },
            { Espanol: "Estoy comprometido(a)", AudioEspanol: "/audio/nivelDos/02054EstoyComprometido.mp3", Ingles: "I´m engaged", AudioIngles: "/audio/videoTres/amEngaged.mp3" },
            { Espanol: "Estoy en el camino", AudioEspanol: "/audio/nivelDos/02055EstoyEnElCamino.mp3", Ingles: "I´m on the way", AudioIngles: "/audio/videoTres/amOnTheWay.mp3" },
            { Espanol: "Estoy en mi cama", AudioEspanol: "/audio/nivelDos/02056EstoyEnMiCama.mp3", Ingles: "I´m on my bed", AudioIngles: "/audio/videoTres/amOnMyBed.mp3" },
            { Espanol: "Estoy en mi carro", AudioEspanol: "/audio/nivelDos/02057EstoyEnMiCarro.mp3", Ingles: "I´m in my car", AudioIngles: "/audio/videoTres/amInMyCar.mp3" },
            { Espanol: "Estoy en problemas", AudioEspanol: "/audio/nivelDos/02058EstoyEnProblemas.mp3", Ingles: "I´m in trouble", AudioIngles: "/audio/videoDos/amintrouble.mp3" },
            { Espanol: "Estoy estudiando en este momento", AudioEspanol: "/audio/nivelDos/02059EstoyEstudiandoEnEsteMomento.mp3", Ingles: "I´m studying right now", AudioIngles: "/audio/videoDos/amstudyingrightnow.mp3" },
            { Espanol: "Estoy feliz de verte", AudioEspanol: "/audio/nivelDos/02060EstoyFelizDeVerte.mp3", Ingles: "I´m happy to see you", AudioIngles: "/audio/videoTres/amHappyToSeeYou.mp3" },
            { Espanol: "Estoy feliz por ti", AudioEspanol: "/audio/nivelDos/02061EstoyFelizPorTi.mp3", Ingles: "I´m happy for you", AudioIngles: "/audio/videoDos/amhappyforyou.mp3" },
            { Espanol: "Estoy haciendo lo mismo", AudioEspanol: "/audio/nivelDos/02062EstoyHaciendoLoMismo.mp3", Ingles: "I´m doing the same", AudioIngles: "/audio/videoDos/amdoingthesame.mp3" },
            { Espanol: "Estoy haciendo planes", AudioEspanol: "/audio/nivelDos/02063EstoyHaciendoPlanes.mp3", Ingles: "I´m making plans", AudioIngles: "/audio/videoDos/ammakingplans.mp3" },
            { Espanol: "Estoy lejos", AudioEspanol: "/audio/nivelDos/02064EstoyLejos.mp3", Ingles: "I´m far", AudioIngles: "/audio/videoTres/amFar.mp3" },
            { Espanol: "Estoy libre este fin de semana", AudioEspanol: "/audio/nivelDos/02065EstoyLibreEsteFinDeSemana.mp3", Ingles: "I´m free this weekend", AudioIngles: "/audio/videoDos/amfreethisweekend.mp3" },
            { Espanol: "Estoy listo(a)", AudioEspanol: "/audio/nivelDos/02066EstoyListo.mp3", Ingles: "I´m ready", AudioIngles: "/audio/videoDos/amready.mp3" },
            { Espanol: "Estoy ocupado(a) con la escuela", AudioEspanol: "/audio/nivelDos/02067EstoyOcupadoConLaEscuela.mp3", Ingles: "I´m busy with school", AudioIngles: "/audio/videoDos/ambusywithschool.mp3" },
            { Espanol: "Estoy practicando inglés", AudioEspanol: "/audio/nivelDos/02068EstoyPracticandoIngles.mp3", Ingles: "I´m practicing English", AudioIngles: "/audio/videoTres/amPracticingEnglish.mp3" },
            { Espanol: "Estoy seguro(a)", AudioEspanol: "/audio/nivelDos/02069EstoySeguro.mp3", Ingles: "I´m sure", AudioIngles: "/audio/videoDos/amsure.mp3" },
            { Espanol: "Estoy solo(a) en casa", AudioEspanol: "/audio/nivelDos/02070EstoySoloEnCasa.mp3", Ingles: "I´m home alone", AudioIngles: "/audio/videoDos/amhomealone.mp3" },
            { Espanol: "Explica esto", AudioEspanol: "/audio/nivelDos/02071ExplicaEsto.mp3", Ingles: "Explain this", AudioIngles: "/audio/videoDos/explainthis.mp3" },
            { Espanol: "Felicidades", AudioEspanol: "/audio/nivelDos/02072Felicidades.mp3", Ingles: "Congratulations", AudioIngles: "/audio/videoDos/congratulations.mp3" },
            { Espanol: "Fue un accidente", AudioEspanol: "/audio/nivelDos/02073FueUnAccidente.mp3", Ingles: "It was an accident", AudioIngles: "/audio/videoTres/itWasAnAccident.mp3" },
            { Espanol: "Gracias por tu apoyo", AudioEspanol: "/audio/nivelDos/02074GraciasPorTuApoyo.mp3", Ingles: "Thanks for your support", AudioIngles: "/audio/videoDos/thanksforyoursupport.mp3" },
            { Espanol: "Gracias por tu hospitalidad", AudioEspanol: "/audio/nivelDos/02075GraciasPorTuHospitalidad.mp3", Ingles: "Thanks for your hospitality", AudioIngles: "/audio/videoDos/thanksforyourhospitality.mp3" },
            { Espanol: "Hora de dormir", AudioEspanol: "/audio/nivelDos/02076HoraDeDormir.mp3", Ingles: "Time to sleep", AudioIngles: "/audio/videoTres/timeToSleep.mp3" },
            { Espanol: "Hoy estoy libre", AudioEspanol: "/audio/nivelDos/02077HoyEstoyLibre.mp3", Ingles: "I´m free today", AudioIngles: "/audio/videoTres/amFreeToday.mp3" },
            { Espanol: "Hoy fue un día de locura", AudioEspanol: "/audio/nivelDos/02078HoyFueUnDiaDeLocura.mp3", Ingles: "Today was a crazy day", AudioIngles: "/audio/videoDos/todaywasacrazyday.mp3" },
            { Espanol: "La cena está casi lista", AudioEspanol: "/audio/nivelDos/02079LaCenaCasiEstaLista.mp3", Ingles: "Dinner is almost ready", AudioIngles: "/audio/videoTres/dinnerIsAlmostReady.mp3" },
            { Espanol: "Le pasa a todo mundo", AudioEspanol: "/audio/nivelDos/02080LePasaATodoMundo.mp3", Ingles: "It happens to everyone", AudioIngles: "/audio/videoDos/ithappentoeveryone.mp3" },
            { Espanol: "Me encanta aprender idiomas", AudioEspanol: "/audio/nivelDos/02081MeEncantaAprenderIdiomas.mp3", Ingles: "I love learning languages", AudioIngles: "/audio/videoTres/iLoveLearningLanguages.mp3" },
            { Espanol: "Me gusta aprender sobre diferentes culturas", AudioEspanol: "/audio/nivelDos/02082MeGustaAprenderSobreDiferentesCulturas.mp3", Ingles: "I like learning about different cultures", AudioIngles: "/audio/videoDos/ilikelearningaboutdifferentcultures.mp3" },
            { Espanol: "Me gusta cómo piensas", AudioEspanol: "/audio/nivelDos/02083MeGustaComoPiensas.mp3", Ingles: "I like how you think", AudioIngles: "/audio/videoDos/ilikehowuthink.mp3" },
            { Espanol: "Me gusta este lugar", AudioEspanol: "/audio/nivelDos/02084MeGustaEsteLugar.mp3", Ingles: "I like this place", AudioIngles: "/audio/videoTres/iLikeThisPlace.mp3" },
            { Espanol: "Me levanto tarde", AudioEspanol: "/audio/nivelDos/02085MeLevantoTarde.mp3", Ingles: "I wake up late", AudioIngles: "/audio/videoTres/iWakeUpLate.mp3" },
            { Espanol: "Me levanto temprano", AudioEspanol: "/audio/nivelDos/02086MeLevantoTemprano.mp3", Ingles: "I wake up early", AudioIngles: "/audio/videoTres/iWakeUpEarly.mp3" },
            { Espanol: "Mi banda favorita es...", AudioEspanol: "/audio/nivelDos/02087MiBandaFavoritaEs.mp3", Ingles: "My favorite band is...", AudioIngles: "/audio/videoDos/myfavoritebandis.mp3" },
            { Espanol: "Mi cantante favorito(a) es...", AudioEspanol: "/audio/nivelDos/02088MiCantanteFavoritoEs.mp3", Ingles: "My favorite singer is...", AudioIngles: "/audio/videoDos/myfavoritesingeris.mp3" },
            { Espanol: "Mi internet es lenta", AudioEspanol: "/audio/nivelDos/02089MiInternetEsLenta.mp3", Ingles: "I have slow internet", AudioIngles: "/audio/videoTres/iHaveSlowInternet.mp3" },
            { Espanol: "Mi pronunciación necesita práctica", AudioEspanol: "/audio/nivelDos/02090MiPronunciacionNecesitaPractica.mp3", Ingles: "My pronunciation needs practice", AudioIngles: "/audio/videoDos/mypronunciationneedpractice.mp3" },
            { Espanol: "Nada pasó", AudioEspanol: "/audio/nivelDos/02091NadaPaso.mp3", Ingles: "Nothing happened", AudioIngles: "/audio/videoTres/nothingHappened.mp3" },
            { Espanol: "Nadie era", AudioEspanol: "/audio/nivelDos/02092NadieEra.mp3", Ingles: "It was nobody", AudioIngles: "/audio/videoTres/itWasNobody.mp3" },
            { Espanol: "Necesito ayuda con el inglés", AudioEspanol: "/audio/nivelDos/02093NecesitoAyudaConElIngles.mp3", Ingles: "I need help with English", AudioIngles: "/audio/videoTres/iNeedHelpWithEnglish.mp3" },
            { Espanol: "Necesito descansar", AudioEspanol: "/audio/nivelDos/02094NecesitoDescansar.mp3", Ingles: "I need to rest", AudioIngles: "/audio/videoDos/ineedtorest.mp3" },
            { Espanol: "No está funcionando", AudioEspanol: "/audio/nivelDos/02095NoEstaFuncionando.mp3", Ingles: "It´s not working", AudioIngles: "/audio/videoDos/itsnotworking.mp3" },
            { Espanol: "No puedo en este momento", AudioEspanol: "/audio/nivelDos/02096NoPuedoEnEsteMomento.mp3", Ingles: "I can´t right now", AudioIngles: "/audio/videoDos/icantrightnow.mp3" },
            { Espanol: "No puedo encontrarte", AudioEspanol: "/audio/nivelDos/02097NoPuedoEncontrarte.mp3", Ingles: "I can´t find you", AudioIngles: "/audio/videoTres/iCantFindYou.mp3" },
            { Espanol: "No puedo ir hoy", AudioEspanol: "/audio/nivelDos/02098NoPuedoIrHoy.mp3", Ingles: "I can´t go today", AudioIngles: "/audio/videoTres/iCantGoToday.mp3" },
            { Espanol: "No te preocupes", AudioEspanol: "/audio/nivelDos/02099NoTePreocupes.mp3", Ingles: "Don´t worry", AudioIngles: "/audio/videoTres/dontWorry.mp3" },
            { Espanol: "No tengo dinero", AudioEspanol: "/audio/nivelDos/02100NoTengoDinero.mp3", Ingles: "I don´t have money", AudioIngles: "/audio/videoDos/idonthavemoney.mp3" },
            { Espanol: "No tengo tiempo", AudioEspanol: "/audio/nivelDos/02101NoTengoTiempo.mp3", Ingles: "I don´t have time", AudioIngles: "/audio/videoDos/idonthavetime.mp3" },
            { Espanol: "Odio levantarme temprano", AudioEspanol: "/audio/nivelDos/02102OdioLevantarmeTemprano.mp3", Ingles: "I hate waking up early", AudioIngles: "/audio/videoTres/iHateWakingUpEarly.mp3" },
            { Espanol: "Póngase cómodo(a)", AudioEspanol: "/audio/nivelDos/02103PongaseComodo.mp3", Ingles: "Make yourself comfortable", AudioIngles: "/audio/videoDos/makeyourselfcomfortable.mp3" },
            { Espanol: "Practico cuando estoy libre", AudioEspanol: "/audio/nivelDos/02104PracticoCuandoEstoyLibre.mp3", Ingles: "I practice when I´m free", AudioIngles: "/audio/videoDos/ipracticewhenamfree.mp3" },
            { Espanol: "Practico escuchando", AudioEspanol: "/audio/nivelDos/02105PracticoEscuchando.mp3", Ingles: "I practice by listening", AudioIngles: "/audio/videoDos/ipracticebylistening.mp3" },
            { Espanol: "Pregúntame", AudioEspanol: "/audio/nivelDos/02106Preguntame.mp3", Ingles: "Ask me", AudioIngles: "/audio/videoTres/askMe.mp3" },
            { Espanol: "Puedo escucharte", AudioEspanol: "/audio/nivelDos/02107PuedoEscucharte.mp3", Ingles: "I can hear you", AudioIngles: "/audio/videoDos/icanhearyou.mp3" },
            { Espanol: "Puedo esperar", AudioEspanol: "/audio/nivelDos/02108PuedoEsperar.mp3", Ingles: "I can wait", AudioIngles: "/audio/videoTres/iCantWait.mp3" },
            { Espanol: "Puedo explicar", AudioEspanol: "/audio/nivelDos/02109PuedoExplicar.mp3", Ingles: "I can explain", AudioIngles: "/audio/videoDos/icanexplain.mp3" },
            { Espanol: "Puedo verte", AudioEspanol: "/audio/nivelDos/02110PuedoVerte.mp3", Ingles: "I can see you", AudioIngles: "/audio/videoDos/icanseeyou.mp3" },
            { Espanol: "Quiero viajar", AudioEspanol: "/audio/nivelDos/02111QuieroViajar.mp3", Ingles: "I want to travel", AudioIngles: "/audio/videoTres/iWantToTravel.mp3" },
            { Espanol: "Siempre duermo tarde", AudioEspanol: "/audio/nivelDos/02112SiempreDuermoTarde.mp3", Ingles: "I always sleep late", AudioIngles: "/audio/videoTres/iAlwaysSleepLate.mp3" },
            { Espanol: "Siempre duermo temprano", AudioEspanol: "/audio/nivelDos/02113SiempreDuermoTemprano.mp3", Ingles: "I always sleep early", AudioIngles: "/audio/videoTres/iAlwaysSleepEarly.mp3" },
            { Espanol: "Siempre llaman", AudioEspanol: "/audio/nivelDos/02114SiempreLlaman.mp3", Ingles: "They always call", AudioIngles: "/audio/videoTres/theyAlwaysCall.mp3" },
            { Espanol: "Soy el(la) más joven", AudioEspanol: "/audio/nivelDos/02115SoyElMasJoven.mp3", Ingles: "I´m the youngest", AudioIngles: "/audio/videoTres/amTheYoungest.mp3" },
            { Espanol: "Soy estudiante universitario(a)", AudioEspanol: "/audio/nivelDos/02116SoyEstudianteUniversitario.mp3", Ingles: "I´m a university student", AudioIngles: "/audio/videoTres/amAnUniversityStudent.mp3" },
            { Espanol: "Soy soltero(a)", AudioEspanol: "/audio/nivelDos/02117SoySoltero.mp3", Ingles: "I´m single", AudioIngles: "/audio/videoTres/amSingle.mp3" },
            { Espanol: "Soy tímido(a)", AudioEspanol: "/audio/nivelDos/02118SoyTimido.mp3", Ingles: "I´m shy", AudioIngles: "/audio/videoTres/amShy.mp3" },
            { Espanol: "Sube el volumen", AudioEspanol: "/audio/nivelDos/02119SubeElVolumen.mp3", Ingles: "Turn the volume up", AudioIngles: "/audio/videoDos/turnthevolumeup.mp3" },
            { Espanol: "Te gustará", AudioEspanol: "/audio/nivelDos/02120TeGustara.mp3", Ingles: "You will like it", AudioIngles: "/audio/videoTres/youWillLikeIt.mp3" },
            { Espanol: "Te lo diré más tarde", AudioEspanol: "/audio/nivelDos/02121TeLoDireMasTarde.mp3", Ingles: "I´ll tell you later", AudioIngles: "/audio/videoDos/illtellyoulater.mp3" },
            { Espanol: "Te voy a esperar", AudioEspanol: "/audio/nivelDos/02122TeVoyAEsperar.mp3", Ingles: "I´ll wait for you", AudioIngles: "/audio/videoDos/illwaitforu.mp3" },
            { Espanol: "Tenemos una fiesta", AudioEspanol: "/audio/nivelDos/02123TenemosUnaFiesta.mp3", Ingles: "We are having a party", AudioIngles: "/audio/videoTres/weAreHavingAParty.mp3" },
            { Espanol: "Tengo buenas noticias", AudioEspanol: "/audio/nivelDos/02124TengoBuenasNoticias.mp3", Ingles: "I have good news", AudioIngles: "/audio/videoDos/ihavegoodnews.mp3" },
            { Espanol: "Tengo confianza", AudioEspanol: "/audio/nivelDos/02125TengoConfianza.mp3", Ingles: "I´m confident", AudioIngles: "/audio/videoDos/amconfident.mp3" },
            { Espanol: "Tengo dinero", AudioEspanol: "/audio/nivelDos/02126TengoDinero.mp3", Ingles: "I have money", AudioIngles: "/audio/videoDos/ihavemoney.mp3" },
            { Espanol: "Tengo problemas con la pronunciación", AudioEspanol: "/audio/nivelDos/02127TengoProblemasConLaPronunciacion.mp3", Ingles: "I have problems with the pronounciation", AudioIngles: "/audio/videoDos/ihaveproblemswiththepronunciation.mp3" },
            { Espanol: "Tengo que pedir permiso", AudioEspanol: "/audio/nivelDos/02128TengoQuePedirPermiso.mp3", Ingles: "I have to ask for permission", AudioIngles: "/audio/videoTres/iHaveToAskForPermission.mp3" },
            { Espanol: "Tengo tiempo", AudioEspanol: "/audio/nivelDos/02129TengoTiempo.mp3", Ingles: "I have time", AudioIngles: "/audio/videoDos/ihavetime.mp3" },
            { Espanol: "Tengo un negocio", AudioEspanol: "/audio/nivelDos/02130TengoUnNegocio.mp3", Ingles: "I have a business", AudioIngles: "/audio/videoTres/iHaveABusiness.mp3" },
            { Espanol: "Tengo una familia grande", AudioEspanol: "/audio/nivelDos/02131TengoUnaFamiliaGrande.mp3", Ingles: "I have a big family", AudioIngles: "/audio/videoTres/iHaveABigFamily.mp3" },
            { Espanol: "Tengo una familia pequeña", AudioEspanol: "/audio/nivelDos/02132TengoUnaFamiliaPequeña.mp3", Ingles: "I have a small family", AudioIngles: "/audio/videoTres/iHaveASmallFamily.mp3" },
            { Espanol: "Tiempo para celebrar", AudioEspanol: "/audio/nivelDos/02133TiempoParaCelebrar.mp3", Ingles: "Time to celebrate", AudioIngles: "/audio/videoDos/timetocelebrate.mp3" },
            { Espanol: "Tienes mi apoyo", AudioEspanol: "/audio/nivelDos/02134TienesMiApoyo.mp3", Ingles: "You have my support", AudioIngles: "/audio/videoDos/uhavemysupport.mp3" },
            { Espanol: "Tienes una hermosa casa", AudioEspanol: "/audio/nivelDos/02135TienesUnaHermosaCasa.mp3", Ingles: "You have a beautiful house", AudioIngles: "/audio/videoDos/youhaveabeautifulhouse.mp3" },
            { Espanol: "Tienes una hermosa familia", AudioEspanol: "/audio/nivelDos/02136TienesUnaHermosaFamilia.mp3", Ingles: "You have a beautiful family", AudioIngles: "/audio/videoTres/youHaveABeautifulFamily.mp3" },
            { Espanol: "Tienes unos hijos hermosos", AudioEspanol: "/audio/nivelDos/02137TienesUnosHijosHermosos.mp3", Ingles: "You have beautiful children", AudioIngles: "/audio/videoTres/youHaveBeautifulChildren.mp3" },
            { Espanol: "Tomaré una ducha", AudioEspanol: "/audio/nivelDos/02138TomareUnaDucha.mp3", Ingles: "I´ll take a shower", AudioIngles: "/audio/videoDos/illtakeashower.mp3" },
            { Espanol: "Tómate tu tiempo", AudioEspanol: "/audio/nivelDos/02139TomateTuTiempo.mp3", Ingles: "Take your time", AudioIngles: "/audio/videoDos/takeyourtime.mp3" },
            { Espanol: "Tuve un sueño", AudioEspanol: "/audio/nivelDos/02140TuveUnSueño.mp3", Ingles: "I had a dream", AudioIngles: "/audio/videoDos/ihadadream.mp3" },
            { Espanol: "Usted es bienvenido(a)", AudioEspanol: "/audio/nivelDos/02141UstedEsBienvenido.mp3", Ingles: "You´re welcome", AudioIngles: "/audio/videoTres/youAreWelcomeToCome.mp3" },
            { Espanol: "Ven más tarde", AudioEspanol: "/audio/nivelDos/02142VenMasTarde.mp3", Ingles: "Come later", AudioIngles: "/audio/videoTres/comeLater.mp3" },
            { Espanol: "Visítame", AudioEspanol: "/audio/nivelDos/02143Visitame.mp3", Ingles: "Visit me", AudioIngles: "/audio/videoTres/visitMe.mp3" },
            { Espanol: "Vivo con mi familia", AudioEspanol: "/audio/nivelDos/02144VivoConMiFamilia.mp3", Ingles: "I live with my family", AudioIngles: "/audio/videoTres/iLiveWithMyFamily.mp3" },
            { Espanol: "Vivo en un apartamento", AudioEspanol: "/audio/nivelDos/02145VivoEnUnApartamento.mp3", Ingles: "I live in an apartment", AudioIngles: "/audio/videoTres/iLiveInAnApartment.mp3" },
            { Espanol: "Vivo en una casa", AudioEspanol: "/audio/nivelDos/02146VivoEnUnaCasa.mp3", Ingles: "I live in a house", AudioIngles: "/audio/videoTres/iLiveInAHouse.mp3" },
            { Espanol: "Vivo solo(a)", AudioEspanol: "/audio/nivelDos/02147VivoSolo.mp3", Ingles: "I live alone", AudioIngles: "/audio/videoTres/iLiveAlone.mp3" },
            { Espanol: "Yo lo escribiré", AudioEspanol: "/audio/nivelDos/02148YoLoEscribire.mp3", Ingles: "I´ll write it down", AudioIngles: "/audio/videoDos/illwriteitdown.mp3" },
            { Espanol: "¿A qué hora despiertas?", AudioEspanol: "/audio/nivelDos/02149AQueHoraDespiertas.mp3", Ingles: "What time do you wake up?", AudioIngles: "/audio/videoTres/whatTimeDoYouWakeUp.mp3" },
            { Espanol: "¿A qué hora estás libre?", AudioEspanol: "/audio/nivelDos/02150AQueHoraEstasLibre.mp3", Ingles: "What time are you free?", AudioIngles: "/audio/videoDos/whattimeareyoufree.mp3" },
            { Espanol: "¿A qué hora vas a dormir?", AudioEspanol: "/audio/nivelDos/02151AQueHoraVasADormir.mp3", Ingles: "What time are you going to sleep?", AudioIngles: "/audio/videoTres/whatTimeAreYouGoingToSleep.mp3" },
            { Espanol: "¿Buscas algo?", AudioEspanol: "/audio/nivelDos/02152BuscasAlgo.mp3", Ingles: "Are you looking for something?", AudioIngles: "/audio/videoDos/areulookingforsomething.mp3" },
            { Espanol: "¿Cómo aprendes?", AudioEspanol: "/audio/nivelDos/02153ComoAprendes.mp3", Ingles: "How do you learn?", AudioIngles: "/audio/videoDos/howdoulearn.mp3" },
            { Espanol: "¿Cómo es posible?", AudioEspanol: "/audio/nivelDos/02154ComoEsPosible.mp3", Ingles: "How is possible?", AudioIngles: "/audio/videoDos/howisitpossible.mp3" },
            { Espanol: "¿Cómo está tu pronunciación?", AudioEspanol: "/audio/nivelDos/02155ComoEstaTuPronunciacion.mp3", Ingles: "How is your pronunciation?", AudioIngles: "/audio/videoTres/howIsYourPronunciation.mp3" },
            { Espanol: "¿Cómo estuvo tu fin de semana?", AudioEspanol: "/audio/nivelDos/02156ComoEstuvoTuFinDeSemana.mp3", Ingles: "How was your weekend?", AudioIngles: "/audio/videoDos/howwasyourweekend.mp3" },
            { Espanol: "¿Cómo fue?", AudioEspanol: "/audio/nivelDos/02157ComoFue.mp3", Ingles: "How was it?", AudioIngles: "/audio/videoDos/howwasit.mp3" },
            { Espanol: "¿Cómo ha ocurrido?", AudioEspanol: "/audio/nivelDos/02158ComoHaOcurrido.mp3", Ingles: "How did it happen?", AudioIngles: "/audio/videoDos/howdidithappen.mp3" },
            { Espanol: "¿Cómo lo haces?", AudioEspanol: "/audio/nivelDos/02159ComoLoHaces.mp3", Ingles: "How do you it?", AudioIngles: "/audio/videoDos/howdoyoudoit.mp3" },
            { Espanol: "¿Con quién estás?", AudioEspanol: "/audio/nivelDos/02160ConQuienEstas.mp3", Ingles: "Who are you with?", AudioIngles: "/audio/videoTres/whoAreYouWith.mp3" },
            { Espanol: "¿Cuál es tu banda favorita?", AudioEspanol: "/audio/nivelDos/02161CualEsTuBandaFavorita.mp3", Ingles: "Who´s your favorite band?", AudioIngles: "/audio/videoDos/whosyourfavorteband.mp3" },
            { Espanol: "¿Cuál es?", AudioEspanol: "/audio/nivelDos/02162CualEs.mp3", Ingles: "Which is it?", AudioIngles: "/audio/videoTres/whichIsIt.mp3" },
            { Espanol: "¿Cuáles son las opciones?", AudioEspanol: "/audio/nivelDos/02163CualesSonLasOpciones.mp3", Ingles: "What are the options?", AudioIngles: "/audio/videoDos/whataretheoptions.mp3" },
            { Espanol: "¿Cuándo es la boda?", AudioEspanol: "/audio/nivelDos/02164CuandoEsLaBoda.mp3", Ingles: "When is the wedding?", AudioIngles: "/audio/videoTres/whenIsTheWedding.mp3" },
            { Espanol: "¿De quién es?", AudioEspanol: "/audio/nivelDos/02165DeQuienEs.mp3", Ingles: "Whose is it?", AudioIngles: "/audio/videoTres/whosIsIt.mp3" },
            { Espanol: "¿Dónde fuiste?", AudioEspanol: "/audio/nivelDos/02166DondeFuiste.mp3", Ingles: "Where did you go?", AudioIngles: "/audio/videoTres/whereDidYouGo.mp3" },
            { Espanol: "¿Eres el(la) más joven?", AudioEspanol: "/audio/nivelDos/02167EresElMasJoven.mp3", Ingles: "Are you the youngest?", AudioIngles: "/audio/videoTres/areYouTheYoungest.mp3" },
            { Espanol: "¿Eres estudiante universitario(a)?", AudioEspanol: "/audio/nivelDos/02168EresEstudianteUniversitario.mp3", Ingles: "Are you a university student?", AudioIngles: "/audio/videoTres/areYouAnUniversityStudent.mp3" },
            { Espanol: "¿Eres soltero(a)?", AudioEspanol: "/audio/nivelDos/02169EresSoltero.mp3", Ingles: "Are you single?", AudioIngles: "/audio/videoTres/areYouSingle.mp3" },
            { Espanol: "¿Es cierto?", AudioEspanol: "/audio/nivelDos/02170EsCierto.mp3", Ingles: "Is it true?", AudioIngles: "/audio/videoTres/isItTrue.mp3" },
            { Espanol: "¿Es falso?", AudioEspanol: "/audio/nivelDos/02171EsFalso.mp3", Ingles: "Is it false?", AudioIngles: "/audio/videoTres/isItFalse.mp3" },
            { Espanol: "¿Está lista la cena?", AudioEspanol: "/audio/nivelDos/02172EstaListaLaCena.mp3", Ingles: "Is dinner ready?", AudioIngles: "/audio/videoTres/isDinnerReady.mp3" },
            { Espanol: "¿Estás aprendiendo inglés también?", AudioEspanol: "/audio/nivelDos/02173EstasAprendiendoInglesTambien.mp3", Ingles: "Are you learning English too?", AudioIngles: "/audio/videoDos/areulearningenglishtoo.mp3" },
            { Espanol: "¿Estás listo(a)?", AudioEspanol: "/audio/nivelDos/02174EstasListo.mp3", Ingles: "Are you ready?", AudioIngles: "/audio/videoDos/areuready.mp3" },
            { Espanol: "¿Estás seguro(a)?", AudioEspanol: "/audio/nivelDos/02175EstasSeguro.mp3", Ingles: "Are you sure?", AudioIngles: "/audio/videoDos/areusure.mp3" },
            { Espanol: "¿Has aprendido algo?", AudioEspanol: "/audio/nivelDos/02176HasAprendidoAlgo.mp3", Ingles: "Did you learn something?", AudioIngles: "/audio/videoDos/didulearnsomething.mp3" },
            { Espanol: "¿Has oído las noticias?", AudioEspanol: "/audio/nivelDos/02177HasOidoLasNoticias.mp3", Ingles: "Did you hear the news?", AudioIngles: "/audio/videoDos/diduhearthenews.mp3" },
            { Espanol: "¿Hay buenas películas extranjeras para ver?", AudioEspanol: "/audio/nivelDos/02178HayBuenasPeliculasExtranjerasParaVer.mp3", Ingles: "What are good foreign films to watch?", AudioIngles: "/audio/videoDos/whataregoodforeignfilmstowatch.mp3" },
            { Espanol: "¿Me puedes ayudar con esto?", AudioEspanol: "/audio/nivelDos/02179MePuedesAyudarConEsto.mp3", Ingles: "Can you help me with this?", AudioIngles: "/audio/videoTres/canYouHelpMeWithThis.mp3" },
            { Espanol: "¿Puedes darme eso?", AudioEspanol: "/audio/nivelDos/02180PuedesDarmeEso.mp3", Ingles: "Can you give me that?", AudioIngles: "/audio/videoTres/canYouGiveMeThat.mp3" },
            { Espanol: "¿Puedes recogerme?", AudioEspanol: "/audio/nivelDos/02181PuedesRecogerme.mp3", Ingles: "Can you pick me up?", AudioIngles: "/audio/videoTres/canYouPickMeUp.mp3" },
            { Espanol: "¿Puedo hacerte una pregunta?", AudioEspanol: "/audio/nivelDos/02182PuedoHacerteUnaPregunta.mp3", Ingles: "Can I ask you a question?", AudioIngles: "/audio/videoTres/canIAskYouAQuestion.mp3" },
            { Espanol: "¿Puedo tener tu atención?", AudioEspanol: "/audio/nivelDos/02183PuedoTenerTuAtencion.mp3", Ingles: "Can I have your attention?", AudioIngles: "/audio/videoTres/canIHaverYourAttention.mp3" },
            { Espanol: "¿Puedo tener uno(a)?", AudioEspanol: "/audio/nivelDos/02184PuedoTenerUno.mp3", Ingles: "Can I have one?", AudioIngles: "/audio/videoDos/canihaveone.mp3" },
            { Espanol: "¿Qué buscas?", AudioEspanol: "/audio/nivelDos/02185QueBuscas.mp3", Ingles: "What are you looking for?", AudioIngles: "/audio/videoTres/whatAreYouLookingFor.mp3" },
            { Espanol: "¿Qué es ese ruido?", AudioEspanol: "/audio/nivelDos/02186QueEsEseRuido.mp3", Ingles: "What´s that noise?", AudioIngles: "/audio/videoTres/whatIsThatNoice.mp3" },
            { Espanol: "¿Qué están haciendo ellos?", AudioEspanol: "/audio/nivelDos/02187QueEstanHaciendoEllos.mp3", Ingles: "What are they doing?", AudioIngles: "/audio/videoTres/whatAreTheyDoing.mp3" },
            { Espanol: "¿Qué estás comprando?", AudioEspanol: "/audio/nivelDos/02188QueEstasComprando.mp3", Ingles: "What are you buying?", AudioIngles: "/audio/videoTres/whaAreYouBuying.mp3" },
            { Espanol: "¿Qué estudiaste?", AudioEspanol: "/audio/nivelDos/02189QueEstudiaste.mp3", Ingles: "What did you study?", AudioIngles: "/audio/videoTres/whatDidYouStudy.mp3" },
            { Espanol: "¿Qué harás mañana?", AudioEspanol: "/audio/nivelDos/02190QueHarasMañana.mp3", Ingles: "What are you doing tomorrow?", AudioIngles: "/audio/videoTres/whatAreYouDoingTomorrow.mp3" },
            { Espanol: "¿Qué es lo nuevo?", AudioEspanol: "/audio/nivelDos/02191QueEsLoNuevo.mp3", Ingles: "What´s new?", AudioIngles: "/audio/videoDos/whatsnew.mp3" },
            { Espanol: "¿Qué hora es ahí?", AudioEspanol: "/audio/nivelDos/02192QueHoraEsAhi.mp3", Ingles: "What time is it there?", AudioIngles: "/audio/videoTres/whatTimeIsItThere.mp3" },
            { Espanol: "¿Qué necesitas?", AudioEspanol: "/audio/nivelDos/02193QueNecesitas.mp3", Ingles: "What do you need?", AudioIngles: "/audio/videoDos/whatdouneed.mp3" },
            { Espanol: "¿Quién es tu cantante favorito(a)?", AudioEspanol: "/audio/nivelDos/02194QuienEsTuCantanteFavorito.mp3", Ingles: "Who´s your favorite singer?", AudioIngles: "/audio/videoDos/whosyourfavoritesinger.mp3" },
            { Espanol: "¿Quién está aquí?", AudioEspanol: "/audio/nivelDos/02195QuienEstaAqui.mp3", Ingles: "Who´s here?", AudioIngles: "/audio/videoTres/whoIsHere.mp3" },
            { Espanol: "¿Quién necesita ayuda?", AudioEspanol: "/audio/nivelDos/02196QuienNecesitaAyuda.mp3", Ingles: "Who needs help?", AudioIngles: "/audio/videoDos/whoneedshelp.mp3" },
            { Espanol: "¿Quiéres hablar?", AudioEspanol: "/audio/nivelDos/02197QuieresHablar.mp3", Ingles: "Do you want to talk?", AudioIngles: "/audio/videoDos/douwanttotalk.mp3" },
            { Espanol: "¿Sigues ahí?", AudioEspanol: "/audio/nivelDos/02198SiguesAhi.mp3", Ingles: "Are you still there?", AudioIngles: "/audio/videoTres/areYouStillThere.mp3" },
            { Espanol: "¿Te enteraste de lo que pasó?", AudioEspanol: "/audio/nivelDos/02199TeEnterasteDeLoQuePaso.mp3", Ingles: "Did you hear about what happened?", AudioIngles: "/audio/videoDos/diduhearaboutwhathappen.mp3" },
            { Espanol: "¿Tienes dinero?", AudioEspanol: "/audio/nivelDos/02200TienesDinero.mp3", Ingles: "Do you have money?", AudioIngles: "/audio/videoDos/douhavemoney.mp3" }
        ];


        $('#divTablaDos').append('<section class="table" ng-controller="inglesDosController" class=""></section>');
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

    function NivelTres() {
        $('#tresBTN').css('background-color', '#333');

        $scope.registroUnoIngles = [
            { Espanol: "Acabo de tomar una ducha", AudioEspanol: "/audio/nivelTres/03001AcaboDeTomarUnaDucha.mp3", Ingles: "I just took a shower", AudioIngles: "/audio/videoTres/iJustTookAShower.mp3" },
            { Espanol: "Aquí estoy para ti", AudioEspanol: "/audio/nivelTres/03002AquiEstoyParaTi.mp3", Ingles: "I´m here for you", AudioIngles: "/audio/videoTres/amHereForYou.mp3" },
            { Espanol: "Confío en ti", AudioEspanol: "/audio/nivelTres/03003ConfioEnTi.mp3", Ingles: "I trust you", AudioIngles: "/audio/videoCuatro/iTrustYou.mp3" },
            { Espanol: "Dame tu opinión", AudioEspanol: "/audio/nivelTres/03004DameTuOpinion.mp3", Ingles: "Give me your opinion", AudioIngles: "/audio/videoTres/giveYourOpinion.mp3" },
            { Espanol: "Dime algo interesante", AudioEspanol: "/audio/nivelTres/03005DimeAlgoInteresante.mp3", Ingles: "Tell me something interesting", AudioIngles: "/audio/videoCuatro/tellMeSomethingInteresting.mp3" },
            { Espanol: "Dime cómo te sientes", AudioEspanol: "/audio/nivelTres/03006DimeComoTeSientes.mp3", Ingles: "Tell me how you feel", AudioIngles: "/audio/videoCuatro/tellMeHowYouFeel.mp3" },
            { Espanol: "Dime la verdad", AudioEspanol: "/audio/nivelTres/03007DimeLaVerdad.mp3", Ingles: "Tell me the truth", AudioIngles: "/audio/videoCuatro/tellMeTheThruth.mp3" },
            { Espanol: "Dime si necesitas algo", AudioEspanol: "/audio/nivelTres/03008DimeSiNecesitasAlgo.mp3", Ingles: "Tell me if you need something", AudioIngles: "/audio/videoCuatro/tellMeIfYouNeedSomething.mp3" },
            { Espanol: "Ellos son amables", AudioEspanol: "/audio/nivelTres/03009EllosSonAmables.mp3", Ingles: "They are friendly", AudioIngles: "/audio/videoTres/theyAreFriendly.mp3" },
            { Espanol: "En serio", AudioEspanol: "/audio/nivelTres/03010EnSerio.mp3", Ingles: "I´m serious", AudioIngles: "/audio/videoTres/amSerious.mp3" },
            { Espanol: "Encontré el problema", AudioEspanol: "/audio/nivelTres/03011EncontreElProblema.mp3", Ingles: "I found the problem", AudioIngles: "/audio/videoCuatro/iFoundTheProblem.mp3" },
            { Espanol: "Entiendo lo que dijiste", AudioEspanol: "/audio/nivelTres/03012EntiendoLoQueDijiste.mp3", Ingles: "I understand what you said", AudioIngles: "/audio/videoTres/iUnderstandWhatYouSaid.mp3" },
            { Espanol: "Eres mi mejor amigo(a)", AudioEspanol: "/audio/nivelTres/03013EresMiMejorAmigo.mp3", Ingles: "You´re my best friend", AudioIngles: "/audio/videoCuatro/youAreMyBestFriend.mp3" },
            { Espanol: "Es comprensible", AudioEspanol: "/audio/nivelTres/03014EsComprensible.mp3", Ingles: "It´s understandable", AudioIngles: "/audio/videoCuatro/itsUnderstandable.mp3" },
            { Espanol: "Es imposible", AudioEspanol: "/audio/nivelTres/03015EsImposible.mp3", Ingles: "It´s impossible", AudioIngles: "/audio/videoCuatro/itsImpossible.mp3" },
            { Espanol: "Es mi culpa", AudioEspanol: "/audio/nivelTres/03016EsMiCulpa.mp3", Ingles: "It´s my fault", AudioIngles: "/audio/videoTres/itsMyFault.mp3" },
            { Espanol: "Es mi responsabilidad", AudioEspanol: "/audio/nivelTres/03017EsMiResponsabilidad.mp3", Ingles: "It´s my responsibility", AudioIngles: "/audio/videoCuatro/itsMyResponsability.mp3" },
            { Espanol: "Es mi turno", AudioEspanol: "/audio/nivelTres/03018EsMiTurno.mp3", Ingles: "It´s my turn", AudioIngles: "/audio/videoCuatro/itsMyTurn.mp3" },
            { Espanol: "Es misterioso(a)", AudioEspanol: "/audio/nivelTres/03019EsMisterioso.mp3", Ingles: "It´s mysterious", AudioIngles: "/audio/videoCuatro/itsMisterious.mp3" },
            { Espanol: "Es muy hermoso(a)", AudioEspanol: "/audio/nivelTres/03020EsMuyHermoso.mp3", Ingles: "It´s very beautiful", AudioIngles: "/audio/videoCuatro/itsVeryBeautiful.mp3" },
            { Espanol: "Es posible", AudioEspanol: "/audio/nivelTres/03021EsPosible.mp3", Ingles: "It´s possible", AudioIngles: "/audio/videoTres/itsPossible.mp3" },
            { Espanol: "Es una buena historia", AudioEspanol: "/audio/nivelTres/03022EsUnaBuenaHistoria.mp3", Ingles: "It´s a good story", AudioIngles: "/audio/videoCuatro/itsAGoodStory.mp3" },
            { Espanol: "Es una decisión difícil", AudioEspanol: "/audio/nivelTres/03023EsUnaDecisionDificil.mp3", Ingles: "It´s a tough decision", AudioIngles: "/audio/videoCuatro/itsAToughDecision.mp3" },
            { Espanol: "Es una hermosa noche", AudioEspanol: "/audio/nivelTres/03024EsUnaHermosaNoche.mp3", Ingles: "It´s a beautiful night", AudioIngles: "/audio/videoCuatro/itsABeautifulNight.mp3" },
            { Espanol: "Es una mala idea", AudioEspanol: "/audio/nivelTres/03025EsUnaMalaIdea.mp3", Ingles: "It´s a bad idea", AudioIngles: "/audio/videoCuatro/itsABadIdea.mp3" },
            { Espanol: "Es una mentira", AudioEspanol: "/audio/nivelTres/03026EsUnaMentira.mp3", Ingles: "It´s a lie", AudioIngles: "/audio/videoTres/itsALie.mp3" },
            { Espanol: "Es una oportunidad", AudioEspanol: "/audio/nivelTres/03027EsUnaOportunidad.mp3", Ingles: "It´s an opportunity", AudioIngles: "/audio/videoTres/itsAnOpportunity.mp3" },
            { Espanol: "Es una pena", AudioEspanol: "/audio/nivelTres/03028EsUnaPena.mp3", Ingles: "It´s a shame", AudioIngles: "/audio/videoTres/itsAShame.mp3" },
            { Espanol: "Está bloqueado(a)", AudioEspanol: "/audio/nivelTres/03029EstaBloqueado.mp3", Ingles: "It´s blocked", AudioIngles: "/audio/videoCuatro/itsBlocked.mp3" },
            { Espanol: "Esta es buena información", AudioEspanol: "/audio/nivelTres/03030EstaEsBuenaInformacion.mp3", Ingles: "This is good information", AudioIngles: "/audio/videoCuatro/thisIsGoodInformation.mp3" },
            { Espanol: "Está húmedo", AudioEspanol: "/audio/nivelTres/03031EstaHumedo.mp3", Ingles: "It´s humid", AudioIngles: "/audio/videoTres/itsHumid.mp3" },
            { Espanol: "Está lloviendo", AudioEspanol: "/audio/nivelTres/03032EstaLloviendo.mp3", Ingles: "It´s raining", AudioIngles: "/audio/videoUno/itsraining.mp3" },
            { Espanol: "Está ocupado", AudioEspanol: "/audio/nivelTres/03033EstaOcupado.mp3", Ingles: "It´s occupied", AudioIngles: "/audio/videoTres/itsOccuped.mp3" },
            { Espanol: "Está por comenzar", AudioEspanol: "/audio/nivelTres/03034EstaPorComenzar.mp3", Ingles: "It´s about to start", AudioIngles: "/audio/videoCuatro/itsAboutToStart.mp3" },
            { Espanol: "Está tomando mucho tiempo", AudioEspanol: "/audio/nivelTres/03035EstaTomandoMuchoTiempo.mp3", Ingles: "It´s taking a long time", AudioIngles: "/audio/videoCuatro/itsTakingALongTime.mp3" },
            { Espanol: "Estás loco(a)", AudioEspanol: "/audio/nivelTres/03036EstasLoco.mp3", Ingles: "You´re crazy", AudioIngles: "/audio/videoTres/youreCrazy.mp3" },
            { Espanol: "Este lugar es caro", AudioEspanol: "/audio/nivelTres/03037EsteLugarEsCaro.mp3", Ingles: "This place is expensive", AudioIngles: "/audio/videoCuatro/thisPlaceIsExpensive.mp3" },
            { Espanol: "Estoy ahorrando dinero", AudioEspanol: "/audio/nivelTres/03038EstoyAhorrandoDinero.mp3", Ingles: "I´m saving money", AudioIngles: "/audio/videoCuatro/amSavingMoney.mp3" },
            { Espanol: "Estoy cansado de tenerlo", AudioEspanol: "/audio/nivelTres/03039EstoyCansadoDeTenerlo.mp3", Ingles: "I´m tired of having it", AudioIngles: "/audio/videoCuatro/amTiredOfHavingIt.mp3" },
            { Espanol: "Estoy de vacaciones", AudioEspanol: "/audio/nivelTres/03040EstoyDeVacaciones.mp3", Ingles: "I´m on vacation", AudioIngles: "/audio/videoTres/amOnVacation.mp3" },
            { Espanol: "Estoy decidido(a)", AudioEspanol: "/audio/nivelTres/03041EstoyDecidido.mp3", Ingles: "I´m determined", AudioIngles: "/audio/videoCuatro/amDetermined.mp3" },
            { Espanol: "Estoy desayunando", AudioEspanol: "/audio/nivelTres/03042EstoyDesayunando.mp3", Ingles: "I´m eating breakfast", AudioIngles: "/audio/videoCuatro/amEatingBreakfast.mp3" },
            { Espanol: "Estoy en el aeropuerto", AudioEspanol: "/audio/nivelTres/03043EstoyEnElAeropuerto.mp3", Ingles: "I´m at the airport", AudioIngles: "/audio/videoCuatro/amAtTheAirport.mp3" },
            { Espanol: "Estoy en el baño", AudioEspanol: "/audio/nivelTres/03044EstoyEnElBano.mp3", Ingles: "I´m in the bathroom", AudioIngles: "/audio/videoCuatro/amInTheBathroom.mp3" },
            { Espanol: "Estoy en una situación difícil", AudioEspanol: "/audio/nivelTres/03045EstoyEnUnaSituacionDificil.mp3", Ingles: "I´m in a tough situation", AudioIngles: "/audio/videoCuatro/amInAToughSituation.mp3" },
            { Espanol: "Estoy en vacaciones de verano", AudioEspanol: "/audio/nivelTres/03046EstoyEnVacacionesDeVerano.mp3", Ingles: "I´m on summer vacation", AudioIngles: "/audio/videoCuatro/amOnSummerVacation.mp3" },
            { Espanol: "Estoy estudiando para un examen", AudioEspanol: "/audio/nivelTres/03047EstoyEstudiandoParaUnExamen.mp3", Ingles: "I´m studying for an exam", AudioIngles: "/audio/videoCuatro/amStudyingForAnExam.mp3" },
            { Espanol: "Estoy feliz de estar aquí", AudioEspanol: "/audio/nivelTres/03048EstoyFelizDeEstarAqui.mp3", Ingles: "I´m happy to be here", AudioIngles: "/audio/videoCuatro/amHappyToBeHere.mp3" },
            { Espanol: "Estoy haciendo lo que puedo", AudioEspanol: "/audio/nivelTres/03049EstoyHaciendoLoQuePuedo.mp3", Ingles: "I´m doing what I can", AudioIngles: "/audio/videoTres/amDoingWhatICan.mp3" },
            { Espanol: "Estoy leyendo las noticias", AudioEspanol: "/audio/nivelTres/03050EstoyLeyendoLasNoticias.mp3", Ingles: "I´m reading the news", AudioIngles: "/audio/videoCuatro/amReadingTheNews.mp3" },
            { Espanol: "Estoy libre en la tarde", AudioEspanol: "/audio/nivelTres/03051EstoyLibreEnLaTarde.mp3", Ingles: "I´m free in the evening", AudioIngles: "/audio/videoCuatro/amFreeInTheEvening.mp3" },
            { Espanol: "Estoy tomando un descanso", AudioEspanol: "/audio/nivelTres/03052EstoyTomandoUnDescanso.mp3", Ingles: "I´m taking a rest", AudioIngles: "/audio/videoCuatro/amTakingARest.mp3" },
            { Espanol: "Estoy trabajando duro", AudioEspanol: "/audio/nivelTres/03053EstoyTrabajandoDuro.mp3", Ingles: "I´m working hard", AudioIngles: "/audio/videoCuatro/amWorkingHard.mp3" },
            { Espanol: "Estoy trabajando en un proyecto", AudioEspanol: "/audio/nivelTres/03054EstoyTrabajandoEnUnProyecto.mp3", Ingles: "I´m working on a project", AudioIngles: "/audio/videoCuatro/amWorkingOnAProject.mp3" },
            { Espanol: "Estoy viendo el juego", AudioEspanol: "/audio/nivelTres/03055EstoyViendoElJuego.mp3", Ingles: "I´m watching the game", AudioIngles: "/audio/videoCuatro/amWatchingTheGame.mp3" },
            { Espanol: "Estoy viendo un documental", AudioEspanol: "/audio/nivelTres/03056EstoyViendoUnDocumental.mp3", Ingles: "I´m watching a documentary", AudioIngles: "/audio/videoCuatro/amWatchingADocumentary.mp3" },
            { Espanol: "Estoy viendo un video", AudioEspanol: "/audio/nivelTres/03057EstoyViendoUnVideo.mp3", Ingles: "I´m watching a video", AudioIngles: "/audio/videoCuatro/amWatchingAVideo.mp3" },
            { Espanol: "Estoy visitando amigos", AudioEspanol: "/audio/nivelTres/03058EstoyVisitandoAmigos.mp3", Ingles: "I´m visiting friends", AudioIngles: "/audio/videoTres/amVisitingFriends.mp3" },
            { Espanol: "Estuve aquí", AudioEspanol: "/audio/nivelTres/03059EstuveAqui.mp3", Ingles: "I was here", AudioIngles: "/audio/videoCuatro/iWasHere.mp3" },
            { Espanol: "Estuve enfermo(a)", AudioEspanol: "/audio/nivelTres/03060EstuveEnfermo.mp3", Ingles: "I was sick", AudioIngles: "/audio/videoCuatro/iWasSick.mp3" },
            { Espanol: "Hace tanto calor hoy", AudioEspanol: "/audio/nivelTres/03061HaceTantoCalorHoy.mp3", Ingles: "It´s so hot today", AudioIngles: "/audio/videoCuatro/itsSoHotToday.mp3" },
            { Espanol: "Hace tanto frío hoy", AudioEspanol: "/audio/nivelTres/03062HaceTantoFrioHoy.mp3", Ingles: "It´s so cold today", AudioIngles: "/audio/videoCuatro/itsSoColdToday.mp3" },
            { Espanol: "Haré una llamada", AudioEspanol: "/audio/nivelTres/03063HareUnaLlamada.mp3", Ingles: "I will make a call", AudioIngles: "/audio/videoCuatro/iWillMakeACall.mp3" },
            { Espanol: "Hay tráfico", AudioEspanol: "/audio/nivelTres/03064HayTrafico.mp3", Ingles: "There´s traffic", AudioIngles: "/audio/videoCuatro/thereIsTraffic.mp3" },
            { Espanol: "He estado ocupado(a)", AudioEspanol: "/audio/nivelTres/03065HeEstadoOcupado.mp3", Ingles: "I have been busy", AudioIngles: "/audio/videoTres/iHaveBeenBusy.mp3" },
            { Espanol: "Llegaré tarde", AudioEspanol: "/audio/nivelTres/03066LlegareTarde.mp3", Ingles: "I´m going to be late", AudioIngles: "/audio/videoCuatro/amGoingToBeLate.mp3" },
            { Espanol: "Me estoy preparando", AudioEspanol: "/audio/nivelTres/03067MeEstoyPreparando.mp3", Ingles: "I´m getting ready", AudioIngles: "/audio/videoCuatro/amGettingReady.mp3" },
            { Espanol: "Me estoy quedando en un apartamento", AudioEspanol: "/audio/nivelTres/03068MeEstoyQuedandoEnUnApartamento.mp3", Ingles: "I´m staying in an apartment", AudioIngles: "/audio/videoCuatro/amStayingInAnApartment.mp3" },
            { Espanol: "Me gusta tu honestidad", AudioEspanol: "/audio/nivelTres/03069MeGustaTuHonestidad.mp3", Ingles: "I like your honesty", AudioIngles: "/audio/videoTres/iLikeYourHonesty.mp3" },
            { Espanol: "Me hiciste sentir mejor", AudioEspanol: "/audio/nivelTres/03070MeHicisteSentirMejor.mp3", Ingles: "You made me feel better", AudioIngles: "/audio/videoCuatro/youMadeMeFeelBetter.mp3" },
            { Espanol: "Me interesa", AudioEspanol: "/audio/nivelTres/03071MeInteresa.mp3", Ingles: "It interest me", AudioIngles: "/audio/videoCuatro/itInterestMe.mp3" },
            { Espanol: "Me olvidé", AudioEspanol: "/audio/nivelTres/03072MeOlvide.mp3", Ingles: "I forgot", AudioIngles: "/audio/videoTres/iForgot.mp3" },
            { Espanol: "Mi cabello está desordenado", AudioEspanol: "/audio/nivelTres/03073MiCabelloEstaDesordenado.mp3", Ingles: "My hair is messy", AudioIngles: "/audio/videoCuatro/myHairIsMessy.mp3" },
            { Espanol: "Mi cabello está mojado", AudioEspanol: "/audio/nivelTres/03074MiCabelloEstaMojado.mp3", Ingles: "My hair is wet", AudioIngles: "/audio/videoCuatro/myHairIsWet.mp3" },
            { Espanol: "Mis padres están aquí", AudioEspanol: "/audio/nivelTres/03075MisPadresEstanAqui.mp3", Ingles: "My parents are here", AudioIngles: "/audio/videoCuatro/myParentsAreHere.mp3" },
            { Espanol: "Mis padres están durmiendo", AudioEspanol: "/audio/nivelTres/03076MisPadresEstanDurmiendo.mp3", Ingles: "My parents are sleeping", AudioIngles: "/audio/videoCuatro/myParentsAreSleeping.mp3" },
            { Espanol: "Nací aquí", AudioEspanol: "/audio/nivelTres/03077NaciAqui.mp3", Ingles: "I was born here", AudioIngles: "/audio/videoCuatro/iWasBornHere.mp3" },
            { Espanol: "Nadie sabe", AudioEspanol: "/audio/nivelTres/03078NadieSabe.mp3", Ingles: "Nobody knows", AudioIngles: "/audio/videoTres/nobodyKnows.mp3" },
            { Espanol: "Necesito dinero", AudioEspanol: "/audio/nivelTres/03079NecesitoDinero.mp3", Ingles: "I need money", AudioIngles: "/audio/videoTres/iNeedMoney.mp3" },
            { Espanol: "Necesito espacio", AudioEspanol: "/audio/nivelTres/03080NecesitoEspacio.mp3", Ingles: "I need space", AudioIngles: "/audio/videoCuatro/iNeedSpace.mp3" },
            { Espanol: "Necesito más información", AudioEspanol: "/audio/nivelTres/03081NecesitoMasInformacion.mp3", Ingles: "I need more information", AudioIngles: "/audio/videoCuatro/iNeedMoreInformation.mp3" },
            { Espanol: "Necesito tomar una ducha", AudioEspanol: "/audio/nivelTres/03082NecesitoTomarUnaDucha.mp3", Ingles: "I need to take a shower", AudioIngles: "/audio/videoCuatro/iNeedToTakeAShower.mp3" },
            { Espanol: "No es necesario preocuparse", AudioEspanol: "/audio/nivelTres/03083NoEsNecesarioPreocuparse.mp3", Ingles: "No need to worry", AudioIngles: "/audio/videoCuatro/noNeedToWorry.mp3" },
            { Espanol: "No estamos seguros", AudioEspanol: "/audio/nivelTres/03084NoEstamosSeguros.mp3", Ingles: "We are not sure", AudioIngles: "/audio/videoCuatro/weAreNotSure.mp3" },
            { Espanol: "No estoy listo(a)", AudioEspanol: "/audio/nivelTres/03085NoEstoyListo.mp3", Ingles: "I´m not ready", AudioIngles: "/audio/videoCuatro/amNotReady.mp3" },
            { Espanol: "No fui afuera hoy", AudioEspanol: "/audio/nivelTres/03086NoFuiAfueraHoy.mp3", Ingles: "I didn´t go outside today", AudioIngles: "/audio/videoCuatro/iDidnotGoOutsideToday.mp3" },
            { Espanol: "No hay comida", AudioEspanol: "/audio/nivelTres/03087NoHayComida.mp3", Ingles: "There´s no food", AudioIngles: "/audio/videoCuatro/thereIsNotFood.mp3" },
            { Espanol: "No puedo decidir", AudioEspanol: "/audio/nivelTres/03088NoPuedoDecidir.mp3", Ingles: "I can´t decide", AudioIngles: "/audio/videoTres/iCantDecide.mp3" },
            { Espanol: "No puedo ir mañana", AudioEspanol: "/audio/nivelTres/03089NoPuedoIrManana.mp3", Ingles: "I can´t go tomorrow", AudioIngles: "/audio/videoCuatro/iCantGoTomorrow.mp3" },
            { Espanol: "No quiero hacerlo", AudioEspanol: "/audio/nivelTres/03090NoQuieroHacerlo.mp3", Ingles: "I don´t want to do it", AudioIngles: "/audio/videoCuatro/iDontWantToDoIt.mp3" },
            { Espanol: "No soy de aquí", AudioEspanol: "/audio/nivelTres/03091NoSoyDeAqui.mp3", Ingles: "I´m not from here", AudioIngles: "/audio/videoCuatro/amNotFromHere.mp3" },
            { Espanol: "No te conozco", AudioEspanol: "/audio/nivelTres/03092NoTeConozco.mp3", Ingles: "I don´t know you", AudioIngles: "/audio/videoCuatro/iDontKnowYou.mp3" },
            { Espanol: "No tengo sueño", AudioEspanol: "/audio/nivelTres/03093NoTengoSueno.mp3", Ingles: "I´m not sleepy", AudioIngles: "/audio/videoCuatro/amNotSleepy.mp3" },
            { Espanol: "Pagaré", AudioEspanol: "/audio/nivelTres/03094Pagare.mp3", Ingles: "I will pay", AudioIngles: "/audio/videoTres/iWillPay.mp3" },
            { Espanol: "Podemos hacer esto", AudioEspanol: "/audio/nivelTres/03095PodemosHacerEsto.mp3", Ingles: "We can do this", AudioIngles: "/audio/videoCuatro/weCanDoThis.mp3" },
            { Espanol: "Por favor, ayúdame", AudioEspanol: "/audio/nivelTres/03096PorFavorAyudenme.mp3", Ingles: "Please, help me", AudioIngles: "/audio/videoCuatro/pleaseHelpMe.mp3" },
            { Espanol: "Por supuesto", AudioEspanol: "/audio/nivelTres/03097PorSupuesto.mp3", Ingles: "Of course", AudioIngles: "/audio/videoCuatro/ofCourse.mp3" },
            { Espanol: "Practico inglés todos los días", AudioEspanol: "/audio/nivelTres/03098PracticoInglesTodosLosDias.mp3", Ingles: "I practice English everyday", AudioIngles: "/audio/videoCuatro/iPracticeEnglishEveryDay.mp3" },
            { Espanol: "Prométeme", AudioEspanol: "/audio/nivelTres/03099Prometeme.mp3", Ingles: "Promise me", AudioIngles: "/audio/videoCuatro/promiseMe.mp3" },
            { Espanol: "Qué desafortunado", AudioEspanol: "/audio/nivelTres/03100QueDesafortunado.mp3", Ingles: "How unfortunate", AudioIngles: "/audio/videoTres/howUnfortuned.mp3" },
            { Espanol: "Quiero atención", AudioEspanol: "/audio/nivelTres/03101QuieroAtencion.mp3", Ingles: "I want attention", AudioIngles: "/audio/videoCuatro/iWantAttention.mp3" },
            { Espanol: "Quiero iniciar un negocio", AudioEspanol: "/audio/nivelTres/03102QuieroIniciarUnNegocio.mp3", Ingles: "I want to start a business", AudioIngles: "/audio/videoTres/iWantToStartABusiness.mp3" },
            { Espanol: "Quiero practicar contigo", AudioEspanol: "/audio/nivelTres/03103QuieroPracticarContigo.mp3", Ingles: "I want to practice with you", AudioIngles: "/audio/videoCuatro/iWantToPracticeWithYou.mp3" },
            { Espanol: "Quiero quedarme aquí", AudioEspanol: "/audio/nivelTres/03104QuieroQuedarmeAqui.mp3", Ingles: "I want to stay here", AudioIngles: "/audio/videoCuatro/iWantToStayHere.mp3" },
            { Espanol: "Quiero venderlo", AudioEspanol: "/audio/nivelTres/03105QuieroVenderlo.mp3", Ingles: "I want to sell it", AudioIngles: "/audio/videoCuatro/iWantToSellIt.mp3" },
            { Espanol: "Se está haciendo tarde", AudioEspanol: "/audio/nivelTres/03106SeEstaHaciendoTarde.mp3", Ingles: "It´s getting late", AudioIngles: "/audio/videoCuatro/itsGettingLate.mp3" },
            { Espanol: "Se ve delicioso", AudioEspanol: "/audio/nivelTres/03107SeVeDelicioso.mp3", Ingles: "It looks delicious", AudioIngles: "/audio/videoCuatro/itLooksDelicious.mp3" },
            { Espanol: "Somos como una familia", AudioEspanol: "/audio/nivelTres/03108SomosComoUnaFamilia.mp3", Ingles: "We are like family", AudioIngles: "/audio/videoCuatro/weAreLikeFamily.mp3" },
            { Espanol: "Soy un estudiante extranjero", AudioEspanol: "/audio/nivelTres/03109SoyUnEstudianteExtranjero.mp3", Ingles: "I´m a foreign student", AudioIngles: "/audio/videoTres/amAForentStudent.mp3" },
            { Espanol: "Te espero afuera", AudioEspanol: "/audio/nivelTres/03110TeEsperoAfuera.mp3", Ingles: "I´ll wait for you outside", AudioIngles: "/audio/videoCuatro/illWaitForYouOutside.mp3" },
            { Espanol: "Te perdono", AudioEspanol: "/audio/nivelTres/03111TePerdono.mp3", Ingles: "I forgive you", AudioIngles: "/audio/videoCuatro/iForgiveYou.mp3" },
            { Espanol: "Te prometo", AudioEspanol: "/audio/nivelTres/03112TePrometo.mp3", Ingles: "I promise", AudioIngles: "/audio/videoCuatro/iPromise.mp3" },
            { Espanol: "Tenemos que practicar también", AudioEspanol: "/audio/nivelTres/03113TenemosQuePracticarTambien.mp3", Ingles: "We need to practice too", AudioIngles: "/audio/videoCuatro/weNeedToPracticeToo.mp3" },
            { Espanol: "Tengo prisa", AudioEspanol: "/audio/nivelTres/03114TengoPrisa.mp3", Ingles: "I´m in a hurry", AudioIngles: "/audio/videoTres/amInAHurry.mp3" },
            { Espanol: "Tengo un problema", AudioEspanol: "/audio/nivelTres/03115TengoUnProblema.mp3", Ingles: "I have a problem", AudioIngles: "/audio/videoTres/iHaveAProblem.mp3" },
            { Espanol: "Tomaré una decisión", AudioEspanol: "/audio/nivelTres/03116TomareUnaDecision.mp3", Ingles: "I will make a decision", AudioIngles: "/audio/videoCuatro/iWillMakeADecision.mp3" },
            { Espanol: "Tu pronunciación es buena", AudioEspanol: "/audio/nivelTres/03117TuPronunciacionEsBuena.mp3", Ingles: "Your pronunciation is good", AudioIngles: "/audio/videoCuatro/yourPronnunciationIsGood.mp3" },
            { Espanol: "Tuve un buen día", AudioEspanol: "/audio/nivelTres/03118TuveUnBuenDia.mp3", Ingles: "I had a good day", AudioIngles: "/audio/videoCuatro/iHadAGoodDay.mp3" },
            { Espanol: "Vamos a practicar pronto", AudioEspanol: "/audio/nivelTres/03119VamosAPracticarPronto.mp3", Ingles: "Let´s practice soon", AudioIngles: "/audio/videoTres/letsPracticeSoon.mp3" },
            { Espanol: "Vivo con un(a) amigo(a)", AudioEspanol: "/audio/nivelTres/03120VivoConUnAmigo.mp3", Ingles: "I live with a friend", AudioIngles: "/audio/videoCuatro/iLiveWithAFriend.mp3" },
            { Espanol: "¿A qué hora abren?", AudioEspanol: "/audio/nivelTres/03121AQueHoraAbren.mp3", Ingles: "At what time does it open?", AudioIngles: "/audio/videoCuatro/atWhatTimeDoesItOpen.mp3" },
            { Espanol: "¿A quién apoyas?", AudioEspanol: "/audio/nivelTres/03122AQuienApoyas.mp3", Ingles: "Who do you support?", AudioIngles: "/audio/videoCuatro/whoDoYouSupport.mp3" },
            { Espanol: "¿A quién le toca?", AudioEspanol: "/audio/nivelTres/03123AQuienLeToca.mp3", Ingles: "Whose turn is it?", AudioIngles: "/audio/videoCuatro/whoseTurnIsIt.mp3" },
            { Espanol: "¿Aceptas tarjetas de crédito?", AudioEspanol: "/audio/nivelTres/03124AceptasTarjetasDeCredito.mp3", Ingles: "Do you accept credit cards?", AudioIngles: "/audio/videoTres/doYouAcceptCreditCards.mp3" },
            { Espanol: "¿Casi estás aquí?", AudioEspanol: "/audio/nivelTres/03125CasiEstasAqui.mp3", Ingles: "Are you almost here?", AudioIngles: "/audio/videoCuatro/areYouAlmostHere.mp3" },
            { Espanol: "¿Cómo debemos hacerlo?", AudioEspanol: "/audio/nivelTres/03126ComoDebemosHacerlo.mp3", Ingles: "How should we do this?", AudioIngles: "/audio/videoCuatro/howShoulWeDoThis.mp3" },
            { Espanol: "¿Cómo terminó?", AudioEspanol: "/audio/nivelTres/03127ComoTermino.mp3", Ingles: "How did it end?", AudioIngles: "/audio/videoCuatro/howDidItEnd.mp3" },
            { Espanol: "¿Cuál es el nombre del bebé?", AudioEspanol: "/audio/nivelTres/03128CualEsElNombreDelBebe.mp3", Ingles: "What´s the name of the baby?", AudioIngles: "/audio/videoCuatro/whatsTheNameOfTheBaby.mp3" },
            { Espanol: "¿Cuál es el plan?", AudioEspanol: "/audio/nivelTres/03129CualEsElPlan.mp3", Ingles: "What´s the plan?", AudioIngles: "/audio/videoCuatro/whatsThePlan.mp3" },
            { Espanol: "¿Cuál es el problema?", AudioEspanol: "/audio/nivelTres/03130CualEsElProblema.mp3", Ingles: "What´s the problem?", AudioIngles: "/audio/videoTres/whatsTheProblem.mp3" },
            { Espanol: "¿Cuál es la respuesta?", AudioEspanol: "/audio/nivelTres/03131CualEsLaRespuesta.mp3", Ingles: "What´s the answer?", AudioIngles: "/audio/videoCuatro/whatsTheAnswer.mp3" },
            { Espanol: "¿Cuál es mejor?", AudioEspanol: "/audio/nivelTres/03132CualEsMejor.mp3", Ingles: "Which is better?", AudioIngles: "/audio/videoCuatro/whichIsBetter.mp3" },
            { Espanol: "¿Cuál es tu comida favorita?", AudioEspanol: "/audio/nivelTres/03133CualEsTuComidaFavorita.mp3", Ingles: "What´s your favorite food?", AudioIngles: "/audio/videoCuatro/whatsYourFavoriteFood.mp3" },
            { Espanol: "¿Cuál es tu decisión?", AudioEspanol: "/audio/nivelTres/03134CualEsTuDecision.mp3", Ingles: "What´s your decision?", AudioIngles: "/audio/videoTres/whatsYourDecision.mp3" },
            { Espanol: "¿Cuál es tu dirección?", AudioEspanol: "/audio/nivelTres/03135CualEsTuDireccion.mp3", Ingles: "What´s your address?", AudioIngles: "/audio/videoCuatro/whatsYourAddress.mp3" },
            { Espanol: "¿Cuál es tu opinión?", AudioEspanol: "/audio/nivelTres/03136CualEsTuOpinion.mp3", Ingles: "What´s your opinion?", AudioIngles: "/audio/videoTres/whatsYourOpinion.mp3" },
            { Espanol: "¿Cuáles países quieres visitar?", AudioEspanol: "/audio/nivelTres/03137CualesPaisesQuieresVisitar.mp3", Ingles: "Which countries do you want to visit?", AudioIngles: "/audio/videoCuatro/whichCountriesDoYouWantToVisit.mp3" },
            { Espanol: "¿Cuáles son tus libros favoritos?", AudioEspanol: "/audio/nivelTres/03138CualesSonTusLibrosFavoritos.mp3", Ingles: "Which are your favorite books?", AudioIngles: "/audio/videoTres/whichAreYourFavoriteBooks.mp3" },
            { Espanol: "¿Cuáles son tus planes para hoy?", AudioEspanol: "/audio/nivelTres/03139CualesSonTusPlanesParaHoy.mp3", Ingles: "What are your plans for today?", AudioIngles: "/audio/videoCuatro/whatAreYourPlansForToday.mp3" },
            { Espanol: "¿Cuándo es la mejor hora para visitar?", AudioEspanol: "/audio/nivelTres/03140CuandoEsLaMejorHoraParaVisitar.mp3", Ingles: "When is the best hour to visit?", AudioIngles: "/audio/videoCuatro/whenIsTheBestHourToVisit.mp3" },
            { Espanol: "¿Cuándo nos vamos?", AudioEspanol: "/audio/nivelTres/03141CuandoNosVamos.mp3", Ingles: "When are we leaving?", AudioIngles: "/audio/videoCuatro/whenAreWeLeaving.mp3" },
            { Espanol: "¿Cuándo termina?", AudioEspanol: "/audio/nivelTres/03142CuandoTermina.mp3", Ingles: "When does it end?", AudioIngles: "/audio/videoTres/whenDoesItEnd.mp3" },
            { Espanol: "¿Cuánto mides?", AudioEspanol: "/audio/nivelTres/03143CuantoMides.mp3", Ingles: "How tall are you?", AudioIngles: "/audio/videoTres/howTallAreYou.mp3" },
            { Espanol: "¿Cuánto tiempo tengo?", AudioEspanol: "/audio/nivelTres/03144CuantoTiempoTengo.mp3", Ingles: "How much time do I have?", AudioIngles: "/audio/videoCuatro/howMuchTimeDoIHave.mp3" },
            { Espanol: "¿De qué color son tus ojos?", AudioEspanol: "/audio/nivelTres/03145DeQueColorSonTusOjos.mp3", Ingles: "What color are your eyes?", AudioIngles: "/audio/videoCuatro/whatColorAreYourEyes.mp3" },
            { Espanol: "¿Dónde es(está) eso?", AudioEspanol: "/audio/nivelTres/03146DondeEsEso.mp3", Ingles: "Where is that?", AudioIngles: "/audio/videoCuatro/whereIsThat.mp3" },
            { Espanol: "¿Dónde está el(la) maestro(a)?", AudioEspanol: "/audio/nivelTres/03147DondeEstaElMaestro.mp3", Ingles: "Where´s the teacher?", AudioIngles: "/audio/videoCuatro/whereIsTheTeacher.mp3" },
            { Espanol: "¿Dónde está mi teléfono?", AudioEspanol: "/audio/nivelTres/03148DondeEstaMiTelefono.mp3", Ingles: "Where´s my phone?", AudioIngles: "/audio/videoCuatro/whereIsMyPhone.mp3" },
            { Espanol: "¿Dónde están mis cosas?", AudioEspanol: "/audio/nivelTres/03149DondeEstanMisCosas.mp3", Ingles: "Where´s my stuff?", AudioIngles: "/audio/videoCuatro/whereIsMyStuff.mp3" },
            { Espanol: "¿Dónde estoy?", AudioEspanol: "/audio/nivelTres/03150DondeEstoy.mp3", Ingles: "Where am I?", AudioIngles: "/audio/videoCuatro/whereAmI.mp3" },
            { Espanol: "¿Está abierta la tienda?", AudioEspanol: "/audio/nivelTres/03151EstaAbiertaLaTienda.mp3", Ingles: "Is the store open?", AudioIngles: "/audio/videoCuatro/isTheStoreOpen.mp3" },
            { Espanol: "¿Está pasando algo?", AudioEspanol: "/audio/nivelTres/03152EstaPasandoAlgo.mp3", Ingles: "Is something happening?", AudioIngles: "/audio/videoCuatro/isSomethingHappening.mp3" },
            { Espanol: "¿Estás en apuro?", AudioEspanol: "/audio/nivelTres/03153EstasEnApuro.mp3", Ingles: "Are you in a hurry?", AudioIngles: "/audio/videoTres/areYouInAHurry.mp3" },
            { Espanol: "¿Estás mintiendo?", AudioEspanol: "/audio/nivelTres/03154EstasMintiendo.mp3", Ingles: "Are you lying?", AudioIngles: "/audio/videoCuatro/areYouLying.mp3" },
            { Espanol: "¿Estás trabajando?", AudioEspanol: "/audio/nivelTres/03155EstasTrabajando.mp3", Ingles: "Are you working?", AudioIngles: "/audio/videoCuatro/areYouWorking.mp3" },
            { Espanol: "¿Esto es apropiado?", AudioEspanol: "/audio/nivelTres/03156EstoEsApropiado.mp3", Ingles: "Is this appropiate?", AudioIngles: "/audio/videoCuatro/isThisAppropiated.mp3" },
            { Espanol: "¿Esto está bien?", AudioEspanol: "/audio/nivelTres/03157EstoEstaBien.mp3", Ingles: "Is this okay?", AudioIngles: "/audio/videoTres/isThisOk.mp3" },
            { Espanol: "¿Estudiaste?", AudioEspanol: "/audio/nivelTres/03158Estudiaste.mp3", Ingles: "Did you study?", AudioIngles: "/audio/videoCuatro/didYouStudy.mp3" },
            { Espanol: "¿Has decidido?", AudioEspanol: "/audio/nivelTres/03159HasDecidido.mp3", Ingles: "Have you decided?", AudioIngles: "/audio/videoTres/haveYouDecided.mp3" },
            { Espanol: "¿Has dejado un mensaje?", AudioEspanol: "/audio/nivelTres/03160HasDejadoUnMensaje.mp3", Ingles: "Did you leave a message?", AudioIngles: "/audio/videoCuatro/didYouLeaveAMessage.mp3" },
            { Espanol: "¿Has estado allí?", AudioEspanol: "/audio/nivelTres/03161HasEstadoAhi.mp3", Ingles: "Have you been there?", AudioIngles: "/audio/videoCuatro/haveYouBeenThere.mp3" },
            { Espanol: "¿Hay algo que te molesta?", AudioEspanol: "/audio/nivelTres/03162HayAlgoQueTeMolesta.mp3", Ingles: "Is something bothering you?", AudioIngles: "/audio/videoTres/isSomethingBotheringYou.mp3" },
            { Espanol: "¿Hay habitaciones disponibles?", AudioEspanol: "/audio/nivelTres/03163HayHabitacionesDisponibles.mp3", Ingles: "Are there rooms available?", AudioIngles: "/audio/videoCuatro/areTheRoomsAvaliable.mp3" },
            { Espanol: "¿Lo estoy haciendo bien?", AudioEspanol: "/audio/nivelTres/03164LoEstoyHaciendoBien.mp3", Ingles: "Am I doing this right?", AudioIngles: "/audio/videoTres/amIDoingThisRight.mp3" },
            { Espanol: "¿Me perdonas?", AudioEspanol: "/audio/nivelTres/03165MePerdonas.mp3", Ingles: "Do you forgive me?", AudioIngles: "/audio/videoCuatro/doYouForgiveMe.mp3" },
            { Espanol: "¿Me puedes dar un consejo?", AudioEspanol: "/audio/nivelTres/03166MePuedesDarUnConsejo.mp3", Ingles: "Can you give me advice?", AudioIngles: "/audio/videoCuatro/canYouGiveMeAdvise.mp3" },
            { Espanol: "¿Me puedes hacer un favor?", AudioEspanol: "/audio/nivelTres/03167MePuedesHacerUnFavor.mp3", Ingles: "Can you do me a favor?", AudioIngles: "/audio/videoTres/canYouDoMeAFavor.mp3" },
            { Espanol: "¿Me recuerdas?", AudioEspanol: "/audio/nivelTres/03168MeRecuerdas.mp3", Ingles: "Do you remember me?", AudioIngles: "/audio/videoCuatro/doYouRememberMe.mp3" },
            { Espanol: "¿Por qué lo hiciste?", AudioEspanol: "/audio/nivelTres/03169PorQueLoHiciste.mp3", Ingles: "Why did you do it?", AudioIngles: "/audio/videoCuatro/whyDidYouDoIt.mp3" },
            { Espanol: "¿Puedo enviar algo?", AudioEspanol: "/audio/nivelTres/03170PuedoEnviarAlgo.mp3", Ingles: "Can I send you something?", AudioIngles: "/audio/videoCuatro/canISendYouSomething.mp3" },
            { Espanol: "¿Puedo sentarme aquí?", AudioEspanol: "/audio/nivelTres/03171PuedoSentarmeAqui.mp3", Ingles: "Can I sit here?", AudioIngles: "/audio/videoTres/canISitHere.mp3" },
            { Espanol: "¿Puedo verte mañana?", AudioEspanol: "/audio/nivelTres/03172PuedoVerteManana.mp3", Ingles: "Can I see you tomorrow?", AudioIngles: "/audio/videoCuatro/canISeeYouTomorrow.mp3" },
            { Espanol: "¿Qué debo elegir?", AudioEspanol: "/audio/nivelTres/03173QueDeboElegir.mp3", Ingles: "What should I choose?", AudioIngles: "/audio/videoTres/whatShouldIChoose.mp3" },
            { Espanol: "¿Qué deportes juegas?", AudioEspanol: "/audio/nivelTres/03174QueDeportesJuegas.mp3", Ingles: "What sports do you play?", AudioIngles: "/audio/videoTres/whatSportsDoYouPlay.mp3" },
            { Espanol: "¿Qué estás dibujando?", AudioEspanol: "/audio/nivelTres/03175QueEstasDibujando.mp3", Ingles: "What are you drawing?", AudioIngles: "/audio/videoCuatro/whatAreYouDrawing.mp3" },
            { Espanol: "¿Qué estás enviando?", AudioEspanol: "/audio/nivelTres/03176QueEstasEnviando.mp3", Ingles: "What are you sending?", AudioIngles: "/audio/videoCuatro/whatAreYouSending.mp3" },
            { Espanol: "¿Qué estás leyendo?", AudioEspanol: "/audio/nivelTres/03177QueEstasLeyendo.mp3", Ingles: "What are you reading?", AudioIngles: "/audio/videoCuatro/whatAreYouReading.mp3" },
            { Espanol: "¿Qué estás vendiendo?", AudioEspanol: "/audio/nivelTres/03178QueEstasVendiendo.mp3", Ingles: "What are you selling?", AudioIngles: "/audio/videoCuatro/whatAreYouSelling.mp3" },
            { Espanol: "¿Qué estás viendo?", AudioEspanol: "/audio/nivelTres/03179QueEstasViendo.mp3", Ingles: "What are you watching?", AudioIngles: "/audio/videoCuatro/whatAreYouWatching.mp3" },
            { Espanol: "¿Qué hay para desayunar?", AudioEspanol: "/audio/nivelTres/03180QueHayParaDesayunar.mp3", Ingles: "What´s for breakfast?", AudioIngles: "/audio/videoCuatro/whatsForBreakfast.mp3" },
            { Espanol: "¿Qué me pongo?", AudioEspanol: "/audio/nivelTres/03181QueMePongo.mp3", Ingles: "What should I wear?", AudioIngles: "/audio/videoCuatro/whatShouldIWear.mp3" },
            { Espanol: "¿Qué quiere decir?", AudioEspanol: "/audio/nivelTres/03182QueQuiereDecir.mp3", Ingles: "What does it mean?", AudioIngles: "/audio/videoTres/whatDoesItMean.mp3" },
            { Espanol: "¿Quién dijo eso?", AudioEspanol: "/audio/nivelTres/03183QuienDijoEso.mp3", Ingles: "Who said that?", AudioIngles: "/audio/videoCuatro/whoSaidThat.mp3" },
            { Espanol: "¿Quién es responsable?", AudioEspanol: "/audio/nivelTres/03184QuienEsResponsable.mp3", Ingles: "Who´s responsible?", AudioIngles: "/audio/videoCuatro/whosResponsable.mp3" },
            { Espanol: "¿Quién es?", AudioEspanol: "/audio/nivelTres/03185QuienEs.mp3", Ingles: "Who is it?", AudioIngles: "/audio/videoTres/whoIsIt.mp3" },
            { Espanol: "¿Quién ganó?", AudioEspanol: "/audio/nivelTres/03186QuienGano.mp3", Ingles: "Who won?", AudioIngles: "/audio/videoCuatro/whoWon.mp3" },
            { Espanol: "¿Quién hace eso?", AudioEspanol: "/audio/nivelTres/03187QuienHaceEso.mp3", Ingles: "Who´s doing that?", AudioIngles: "/audio/videoCuatro/whoIsDoingThat.mp3" },
            { Espanol: "¿Quién hizo esto?", AudioEspanol: "/audio/nivelTres/03188QuienHizoEsto.mp3", Ingles: "Who did this?", AudioIngles: "/audio/videoCuatro/whoDidThis.mp3" },
            { Espanol: "¿Quién perdió?", AudioEspanol: "/audio/nivelTres/03189QuienPerdio.mp3", Ingles: "Who lost?", AudioIngles: "/audio/videoCuatro/whoLost.mp3" },
            { Espanol: "¿Quién te lo dijo?", AudioEspanol: "/audio/nivelTres/03190QuienTeLoDijo.mp3", Ingles: "Who told you?", AudioIngles: "/audio/videoCuatro/whoToldYou.mp3" },
            { Espanol: "¿Quiéres jugar?", AudioEspanol: "/audio/nivelTres/03191QuieresJugar.mp3", Ingles: "Do you want to play?", AudioIngles: "/audio/videoCuatro/doYouWantToPlayAGame.mp3" },
            { Espanol: "¿Quiéres vivir aquí?", AudioEspanol: "/audio/nivelTres/03192QuieresVivirAqui.mp3", Ingles: "Do you want to live here?", AudioIngles: "/audio/videoCuatro/doYouWantToLiveHere.mp3" },
            { Espanol: "¿Sabes la respuesta?", AudioEspanol: "/audio/nivelTres/03193SabesLaRespuesta.mp3", Ingles: "Do you know the answer?", AudioIngles: "/audio/videoCuatro/doYouKnowTheAnswer.mp3" },
            { Espanol: "¿Sabes?", AudioEspanol: "/audio/nivelTres/03194Sabes.mp3", Ingles: "Do you know?", AudioIngles: "/audio/videoTres/doYouKnow.mp3" },
            { Espanol: "¿Te estoy molestando?", AudioEspanol: "/audio/nivelTres/03195TeEstoyMolestando.mp3", Ingles: "Am I bothering you?", AudioIngles: "/audio/videoCuatro/amIBotheringYou.mp3" },
            { Espanol: "¿Te gusta bailar?", AudioEspanol: "/audio/nivelTres/03196TeGustaBailar.mp3", Ingles: "Do you like dancing?", AudioIngles: "/audio/videoCuatro/doYouLikeDancing.mp3" },
            { Espanol: "¿Te preocupa?", AudioEspanol: "/audio/nivelTres/03197TePreocupa.mp3", Ingles: "Do you worry?", AudioIngles: "/audio/videoCuatro/doYouWorry.mp3" },
            { Espanol: "¿Tenemos permiso?", AudioEspanol: "/audio/nivelTres/03198TenemosPermiso.mp3", Ingles: "Do we have permission?", AudioIngles: "/audio/videoCuatro/doWeHavePermission.mp3" },
            { Espanol: "¿Tengo que esperar?", AudioEspanol: "/audio/nivelTres/03199TengoQueEsperar.mp3", Ingles: "Do I have to wait?", AudioIngles: "/audio/videoCuatro/doIHaveToWait.mp3" },
            { Espanol: "¿Tienes sueño?", AudioEspanol: "/audio/nivelTres/03200TienesSueno.mp3", Ingles: "Are you sleepy?", AudioIngles: "/audio/videoCuatro/areYouSleepy.mp3" }
        ];


        $('#divTablaDos').append('<section class="table" ng-controller="inglesDosController" class=""></section>');
        var tabla = $('#divTablaDos').children();

        $scope.registroUnoInglesC = [];

        for (var i = 0 ; i < $scope.registroUnoIngles.length ; i++) {
            var color = "white";
            if (i % 2 == 0)
                color = "#f5f5f5";

            $scope.registroUnoInglesC.push({
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

    function NivelCuatro()
    { }

    function NivelCinco()
    { }

    function NivelSeis()
    { }

    function NivelSiete()
    { }

}]);







/////////////////////////////////////////////////////////////////////////////////////////////////////////////


////////////////////////////************Textos Nivel Dos Inglés************//////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////************Textos Nivel Tres Inglés************//////////////////////////////////


/////////////////////////////////////////////////////////////////////////////////////////////////////////////


////////////////////////////************Textos Nivel Cuatro Inglés************//////////////////////////////////

appModulo.controller('inglesCuatroController', function ($http, $scope, i18nService) {

    $('#cuatroBTN').css('background-color', '#333');

    $scope.registroUnoIngles = [
		{ Espanol: "A nadie le importa", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Nobody cares", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Abriré la puerta", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I´ll open the door", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Ahora es el momento perfecto", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Now is the perfect time", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Alguien te estaba buscando", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Someone was looking for you", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Aprendí mucho hoy", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I learned a lot today", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Casi estás ahí", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "You´re almost there", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Cierra la puerta", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Close the door", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Como siempre", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Like always", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Continuaremos mañana", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "We will continue tomorrow", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Dame tu número de teléfono", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Give me your phone number", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Dame un poco", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Give me a little", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Dámelo", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Give it to me", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Debes estar cansado(a)", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "You must be tired", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Desperté temprano hoy", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I woke up early today", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Disfruté hablando con usted", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I enjoyed talking with you", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "El carro no está funcionando", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "The car´s not working", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "El clima está malo", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "There´s bad weather", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "El examen fue difícil", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "The exam was difficult", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Eres muy útil", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "You´re very helpful", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Es fácil de recordar", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "It´s easy to remember", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Es mi decisión", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "It´s my decision", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Es mi oportunidad", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "It´s my chance", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Es mi pasión", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "It´s my passion", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Es mucho mejor", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "It´s much better", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Es nuevo(a)", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "It´s new", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Es suave", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "It´s soft", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Es tan difícil", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "It´s so hard", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Es tu turno", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "It´s your turn", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Es un hecho", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "It´s a fact", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Es una buena película", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "It´s a good movie", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Es una posibilidad", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "It´s a possibility", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Esas son preguntas fáciles", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Those are easy questions", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Eso está bien", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "That´s okay", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Eso fue una locura", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "That was crazy", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Está casi listo", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "It´s almost ready", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Está lleno", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "It´s full", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Está vacío", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "It´s empty", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Estamos lejos", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "We are far away", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Estaré afuera si me necesitas", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I´ll be outside if you need me", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Estaré aquí todo el día", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I´ll be here all day", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Esto es valioso", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "This is valuable", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Estoy contigo", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I´m with you", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Estoy dispuesto a hacerlo", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I´m willing to do it", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Estoy intentando concentrarme", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I´m trying to concentrate", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Estoy lavando ropa", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I´m doing laundry", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Estoy muy agradecido(a)", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I´m very grateful", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Estoy sucio(a)", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I´m dirty", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Estoy sudando", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I´m sweating", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Estoy tomando notas", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I´m taking notes", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Estudié", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I studied", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Fue a propósito", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "It was on purpose", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Fue buena información", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "It was good information", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Fue bueno", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "It was good", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Fue cancelado(a)", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "It was cancelled", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Fue dramático(a)", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "It was dramatic", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Fue una buena decisión", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "It was a good decision", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Fue una mala decisión", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "It was a bad decision", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Ganamos", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "We won", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Gracias por decirme la verdad", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Thanks for telling me the truth", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Gracias por enviármelo", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Thanks for sending it to me", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Ha sido mucho tiempo", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "It´s been a long time", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Ha sido un buen día", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "It´s been a good day", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Hace frío", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "It´s cold", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Hago ejercicio todos los días", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I exercise everyday", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Haremos lo mejor", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "We´ll try our best", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Hay extra", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "There are extra", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "He terminado con todo", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I´m finished with everything", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "La comida está caliente", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "The food is hot", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "La comida está fría", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "The food is cold", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "La película está por comenzar", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "The movie´s about to start", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "La policía está aquí", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "The police are here", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Las clases se cancelaron", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Classes are cancelled", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Llegaré temprano", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I will arrive early", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Lo compré recientemente", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I bought it recently", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Lo estoy haciendo en este momento", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I´m doing it right now", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Lo intentaré otra vez", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I will try again", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Lo siento, no presté atención", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I´m sorry, I didn´t pay attention", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Mantén la calma", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Stay calm", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Me distraigo fácilmente", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I get easily distracted", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Me distraje", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I was distracted", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Me estoy congelando", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I´m freezing", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Me hace feliz", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "It makes me happy", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Me pregunto por qué", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I´m wondering why", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Me puedes decir más tarde", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "You can tell me later", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Me voy", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I´m leaving", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Mi alarma está activada", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "My alarm is on", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Mi amigo(a) está aquí", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "My friend is here", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Mi teléfono no funciona", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "My phone´s not working", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Mis padres están bien", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "My parents are okay", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Mis planes son arruinados", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "My plans are ruined", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Nada nuevo", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Nothing new", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Nada tengo", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I got nothing", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Nada tengo por hacer", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I have nothing to do", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Nadie está en casa", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Nobody´s home", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Nadie está escuchando", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Nobody´s listening", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Necesitas practicar", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "You need to practice", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Necesito ayuda con mi pronunciación del inglés", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I need help with my English pronunciation", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Necesito eso", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I need that", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Necesito silencio", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I need silence", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Necesito un trago", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I need a drink", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Necesito una nueva computadora", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I need a new computer", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Necesito unas vacaciones", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I need a vacation", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "No fue mi intención", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "It wasn´t my intention", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "No hagas ruidos", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Don´t make noises", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "No hay clases hoy", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "There aren´t classes today", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "No hay trabajo hoy", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "There´s no work today", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "No me importa", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I don´t care", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "No quiero ir", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I don´t want to go", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "No recuerdo", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I don´t remember", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "No sé dónde está", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I don´t know where it is", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "No tengo permiso", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I´m not allowed to go", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Perdí mi teléfono", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I lost my phone", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Perdí mis llaves", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I lost my keys", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Perdimos", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "We lost", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Puedes decirme", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "You can tell me", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Puedo hacerlo", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I can make it", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Puedo traerlo(a)", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I can bring it", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Quiero hacerlo otra vez", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I want to do it again", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Recuerdo lo que pasó", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I remember what happened", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Se cayó", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "It fell", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Se recomienda", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "It´s recommended", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Siempre sucede", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "It always happens", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Soy el primero en llegar", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I´m the first one here", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Sucedió de repente", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "It happened suddenly", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Talvez la próxima vez", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Maybe next time", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Te enseñaré", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I will teach you", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Te estábamos esperando", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "We waited for you", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Te mostraré", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I will show you", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Te queda poco tiempo", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "You have little time", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Te visitaré", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I will visit you", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Tenemos una reunión hoy", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "We have a meeting today", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Tengo algo que decirte", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I have something to tell you", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Todo estará bien", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Everything will be okay", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Todo ha cambiado", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Everything has changed", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Todo mundo está aquí", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Everyone is here", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Todo mundo quiere saber", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Everyone wants to know", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Todo va bien", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Everything is good", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Todos están ocupados", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Everyone is busy", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Toma tu asiento", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Take your seat", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Vamos al lago", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "We are going to the lake", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Ven con nosotros", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Come with us", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Yo no entendía", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I did not understand", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿A quién estás buscando?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Who are you looking for?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Cómo estuvo el trabajo hoy?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "How was work today?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Cómo pasó?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "How did it happen?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Cómo puedes decir eso?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "How can you say that?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Cómo se pronuncia esto?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "How do you pronounce this?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Cómo va todo?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "How is everything?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Cómo va tu día?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "How is your day going?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Cuál es tu secreto?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "What´s your secret?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Cuáles son los requisitos?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Wat are the requirements?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Cuándo empezó?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "When does it begin?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Cuándo puedo verte?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "When can I see you?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿De quién fue la idea?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Whose idea was it?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Dónde está ese lugar?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Where is that place?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Dónde estabas?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Where were you?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Dónde están las llaves?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Where are the keys?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Están todos bien?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Is everyone okay?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Estás conmigo?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Are you with me?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Estás escribiendo esto?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Are you writing this?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Estás listo(a) para mañana?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Are you ready for tomorrow?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Estás manejando ahí?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Are you driving there?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Estos son tus hijos?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Are these your children?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Fue bueno(a)?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Was it good?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Haces ejercicio?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Do you exercise?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Hay más?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Are there more?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Hay una explicación?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Is there an explanation?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Lo(a) has visto?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Have you watched it?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Me crees?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Do you believe me?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Me has encontrado?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Did you find me?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Podemos vernos mañana?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Can we meet tomorrow?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Podemos vernos?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Can we see each other?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Practicamos hoy?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Are we practicing today?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Puedes apagar la radio?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Can you turn off the radio?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Puedes apagar la televisión?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Can you turn off the television?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Puedes enseñarme?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Can you teach me?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Puedes esperarme?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Can you wait for me?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Puedes hacerlo?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Can you make it?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Puedes traerlo?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Can you bring it?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Puedo llamarte en este momento?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Can I call you right now?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Qué dijeron?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "What did they say?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Qué has escrito?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "What did you write?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Qué hay en el correo?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "What´s in the mail?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Qué más tienes?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "What else do you have?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Qué tienes?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "What do you have?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Quién crees que fue?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Who do you think it was?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Quién es el mejor?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Who´s the best?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Quién sabe la respuesta?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Who knows the answer?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Quién sabe?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Who knows?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Quién se olvidó?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Who forgot?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Quieres un poco de agua?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Do you want some water?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Recibiste mi mensaje?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Did you receive my message?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Te asusté?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Did I scare you?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Te gusta?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Do you like it?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Tienes calor?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Are you hot?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Tienes frío?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Are you cold?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Tienes papel?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Do you have paper?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Tienes un lapicero?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Do you have a pen?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Tienes un lápiz?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Do you have a pencil?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Tienes una idea?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Do you have an idea?", AudioIngles: "/audio/videoCuatro/.mp3" }
    ];


    $('#divTabla').append('<section class="table" ng-controller="inglesDosController" class=""></section>');
    var tabla = $('#divTabla').children();

    for (var i = 0 ; i < $scope.registroUnoIngles.length ; i++) {
        var color = "white";
        if (i % 2 == 0)
            color = "#f5f5f5";

        //alert(angular.toJson($scope.registroUnoIngles[i].Espanol));
        tabla.append('<article style="background:' + color + ' ;margin:10px 0 0 0;" class="col-xs-12 col-sm-12 col-md-6 col-lg-6 seccionesIngles>' +
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
					'</article>'

				);
    }
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////



////////////////////////////************Textos Nivel Cinco Inglés************//////////////////////////////////

appModulo.controller('inglesCincoController', function ($http, $scope, i18nService) {

    $('#cincoBTN').css('background-color', '#333');

    $scope.registroUnoIngles = [
		{ Espanol: "Abre tus ojos", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Open your eyes", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Acabo de despertar", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I just woke up", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Acabo de llegar aquí", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I just arrived here", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Ahora estoy bien", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I´m fine now", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Apúrate", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Hurry up", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Cierra los ojos", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Close your eyes", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Comenzará pronto", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "It´s beginning soon", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Contesta el teléfono", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Answer the phone", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Dejó de llover", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "It stopped raining", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Dime qué piensas", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Tell me what you think", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Ellos desaparecieron", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "They disappeared", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Ellos están buscando a alguien", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "They are looking for someone", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Ellos están investigando", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "They are investigating", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Ellos volverán pronto", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "They will be back soon", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Eres buen estudiante", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "You are a good student", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Es barato vivir ahí", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "It´s cheap to live there", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Es caro vivir ahí", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "It´s expensive to live there", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Es contra la ley", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "It´s against the law", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Es gratis para todo mundo", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "It´s free for everyone", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Es ilegal", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "It´s illegal", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Es mutuo", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "It´s mutual", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Es nada especial", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "It´s nothing special", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Es permanente", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "It´s permanent", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Es repugnante", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "It´s disgusting", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Es temporal", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "It´s temporary", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Es tranquilo aquí", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "It´s quiet here", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Es un día especial", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "It´s a special day", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Es una llamada de larga distancia", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "It´s a long distance call", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Está en el carro", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "It´s in the car", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Está prohibido(a)", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "It´s prohibited", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Estamos aquí", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "We are here", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Estamos listos", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "We are ready", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Estás invitado(a)", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "you are invited", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Esto es perfecto", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "This is perfect", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Estoy ansioso(a)", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I´m anxious", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Estoy embarazada", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I´m pregnant", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Estoy en el teléfono", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I´m on the phone", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Estoy estudiando aquí", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I´m studying here", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Estoy explorando la ciudad", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I´m exploring the city", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Estoy haciendo algo importante", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I´m doing something important", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Estoy haciendo una presentación", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I´m making a presentation", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Estoy investigando", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I´m investigating", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Estoy nervioso(a)", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I´m nervous", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Estoy siendo paciente", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I´m being patient", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Estoy trabajando aquí", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I´m working here", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Estoy trabajando hoy", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I´m working today", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Fue agradable verte hoy", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "It was nice seeing you today", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Fue mi decisión", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "It was my decision", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Gracia por la invitación", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Thanks for the invitation", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Gracias por cooperar", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Thanks for cooperating", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Gracias por la oferta", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Thanks for the offer", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Hay alguien en la puerta", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Someone´s at the door", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Hice algo para ti", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I made something for you", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Iremos en mi carro", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "We will go in my car", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Las clases están a punto de finalizar", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "School is about to end", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Llamaste a un número equivocado", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "You called the wrong number", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Llévalo ahí", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Take it there", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Mañana es el último día", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Tomorrow is the last day", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Me duele el estómago", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "My stomach hurts", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Me duele la cabeza", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "My head hurts", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Me gusta esta canción", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I like this song", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Me quedo", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I´m staying", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Me siento culpable", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I feel guilty", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Me siento mejor", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I´m feeling better", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Mi carro no quiere arrancar", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "My car doesn´t want to start", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Míralo(a)", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Look at it", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Mis clases son difíciles", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "My classes are difficult", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Mis hijos están jugando", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "My kids are playing", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Mis manos están frías", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "My hands are cold", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Mis padres están en casa", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "My parents are home", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Mis padres están trabajando", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "My parents are working", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Muéstrame tu mano", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Show me your hand", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Muéstramelo", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Show it to me", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Nadie puede entrar", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Nobody can enter", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Necesitamos más bebidas", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "We need more drinks", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Necesitas escuchar esto", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "You need to hear this", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Necesitas que ver esto", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "You need to see this", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Necesito ayuda de expertos", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I need expert help", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Necesito ayudar a mis padres", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I need to help my parents", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Necesito comprar uno nuevo", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I need to buy a new one", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Necesito consejo", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I need advice", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Necesito depositar dinero", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I need to deposit money", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Necesito diferentes opiniones", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I need different opinions", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Necesito reemplazarlo", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I need to replace it", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Necesito sacar dinero", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I need to withdraw money", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Necesito un guía turístico", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I need a tour guide", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Necesito un mecánico", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I need a mechanic", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Necesito una silla", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I need a chair", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Necesito viajar", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I need to travel", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "No contestes el teléfono", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Don´t answer the phone", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "No entres en pánico", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Don´t panic", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "No hace diferencia", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "It doesn´t make a difference", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "No hay bebidas", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "There are no drinks", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "No hay razón", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "There is no reason", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "No lo hice", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I did not do it", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "No mires", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Don´t look", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "No puedo comprarlo", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I can´t buy it", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "No quiero levantarme", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I don´t want to get up", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "No tiene sentido", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "It´s meaningless", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Por favor, continúa", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Please, continue", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Por supuesto", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Of course", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Puedo ir", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I can come", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Quédate aquí", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Stay here", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Quiero ayudar", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I want to help", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Quiero estudiar en el extranjero", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I want to study abroad", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Se está haciendo tarde", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "It´s getting late", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Se rompió", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "It broke", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Será difícil", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "It´s going to be difficult", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Será fácil", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "It´s going to be easy", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Siento interrumpir", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I´m sorry for interrupting", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Soy inocente", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I´m innocent", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Soy optimista", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I´m optimistic", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Soy pesimista", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I´m pessimistic", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Soy un expatriado", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I´m an expatriate", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Talvez el próximo mes", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Maybe next month", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Te mostraré por qué", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I will show you why", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Tendré todo listo", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I will get everything ready", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Tenemos que intentar", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "We have to try", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Tengo algunos regalos", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I have some gifts", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Tengo mi cámara", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I have my camera", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Tengo pocas opciones", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I have few options", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Tengo un nuevo teléfono", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I have a new phone", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Tengo una reunión de negocios mañana", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I have a business meeting tomorrow", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Tengo una sorpresa para ti", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I have a surprise for you", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Terminará pronto", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "It´s ending soon", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Todo está mejorando", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Everything is improving", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Todo mundo siente lo mismo", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Everyone feels the same", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Todos están escuchando", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Everyone is listening", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Todos están viendo", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Everyone is watching", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Tomo el bus", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I take the bus", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Tomo el tren", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I take the train", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Usted es el líder", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "You are the leader", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Viene una tormenta", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "A thunderstorm is coming", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Vivo en la ciudad", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I live in the city", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Vivo en los suburbios", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I live in the suburbs", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Volveré mañana", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I will return tomorrow", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Voy al banco", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I´m going to the bank", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Voy al concierto", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I´m going to the concert", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Voy al médico", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I´m going to the doctor", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Ya casi llego", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I´m almost there", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Casi estás ahí?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Are you almost there?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Cómo es esto?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "How is this?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Cómo podemos ayudar?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "How can we help?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Cómo va tu proyecto?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "How is your project?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Conoces a esta persona?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Do you know this person?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Cuál es el propósito?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "What´s the purpose?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Cuál es el sitio web?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "What´s the website?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Cuál es la diferencia?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "What´s the difference?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Cuál es la dirección?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "What´s the address?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Cuál es la fecha de hoy?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "What´s today´s date?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Cuál es la razón?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "What´s the reason?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Cuál es su nombre?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "What´s their name?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Cuál es tu estación favorita?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "What´s your favorite season?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Cuál es tu lengua materna?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "What´s your native language?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Cuáles son algunos buenos restaurantes?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "What are some good restaurants?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Cuáles son las alternativas?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "What are the alternatives?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Cuándo empiezan las vacaciones?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "When do vacations start?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Cuándo es el examen?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "When is the exam?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Cuándo es la reunión?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "When is the meeting?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Cuánto quiéres?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "How many do you want?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿De quién es el cumpleaños?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Whose birthday is it?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿De quién fue la decisión?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Whose decision was it?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Dónde está el grupo?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Where´s the group?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Dónde está todo mundo?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Where is everyone?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Dónde naciste?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Where were you born?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Es legal?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Is it legal?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Está lloviendo?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Is it raining?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Están todos(as) listos(as)?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Is everyone ready?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Estás aquí para trabajar o estudiar?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Are you here for work or studying?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Estás tomando medicinas?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Are you taking medications?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Esto te está ayudando?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "This is helping you?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Estoy haciendo algo malo?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Am I doing something wrong?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Has practicado hoy?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Did you practice today?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Me estás preguntando?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Are you asking me?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Me puedes dar eso?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Can you give me that?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Me puedes dar un ejemplo?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Can you give me an example?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Por qué sucedió?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Why did it happen?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Puedes arreglarlo?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Can it be fixed?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Puedes encontrarlo?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Can you find it?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Puedes parar aquí?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Can you stop here?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Puedes repetirlo?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Can you repeat it?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Puedes venir?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Can you come?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Puedo dejar un mensaje?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Can I leave a message?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Puedo entrar?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Can I enter?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Qué clases tienes?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "What classes do you have?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Qué dijeron tus padres?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "What did your parents say?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Qué hiciste?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "What did you do?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Qué hora es?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "What time is it?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Qué idioma estás aprendiendo?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "What language are you learning?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Qué más necesitamos?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "What else do we need?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Qué quieres mostrarme?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "What do you want to show me?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Quién está afuera?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Who is outside?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Quién me estaba buscando?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Who was looking for me?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Quiéres más información?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "You want more information?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Te quedas?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Are you staying?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Tienes clases hoy?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Do you have classes today?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Tienes tus cosas?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "You have your stuff?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Trabajarás hoy?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Will you work today?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Usas el transporte público?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Do you use public transportation?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Vas al concierto?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Are you going to the concert?", AudioIngles: "/audio/videoCuatro/.mp3" }
    ];


    $('#divTabla').append('<section class="table" ng-controller="inglesDosController" class=""></section>');
    var tabla = $('#divTabla').children();

    for (var i = 0 ; i < $scope.registroUnoIngles.length ; i++) {
        var color = "white";
        if (i % 2 == 0)
            color = "#f5f5f5";

        //alert(angular.toJson($scope.registroUnoIngles[i].Espanol));
        tabla.append('<article style="background:' + color + ' ;margin:10px 0 0 0;" class="col-xs-12 col-sm-12 col-md-6 col-lg-6 seccionesIngles>' +
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
					'</article>'

				);
    }
});

////////////////////////////************Textos Nivel Seis Inglés************//////////////////////////////////

appModulo.controller('inglesSeisController', function ($http, $scope, i18nService) {

    $('#seisBTN').css('background-color', '#333');

    $scope.registroUnoIngles = [
		{ Espanol: "Ahora no", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Not now", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Alguien está aquí para ti", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Someone is here for you", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Aprendo mucho", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I learn a lot", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Baila conmigo", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Dance with me", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Buena suerte en el examen", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Good luck in the exam", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Búscame afuera", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Look for me outside", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Completa este formato", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Complete this form", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Compré algo para alguien", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I bought something for someone", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Dame una razón", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Give me a reason", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "El carro tiene poca gasolina", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "The car has little gas", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "El tráfico es malo", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "The traffic is bad", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Ellos son gente amable", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "They are friendly people", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Es atractivo(a)", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "It´s attractive", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Es barato aquí", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "It´s cheap here", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Es comida", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "It´s food", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Es demasiado pronto", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "It´s too early", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Es demasiado tarde", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "It´s too late", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "El estadio está lleno", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "The stadium is full", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Es famoso(a)", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "It´s famous", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Es la ley", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "It´s the law", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Es para alguien más", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "It´s for someone else", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Es similar", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "It´s similar", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Es un buen libro", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "It´s a good book", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Es un buen lugar", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "It´s a good place", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Es una ciudad grande", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "It´s a big city", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Es una ciudad pequeña", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "It´s a small city", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Es vergonzoso(a)", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "It´s embarrassing", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Esa es una buena razón", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "That´s a good reason", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Está debajo de la silla", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "It´s under the chair", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Está empezando a llover", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "It´s starting to rain", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Está en la cocina", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "It´s in the kitchen", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Está haciendo frío", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "It´s getting cold", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Está lloviendo terriblemente", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "It´s raining terribly", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Está mojado(a)", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "It´s wet", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Está sucio(a)", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "It´s dirty", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Esto me motiva", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Esto me motiva", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Estoy buscando trabajo", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I´m looking for jobs", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Estoy cansado(a) de caminar", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I´m tired of walking", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Estoy cansado(a) de estar sentado(a)", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I´m tired of sitting", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Estoy celoso(a)", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I´m jealous", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Estoy comprando algunos libros", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I´m buying some books", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Estoy eliminado(a)", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I am eliminated", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Estoy en el primer piso", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I´m in the first floor", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Estoy en la biblioteca", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I´m in the library", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Estoy en la oficina", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I´m at the office", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Estoy en mi sofá", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I´m in my couch", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Estoy en un hotel", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I´m in a hotel", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Estoy haciendo una comparación", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I´m making a comparison", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Estoy intentando romper el récord", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I´m trying to break the record", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Estoy preguntando por direcciones", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I´m asking for directions", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Estoy sentado(a) afuera", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I´m sitting outside", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Estudiaré más duro", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I will study harder", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Fallé en el examen", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I failed the exam", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Gané", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I won", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Hace frío por la noche", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "It´s cold at night", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Has hecho un buen trabajo", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "You did a good job", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Infórmanos", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Inform us", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "La bolsa está pesada", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "The bag is heavy", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "La luna está hermosa esta noche", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "The moon is beautiful tonight", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "La puerta está cerrada", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "The door is closed", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "La puerta no se quiere abrir", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "The door doesn´t want to open", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Las bolsas son pesadas", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "The bags are heavy", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Llámame cuando estés listo(a)", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Call me when you´re ready", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Lo(a) odio", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I hate it", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Los esperaremos", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "We will wait for them", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Me aceptaron", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I got accepted", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Me da vergüenza", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I´m embarrassed", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Me encanta el olor de la lluvia", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I love the smell of rain", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Me gusta ayudar a la gente", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I like helping people", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Me gusta el olor", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I like the smell", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Me ofrecieron un puesto", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I got offered a position", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Me voy a casa", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I´m going home", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Mi vecino necesita ayuda", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "My neighbor needs help", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Mis brazos están cansados", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "My arms are tired", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Mis piernas están cansadas", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "My legs are tired", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Mis zapatos están sucios", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "My shoes are dirty", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Muchos turistas vienen aquí", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Many tourists come here", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "My carro está en el garaje", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "My car is in the garage", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Nada oigo", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I don´t hear anything", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Necesitamos un nombre", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "We need a name", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Necesito caminar", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I need to walk", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Necesito sentarme", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I need to sit", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Necesito un taxi", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I need a taxi", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Necesito una toalla", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I need a towel", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Necesito zapatos nuevos", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I need new shoes", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "No es para ti", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "It´s not for you", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "No escribí mucho", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I didn´t write much", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "No ha llovido en mucho tiempo", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "It hasn´t rained in a while", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "No hay agua caliente", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "There´s no hot water", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "No hay gente aquí", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "There are no people here", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "No hay sillas", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "There are no chairs", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "No me sorprende", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I´m not surprised", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "No pude dormir", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I didn´t sleep", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Nos reuniremos aquí", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "We will meet here", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Pasé el examen", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I passed the exam", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Perdí", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I lost", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Permíteme enseñarte lo que hice", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Let me show you what I did", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Podemos hacerlo mañana", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "We can do it tomorrow", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Por eso es que lo elegí", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "That´s why I chose it", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Por eso es que me gusta", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "This is why I like it", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Puede ser mejor", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "It can be better", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Puedes decirnos", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "You can tell us", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Quedé despierto(a) toda la noche", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I stayed up all night", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Quiero bailar", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I want to dance", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Quiero hablar bien el inglés", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I want to speak good English", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Quiero irme", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I want to leave", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Quiero pesar más", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I want to wigh more", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Quiero pesar menos", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I want to weigh less", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Saldré mañana", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I will leave tomorrow", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Siéntate conmigo", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Sit with me", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Sigue adelante", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Keep going", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Son muchos estudiantes", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "It´s a lot of students", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Te pagaré", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I will pay you", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Tenemos que esperar hasta mañana", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "We have to wait until tomorrow", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Tengo mi tarjeta", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I have my card", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Tengo tus papeles", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I have your papers", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Tengo un(a) buen(a) profesor(a)", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I have a good professor", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Tengo una cita", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I have an appointment", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Tengo una entrevista de trabajo", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I have a job interview", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Tenías razón", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "You were correct", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Terminé el trabajo", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I´m finished with work", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "There is traffic in the evening", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Hay tráfico en la tarde", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Tienes algo en tu camisa", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "You have something on your shirt", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Tienes suerte", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "You´re lucky", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Tienes unos ojos preciosos", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "You have beautiful eyes", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Todavía estoy en la cama", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I´m still in bed", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Todos están durmiendo", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Everyone´s sleeping", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Todos quieren ir ahí", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Everyone wants to go there", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Trae los papeles", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Bring the papers", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Usted está en la dirección correcta", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "You´re in the right direction", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Vengo temprano todos los días", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I come early everyday", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Veo lo que está pasando", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I see what´s happening", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Voy a la piscina", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I´m going to the pool", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Voy al dentista", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I´m going to the dentist", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Voy al gimnasio", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I´m going to the gym", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Cómo se llama el grupo?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "What´s the group´s name?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Cuál es el método?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "What´s the method?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Cuál es el número de tu habitación?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "What is your room number?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Cuál es tu fecha de nacimiento?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "What´s your date of birth?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Cuál es tu pasión?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "What´s your passion?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Cuál universidad?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "What university?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Cuáles fueron los resultados?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "What were the results?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Cuáles son los precios?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "What are the prices?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Cuáles son tus planes futuros?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "What are your future plans?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Cuándo es el torneo?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "When is the tournament?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Cuándo vendrán?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "When are they coming?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Cuántos estudiantes estudian ahí?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "How many students study there?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Dónde está el lapicero?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Where´s the pen?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Dónde está el paraguas?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Where is the umbrella?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Dónde está la cafetería?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Where is the cafeteria?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Dónde está la oficina?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Where´s the office?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Dónde está mi abrigo?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Where is my coat?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Dónde está mi bicicleta?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Where´s my bicycle?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Dónde está mi cartera?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Where is my wallet?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Dónde está tu escritorio?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Where is your desk?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Dondé está una gasolinera?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Where is a gas station?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Dónde estaba?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Where was it?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Dónde están mis libros?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Where are my books?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Dónde puedes comprar eso?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Where can you buy that?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿En qué mes vienes?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "What month are you coming?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿En qué piso estás?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "What floor are you in?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Eres principiante?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Are you a beginner?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Es una buena universidad?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Is it a good university?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Escuchas algo?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Do you hear something?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Está limpio(a)?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Is it clean?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Está sucio(a)?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Is it dirty?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Estás listo(a) para ir?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Are you ready to go?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Esto duele?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Does this hurt?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Hay más jugo?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Is there more juice?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Para mí?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "For me?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Pasaste el examen?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Did you pass the exam?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Podemos comprar algo de comida?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Can we buy some food?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Podemos hacer una llamada?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Can we make a call?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Por qué es malo?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Why is it wrong?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Puedes llevarme ahí?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Can you take me there?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Puedes oírme?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Can you hear me?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Puedes pasarme tus notas?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Can you pass me your notes?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Puedes ver dónde está?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Can you see where it is?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Puedo esperar en tu carro?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Can I wait in your car?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Qué banda está cantando?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Which band is singing?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Qué es el premio?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "What´s the prize?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Qué hay en la bolsa?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "What´s in the bag?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Qué he hecho?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "What did I do?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Qué recomienda el doctor?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "What does the doctor recommend?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Qué te ha pasado?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "What happened to you?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Quién está ganando?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Who is winning?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Quién está perdiendo?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Who is losing?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Quiénes son ellos?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Who are they?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Quiéres café?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Do you want coffee?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Quiéres decir algo?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Do you want to say something?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Quiéres helado?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Do you want ice cream?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Quiéres nadar conmigo?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Do you want to swim with me?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Quiéres un poco de pastel?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Do you want some cake?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Sabes dónde está este lugar?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Do you know where this place is?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Te acostaste?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Did you sleep?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Tienes mis cosas?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Do you have my stuff?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Tienes tu tarjeta?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Do you have your card?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Tienes una computadora?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Do you have a computer?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Todos saben el plan?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Does everybody know the plan?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Vives en la ciudad?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Do you live in the city?", AudioIngles: "/audio/videoCuatro/.mp3" }
    ];


    $('#divTabla').append('<section class="table" ng-controller="inglesDosController" class=""></section>');
    var tabla = $('#divTabla').children();

    for (var i = 0 ; i < $scope.registroUnoIngles.length ; i++) {
        var color = "white";
        if (i % 2 == 0)
            color = "#f5f5f5";

        //alert(angular.toJson($scope.registroUnoIngles[i].Espanol));
        tabla.append('<article style="background:' + color + ' ;margin:10px 0 0 0;" class="col-xs-12 col-sm-12 col-md-6 col-lg-6 seccionesIngles>' +
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
					'</article>'

				);
    }
});

////////////////////////////************Textos Nivel Siete Inglés************//////////////////////////////////

appModulo.controller('inglesSieteController', function ($http, $scope, i18nService) {

    $('#sieteBTN').css('background-color', '#333');

    $scope.registroUnoIngles = [
		{ Espanol: "Abre las cortinas", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Open the curtains", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Acabo de darme cuenta", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I just realized", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Ahora trabaja", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "It works now", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Atrae a muchos turistas", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "It attracts many tourists", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Ayúdame a limpiar esto", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Help me clean this", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Continúa mañana", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "It continues tomorrow", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Deberíamos hacerlo otra vez", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "We should do it again", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "El invierno casi está aquí", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Winter is almost here", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Ellos no quieren decir", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "They don´t want to say", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Ellos quieren visitar", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "They want to visit", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Eres un buen artista", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "You´re a good artist", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Es amargo(a)", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "It´s sour", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Es complicado(a)", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "It´s complicated", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Es el primer día del mes", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "It´s the first day of the month", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Es lo mismo", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "It´s the same", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Es mi sueño", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "It´s my dream", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Es simple", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "It´s simple", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Es trágico(a)", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "It´s tragic", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Es un artículo interesante", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "It´s an interesting article", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Es un buen argumento", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "It´s a good argument", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Es un desastre", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "It´s a disaster", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Es un poco diferente", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "It´s a little different", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Es un viaje doméstico", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "It´s a domestic trip", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Es un viaje internacional", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "It´s an international trip", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Es una buena relación", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "It´s a good relationship", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Es una hermosa estatua", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "It´s a beautiful statue", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Es una hermosa fuente", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "It´s a beautiful fountain", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Es viejo(a)", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "It´s old", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Eso es estúpido", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "That´s stupid", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Espero que te sientas mejor", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I hope you feel better", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Está cerca de aquí", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "It´s near here", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Está en el centro", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "It´s in the center", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Está lejos de aquí", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "It´s far from here", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Está nevando mucho", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "It´s snowing a lot", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Estamos acentando aplicaciones", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "We are accepting applications", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Estamos comprando un árbol de navidad", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "We are buying a Christmas tree", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Estamos en un bote", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "We are in a boat", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Estamos trabajando juntos", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "We are working together", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Estaré ahí en unas pocas horas", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I will be there in a few hours", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Esto no debería ocurrir", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "It should not happen", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Esto sucede todos los días", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "This happens everyday", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Estoy cualificado", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I´m qualified", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Estoy grabando", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I´m recording", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Estoy haciendo un video", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I´m making a video", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Estoy leyendo una revista", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I´m reading a magazine", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Fue memorable", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "It was memorable", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Gracias por el cumplido", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Thanks for the compliment", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Hay mucha gente aquí", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "There are many people here", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Hay muchas personas aquí", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "There are many people here", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Huele bien", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "It smells good", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Huele mal", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "It smells bad", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Iré cuando haya menos gente", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I´m going when there will be less people", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "La arquitectura es preciosa", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "The architecture is beautiful", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "La internet no funciona", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "The internet doesn´t work", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "La primavera está a punto de empezar", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Spring is about to begin", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "La silla está sucia", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "The chair is dirty", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "La tienda está cerrando", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "The store is closing", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Lo estoy anticipando", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I´m anticipating it", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Lo hice otra vez", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I did it again", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Lo hicieron recientemente", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "It was made recently", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Lo recibiré hoy", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I will receive it today", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Me gusta el invierno", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I like winter", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Me gusta el verano", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I like summer", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Me gusta ir al parque", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I like going to the park", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Me siento enérgico(a)", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I feel energetic", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Mi computadora no funcionaba", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "My computer wasn´t working", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Mi viaje fue cancelado", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "My trip was cancelled", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Mis amigos están llegando", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "My friends are coming", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Mis amigos están ocupados", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "My friends are busy", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Mis amigos se están yendo", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "My friends are leaving", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Mis padres están en el otro cuarto", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "My parents are in the other room", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Mis padres no están aquí", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "My parents aren´t here", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Mis vacaciones fueron maravillosas", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "My vacations were wonderful", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Nada estoy diciendo", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I´m saying nothing", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Nadé", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I swam", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Nadie viene", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Nobody is coming", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Necesita baterías nuevas", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "It needs new batteries", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Necesitamos más gente", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "We need more people", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Necesitamos un mapa", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "We need a map", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Necesito estirarme", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I need to stretch myself", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Necesito limpiar mi cama", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I need to clean my bed", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Necesito terminar algunos documentos", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I need to finish some documents", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Necesito una bolsa", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I need a bag", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "No debemos ir ahí", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "We should not go there", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "No estoy estresado(a)", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I´m not stressed", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "No hay electricidad", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "There is no electricity", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "No hay espacio", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "There is no room", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "No podemos ir", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "We can´t go", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "No pongas demasiado", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Don´t put too much", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "No quiero que termine este día", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I don´t want this day to end", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "No sé qué hacer", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I don´t know what to do", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "No tengo un carro", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I don´t have a car", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "No vamos", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "We are not going", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Nos casaremos pronto", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "We are getting married soon", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Nunca lo olvidaré", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I will never forget it", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Olvidé el nombre", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I forgot the name", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Pensaré en tu oferta", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I will think about your offer", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Perdí mi pasaporte", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I lost my passport", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Por favor describe", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Please describe", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Puede ocurrir", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "It might happen", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Puse todo en la basura", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I put everything in the trash", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Queremos paz", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "We want peace", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Quiero comer fruta", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I want to eat fruit", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Quiero ver una película esta noche", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I want to watch a movie tonight", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Recibí una carta", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I received a letter", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Será una sorpresa", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "It will be a surprise", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Siempre lo recordaré", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I will always remember it", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Soy responsable aquí", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I´m responsible here", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Soy un(a) experto(a)", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I´m an expert", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Sucedió otra vez", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "It happened again", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "También a mí me pasó", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "It happened to me too", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Te envié algo", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I sent you something", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Te llamaré cuando esté ahí", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I will call you when I´m there", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Te vez cansado(a)", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "You look tired", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Tenemos una reunión familiar", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "We are having a family reunion", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Tengo muchas fotos", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I have many photos", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Tengo mucho mensajes", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I have many messages", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Tengo que esperar pocas horas", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I have to wait a few hours", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Tengo todo preparado", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I have everything prepared", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Tengo una licencia", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I have a license", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Todos(as) están despiertos(as)", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Eeryone is awake", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Todos(as) están emocionados(as)", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Everyone is excited", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Todos(as) están estudiando para los exámenes", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Everyone is studying for exams", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Todos(as) piensan lo mismo", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Everyone thinks the same", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Todos(as) piensan que es bueno", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Everyone thinks it´s good", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Todos te están buscando", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Everyone is looking for you", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Toma un descanso", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Take a rest", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Trabajamos duro", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "We work hard", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Tu casa es grande", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Your house is big", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Tus manos están frías", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Your hands are cold", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Únete a nosotros", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Join us", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Ve a dormir", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Go to sleep", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Vivo en una casa grande", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I live in a big house", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Vivo en una casa pequeña", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I live in a small house", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "Voy a preguntar a alguien", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "I´m going to ask someone", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿A qué hora es tu cita?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "What time is your appointment?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Alguien se lastimó?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Did someone get injured?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Cómo estuvieron tus vacaciones?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "How were your vacations?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Cómo va tu negocio?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "How is your business?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Crees que es bueno?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Do you think it´s good?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Cuál es el nombre de la capital?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "What´s the name of the capitol?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Cuál es la distancia?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "What´s the distance?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Cuál es tu apellido?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "What´s your last name?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Cuál es tu sugerencia?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "What´s your suggestion?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Cuándo lo hicieron?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "When was it made?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Cuánto tiempo tienes?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "How much time do you have?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Dónde está el azúcar?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Where is the sugar?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Dónde está el banco?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Where is the bank?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Dónde está la basura?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Where is the trash?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Dónde está la lámpara?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Where is the lamp?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Es lento(a)?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Is it slow?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Eso es necesario?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Is that necessary?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Es peligroso(a)?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Is it dangerous?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Es rápido(a)?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Is it fast?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Es seguro(a)?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Is it safe?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Está usted cualificado?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Are you qualified?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Estás despierto(a)?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Are you awake?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Estás listo(a) para salir?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Are you ready to leave?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Esto es?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Is it this?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Fuiste a la playa?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Did yo go to the beach?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Hay espacio?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Is there room?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Hay internet aquí?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Is there internet here?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Hay leche?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Is there milk?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Hay limones?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Are there lemons?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Me estás mirando?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Are you looking at me?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Necesitas alguna ayuda?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Do you need any help?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Puedes grabarlo?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Can you record it?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Puedes llamar al hotel?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Can you call the hotel?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Puedes pasar la sal?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Can you pass the salt?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Puedes sostener esto?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Can you hold this?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Puedes ver la diferencia?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Can you see the difference?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Puedo tener la cuenta?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Can I have the check?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Qué comiste?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "What did you eat?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Qué debo cocinar esta noche?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "What should I cook tonight?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Qué debo elegir?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "What should I choose?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Qué debo estudiar?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "What should I study?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Qué deportes juegas?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "What sports do you play?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Qué dije?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "What did I say?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Qué hacemos?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "What do we do?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Qué hay en la caja?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "What´s in the box?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Qué más harás?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "What else will you do?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Qué película verás?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "What movie will you see?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Qué querían ellos(as)?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "What did they want?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Qué quieres cambiar?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "What do you want to change?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Qué tipo de trabajo tienes?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "What type of job do you have?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Qué vas a estudiar?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "What will you study?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Quién es el propietario?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Who is the owner?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Quién es el responsable aquí?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Who is responsible here?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Quién es tu maestro(a)?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Who is your teacher?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Quién es un(a) experto?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Who is an expert?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Quién lo descubrió?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Who discovered it?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Quién murió?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Who died?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Quién te está enseñando?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Who is teaching you?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Quién te inspira?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Who inspires you?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Quién te llamó?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Who called you?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Quién tomó esta foto?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Who took this photo?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Te gustan los dramas?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Do you like dramas?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Te he visto antes?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Have I seen you before?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Tienes licencia?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Do you have a license?", AudioIngles: "/audio/videoCuatro/.mp3" },
		{ Espanol: "¿Tienes vino?", AudioEspanol: "/audio/nivelCuatro/.mp3", Ingles: "Do you have wine?", AudioIngles: "/audio/videoCuatro/.mp3" }
    ];


    $('#divTabla').append('<section class="table" ng-controller="inglesDosController" class=""></section>');
    var tabla = $('#divTabla').children();

    for (var i = 0 ; i < $scope.registroUnoIngles.length ; i++) {
        var color = "white";
        if (i % 2 == 0)
            color = "#f5f5f5";

        //alert(angular.toJson($scope.registroUnoIngles[i].Espanol));
        tabla.append('<article style="background:' + color + ' ;margin:10px 0 0 0;" class="col-xs-12 col-sm-12 col-md-6 col-lg-6 seccionesIngles>' +
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
					'</article>'

				);
    }
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////


appModulo.controller('inicioController', function ($scope) {
    $("#carousel").carousel();


});

appModulo.controller('webController', function ($scope) {

});

appModulo.controller('htmlController', function ($scope) {

    $scope.conceptoHtml = 'HTML (Hyper Text Markup Language) usa un lenguaje de etiquetas utilizado para construir páginas web. Estas etiquetas HTML son palabras (o letras) y atributos rodeados de los signos menor "<" y mayor ">".' +
						   '\n\nPor ejemplo:\n<p name="parrafoUno">Esto es un párrafo</p>\n\n' +
						  'La letra "p" indica que estamos creando un párrafo el cual contendrá texto y la palabra "name" es el atributo indicando que el nombre del párrafo es parrafoUno. La mayoría de etiquetas utilizadas en Html tienen una etiqueta de apertura <p> y una de cierre </p> y se utiliza la misma palabra o letra dentro de los signos de mayor y menor.';

    $scope.estructuraHtml = 'La estructura de un documento Html debe estar estrictamente organizada, para una mejor comprensión de nuestro código y para que los distintos navegadores puedan interpretar correctamente lo que deseamos plasmar en ellos.\n\nUna muy buena práctica es dejar márgenes entre cada etiqueta a como se ejemplifica a continuación (las líneas representas los márgenes).';

    $scope.estructuraBasica = '<!DOCTYPE html>\n<html lang="es">\n___ <head>\n______ <title>Título de la página</title>\n______ <meta charset="utf-8" />\n___ </head>\n___ <body>\n______ Esta es una página Web\n___ </body>\n</html>';

    $scope.explicaDoctype = 'Debe ser siempre la primera etiqueta del archivo, esta es la que indica que tipo de documento es el que estamos creando; Html5.\n\n';
    $scope.explicaHtml = 'La estructura del cuerpo Html tiene su raiz en esta etiqueta, y por supuesto tiene su cierre </html>. El atributo "lang" define el idioma del contenido que estamos creando en este caso "es" español.\n\n';
    $scope.explicaHead = 'Es la primera sección de la estructura Html y aquí definimos el título de nuestra página "<title>Título de la página</title>" y aquí también se puede incorporar archivos externos como estilos, scripts e incluso imágenes. Las incorporaciones de archivos externos no son visibles para nosotros.\n\n';
    $scope.explicaMeta = 'Define el juego de caracteres para mostrar el documento. Por ejemplo, antes para tildar la letra "a" se escribía "&acutea;", al colocar esta etiqueta basta con escribir directamente la letra tildada "á".\n\n';
    $scope.explicaBody = 'Es el cuerpo a como su nombre en inglés lo indica y aquí se encuentra todo lo visible de la página.\n\n';
    $(function () {
        $('.pop').on('click', function () {
            $('.imagepreview').attr('src', $(this).attr('src')); // here asign the image to the modal when the user click the enlarge link
            $('#imagemodal').modal('show');

            /*$('.pop').attr('src', $(this).find('img').attr('src'));
			$('#imagemodal').modal('show');   */
        });
    });
});

appModulo.controller('etiquetasBasicasController', function ($scope) {
    $scope.conceptoEtiqueta = 'Las etiquetas son palabras escritas dentro de un signo menor y un signo mayor. Generalmente se escriben en pares; una de apertura "<>" y una de cierre </>.\nLa pleca "/" que indica el cierre se escribe antes de la palabra\n\n<nombreEtiqueta> contenido </nombreEtiqueta>\n\nUna sugerencia, y además es una buena práctica, es escribir todo en letras minúsculas.';
    $scope.textosAnidados = 'Se puede incluir etiquetas dentro de otras como poner letras negritas así: <p> <strong> Párrafo en negritas</strong> </p>, todo esto es posible siempre y cuando se respete la jerarquía, "p" contiene a "strong" y cierran de la misma manera uno dentro del otro.';

    $scope.listasUL = 'Las listas en Html son precísamente eso, listas. Cada lista de elementos ordenados se encuentra en la etiqueta <ul></ul> y para cada elemento de la lista se utiliza <li></li> que a su vez puede contener dentro de él botones, párrafos, imágenes, etc.';
    $scope.tablasHtml = 'La etiqueta principal es <table></table> y cada fila está definida por <tr></tr>. Por tanto, para definir el encabezado de cada columna utilizamos <th></th> y para el resto de contenido de cada columna <td></td> dentro de su respectiva fila <tr></tr>';
    $scope.meiHtml = '<iframe></iframe> nos permite incrustar o insertar un documento Html dentro de nuestro Html principal, se puede insertar un documento Html local o una dirección web.\n\n' +
					  '<a></a> es bastante útil si deseamos ir de una página web a otra al darle clic. Estos enlaces no son exclusivamente texto, pueden ser imágenes u otros elementos Html.\n\n' +
					  '<img> es una etiqueta que no necesita una etiqueta de cierre como la mayoría y con ella podemos mostrar imágenes.';
    $scope.divHtml = 'Un <div></div> es un elemento que puede contener uno o más elementos html, es el más utilizado en la actualidad para mostrar contenido en la web.\n\n' +
					  'Para una mejor ejemplificación aplicaremos estilos.';

    $(function () {
        $('.pop').on('click', function () {
            $('.imagepreview').attr('src', $(this).attr('src')); // here asign the image to the modal when the user click the enlarge link
            $('#imagemodal').modal('show');

            /*$('.pop').attr('src', $(this).find('img').attr('src'));
			$('#imagemodal').modal('show');   */
        });
    });
});

appModulo.controller('estilosController', function ($scope) {
    $scope.conceptoCSS = 'CSS significa Cascading Style Sheets y puede agregarse a una página Html de tres maneras:\n\n En línea (inline) se escribe dentro de las etiquetas Html haciendo uso del atributo "style" -> <p style="color: blue;">Párrafo azul</p> \n\nInterno (internal) que consite en colocar el estilo en cualquier parte de nuestro código html pero dentro de una etiqueta <style> p{ color: blue;} </style>\n\nExterno (external) que puede esrcibirse en archivos apartes con extensión .css. ';
    $(function () {
        $('.pop').on('click', function () {
            $('.imagepreview').attr('src', $(this).attr('src')); // here asign the image to the modal when the user click the enlarge link
            $('#imagemodal').modal('show');

            /*$('.pop').attr('src', $(this).find('img').attr('src'));
			$('#imagemodal').modal('show');   */
        });
    });

});

appModulo.controller('jqueryController', function ($scope) {
    $scope.conceptoJquery = "JQuery es una biblioteca basada en el lenguajde de programación JavaScript (JS, lenguaje multiplataforma y orientado a objetos) que permite manipular el contenido y mejorando nuestras páginas web para que sean dinámicas.";
    $scope.referenciaAJquery = '<script src="jquery-3.1.0.min.js"></script>';

    $(function () {
        $('.pop').on('click', function () {
            $('.imagepreview').attr('src', $(this).attr('src')); // here asign the image to the modal when the user click the enlarge link
            $('#imagemodal').modal('show');

            /*$('.pop').attr('src', $(this).find('img').attr('src'));
			$('#imagemodal').modal('show');   */
        });
    });
});

appModulo.controller('basesJqueryController', function ($scope) {
    $scope.ejemploId = '<button id="botonEnviarFormulario"></button>';
    $scope.ejemploClass = '<button class="botonesAzules"></button>';
    $scope.ejemploElemento = '$("button")\n\n$("p")\n\n$("input")\n\n$("div")\n\n$("a")\n\n$("ul")\n\n$("il")';

    $(function () {
        $('.pop').on('click', function () {
            $('.imagepreview').attr('src', $(this).attr('src')); // here asign the image to the modal when the user click the enlarge link
            $('#imagemodal').modal('show');

            /*$('.pop').attr('src', $(this).find('img').attr('src'));
			$('#imagemodal').modal('show');   */
        });
    });
});

appModulo.controller('eventosBasicosController', function ($scope) {

    $(function () {
        $('.pop').on('click', function () {
            $('.imagepreview').attr('src', $(this).attr('src')); // here asign the image to the modal when the user click the enlarge link
            $('#imagemodal').modal('show');

            /*$('.pop').attr('src', $(this).find('img').attr('src'));
			$('#imagemodal').modal('show');   */
        });
    });
});

appModulo.controller('ajedrezUnoController', function ($scope) {

});

appModulo.controller('ajedrezController', function ($scope) {

});