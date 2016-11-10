var appModulo = angular.module('inglesApp', []);

appModulo.controller('inglesController', ['$scope', function ($scope) {
    $scope.NivelActual = $('#nivelActual').text();

    if ($scope.NivelActual == 1)
        NivelUno();
    if ($scope.NivelActual == 2)
        NivelDos();
    if ($scope.NivelActual == 3)
        NivelTres();
    if ($scope.NivelActual == 4)
        NivelCuatro();
    if ($scope.NivelActual == 5)
        NivelCinco();
    if ($scope.NivelActual == 6)
        NivelSeis();
    if ($scope.NivelActual == 7)
        NivelSiete();

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


        $('#divTabla').append('<section class="table" ng-controller="inglesUnoController" class=""></section>');
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
    }

}]);


////////////////////////////************Textos Nivel Uno Inglés************//////////////////////////////////




/////////////////////////////////////////////////////////////////////////////////////////////////////////////


////////////////////////////************Textos Nivel Dos Inglés************//////////////////////////////////

appModulo.controller('inglesDosController', function ($http, $scope, i18nService) {

    $('#dosBTN').css('background-color', '#333');

    $scope.registroUnoIngles = [
		{ Espanol: "Acabo de llegar a casa", AudioEspanol: "", Ingles: "I just got home", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "Agradezco tu ayuda", AudioEspanol: "", Ingles: "I appreciate your help", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "Alguien me está llamando", AudioEspanol: "", Ingles: "Someone is calling me", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "Aquí es de noche", AudioEspanol: "", Ingles: "It´s night here", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "Aquí es medianoche", AudioEspanol: "", Ingles: "It´s midnight here", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "Aquí estaré", AudioEspanol: "", Ingles: "I will be here", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "Aquí tienes", AudioEspanol: "", Ingles: "Here you go", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "Baja el volumen", AudioEspanol: "", Ingles: "Turn the volume down", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "Con nadie estoy", AudioEspanol: "", Ingles: "I´m with nobody", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "Dime cuando estés listo(a)", AudioEspanol: "", Ingles: "Tell me when you´re ready", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "Dime más", AudioEspanol: "", Ingles: "Tell me more", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "Dime si necesitas ayuda", AudioEspanol: "", Ingles: "Tell me if you need help", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "Dormí como bebé", AudioEspanol: "", Ingles: "I slept like a baby", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "Él es mi esposo", AudioEspanol: "", Ingles: "He´s my husband", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "El inglés es difícil", AudioEspanol: "", Ingles: "English is difficult", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "El inglés es fácil", AudioEspanol: "", Ingles: "English is easy", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "El teléfono está sonando", AudioEspanol: "", Ingles: "The phone is ringing", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "Ella es mi esposa", AudioEspanol: "", Ingles: "She´s my wife", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "Eres un(a) buen(a) maestro(a)", AudioEspanol: "", Ingles: "You´re a good teacher", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "Es algo importante", AudioEspanol: "", Ingles: "It´s something important", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "Es cierto", AudioEspanol: "", Ingles: "It´s true", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "Es emocionante", AudioEspanol: "", Ingles: "It´s exciting", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "Es gracioso porque es cierto", AudioEspanol: "", Ingles: "It´s funny because it´s true", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "Es hora de alistarme", AudioEspanol: "", Ingles: "It´s time for me to get ready", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "Es hora de cenar", AudioEspanol: "", Ingles: "It´s time for dinner", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "Es hora de ir", AudioEspanol: "", Ingles: "It´s time to leave", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "Es impresionante", AudioEspanol: "", Ingles: "It´s awesome", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "Es inspirador(a)", AudioEspanol: "", Ingles: "It´s inspiring", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "Es interesante", AudioEspanol: "", Ingles: "It´s interesting", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "Es mío(a)", AudioEspanol: "", Ingles: "It´s mine", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "Es muy útil", AudioEspanol: "", Ingles: "It´s very helpful", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "Es normal", AudioEspanol: "", Ingles: "It´s normal", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "Es ruidoso(a)", AudioEspanol: "", Ingles: "It´s noisy", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "Es terrible", AudioEspanol: "", Ingles: "It´s terrible", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "Es un buen trabajo", AudioEspanol: "", Ingles: "It´s a good job", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "Es un error", AudioEspanol: "", Ingles: "It´s a mistake", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "Es un milagro", AudioEspanol: "", Ingles: "It´s a miracle", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "Es un secreto", AudioEspanol: "", Ingles: "It´s a secret", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "Espérame", AudioEspanol: "", Ingles: "Wait for me", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "Espero verte pronto", AudioEspanol: "", Ingles: "I hope to see you soon", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "Está callado(a)", AudioEspanol: "", Ingles: "It´s quiet", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "Está funcionando", AudioEspanol: "", Ingles: "It´s working", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "Está mejor", AudioEspanol: "", Ingles: "It´s better", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "Está oscuro", AudioEspanol: "", Ingles: "It´s dark", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "Está peor", AudioEspanol: "", Ingles: "It´s worse", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "Estaba pensando en ti", AudioEspanol: "", Ingles: "I was thinking of you", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "Están todos callados", AudioEspanol: "", Ingles: "Everyone is quiet", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "Estos son mis hijos", AudioEspanol: "", Ingles: "These are my children", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "Estoy aburrido(a)", AudioEspanol: "", Ingles: "I´m bored", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "Estoy aquí", AudioEspanol: "", Ingles: "I´m here", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "Estoy aquí para ayudar", AudioEspanol: "", Ingles: "I´m here to help", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "Estoy casado(a)", AudioEspanol: "", Ingles: "I´m married", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "Estoy cerca", AudioEspanol: "", Ingles: "I´m close", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "Estoy comprometido(a)", AudioEspanol: "", Ingles: "I´m engaged", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "Estoy en el camino", AudioEspanol: "", Ingles: "I´m on the way", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "Estoy en mi cama", AudioEspanol: "", Ingles: "I´m on my bed", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "Estoy en mi carro", AudioEspanol: "", Ingles: "I´m in my car", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "Estoy en problemas", AudioEspanol: "", Ingles: "I´m in trouble", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "Estoy estudiando en este momento", AudioEspanol: "", Ingles: "I´m studying right now", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "Estoy feliz de verte", AudioEspanol: "", Ingles: "I´m happy to see you", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "Estoy feliz por ti", AudioEspanol: "", Ingles: "I´m happy for you", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "Estoy haciendo lo mismo", AudioEspanol: "", Ingles: "I´m doing the same", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "Estoy haciendo planes", AudioEspanol: "", Ingles: "I´m making plans", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "Estoy lejos", AudioEspanol: "", Ingles: "I´m far", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "Estoy libre este fin de semana", AudioEspanol: "", Ingles: "I´m free this weekend", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "Estoy listo(a)", AudioEspanol: "", Ingles: "I´m ready", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "Estoy ocupado(a) con la escuela", AudioEspanol: "", Ingles: "I´m busy with school", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "Estoy practicando inglés", AudioEspanol: "", Ingles: "I´m practicing English", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "Estoy seguro(a)", AudioEspanol: "", Ingles: "I´m sure", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "Estoy solo(a) en casa", AudioEspanol: "", Ingles: "I´m home alone", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "Explica esto", AudioEspanol: "", Ingles: "Explain this", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "Felicidades", AudioEspanol: "", Ingles: "Congratulations", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "Fue un accidente", AudioEspanol: "", Ingles: "It was an accident", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "Gracias por tu apoyo", AudioEspanol: "", Ingles: "Thanks for your support", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "Gracias por tu hospitalidad", AudioEspanol: "", Ingles: "Thanks for your hospitality", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "Hora de dormir", AudioEspanol: "", Ingles: "Time to sleep", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "Hoy estoy libre", AudioEspanol: "", Ingles: "I´m free today", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "Hoy fue un día de locura", AudioEspanol: "", Ingles: "Today was a crazy day", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "La cena está casi lista", AudioEspanol: "", Ingles: "Dinner is almost ready", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "Le pasa a todo mundo", AudioEspanol: "", Ingles: "It happens to everyone", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "Me encanta aprender idiomas", AudioEspanol: "", Ingles: "I love learning languages", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "Me gusta aprender sobre diferentes culturas", AudioEspanol: "", Ingles: "I like learning about different cultures", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "Me gusta cómo piensas", AudioEspanol: "", Ingles: "I like how you think", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "Me gusta este lugar", AudioEspanol: "", Ingles: "I like this place", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "Me levanto tarde", AudioEspanol: "", Ingles: "I wake up late", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "Me levanto temprano", AudioEspanol: "", Ingles: "I wake up early", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "Mi banda favorita es...", AudioEspanol: "", Ingles: "My favorite band is...", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "Mi cantante favorito(a) es...", AudioEspanol: "", Ingles: "My favorite singer is...", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "Mi internet es lenta", AudioEspanol: "", Ingles: "I have slow internet", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "Mi pronunciación necesita práctica", AudioEspanol: "", Ingles: "My pronunciation needs practice", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "Nada pasó", AudioEspanol: "", Ingles: "Nothing happened", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "Nadie era", AudioEspanol: "", Ingles: "It was nobody", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "Necesito ayuda con el inglés", AudioEspanol: "", Ingles: "I need help with English", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "Necesito descansar", AudioEspanol: "", Ingles: "I need to rest", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "No está funcionando", AudioEspanol: "", Ingles: "It´s not working", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "No puedo en este momento", AudioEspanol: "", Ingles: "I can´t right now", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "No puedo encontrarte", AudioEspanol: "", Ingles: "I can´t find you", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "No puedo ir hoy", AudioEspanol: "", Ingles: "I can´t go today", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "No te preocupes", AudioEspanol: "", Ingles: "Don´t worry", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "No tengo dinero", AudioEspanol: "", Ingles: "I don´t have money", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "No tengo tiempo", AudioEspanol: "", Ingles: "I don´t have time", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "Odio levantarme temprano", AudioEspanol: "", Ingles: "I hate waking up early", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "Póngase cómodo(a)", AudioEspanol: "", Ingles: "Make yourself comfortable", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "Practico cuando estoy libre", AudioEspanol: "", Ingles: "I practice when I´m free", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "Practico escuchando", AudioEspanol: "", Ingles: "I practice by listening", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "Pregúntame", AudioEspanol: "", Ingles: "Ask me", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "Puedo escucharte", AudioEspanol: "", Ingles: "I can hear you", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "Puedo esperar", AudioEspanol: "", Ingles: "I can wait", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "Puedo explicar", AudioEspanol: "", Ingles: "I can explain", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "Puedo verte", AudioEspanol: "", Ingles: "I can see you", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "Quiero viajar", AudioEspanol: "", Ingles: "I want to travel", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "Siempre duermo tarde", AudioEspanol: "", Ingles: "I always sleep late", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "Siempre duermo temprano", AudioEspanol: "", Ingles: "I always sleep early", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "Siempre llaman", AudioEspanol: "", Ingles: "They always call", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "Soy el(la) más joven", AudioEspanol: "", Ingles: "I´m the youngest", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "Soy estudiante universitario(a)", AudioEspanol: "", Ingles: "I´m a university student", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "Soy soltero(a)", AudioEspanol: "", Ingles: "I´m single", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "Soy tímido(a)", AudioEspanol: "", Ingles: "I´m shy", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "Sube el volumen", AudioEspanol: "", Ingles: "Turn the volume up", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "Te gustará", AudioEspanol: "", Ingles: "You will like it", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "Te lo diré más tarde", AudioEspanol: "", Ingles: "I´ll tell you later", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "Te voy a esperar", AudioEspanol: "", Ingles: "I´ll wait for you", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "Tenemos una fiesta", AudioEspanol: "", Ingles: "We are having a party", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "Tengo buenas noticias", AudioEspanol: "", Ingles: "I have good news", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "Tengo confianza", AudioEspanol: "", Ingles: "I´m confident", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "Tengo dinero", AudioEspanol: "", Ingles: "I have money", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "Tengo problemas con la pronunciación", AudioEspanol: "", Ingles: "I have problems with the pronounciation", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "Tengo que pedir permiso", AudioEspanol: "", Ingles: "I have to ask for permission", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "Tengo tiempo", AudioEspanol: "", Ingles: "I have time", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "Tengo un negocio", AudioEspanol: "", Ingles: "I have a business", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "Tengo una familia grande", AudioEspanol: "", Ingles: "I have a big family", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "Tengo una familia pequeña", AudioEspanol: "", Ingles: "I have a small family", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "Tiempo para celebrar", AudioEspanol: "", Ingles: "Time to celebrate", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "Tienes mi apoyo", AudioEspanol: "", Ingles: "You have my support", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "Tienes una hermosa casa", AudioEspanol: "", Ingles: "You have a beautiful house", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "Tienes una hermosa familia", AudioEspanol: "", Ingles: "You have a beautiful family", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "Tienes unos hijos hermosos", AudioEspanol: "", Ingles: "You have beautiful children", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "Tomaré una ducha", AudioEspanol: "", Ingles: "I´ll take a shower", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "Tómate tu tiempo", AudioEspanol: "", Ingles: "Take your time", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "Tuve un sueño", AudioEspanol: "", Ingles: "I had a dream", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "Usted es bienvenido(a)", AudioEspanol: "", Ingles: "You´re welcome", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "Ven más tarde", AudioEspanol: "", Ingles: "Come later", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "Visítame", AudioEspanol: "", Ingles: "Visit me", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "Vivo con mi familia", AudioEspanol: "", Ingles: "I live with my family", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "Vivo en un apartamento", AudioEspanol: "", Ingles: "I live in an apartment", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "Vivo en una casa", AudioEspanol: "", Ingles: "I live in a house", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "Vivo solo(a)", AudioEspanol: "", Ingles: "I live alone", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "Yo lo escribiré", AudioEspanol: "", Ingles: "I´ll write it down", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "¿A qué hora despiertas?", AudioEspanol: "", Ingles: "What time do you wake up?", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "¿A qué hora estás libre?", AudioEspanol: "", Ingles: "What time are you free?", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "¿A qué hora vas a dormir?", AudioEspanol: "", Ingles: "What time are you going to sleep?", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "¿Buscas algo?", AudioEspanol: "", Ingles: "Are you looking for something?", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "¿Cómo aprendes?", AudioEspanol: "", Ingles: "How do you learn?", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "¿Cómo es posible?", AudioEspanol: "", Ingles: "How is possible?", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "¿Cómo está tu pronunciación?", AudioEspanol: "", Ingles: "How is your pronunciation?", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "¿Cómo estuvo tu fin de semana?", AudioEspanol: "", Ingles: "How was your weekend?", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "¿Cómo fue?", AudioEspanol: "", Ingles: "How was it?", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "¿Cómo ha ocurrido?", AudioEspanol: "", Ingles: "How did it happen?", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "¿Cómo lo haces?", AudioEspanol: "", Ingles: "How do you it?", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "¿Con quién estás?", AudioEspanol: "", Ingles: "Who are you with?", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "¿Cuál es tu banda favorita?", AudioEspanol: "", Ingles: "Who´s your favorite band?", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "¿Cuál es?", AudioEspanol: "", Ingles: "Which is it?", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "¿Cuáles son las opciones?", AudioEspanol: "", Ingles: "What are the options?", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "¿Cuándo es la boda?", AudioEspanol: "", Ingles: "When is the wedding?", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "¿De quién es?", AudioEspanol: "", Ingles: "Whose is it?", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "¿Dónde fuiste?", AudioEspanol: "", Ingles: "Where did you go?", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "¿Eres el(la) más joven?", AudioEspanol: "", Ingles: "Are you the youngest?", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "¿Eres estudiante universitario(a)?", AudioEspanol: "", Ingles: "Are you a university student?", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "¿Eres soltero(a)?", AudioEspanol: "", Ingles: "Are you single?", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "¿Es cierto?", AudioEspanol: "", Ingles: "Is it true?", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "¿Es falso?", AudioEspanol: "", Ingles: "Is it false?", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "¿Está lista la cena?", AudioEspanol: "", Ingles: "Is dinner ready?", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "¿Estás aprendiendo inglés también?", AudioEspanol: "", Ingles: "Are you learning English too?", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "¿Estás listo(a)?", AudioEspanol: "", Ingles: "Are you ready?", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "¿Estás seguro(a)?", AudioEspanol: "", Ingles: "Are you sure?", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "¿Has aprendido algo?", AudioEspanol: "", Ingles: "Did you learn something?", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "¿Has oído las noticias?", AudioEspanol: "", Ingles: "Did you hear the news?", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "¿Hay buenas películas extranjeras para ver?", AudioEspanol: "", Ingles: "What are good foreign films to watch?", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "¿Me puedes ayudar con esto?", AudioEspanol: "", Ingles: "Can you help me with this?", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "¿Puedes darme eso?", AudioEspanol: "", Ingles: "Can you give me that?", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "¿Puedes recogerme?", AudioEspanol: "", Ingles: "Can you pick me up?", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "¿Puedo hacerte una pregunta?", AudioEspanol: "", Ingles: "Can I ask you a question?", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "¿Puedo tener tu atención?", AudioEspanol: "", Ingles: "Can I have your attention?", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "¿Puedo tener uno(a)?", AudioEspanol: "", Ingles: "Can I have one?", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "¿Qué buscas?", AudioEspanol: "", Ingles: "What are you looking for?", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "¿Qué es ese ruido?", AudioEspanol: "", Ingles: "What´s that noise?", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "¿Qué están haciendo ellos?", AudioEspanol: "", Ingles: "What are they doing?", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "¿Qué estás comprando?", AudioEspanol: "", Ingles: "What are you buying?", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "¿Qué estudiaste?", AudioEspanol: "", Ingles: "What did you study?", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "¿Qué harás mañana?", AudioEspanol: "", Ingles: "What are you doing tomorrow?", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "¿Qué es lo nuevo?", AudioEspanol: "", Ingles: "What´s new?", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "¿Qué hora es ahí?", AudioEspanol: "", Ingles: "What time is it there?", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "¿Qué necesitas?", AudioEspanol: "", Ingles: "What do you need?", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "¿Quién es tu cantante favorito(a)?", AudioEspanol: "", Ingles: "Who´s your favorite singer?", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "¿Quién está aquí?", AudioEspanol: "", Ingles: "Who´s here?", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "¿Quién necesita ayuda?", AudioEspanol: "", Ingles: "Who needs help?", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "¿Quiéres hablar?", AudioEspanol: "", Ingles: "Do you want to talk?", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "¿Sigues ahí?", AudioEspanol: "", Ingles: "Are you still there?", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "¿Te enteraste de lo que pasó?", AudioEspanol: "", Ingles: "Did you hear about what happened?", AudioIngles: "audio/sounido.mp3" },
		{ Espanol: "¿Tienes dinero?", AudioEspanol: "", Ingles: "Do you have money?", AudioIngles: "audio/sounido.mp3" }
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

////////////////////////////************Textos Nivel Tres Inglés************//////////////////////////////////

appModulo.controller('inglesTresController', function ($http, $scope, i18nService) {

    $('#tresBTN').css('background-color', '#333');

    $scope.registroUnoIngles = [
		{ Espanol: "Acabo de tomar una ducha", AudioEspanol: "", Ingles: "I just took a shower", AudioIngles: "" },
		{ Espanol: "Aquí estoy para ti", AudioEspanol: "", Ingles: "I´m here for you", AudioIngles: "" },
		{ Espanol: "Confío en ti", AudioEspanol: "", Ingles: "I trust you", AudioIngles: "" },
		{ Espanol: "Dame tu opinión", AudioEspanol: "", Ingles: "Give me your opinion", AudioIngles: "" },
		{ Espanol: "Dime algo interesante", AudioEspanol: "", Ingles: "Tell me something interesting", AudioIngles: "" },
		{ Espanol: "Dime cómo te sientes", AudioEspanol: "", Ingles: "Tell me how you feel", AudioIngles: "" },
		{ Espanol: "Dime la verdad", AudioEspanol: "", Ingles: "Tell me the truth", AudioIngles: "" },
		{ Espanol: "Dime si necesitas algo", AudioEspanol: "", Ingles: "Tell me if you need something", AudioIngles: "" },
		{ Espanol: "Ellos son amables", AudioEspanol: "", Ingles: "They are friendly", AudioIngles: "" },
		{ Espanol: "En serio", AudioEspanol: "", Ingles: "I´m serious", AudioIngles: "" },
		{ Espanol: "Encontré el problema", AudioEspanol: "", Ingles: "I found the problem", AudioIngles: "" },
		{ Espanol: "Entiendo lo que dijiste", AudioEspanol: "", Ingles: "I understand what you said", AudioIngles: "" },
		{ Espanol: "Eres mi mejor amigo(a)", AudioEspanol: "", Ingles: "You´re my best friend", AudioIngles: "" },
		{ Espanol: "Es comprensible", AudioEspanol: "", Ingles: "It´s understandable", AudioIngles: "" },
		{ Espanol: "Es imposible", AudioEspanol: "", Ingles: "It´s impossible", AudioIngles: "" },
		{ Espanol: "Es mi culpa", AudioEspanol: "", Ingles: "It´s my fault", AudioIngles: "" },
		{ Espanol: "Es mi responsabilidad", AudioEspanol: "", Ingles: "It´s my responsibility", AudioIngles: "" },
		{ Espanol: "Es mi turno", AudioEspanol: "", Ingles: "It´s my turn", AudioIngles: "" },
		{ Espanol: "Es misterioso(a)", AudioEspanol: "", Ingles: "It´s mysterious", AudioIngles: "" },
		{ Espanol: "Es muy hermoso(a)", AudioEspanol: "", Ingles: "It´s very beautiful", AudioIngles: "" },
		{ Espanol: "Es posible", AudioEspanol: "", Ingles: "It´s possible", AudioIngles: "" },
		{ Espanol: "Es una buena historia", AudioEspanol: "", Ingles: "It´s a good story", AudioIngles: "" },
		{ Espanol: "Es una decisión difícil", AudioEspanol: "", Ingles: "It´s a tough decision", AudioIngles: "" },
		{ Espanol: "Es una hermosa noche", AudioEspanol: "", Ingles: "It´s a beautiful night", AudioIngles: "" },
		{ Espanol: "Es una mala idea", AudioEspanol: "", Ingles: "It´s a bad idea", AudioIngles: "" },
		{ Espanol: "Es una mentira", AudioEspanol: "", Ingles: "It´s a lie", AudioIngles: "" },
		{ Espanol: "Es una oportunidad", AudioEspanol: "", Ingles: "It´s an opportunity", AudioIngles: "" },
		{ Espanol: "Es una pena", AudioEspanol: "", Ingles: "It´s a shame", AudioIngles: "" },
		{ Espanol: "Está bloqueado(a)", AudioEspanol: "", Ingles: "It´s blocked", AudioIngles: "" },
		{ Espanol: "Esta es buena información", AudioEspanol: "", Ingles: "This is good information", AudioIngles: "" },
		{ Espanol: "Está húmedo", AudioEspanol: "", Ingles: "It´s humid", AudioIngles: "" },
		{ Espanol: "Está lloviendo", AudioEspanol: "", Ingles: "It´s raining", AudioIngles: "" },
		{ Espanol: "Está ocupado", AudioEspanol: "", Ingles: "It´s occupied", AudioIngles: "" },
		{ Espanol: "Está por comenzar", AudioEspanol: "", Ingles: "It´s about to start", AudioIngles: "" },
		{ Espanol: "Está tomando mucho tiempo", AudioEspanol: "", Ingles: "It´s taking a long time", AudioIngles: "" },
		{ Espanol: "Estás loco(a)", AudioEspanol: "", Ingles: "You´re crazy", AudioIngles: "" },
		{ Espanol: "Este lugar es caro", AudioEspanol: "", Ingles: "This place is expensive", AudioIngles: "" },
		{ Espanol: "Estoy ahorrando dinero", AudioEspanol: "", Ingles: "I´m saving money", AudioIngles: "" },
		{ Espanol: "Estoy cansado de tenerlo", AudioEspanol: "", Ingles: "I´m tired of having it", AudioIngles: "" },
		{ Espanol: "Estoy de vacaciones", AudioEspanol: "", Ingles: "I´m on vacation", AudioIngles: "" },
		{ Espanol: "Estoy decidido(a)", AudioEspanol: "", Ingles: "I´m determined", AudioIngles: "" },
		{ Espanol: "Estoy desayunando", AudioEspanol: "", Ingles: "I´m eating breakfast", AudioIngles: "" },
		{ Espanol: "Estoy en el aeropuerto", AudioEspanol: "", Ingles: "I´m at the airport", AudioIngles: "" },
		{ Espanol: "Estoy en el baño", AudioEspanol: "", Ingles: "I´m in the bathroom", AudioIngles: "" },
		{ Espanol: "Estoy en una situación difícil", AudioEspanol: "", Ingles: "I´m in a tough situation", AudioIngles: "" },
		{ Espanol: "Estoy en vacaciones de verano", AudioEspanol: "", Ingles: "I´m on summer vacation", AudioIngles: "" },
		{ Espanol: "Estoy estudiando para un examen", AudioEspanol: "", Ingles: "I´m studying for an exam", AudioIngles: "" },
		{ Espanol: "Estoy feliz de estar aquí", AudioEspanol: "", Ingles: "I´m happy to be here", AudioIngles: "" },
		{ Espanol: "Estoy haciendo lo que puedo", AudioEspanol: "", Ingles: "I´m doing what I can", AudioIngles: "" },
		{ Espanol: "Estoy leyendo las noticias", AudioEspanol: "", Ingles: "I´m reading the news", AudioIngles: "" },
		{ Espanol: "Estoy libre en la tarde", AudioEspanol: "", Ingles: "I´m free in the evening", AudioIngles: "" },
		{ Espanol: "Estoy tomando un descanso", AudioEspanol: "", Ingles: "I´m taking a rest", AudioIngles: "" },
		{ Espanol: "Estoy trabajando duro", AudioEspanol: "", Ingles: "I´m working hard", AudioIngles: "" },
		{ Espanol: "Estoy trabajando en un proyecto", AudioEspanol: "", Ingles: "I´m working on a project", AudioIngles: "" },
		{ Espanol: "Estoy viendo el juego", AudioEspanol: "", Ingles: "I´m watching the game", AudioIngles: "" },
		{ Espanol: "Estoy viendo un documental", AudioEspanol: "", Ingles: "I´m watching a documentary", AudioIngles: "" },
		{ Espanol: "Estoy viendo un video", AudioEspanol: "", Ingles: "I´m watching a video", AudioIngles: "" },
		{ Espanol: "Estoy visitando amigos", AudioEspanol: "", Ingles: "I´m visiting friends", AudioIngles: "" },
		{ Espanol: "Estuve aquí", AudioEspanol: "", Ingles: "I was here", AudioIngles: "" },
		{ Espanol: "Estuve enfermo(a)", AudioEspanol: "", Ingles: "I was sick", AudioIngles: "" },
		{ Espanol: "Hace tanto calor hoy", AudioEspanol: "", Ingles: "It´s so hot today", AudioIngles: "" },
		{ Espanol: "Hace tanto frío hoy", AudioEspanol: "", Ingles: "It´s so cold today", AudioIngles: "" },
		{ Espanol: "Haré una llamada", AudioEspanol: "", Ingles: "I will make a call", AudioIngles: "" },
		{ Espanol: "Hay tráfico", AudioEspanol: "", Ingles: "There´s traffic", AudioIngles: "" },
		{ Espanol: "He estado ocupado(a)", AudioEspanol: "", Ingles: "I have been busy", AudioIngles: "" },
		{ Espanol: "Llegaré tarde", AudioEspanol: "", Ingles: "I´m going to be late", AudioIngles: "" },
		{ Espanol: "Me estoy preparando", AudioEspanol: "", Ingles: "I´m getting ready", AudioIngles: "" },
		{ Espanol: "Me estoy quedando en un apartamento", AudioEspanol: "", Ingles: "I´m staying in an apartment", AudioIngles: "" },
		{ Espanol: "Me gusta tu honestidad", AudioEspanol: "", Ingles: "I like your honesty", AudioIngles: "" },
		{ Espanol: "Me hiciste sentir mejor", AudioEspanol: "", Ingles: "You made me feel better", AudioIngles: "" },
		{ Espanol: "Me interesa", AudioEspanol: "", Ingles: "It interest me", AudioIngles: "" },
		{ Espanol: "Me olvidé", AudioEspanol: "", Ingles: "I forgot", AudioIngles: "" },
		{ Espanol: "Mi cabello está desordenado", AudioEspanol: "", Ingles: "My hair is messy", AudioIngles: "" },
		{ Espanol: "Mi cabello está mojado", AudioEspanol: "", Ingles: "My hair is wet", AudioIngles: "" },
		{ Espanol: "Mis padres están aquí", AudioEspanol: "", Ingles: "My parents are here", AudioIngles: "" },
		{ Espanol: "Mis padres están durmiendo", AudioEspanol: "", Ingles: "My parents are sleeping", AudioIngles: "" },
		{ Espanol: "Nací aquí", AudioEspanol: "", Ingles: "I was born here", AudioIngles: "" },
		{ Espanol: "Nadie sabe", AudioEspanol: "", Ingles: "Nobody knows", AudioIngles: "" },
		{ Espanol: "Necesito dinero", AudioEspanol: "", Ingles: "I need money", AudioIngles: "" },
		{ Espanol: "Necesito espacio", AudioEspanol: "", Ingles: "I need space", AudioIngles: "" },
		{ Espanol: "Necesito más información", AudioEspanol: "", Ingles: "I need more information", AudioIngles: "" },
		{ Espanol: "Necesito tomar una ducha", AudioEspanol: "", Ingles: "I need to take a shower", AudioIngles: "" },
		{ Espanol: "No es necesario preocuparse", AudioEspanol: "", Ingles: "No need to worry", AudioIngles: "" },
		{ Espanol: "No estamos seguros", AudioEspanol: "", Ingles: "We are not sure", AudioIngles: "" },
		{ Espanol: "No estoy listo(a)", AudioEspanol: "", Ingles: "I´m not ready", AudioIngles: "" },
		{ Espanol: "No fui afuera hoy", AudioEspanol: "", Ingles: "I didn´t go outside today", AudioIngles: "" },
		{ Espanol: "No hay comida", AudioEspanol: "", Ingles: "There´s no food", AudioIngles: "" },
		{ Espanol: "No puedo decidir", AudioEspanol: "", Ingles: "I can´t decide", AudioIngles: "" },
		{ Espanol: "No puedo ir mañana", AudioEspanol: "", Ingles: "I can´t go tomorrow", AudioIngles: "" },
		{ Espanol: "No quiero hacerlo", AudioEspanol: "", Ingles: "I don´t want to do it", AudioIngles: "" },
		{ Espanol: "No soy de aquí", AudioEspanol: "", Ingles: "I´m not from here", AudioIngles: "" },
		{ Espanol: "No te conozco", AudioEspanol: "", Ingles: "I don´t know you", AudioIngles: "" },
		{ Espanol: "No tengo sueño", AudioEspanol: "", Ingles: "I´m not sleepy", AudioIngles: "" },
		{ Espanol: "Pagaré", AudioEspanol: "", Ingles: "I will pay", AudioIngles: "" },
		{ Espanol: "Podemos hacer esto", AudioEspanol: "", Ingles: "We can do this", AudioIngles: "" },
		{ Espanol: "Por favor, ayúdame", AudioEspanol: "", Ingles: "Please, help me", AudioIngles: "" },
		{ Espanol: "Por supuesto", AudioEspanol: "", Ingles: "Of course", AudioIngles: "" },
		{ Espanol: "Practico inglés todos los días", AudioEspanol: "", Ingles: "I practice English everyday", AudioIngles: "" },
		{ Espanol: "Prométeme", AudioEspanol: "", Ingles: "Promise me", AudioIngles: "" },
		{ Espanol: "Qué desafortunado", AudioEspanol: "", Ingles: "How unfortunate", AudioIngles: "" },
		{ Espanol: "Quiero atención", AudioEspanol: "", Ingles: "I want attention", AudioIngles: "" },
		{ Espanol: "Quiero iniciar un negocio", AudioEspanol: "", Ingles: "I want to start a business", AudioIngles: "" },
		{ Espanol: "Quiero practicar contigo", AudioEspanol: "", Ingles: "I want to practice with you", AudioIngles: "" },
		{ Espanol: "Quiero quedarme aquí", AudioEspanol: "", Ingles: "I want to stay here", AudioIngles: "" },
		{ Espanol: "Quiero venderlo", AudioEspanol: "", Ingles: "I want to sell it", AudioIngles: "" },
		{ Espanol: "Se está haciendo tarde", AudioEspanol: "", Ingles: "It´s getting late", AudioIngles: "" },
		{ Espanol: "Se ve delicioso", AudioEspanol: "", Ingles: "It looks delicious", AudioIngles: "" },
		{ Espanol: "Somos como una familia", AudioEspanol: "", Ingles: "We are like family", AudioIngles: "" },
		{ Espanol: "Soy un estudiante extranjero", AudioEspanol: "", Ingles: "I´m a foreign student", AudioIngles: "" },
		{ Espanol: "Te espero afuera", AudioEspanol: "", Ingles: "I´ll wait for you outside", AudioIngles: "" },
		{ Espanol: "Te perdono", AudioEspanol: "", Ingles: "I forgive you", AudioIngles: "" },
		{ Espanol: "Te prometo", AudioEspanol: "", Ingles: "I promise", AudioIngles: "" },
		{ Espanol: "Tenemos que practicar también", AudioEspanol: "", Ingles: "We need to practice too", AudioIngles: "" },
		{ Espanol: "Tengo prisa", AudioEspanol: "", Ingles: "I´m in a hurry", AudioIngles: "" },
		{ Espanol: "Tengo un problema", AudioEspanol: "", Ingles: "I have a problem", AudioIngles: "" },
		{ Espanol: "Tomaré una decisión", AudioEspanol: "", Ingles: "I will make a decision", AudioIngles: "" },
		{ Espanol: "Tu pronunciación es buena", AudioEspanol: "", Ingles: "Your pronunciation is good", AudioIngles: "" },
		{ Espanol: "Tuve un buen día", AudioEspanol: "", Ingles: "I had a good day", AudioIngles: "" },
		{ Espanol: "Vamos a practicar pronto", AudioEspanol: "", Ingles: "Let´s practice soon", AudioIngles: "" },
		{ Espanol: "Vivo con un(a) amigo(a)", AudioEspanol: "", Ingles: "I live with a friend", AudioIngles: "" },
		{ Espanol: "¿A qué hora abren?", AudioEspanol: "", Ingles: "At what time does it open?", AudioIngles: "" },
		{ Espanol: "¿A quién apoyas?", AudioEspanol: "", Ingles: "Who do you support?", AudioIngles: "" },
		{ Espanol: "¿A quién le toca?", AudioEspanol: "", Ingles: "Whose turn is it?", AudioIngles: "" },
		{ Espanol: "¿Aceptas tarjetas de crédito?", AudioEspanol: "", Ingles: "Do you accept credit cards?", AudioIngles: "" },
		{ Espanol: "¿Casi estás aquí?", AudioEspanol: "", Ingles: "Are you almost here?", AudioIngles: "" },
		{ Espanol: "¿Cómo debemos hacerlo?", AudioEspanol: "", Ingles: "How should we do this?", AudioIngles: "" },
		{ Espanol: "¿Cómo terminó?", AudioEspanol: "", Ingles: "How did it end?", AudioIngles: "" },
		{ Espanol: "¿Cuál es el nombre del bebé?", AudioEspanol: "", Ingles: "What´s the name of the baby?", AudioIngles: "" },
		{ Espanol: "¿Cuál es el plan?", AudioEspanol: "", Ingles: "What´s the plan?", AudioIngles: "" },
		{ Espanol: "¿Cuál es el problema?", AudioEspanol: "", Ingles: "What´s the problem?", AudioIngles: "" },
		{ Espanol: "¿Cuál es la respuesta?", AudioEspanol: "", Ingles: "What´s the answer?", AudioIngles: "" },
		{ Espanol: "¿Cuál es mejor?", AudioEspanol: "", Ingles: "Which is better?", AudioIngles: "" },
		{ Espanol: "¿Cuál es tu comida favorita?", AudioEspanol: "", Ingles: "What´s your favorite food?", AudioIngles: "" },
		{ Espanol: "¿Cuál es tu decisión?", AudioEspanol: "", Ingles: "What´s your decision?", AudioIngles: "" },
		{ Espanol: "¿Cuál es tu dirección?", AudioEspanol: "", Ingles: "What´s your address?", AudioIngles: "" },
		{ Espanol: "¿Cuál es tu opinión?", AudioEspanol: "", Ingles: "What´s your opinion?", AudioIngles: "" },
		{ Espanol: "¿Cuáles países quieres visitar?", AudioEspanol: "", Ingles: "Which countries do you want to visit?", AudioIngles: "" },
		{ Espanol: "¿Cuáles son tus libros favoritos?", AudioEspanol: "", Ingles: "Which are your favorite books?", AudioIngles: "" },
		{ Espanol: "¿Cuáles son tus planes para hoy?", AudioEspanol: "", Ingles: "What are your plans for today?", AudioIngles: "" },
		{ Espanol: "¿Cuándo es la mejor hora para visitar?", AudioEspanol: "", Ingles: "When is the best hour to visit?", AudioIngles: "" },
		{ Espanol: "¿Cuándo nos vamos?", AudioEspanol: "", Ingles: "When are we leaving?", AudioIngles: "" },
		{ Espanol: "¿Cuándo termina?", AudioEspanol: "", Ingles: "When does it end?", AudioIngles: "" },
		{ Espanol: "¿Cuánto mides?", AudioEspanol: "", Ingles: "How tall are you?", AudioIngles: "" },
		{ Espanol: "¿Cuánto tiempo tengo?", AudioEspanol: "", Ingles: "How much time do I have?", AudioIngles: "" },
		{ Espanol: "¿De qué color son tus ojos?", AudioEspanol: "", Ingles: "What color are your eyes?", AudioIngles: "" },
		{ Espanol: "¿Dónde es(está) eso?", AudioEspanol: "", Ingles: "Where is that?", AudioIngles: "" },
		{ Espanol: "¿Dónde está el(la) maestro(a)?", AudioEspanol: "", Ingles: "Where´s the teacher?", AudioIngles: "" },
		{ Espanol: "¿Dónde está mi teléfono?", AudioEspanol: "", Ingles: "Where´s my phone?", AudioIngles: "" },
		{ Espanol: "¿Dónde están mis cosas?", AudioEspanol: "", Ingles: "Where´s my stuff?", AudioIngles: "" },
		{ Espanol: "¿Dónde estoy?", AudioEspanol: "", Ingles: "Where am I?", AudioIngles: "" },
		{ Espanol: "¿Está abierta la tienda?", AudioEspanol: "", Ingles: "Is the store open?", AudioIngles: "" },
		{ Espanol: "¿Está pasando algo?", AudioEspanol: "", Ingles: "Is something happening?", AudioIngles: "" },
		{ Espanol: "¿Estás en apuro?", AudioEspanol: "", Ingles: "Are you in a hurry?", AudioIngles: "" },
		{ Espanol: "¿Estás mintiendo?", AudioEspanol: "", Ingles: "Are you lying?", AudioIngles: "" },
		{ Espanol: "¿Estás trabajando?", AudioEspanol: "", Ingles: "Are you working?", AudioIngles: "" },
		{ Espanol: "¿Esto es apropiado?", AudioEspanol: "", Ingles: "Is this appropiate?", AudioIngles: "" },
		{ Espanol: "¿Esto está bien?", AudioEspanol: "", Ingles: "Is this okay?", AudioIngles: "" },
		{ Espanol: "¿Estudiaste?", AudioEspanol: "", Ingles: "Did you study?", AudioIngles: "" },
		{ Espanol: "¿Has decidido?", AudioEspanol: "", Ingles: "Have you decided?", AudioIngles: "" },
		{ Espanol: "¿Has dejado un mensaje?", AudioEspanol: "", Ingles: "Did you leave a message?", AudioIngles: "" },
		{ Espanol: "¿Has estado allí?", AudioEspanol: "", Ingles: "Have you been there?", AudioIngles: "" },
		{ Espanol: "¿Hay algo que te molesta?", AudioEspanol: "", Ingles: "Is something bothering you?", AudioIngles: "" },
		{ Espanol: "¿Hay habitaciones disponibles?", AudioEspanol: "", Ingles: "Are there rooms available?", AudioIngles: "" },
		{ Espanol: "¿Lo estoy haciendo bien?", AudioEspanol: "", Ingles: "Am I doing this right?", AudioIngles: "" },
		{ Espanol: "¿Me perdonas?", AudioEspanol: "", Ingles: "Do you forgive me?", AudioIngles: "" },
		{ Espanol: "¿Me puedes dar un consejo?", AudioEspanol: "", Ingles: "Can you give me advice?", AudioIngles: "" },
		{ Espanol: "¿Me puedes hacer un favor?", AudioEspanol: "", Ingles: "Can you do me a favor?", AudioIngles: "" },
		{ Espanol: "¿Me recuerdas?", AudioEspanol: "", Ingles: "Do you remember me?", AudioIngles: "" },
		{ Espanol: "¿Por qué lo hiciste?", AudioEspanol: "", Ingles: "Why did you do it?", AudioIngles: "" },
		{ Espanol: "¿Puedo enviar algo?", AudioEspanol: "", Ingles: "Can I send you something?", AudioIngles: "" },
		{ Espanol: "¿Puedo sentarme aquí?", AudioEspanol: "", Ingles: "Can I sit here?", AudioIngles: "" },
		{ Espanol: "¿Puedo verte mañana?", AudioEspanol: "", Ingles: "Can I see you tomorrow?", AudioIngles: "" },
		{ Espanol: "¿Qué debo elegir?", AudioEspanol: "", Ingles: "What should I choose?", AudioIngles: "" },
		{ Espanol: "¿Qué deportes juegas?", AudioEspanol: "", Ingles: "What sports do you play?", AudioIngles: "" },
		{ Espanol: "¿Qué estás dibujando?", AudioEspanol: "", Ingles: "What are you drawing?", AudioIngles: "" },
		{ Espanol: "¿Qué estás enviando?", AudioEspanol: "", Ingles: "What are you sending?", AudioIngles: "" },
		{ Espanol: "¿Qué estás leyendo?", AudioEspanol: "", Ingles: "What are you reading?", AudioIngles: "" },
		{ Espanol: "¿Qué estás vendiendo?", AudioEspanol: "", Ingles: "What are you selling?", AudioIngles: "" },
		{ Espanol: "¿Qué estás viendo?", AudioEspanol: "", Ingles: "What are you watching?", AudioIngles: "" },
		{ Espanol: "¿Qué hay para desayunar?", AudioEspanol: "", Ingles: "What´s for breakfast?", AudioIngles: "" },
		{ Espanol: "¿Qué me pongo?", AudioEspanol: "", Ingles: "What should I wear?", AudioIngles: "" },
		{ Espanol: "¿Qué quiere decir?", AudioEspanol: "", Ingles: "What does it mean?", AudioIngles: "" },
		{ Espanol: "¿Quién dijo eso?", AudioEspanol: "", Ingles: "Who said that?", AudioIngles: "" },
		{ Espanol: "¿Quién es responsable?", AudioEspanol: "", Ingles: "Who´s responsible?", AudioIngles: "" },
		{ Espanol: "¿Quién es?", AudioEspanol: "", Ingles: "Who is it?", AudioIngles: "" },
		{ Espanol: "¿Quién ganó?", AudioEspanol: "", Ingles: "Who won?", AudioIngles: "" },
		{ Espanol: "¿Quién hace eso?", AudioEspanol: "", Ingles: "Who´s doing that?", AudioIngles: "" },
		{ Espanol: "¿Quién hizo esto?", AudioEspanol: "", Ingles: "Who did this?", AudioIngles: "" },
		{ Espanol: "¿Quién perdió?", AudioEspanol: "", Ingles: "Who lost?", AudioIngles: "" },
		{ Espanol: "¿Quién te lo dijo?", AudioEspanol: "", Ingles: "Who told you?", AudioIngles: "" },
		{ Espanol: "¿Quiéres jugar?", AudioEspanol: "", Ingles: "Do you want to play?", AudioIngles: "" },
		{ Espanol: "¿Quiéres vivir aquí?", AudioEspanol: "", Ingles: "Do you want to live here?", AudioIngles: "" },
		{ Espanol: "¿Sabes la respuesta?", AudioEspanol: "", Ingles: "Do you know the answer?", AudioIngles: "" },
		{ Espanol: "¿Sabes?", AudioEspanol: "", Ingles: "Do you know?", AudioIngles: "" },
		{ Espanol: "¿Te estoy molestando?", AudioEspanol: "", Ingles: "Am I bothering you?", AudioIngles: "" },
		{ Espanol: "¿Te gusta bailar?", AudioEspanol: "", Ingles: "Do you like dancing?", AudioIngles: "" },
		{ Espanol: "¿Te preocupa?", AudioEspanol: "", Ingles: "Do you worry?", AudioIngles: "" },
		{ Espanol: "¿Tenemos permiso?", AudioEspanol: "", Ingles: "Do we have permission?", AudioIngles: "" },
		{ Espanol: "¿Tengo que esperar?", AudioEspanol: "", Ingles: "Do I have to wait?", AudioIngles: "" },
		{ Espanol: "¿Tienes sueño?", AudioEspanol: "", Ingles: "Are you sleepy?", AudioIngles: "" }
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


////////////////////////////************Textos Nivel Cuatro Inglés************//////////////////////////////////

appModulo.controller('inglesCuatroController', function ($http, $scope, i18nService) {

    $('#cuatroBTN').css('background-color', '#333');

    $scope.registroUnoIngles = [
		{ Espanol: "A nadie le importa", AudioEspanol: "", Ingles: "Nobody cares", AudioIngles: "" },
		{ Espanol: "Abriré la puerta", AudioEspanol: "", Ingles: "I´ll open the door", AudioIngles: "" },
		{ Espanol: "Ahora es el momento perfecto", AudioEspanol: "", Ingles: "Now is the perfect time", AudioIngles: "" },
		{ Espanol: "Alguien te estaba buscando", AudioEspanol: "", Ingles: "Someone was looking for you", AudioIngles: "" },
		{ Espanol: "Aprendí mucho hoy", AudioEspanol: "", Ingles: "I learned a lot today", AudioIngles: "" },
		{ Espanol: "Casi estás ahí", AudioEspanol: "", Ingles: "You´re almost there", AudioIngles: "" },
		{ Espanol: "Cierra la puerta", AudioEspanol: "", Ingles: "Close the door", AudioIngles: "" },
		{ Espanol: "Como siempre", AudioEspanol: "", Ingles: "Like always", AudioIngles: "" },
		{ Espanol: "Continuaremos mañana", AudioEspanol: "", Ingles: "We will continue tomorrow", AudioIngles: "" },
		{ Espanol: "Dame tu número de teléfono", AudioEspanol: "", Ingles: "Give me your phone number", AudioIngles: "" },
		{ Espanol: "Dame un poco", AudioEspanol: "", Ingles: "Give me a little", AudioIngles: "" },
		{ Espanol: "Dámelo", AudioEspanol: "", Ingles: "Give it to me", AudioIngles: "" },
		{ Espanol: "Debes estar cansado(a)", AudioEspanol: "", Ingles: "You must be tired", AudioIngles: "" },
		{ Espanol: "Desperté temprano hoy", AudioEspanol: "", Ingles: "I woke up early today", AudioIngles: "" },
		{ Espanol: "Disfruté hablando con usted", AudioEspanol: "", Ingles: "I enjoyed talking with you", AudioIngles: "" },
		{ Espanol: "El carro no está funcionando", AudioEspanol: "", Ingles: "The car´s not working", AudioIngles: "" },
		{ Espanol: "El clima está malo", AudioEspanol: "", Ingles: "There´s bad weather", AudioIngles: "" },
		{ Espanol: "El examen fue difícil", AudioEspanol: "", Ingles: "The exam was difficult", AudioIngles: "" },
		{ Espanol: "Eres muy útil", AudioEspanol: "", Ingles: "You´re very helpful", AudioIngles: "" },
		{ Espanol: "Es fácil de recordar", AudioEspanol: "", Ingles: "It´s easy to remember", AudioIngles: "" },
		{ Espanol: "Es mi decisión", AudioEspanol: "", Ingles: "It´s my decision", AudioIngles: "" },
		{ Espanol: "Es mi oportunidad", AudioEspanol: "", Ingles: "It´s my chance", AudioIngles: "" },
		{ Espanol: "Es mi pasión", AudioEspanol: "", Ingles: "It´s my passion", AudioIngles: "" },
		{ Espanol: "Es mucho mejor", AudioEspanol: "", Ingles: "It´s much better", AudioIngles: "" },
		{ Espanol: "Es nuevo(a)", AudioEspanol: "", Ingles: "It´s new", AudioIngles: "" },
		{ Espanol: "Es suave", AudioEspanol: "", Ingles: "It´s soft", AudioIngles: "" },
		{ Espanol: "Es tan difícil", AudioEspanol: "", Ingles: "It´s so hard", AudioIngles: "" },
		{ Espanol: "Es tu turno", AudioEspanol: "", Ingles: "It´s your turn", AudioIngles: "" },
		{ Espanol: "Es un hecho", AudioEspanol: "", Ingles: "It´s a fact", AudioIngles: "" },
		{ Espanol: "Es una buena película", AudioEspanol: "", Ingles: "It´s a good movie", AudioIngles: "" },
		{ Espanol: "Es una posibilidad", AudioEspanol: "", Ingles: "It´s a possibility", AudioIngles: "" },
		{ Espanol: "Esas son preguntas fáciles", AudioEspanol: "", Ingles: "Those are easy questions", AudioIngles: "" },
		{ Espanol: "Eso está bien", AudioEspanol: "", Ingles: "That´s okay", AudioIngles: "" },
		{ Espanol: "Eso fue una locura", AudioEspanol: "", Ingles: "That was crazy", AudioIngles: "" },
		{ Espanol: "Está casi listo", AudioEspanol: "", Ingles: "It´s almost ready", AudioIngles: "" },
		{ Espanol: "Está lleno", AudioEspanol: "", Ingles: "It´s full", AudioIngles: "" },
		{ Espanol: "Está vacío", AudioEspanol: "", Ingles: "It´s empty", AudioIngles: "" },
		{ Espanol: "Estamos lejos", AudioEspanol: "", Ingles: "We are far away", AudioIngles: "" },
		{ Espanol: "Estaré afuera si me necesitas", AudioEspanol: "", Ingles: "I´ll be outside if you need me", AudioIngles: "" },
		{ Espanol: "Estaré aquí todo el día", AudioEspanol: "", Ingles: "I´ll be here all day", AudioIngles: "" },
		{ Espanol: "Esto es valioso", AudioEspanol: "", Ingles: "This is valuable", AudioIngles: "" },
		{ Espanol: "Estoy contigo", AudioEspanol: "", Ingles: "I´m with you", AudioIngles: "" },
		{ Espanol: "Estoy dispuesto a hacerlo", AudioEspanol: "", Ingles: "I´m willing to do it", AudioIngles: "" },
		{ Espanol: "Estoy intentando concentrarme", AudioEspanol: "", Ingles: "I´m trying to concentrate", AudioIngles: "" },
		{ Espanol: "Estoy lavando ropa", AudioEspanol: "", Ingles: "I´m doing laundry", AudioIngles: "" },
		{ Espanol: "Estoy muy agradecido(a)", AudioEspanol: "", Ingles: "I´m very grateful", AudioIngles: "" },
		{ Espanol: "Estoy sucio(a)", AudioEspanol: "", Ingles: "I´m dirty", AudioIngles: "" },
		{ Espanol: "Estoy sudando", AudioEspanol: "", Ingles: "I´m sweating", AudioIngles: "" },
		{ Espanol: "Estoy tomando notas", AudioEspanol: "", Ingles: "I´m taking notes", AudioIngles: "" },
		{ Espanol: "Estudié", AudioEspanol: "", Ingles: "I studied", AudioIngles: "" },
		{ Espanol: "Fue a propósito", AudioEspanol: "", Ingles: "It was on purpose", AudioIngles: "" },
		{ Espanol: "Fue buena información", AudioEspanol: "", Ingles: "It was good information", AudioIngles: "" },
		{ Espanol: "Fue bueno", AudioEspanol: "", Ingles: "It was good", AudioIngles: "" },
		{ Espanol: "Fue cancelado(a)", AudioEspanol: "", Ingles: "It was cancelled", AudioIngles: "" },
		{ Espanol: "Fue dramático(a)", AudioEspanol: "", Ingles: "It was dramatic", AudioIngles: "" },
		{ Espanol: "Fue una buena decisión", AudioEspanol: "", Ingles: "It was a good decision", AudioIngles: "" },
		{ Espanol: "Fue una mala decisión", AudioEspanol: "", Ingles: "It was a bad decision", AudioIngles: "" },
		{ Espanol: "Ganamos", AudioEspanol: "", Ingles: "We won", AudioIngles: "" },
		{ Espanol: "Gracias por decirme la verdad", AudioEspanol: "", Ingles: "Thanks for telling me the truth", AudioIngles: "" },
		{ Espanol: "Gracias por enviármelo", AudioEspanol: "", Ingles: "Thanks for sending it to me", AudioIngles: "" },
		{ Espanol: "Ha sido mucho tiempo", AudioEspanol: "", Ingles: "It´s been a long time", AudioIngles: "" },
		{ Espanol: "Ha sido un buen día", AudioEspanol: "", Ingles: "It´s been a good day", AudioIngles: "" },
		{ Espanol: "Hace frío", AudioEspanol: "", Ingles: "It´s cold", AudioIngles: "" },
		{ Espanol: "Hago ejercicio todos los días", AudioEspanol: "", Ingles: "I exercise everyday", AudioIngles: "" },
		{ Espanol: "Haremos lo mejor", AudioEspanol: "", Ingles: "We´ll try our best", AudioIngles: "" },
		{ Espanol: "Hay extra", AudioEspanol: "", Ingles: "There are extra", AudioIngles: "" },
		{ Espanol: "He terminado con todo", AudioEspanol: "", Ingles: "I´m finished with everything", AudioIngles: "" },
		{ Espanol: "La comida está caliente", AudioEspanol: "", Ingles: "The food is hot", AudioIngles: "" },
		{ Espanol: "La comida está fría", AudioEspanol: "", Ingles: "The food is cold", AudioIngles: "" },
		{ Espanol: "La película está por comenzar", AudioEspanol: "", Ingles: "The movie´s about to start", AudioIngles: "" },
		{ Espanol: "La policía está aquí", AudioEspanol: "", Ingles: "The police are here", AudioIngles: "" },
		{ Espanol: "Las clases se cancelaron", AudioEspanol: "", Ingles: "Classes are cancelled", AudioIngles: "" },
		{ Espanol: "Llegaré temprano", AudioEspanol: "", Ingles: "I will arrive early", AudioIngles: "" },
		{ Espanol: "Lo compré recientemente", AudioEspanol: "", Ingles: "I bought it recently", AudioIngles: "" },
		{ Espanol: "Lo estoy haciendo en este momento", AudioEspanol: "", Ingles: "I´m doing it right now", AudioIngles: "" },
		{ Espanol: "Lo intentaré otra vez", AudioEspanol: "", Ingles: "I will try again", AudioIngles: "" },
		{ Espanol: "Lo siento, no presté atención", AudioEspanol: "", Ingles: "I´m sorry, I didn´t pay attention", AudioIngles: "" },
		{ Espanol: "Mantén la calma", AudioEspanol: "", Ingles: "Stay calm", AudioIngles: "" },
		{ Espanol: "Me distraigo fácilmente", AudioEspanol: "", Ingles: "I get easily distracted", AudioIngles: "" },
		{ Espanol: "Me distraje", AudioEspanol: "", Ingles: "I was distracted", AudioIngles: "" },
		{ Espanol: "Me estoy congelando", AudioEspanol: "", Ingles: "I´m freezing", AudioIngles: "" },
		{ Espanol: "Me hace feliz", AudioEspanol: "", Ingles: "It makes me happy", AudioIngles: "" },
		{ Espanol: "Me pregunto por qué", AudioEspanol: "", Ingles: "I´m wondering why", AudioIngles: "" },
		{ Espanol: "Me puedes decir más tarde", AudioEspanol: "", Ingles: "You can tell me later", AudioIngles: "" },
		{ Espanol: "Me voy", AudioEspanol: "", Ingles: "I´m leaving", AudioIngles: "" },
		{ Espanol: "Mi alarma está activada", AudioEspanol: "", Ingles: "My alarm is on", AudioIngles: "" },
		{ Espanol: "Mi amigo(a) está aquí", AudioEspanol: "", Ingles: "My friend is here", AudioIngles: "" },
		{ Espanol: "Mi teléfono no funciona", AudioEspanol: "", Ingles: "My phone´s not working", AudioIngles: "" },
		{ Espanol: "Mis padres están bien", AudioEspanol: "", Ingles: "My parents are okay", AudioIngles: "" },
		{ Espanol: "Mis planes son arruinados", AudioEspanol: "", Ingles: "My plans are ruined", AudioIngles: "" },
		{ Espanol: "Nada nuevo", AudioEspanol: "", Ingles: "Nothing new", AudioIngles: "" },
		{ Espanol: "Nada tengo", AudioEspanol: "", Ingles: "I got nothing", AudioIngles: "" },
		{ Espanol: "Nada tengo por hacer", AudioEspanol: "", Ingles: "I have nothing to do", AudioIngles: "" },
		{ Espanol: "Nadie está en casa", AudioEspanol: "", Ingles: "Nobody´s home", AudioIngles: "" },
		{ Espanol: "Nadie está escuchando", AudioEspanol: "", Ingles: "Nobody´s listening", AudioIngles: "" },
		{ Espanol: "Necesitas practicar", AudioEspanol: "", Ingles: "You need to practice", AudioIngles: "" },
		{ Espanol: "Necesito ayuda con mi pronunciación del inglés", AudioEspanol: "", Ingles: "I need help with my English pronunciation", AudioIngles: "" },
		{ Espanol: "Necesito eso", AudioEspanol: "", Ingles: "I need that", AudioIngles: "" },
		{ Espanol: "Necesito silencio", AudioEspanol: "", Ingles: "I need silence", AudioIngles: "" },
		{ Espanol: "Necesito un trago", AudioEspanol: "", Ingles: "I need a drink", AudioIngles: "" },
		{ Espanol: "Necesito una nueva computadora", AudioEspanol: "", Ingles: "I need a new computer", AudioIngles: "" },
		{ Espanol: "Necesito unas vacaciones", AudioEspanol: "", Ingles: "I need a vacation", AudioIngles: "" },
		{ Espanol: "No fue mi intención", AudioEspanol: "", Ingles: "It wasn´t my intention", AudioIngles: "" },
		{ Espanol: "No hagas ruidos", AudioEspanol: "", Ingles: "Don´t make noises", AudioIngles: "" },
		{ Espanol: "No hay clases hoy", AudioEspanol: "", Ingles: "There aren´t classes today", AudioIngles: "" },
		{ Espanol: "No hay trabajo hoy", AudioEspanol: "", Ingles: "There´s no work today", AudioIngles: "" },
		{ Espanol: "No me importa", AudioEspanol: "", Ingles: "I don´t care", AudioIngles: "" },
		{ Espanol: "No quiero ir", AudioEspanol: "", Ingles: "I don´t want to go", AudioIngles: "" },
		{ Espanol: "No recuerdo", AudioEspanol: "", Ingles: "I don´t remember", AudioIngles: "" },
		{ Espanol: "No sé dónde está", AudioEspanol: "", Ingles: "I don´t know where it is", AudioIngles: "" },
		{ Espanol: "No tengo permiso", AudioEspanol: "", Ingles: "I´m not allowed to go", AudioIngles: "" },
		{ Espanol: "Perdí mi teléfono", AudioEspanol: "", Ingles: "I lost my phone", AudioIngles: "" },
		{ Espanol: "Perdí mis llaves", AudioEspanol: "", Ingles: "I lost my keys", AudioIngles: "" },
		{ Espanol: "Perdimos", AudioEspanol: "", Ingles: "We lost", AudioIngles: "" },
		{ Espanol: "Puedes decirme", AudioEspanol: "", Ingles: "You can tell me", AudioIngles: "" },
		{ Espanol: "Puedo hacerlo", AudioEspanol: "", Ingles: "I can make it", AudioIngles: "" },
		{ Espanol: "Puedo traerlo(a)", AudioEspanol: "", Ingles: "I can bring it", AudioIngles: "" },
		{ Espanol: "Quiero hacerlo otra vez", AudioEspanol: "", Ingles: "I want to do it again", AudioIngles: "" },
		{ Espanol: "Recuerdo lo que pasó", AudioEspanol: "", Ingles: "I remember what happened", AudioIngles: "" },
		{ Espanol: "Se cayó", AudioEspanol: "", Ingles: "It fell", AudioIngles: "" },
		{ Espanol: "Se recomienda", AudioEspanol: "", Ingles: "It´s recommended", AudioIngles: "" },
		{ Espanol: "Siempre sucede", AudioEspanol: "", Ingles: "It always happens", AudioIngles: "" },
		{ Espanol: "Soy el primero en llegar", AudioEspanol: "", Ingles: "I´m the first one here", AudioIngles: "" },
		{ Espanol: "Sucedió de repente", AudioEspanol: "", Ingles: "It happened suddenly", AudioIngles: "" },
		{ Espanol: "Talvez la próxima vez", AudioEspanol: "", Ingles: "Maybe next time", AudioIngles: "" },
		{ Espanol: "Te enseñaré", AudioEspanol: "", Ingles: "I will teach you", AudioIngles: "" },
		{ Espanol: "Te estábamos esperando", AudioEspanol: "", Ingles: "We waited for you", AudioIngles: "" },
		{ Espanol: "Te mostraré", AudioEspanol: "", Ingles: "I will show you", AudioIngles: "" },
		{ Espanol: "Te queda poco tiempo", AudioEspanol: "", Ingles: "You have little time", AudioIngles: "" },
		{ Espanol: "Te visitaré", AudioEspanol: "", Ingles: "I will visit you", AudioIngles: "" },
		{ Espanol: "Tenemos una reunión hoy", AudioEspanol: "", Ingles: "We have a meeting today", AudioIngles: "" },
		{ Espanol: "Tengo algo que decirte", AudioEspanol: "", Ingles: "I have something to tell you", AudioIngles: "" },
		{ Espanol: "Todo estará bien", AudioEspanol: "", Ingles: "Everything will be okay", AudioIngles: "" },
		{ Espanol: "Todo ha cambiado", AudioEspanol: "", Ingles: "Everything has changed", AudioIngles: "" },
		{ Espanol: "Todo mundo está aquí", AudioEspanol: "", Ingles: "Everyone is here", AudioIngles: "" },
		{ Espanol: "Todo mundo quiere saber", AudioEspanol: "", Ingles: "Everyone wants to know", AudioIngles: "" },
		{ Espanol: "Todo va bien", AudioEspanol: "", Ingles: "Everything is good", AudioIngles: "" },
		{ Espanol: "Todos están ocupados", AudioEspanol: "", Ingles: "Everyone is busy", AudioIngles: "" },
		{ Espanol: "Toma tu asiento", AudioEspanol: "", Ingles: "Take your seat", AudioIngles: "" },
		{ Espanol: "Vamos al lago", AudioEspanol: "", Ingles: "We are going to the lake", AudioIngles: "" },
		{ Espanol: "Ven con nosotros", AudioEspanol: "", Ingles: "Come with us", AudioIngles: "" },
		{ Espanol: "Yo no entendía", AudioEspanol: "", Ingles: "I did not understand", AudioIngles: "" },
		{ Espanol: "¿A quién estás buscando?", AudioEspanol: "", Ingles: "Who are you looking for?", AudioIngles: "" },
		{ Espanol: "¿Cómo estuvo el trabajo hoy?", AudioEspanol: "", Ingles: "How was work today?", AudioIngles: "" },
		{ Espanol: "¿Cómo pasó?", AudioEspanol: "", Ingles: "How did it happen?", AudioIngles: "" },
		{ Espanol: "¿Cómo puedes decir eso?", AudioEspanol: "", Ingles: "How can you say that?", AudioIngles: "" },
		{ Espanol: "¿Cómo se pronuncia esto?", AudioEspanol: "", Ingles: "How do you pronounce this?", AudioIngles: "" },
		{ Espanol: "¿Cómo va todo?", AudioEspanol: "", Ingles: "How is everything?", AudioIngles: "" },
		{ Espanol: "¿Cómo va tu día?", AudioEspanol: "", Ingles: "How is your day going?", AudioIngles: "" },
		{ Espanol: "¿Cuál es tu secreto?", AudioEspanol: "", Ingles: "What´s your secret?", AudioIngles: "" },
		{ Espanol: "¿Cuáles son los requisitos?", AudioEspanol: "", Ingles: "Wat are the requirements?", AudioIngles: "" },
		{ Espanol: "¿Cuándo empezó?", AudioEspanol: "", Ingles: "When does it begin?", AudioIngles: "" },
		{ Espanol: "¿Cuándo puedo verte?", AudioEspanol: "", Ingles: "When can I see you?", AudioIngles: "" },
		{ Espanol: "¿De quién fue la idea?", AudioEspanol: "", Ingles: "Whose idea was it?", AudioIngles: "" },
		{ Espanol: "¿Dónde está ese lugar?", AudioEspanol: "", Ingles: "Where is that place?", AudioIngles: "" },
		{ Espanol: "¿Dónde estabas?", AudioEspanol: "", Ingles: "Where were you?", AudioIngles: "" },
		{ Espanol: "¿Dónde están las llaves?", AudioEspanol: "", Ingles: "Where are the keys?", AudioIngles: "" },
		{ Espanol: "¿Están todos bien?", AudioEspanol: "", Ingles: "Is everyone okay?", AudioIngles: "" },
		{ Espanol: "¿Estás conmigo?", AudioEspanol: "", Ingles: "Are you with me?", AudioIngles: "" },
		{ Espanol: "¿Estás escribiendo esto?", AudioEspanol: "", Ingles: "Are you writing this?", AudioIngles: "" },
		{ Espanol: "¿Estás listo(a) para mañana?", AudioEspanol: "", Ingles: "Are you ready for tomorrow?", AudioIngles: "" },
		{ Espanol: "¿Estás manejando ahí?", AudioEspanol: "", Ingles: "Are you driving there?", AudioIngles: "" },
		{ Espanol: "¿Estos son tus hijos?", AudioEspanol: "", Ingles: "Are these your children?", AudioIngles: "" },
		{ Espanol: "¿Fue bueno(a)?", AudioEspanol: "", Ingles: "Was it good?", AudioIngles: "" },
		{ Espanol: "¿Haces ejercicio?", AudioEspanol: "", Ingles: "Do you exercise?", AudioIngles: "" },
		{ Espanol: "¿Hay más?", AudioEspanol: "", Ingles: "Are there more?", AudioIngles: "" },
		{ Espanol: "¿Hay una explicación?", AudioEspanol: "", Ingles: "Is there an explanation?", AudioIngles: "" },
		{ Espanol: "¿Lo(a) has visto?", AudioEspanol: "", Ingles: "Have you watched it?", AudioIngles: "" },
		{ Espanol: "¿Me crees?", AudioEspanol: "", Ingles: "Do you believe me?", AudioIngles: "" },
		{ Espanol: "¿Me has encontrado?", AudioEspanol: "", Ingles: "Did you find me?", AudioIngles: "" },
		{ Espanol: "¿Podemos vernos mañana?", AudioEspanol: "", Ingles: "Can we meet tomorrow?", AudioIngles: "" },
		{ Espanol: "¿Podemos vernos?", AudioEspanol: "", Ingles: "Can we see each other?", AudioIngles: "" },
		{ Espanol: "¿Practicamos hoy?", AudioEspanol: "", Ingles: "Are we practicing today?", AudioIngles: "" },
		{ Espanol: "¿Puedes apagar la radio?", AudioEspanol: "", Ingles: "Can you turn off the radio?", AudioIngles: "" },
		{ Espanol: "¿Puedes apagar la televisión?", AudioEspanol: "", Ingles: "Can you turn off the television?", AudioIngles: "" },
		{ Espanol: "¿Puedes enseñarme?", AudioEspanol: "", Ingles: "Can you teach me?", AudioIngles: "" },
		{ Espanol: "¿Puedes esperarme?", AudioEspanol: "", Ingles: "Can you wait for me?", AudioIngles: "" },
		{ Espanol: "¿Puedes hacerlo?", AudioEspanol: "", Ingles: "Can you make it?", AudioIngles: "" },
		{ Espanol: "¿Puedes traerlo?", AudioEspanol: "", Ingles: "Can you bring it?", AudioIngles: "" },
		{ Espanol: "¿Puedo llamarte en este momento?", AudioEspanol: "", Ingles: "Can I call you right now?", AudioIngles: "" },
		{ Espanol: "¿Qué dijeron?", AudioEspanol: "", Ingles: "What did they say?", AudioIngles: "" },
		{ Espanol: "¿Qué has escrito?", AudioEspanol: "", Ingles: "What did you write?", AudioIngles: "" },
		{ Espanol: "¿Qué hay en el correo?", AudioEspanol: "", Ingles: "What´s in the mail?", AudioIngles: "" },
		{ Espanol: "¿Qué más tienes?", AudioEspanol: "", Ingles: "What else do you have?", AudioIngles: "" },
		{ Espanol: "¿Qué tienes?", AudioEspanol: "", Ingles: "What do you have?", AudioIngles: "" },
		{ Espanol: "¿Quién crees que fue?", AudioEspanol: "", Ingles: "Who do you think it was?", AudioIngles: "" },
		{ Espanol: "¿Quién es el mejor?", AudioEspanol: "", Ingles: "Who´s the best?", AudioIngles: "" },
		{ Espanol: "¿Quién sabe la respuesta?", AudioEspanol: "", Ingles: "Who knows the answer?", AudioIngles: "" },
		{ Espanol: "¿Quién sabe?", AudioEspanol: "", Ingles: "Who knows?", AudioIngles: "" },
		{ Espanol: "¿Quién se olvidó?", AudioEspanol: "", Ingles: "Who forgot?", AudioIngles: "" },
		{ Espanol: "¿Quieres un poco de agua?", AudioEspanol: "", Ingles: "Do you want some water?", AudioIngles: "" },
		{ Espanol: "¿Recibiste mi mensaje?", AudioEspanol: "", Ingles: "Did you receive my message?", AudioIngles: "" },
		{ Espanol: "¿Te asusté?", AudioEspanol: "", Ingles: "Did I scare you?", AudioIngles: "" },
		{ Espanol: "¿Te gusta?", AudioEspanol: "", Ingles: "Do you like it?", AudioIngles: "" },
		{ Espanol: "¿Tienes calor?", AudioEspanol: "", Ingles: "Are you hot?", AudioIngles: "" },
		{ Espanol: "¿Tienes frío?", AudioEspanol: "", Ingles: "Are you cold?", AudioIngles: "" },
		{ Espanol: "¿Tienes papel?", AudioEspanol: "", Ingles: "Do you have paper?", AudioIngles: "" },
		{ Espanol: "¿Tienes un lapicero?", AudioEspanol: "", Ingles: "Do you have a pen?", AudioIngles: "" },
		{ Espanol: "¿Tienes un lápiz?", AudioEspanol: "", Ingles: "Do you have a pencil?", AudioIngles: "" },
		{ Espanol: "¿Tienes una idea?", AudioEspanol: "", Ingles: "Do you have an idea?", AudioIngles: "" }
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
		{ Espanol: "Abre tus ojos", AudioEspanol: "", Ingles: "Open your eyes", AudioIngles: "" },
		{ Espanol: "Acabo de despertar", AudioEspanol: "", Ingles: "I just woke up", AudioIngles: "" },
		{ Espanol: "Acabo de llegar aquí", AudioEspanol: "", Ingles: "I just arrived here", AudioIngles: "" },
		{ Espanol: "Ahora estoy bien", AudioEspanol: "", Ingles: "I´m fine now", AudioIngles: "" },
		{ Espanol: "Apúrate", AudioEspanol: "", Ingles: "Hurry up", AudioIngles: "" },
		{ Espanol: "Cierra los ojos", AudioEspanol: "", Ingles: "Close your eyes", AudioIngles: "" },
		{ Espanol: "Comenzará pronto", AudioEspanol: "", Ingles: "It´s beginning soon", AudioIngles: "" },
		{ Espanol: "Contesta el teléfono", AudioEspanol: "", Ingles: "Answer the phone", AudioIngles: "" },
		{ Espanol: "Dejó de llover", AudioEspanol: "", Ingles: "It stopped raining", AudioIngles: "" },
		{ Espanol: "Dime qué piensas", AudioEspanol: "", Ingles: "Tell me what you think", AudioIngles: "" },
		{ Espanol: "Ellos desaparecieron", AudioEspanol: "", Ingles: "They disappeared", AudioIngles: "" },
		{ Espanol: "Ellos están buscando a alguien", AudioEspanol: "", Ingles: "They are looking for someone", AudioIngles: "" },
		{ Espanol: "Ellos están investigando", AudioEspanol: "", Ingles: "They are investigating", AudioIngles: "" },
		{ Espanol: "Ellos volverán pronto", AudioEspanol: "", Ingles: "They will be back soon", AudioIngles: "" },
		{ Espanol: "Eres buen estudiante", AudioEspanol: "", Ingles: "You are a good student", AudioIngles: "" },
		{ Espanol: "Es barato vivir ahí", AudioEspanol: "", Ingles: "It´s cheap to live there", AudioIngles: "" },
		{ Espanol: "Es caro vivir ahí", AudioEspanol: "", Ingles: "It´s expensive to live there", AudioIngles: "" },
		{ Espanol: "Es contra la ley", AudioEspanol: "", Ingles: "It´s against the law", AudioIngles: "" },
		{ Espanol: "Es gratis para todo mundo", AudioEspanol: "", Ingles: "It´s free for everyone", AudioIngles: "" },
		{ Espanol: "Es ilegal", AudioEspanol: "", Ingles: "It´s illegal", AudioIngles: "" },
		{ Espanol: "Es mutuo", AudioEspanol: "", Ingles: "It´s mutual", AudioIngles: "" },
		{ Espanol: "Es nada especial", AudioEspanol: "", Ingles: "It´s nothing special", AudioIngles: "" },
		{ Espanol: "Es permanente", AudioEspanol: "", Ingles: "It´s permanent", AudioIngles: "" },
		{ Espanol: "Es repugnante", AudioEspanol: "", Ingles: "It´s disgusting", AudioIngles: "" },
		{ Espanol: "Es temporal", AudioEspanol: "", Ingles: "It´s temporary", AudioIngles: "" },
		{ Espanol: "Es tranquilo aquí", AudioEspanol: "", Ingles: "It´s quiet here", AudioIngles: "" },
		{ Espanol: "Es un día especial", AudioEspanol: "", Ingles: "It´s a special day", AudioIngles: "" },
		{ Espanol: "Es una llamada de larga distancia", AudioEspanol: "", Ingles: "It´s a long distance call", AudioIngles: "" },
		{ Espanol: "Está en el carro", AudioEspanol: "", Ingles: "It´s in the car", AudioIngles: "" },
		{ Espanol: "Está prohibido(a)", AudioEspanol: "", Ingles: "It´s prohibited", AudioIngles: "" },
		{ Espanol: "Estamos aquí", AudioEspanol: "", Ingles: "We are here", AudioIngles: "" },
		{ Espanol: "Estamos listos", AudioEspanol: "", Ingles: "We are ready", AudioIngles: "" },
		{ Espanol: "Estás invitado(a)", AudioEspanol: "", Ingles: "you are invited", AudioIngles: "" },
		{ Espanol: "Esto es perfecto", AudioEspanol: "", Ingles: "This is perfect", AudioIngles: "" },
		{ Espanol: "Estoy ansioso(a)", AudioEspanol: "", Ingles: "I´m anxious", AudioIngles: "" },
		{ Espanol: "Estoy embarazada", AudioEspanol: "", Ingles: "I´m pregnant", AudioIngles: "" },
		{ Espanol: "Estoy en el teléfono", AudioEspanol: "", Ingles: "I´m on the phone", AudioIngles: "" },
		{ Espanol: "Estoy estudiando aquí", AudioEspanol: "", Ingles: "I´m studying here", AudioIngles: "" },
		{ Espanol: "Estoy explorando la ciudad", AudioEspanol: "", Ingles: "I´m exploring the city", AudioIngles: "" },
		{ Espanol: "Estoy haciendo algo importante", AudioEspanol: "", Ingles: "I´m doing something important", AudioIngles: "" },
		{ Espanol: "Estoy haciendo una presentación", AudioEspanol: "", Ingles: "I´m making a presentation", AudioIngles: "" },
		{ Espanol: "Estoy investigando", AudioEspanol: "", Ingles: "I´m investigating", AudioIngles: "" },
		{ Espanol: "Estoy nervioso(a)", AudioEspanol: "", Ingles: "I´m nervous", AudioIngles: "" },
		{ Espanol: "Estoy siendo paciente", AudioEspanol: "", Ingles: "I´m being patient", AudioIngles: "" },
		{ Espanol: "Estoy trabajando aquí", AudioEspanol: "", Ingles: "I´m working here", AudioIngles: "" },
		{ Espanol: "Estoy trabajando hoy", AudioEspanol: "", Ingles: "I´m working today", AudioIngles: "" },
		{ Espanol: "Fue agradable verte hoy", AudioEspanol: "", Ingles: "It was nice seeing you today", AudioIngles: "" },
		{ Espanol: "Fue mi decisión", AudioEspanol: "", Ingles: "It was my decision", AudioIngles: "" },
		{ Espanol: "Gracia por la invitación", AudioEspanol: "", Ingles: "Thanks for the invitation", AudioIngles: "" },
		{ Espanol: "Gracias por cooperar", AudioEspanol: "", Ingles: "Thanks for cooperating", AudioIngles: "" },
		{ Espanol: "Gracias por la oferta", AudioEspanol: "", Ingles: "Thanks for the offer", AudioIngles: "" },
		{ Espanol: "Hay alguien en la puerta", AudioEspanol: "", Ingles: "Someone´s at the door", AudioIngles: "" },
		{ Espanol: "Hice algo para ti", AudioEspanol: "", Ingles: "I made something for you", AudioIngles: "" },
		{ Espanol: "Iremos en mi carro", AudioEspanol: "", Ingles: "We will go in my car", AudioIngles: "" },
		{ Espanol: "Las clases están a punto de finalizar", AudioEspanol: "", Ingles: "School is about to end", AudioIngles: "" },
		{ Espanol: "Llamaste a un número equivocado", AudioEspanol: "", Ingles: "You called the wrong number", AudioIngles: "" },
		{ Espanol: "Llévalo ahí", AudioEspanol: "", Ingles: "Take it there", AudioIngles: "" },
		{ Espanol: "Mañana es el último día", AudioEspanol: "", Ingles: "Tomorrow is the last day", AudioIngles: "" },
		{ Espanol: "Me duele el estómago", AudioEspanol: "", Ingles: "My stomach hurts", AudioIngles: "" },
		{ Espanol: "Me duele la cabeza", AudioEspanol: "", Ingles: "My head hurts", AudioIngles: "" },
		{ Espanol: "Me gusta esta canción", AudioEspanol: "", Ingles: "I like this song", AudioIngles: "" },
		{ Espanol: "Me quedo", AudioEspanol: "", Ingles: "I´m staying", AudioIngles: "" },
		{ Espanol: "Me siento culpable", AudioEspanol: "", Ingles: "I feel guilty", AudioIngles: "" },
		{ Espanol: "Me siento mejor", AudioEspanol: "", Ingles: "I´m feeling better", AudioIngles: "" },
		{ Espanol: "Mi carro no quiere arrancar", AudioEspanol: "", Ingles: "My car doesn´t want to start", AudioIngles: "" },
		{ Espanol: "Míralo(a)", AudioEspanol: "", Ingles: "Look at it", AudioIngles: "" },
		{ Espanol: "Mis clases son difíciles", AudioEspanol: "", Ingles: "My classes are difficult", AudioIngles: "" },
		{ Espanol: "Mis hijos están jugando", AudioEspanol: "", Ingles: "My kids are playing", AudioIngles: "" },
		{ Espanol: "Mis manos están frías", AudioEspanol: "", Ingles: "My hands are cold", AudioIngles: "" },
		{ Espanol: "Mis padres están en casa", AudioEspanol: "", Ingles: "My parents are home", AudioIngles: "" },
		{ Espanol: "Mis padres están trabajando", AudioEspanol: "", Ingles: "My parents are working", AudioIngles: "" },
		{ Espanol: "Muéstrame tu mano", AudioEspanol: "", Ingles: "Show me your hand", AudioIngles: "" },
		{ Espanol: "Muéstramelo", AudioEspanol: "", Ingles: "Show it to me", AudioIngles: "" },
		{ Espanol: "Nadie puede entrar", AudioEspanol: "", Ingles: "Nobody can enter", AudioIngles: "" },
		{ Espanol: "Necesitamos más bebidas", AudioEspanol: "", Ingles: "We need more drinks", AudioIngles: "" },
		{ Espanol: "Necesitas escuchar esto", AudioEspanol: "", Ingles: "You need to hear this", AudioIngles: "" },
		{ Espanol: "Necesitas que ver esto", AudioEspanol: "", Ingles: "You need to see this", AudioIngles: "" },
		{ Espanol: "Necesito ayuda de expertos", AudioEspanol: "", Ingles: "I need expert help", AudioIngles: "" },
		{ Espanol: "Necesito ayudar a mis padres", AudioEspanol: "", Ingles: "I need to help my parents", AudioIngles: "" },
		{ Espanol: "Necesito comprar uno nuevo", AudioEspanol: "", Ingles: "I need to buy a new one", AudioIngles: "" },
		{ Espanol: "Necesito consejo", AudioEspanol: "", Ingles: "I need advice", AudioIngles: "" },
		{ Espanol: "Necesito depositar dinero", AudioEspanol: "", Ingles: "I need to deposit money", AudioIngles: "" },
		{ Espanol: "Necesito diferentes opiniones", AudioEspanol: "", Ingles: "I need different opinions", AudioIngles: "" },
		{ Espanol: "Necesito reemplazarlo", AudioEspanol: "", Ingles: "I need to replace it", AudioIngles: "" },
		{ Espanol: "Necesito sacar dinero", AudioEspanol: "", Ingles: "I need to withdraw money", AudioIngles: "" },
		{ Espanol: "Necesito un guía turístico", AudioEspanol: "", Ingles: "I need a tour guide", AudioIngles: "" },
		{ Espanol: "Necesito un mecánico", AudioEspanol: "", Ingles: "I need a mechanic", AudioIngles: "" },
		{ Espanol: "Necesito una silla", AudioEspanol: "", Ingles: "I need a chair", AudioIngles: "" },
		{ Espanol: "Necesito viajar", AudioEspanol: "", Ingles: "I need to travel", AudioIngles: "" },
		{ Espanol: "No contestes el teléfono", AudioEspanol: "", Ingles: "Don´t answer the phone", AudioIngles: "" },
		{ Espanol: "No entres en pánico", AudioEspanol: "", Ingles: "Don´t panic", AudioIngles: "" },
		{ Espanol: "No hace diferencia", AudioEspanol: "", Ingles: "It doesn´t make a difference", AudioIngles: "" },
		{ Espanol: "No hay bebidas", AudioEspanol: "", Ingles: "There are no drinks", AudioIngles: "" },
		{ Espanol: "No hay razón", AudioEspanol: "", Ingles: "There is no reason", AudioIngles: "" },
		{ Espanol: "No lo hice", AudioEspanol: "", Ingles: "I did not do it", AudioIngles: "" },
		{ Espanol: "No mires", AudioEspanol: "", Ingles: "Don´t look", AudioIngles: "" },
		{ Espanol: "No puedo comprarlo", AudioEspanol: "", Ingles: "I can´t buy it", AudioIngles: "" },
		{ Espanol: "No quiero levantarme", AudioEspanol: "", Ingles: "I don´t want to get up", AudioIngles: "" },
		{ Espanol: "No tiene sentido", AudioEspanol: "", Ingles: "It´s meaningless", AudioIngles: "" },
		{ Espanol: "Por favor, continúa", AudioEspanol: "", Ingles: "Please, continue", AudioIngles: "" },
		{ Espanol: "Por supuesto", AudioEspanol: "", Ingles: "Of course", AudioIngles: "" },
		{ Espanol: "Puedo ir", AudioEspanol: "", Ingles: "I can come", AudioIngles: "" },
		{ Espanol: "Quédate aquí", AudioEspanol: "", Ingles: "Stay here", AudioIngles: "" },
		{ Espanol: "Quiero ayudar", AudioEspanol: "", Ingles: "I want to help", AudioIngles: "" },
		{ Espanol: "Quiero estudiar en el extranjero", AudioEspanol: "", Ingles: "I want to study abroad", AudioIngles: "" },
		{ Espanol: "Se está haciendo tarde", AudioEspanol: "", Ingles: "It´s getting late", AudioIngles: "" },
		{ Espanol: "Se rompió", AudioEspanol: "", Ingles: "It broke", AudioIngles: "" },
		{ Espanol: "Será difícil", AudioEspanol: "", Ingles: "It´s going to be difficult", AudioIngles: "" },
		{ Espanol: "Será fácil", AudioEspanol: "", Ingles: "It´s going to be easy", AudioIngles: "" },
		{ Espanol: "Siento interrumpir", AudioEspanol: "", Ingles: "I´m sorry for interrupting", AudioIngles: "" },
		{ Espanol: "Soy inocente", AudioEspanol: "", Ingles: "I´m innocent", AudioIngles: "" },
		{ Espanol: "Soy optimista", AudioEspanol: "", Ingles: "I´m optimistic", AudioIngles: "" },
		{ Espanol: "Soy pesimista", AudioEspanol: "", Ingles: "I´m pessimistic", AudioIngles: "" },
		{ Espanol: "Soy un expatriado", AudioEspanol: "", Ingles: "I´m an expatriate", AudioIngles: "" },
		{ Espanol: "Talvez el próximo mes", AudioEspanol: "", Ingles: "Maybe next month", AudioIngles: "" },
		{ Espanol: "Te mostraré por qué", AudioEspanol: "", Ingles: "I will show you why", AudioIngles: "" },
		{ Espanol: "Tendré todo listo", AudioEspanol: "", Ingles: "I will get everything ready", AudioIngles: "" },
		{ Espanol: "Tenemos que intentar", AudioEspanol: "", Ingles: "We have to try", AudioIngles: "" },
		{ Espanol: "Tengo algunos regalos", AudioEspanol: "", Ingles: "I have some gifts", AudioIngles: "" },
		{ Espanol: "Tengo mi cámara", AudioEspanol: "", Ingles: "I have my camera", AudioIngles: "" },
		{ Espanol: "Tengo pocas opciones", AudioEspanol: "", Ingles: "I have few options", AudioIngles: "" },
		{ Espanol: "Tengo un nuevo teléfono", AudioEspanol: "", Ingles: "I have a new phone", AudioIngles: "" },
		{ Espanol: "Tengo una reunión de negocios mañana", AudioEspanol: "", Ingles: "I have a business meeting tomorrow", AudioIngles: "" },
		{ Espanol: "Tengo una sorpresa para ti", AudioEspanol: "", Ingles: "I have a surprise for you", AudioIngles: "" },
		{ Espanol: "Terminará pronto", AudioEspanol: "", Ingles: "It´s ending soon", AudioIngles: "" },
		{ Espanol: "Todo está mejorando", AudioEspanol: "", Ingles: "Everything is improving", AudioIngles: "" },
		{ Espanol: "Todo mundo siente lo mismo", AudioEspanol: "", Ingles: "Everyone feels the same", AudioIngles: "" },
		{ Espanol: "Todos están escuchando", AudioEspanol: "", Ingles: "Everyone is listening", AudioIngles: "" },
		{ Espanol: "Todos están viendo", AudioEspanol: "", Ingles: "Everyone is watching", AudioIngles: "" },
		{ Espanol: "Tomo el bus", AudioEspanol: "", Ingles: "I take the bus", AudioIngles: "" },
		{ Espanol: "Tomo el tren", AudioEspanol: "", Ingles: "I take the train", AudioIngles: "" },
		{ Espanol: "Usted es el líder", AudioEspanol: "", Ingles: "You are the leader", AudioIngles: "" },
		{ Espanol: "Viene una tormenta", AudioEspanol: "", Ingles: "A thunderstorm is coming", AudioIngles: "" },
		{ Espanol: "Vivo en la ciudad", AudioEspanol: "", Ingles: "I live in the city", AudioIngles: "" },
		{ Espanol: "Vivo en los suburbios", AudioEspanol: "", Ingles: "I live in the suburbs", AudioIngles: "" },
		{ Espanol: "Volveré mañana", AudioEspanol: "", Ingles: "I will return tomorrow", AudioIngles: "" },
		{ Espanol: "Voy al banco", AudioEspanol: "", Ingles: "I´m going to the bank", AudioIngles: "" },
		{ Espanol: "Voy al concierto", AudioEspanol: "", Ingles: "I´m going to the concert", AudioIngles: "" },
		{ Espanol: "Voy al médico", AudioEspanol: "", Ingles: "I´m going to the doctor", AudioIngles: "" },
		{ Espanol: "Ya casi llego", AudioEspanol: "", Ingles: "I´m almost there", AudioIngles: "" },
		{ Espanol: "¿Casi estás ahí?", AudioEspanol: "", Ingles: "Are you almost there?", AudioIngles: "" },
		{ Espanol: "¿Cómo es esto?", AudioEspanol: "", Ingles: "How is this?", AudioIngles: "" },
		{ Espanol: "¿Cómo podemos ayudar?", AudioEspanol: "", Ingles: "How can we help?", AudioIngles: "" },
		{ Espanol: "¿Cómo va tu proyecto?", AudioEspanol: "", Ingles: "How is your project?", AudioIngles: "" },
		{ Espanol: "¿Conoces a esta persona?", AudioEspanol: "", Ingles: "Do you know this person?", AudioIngles: "" },
		{ Espanol: "¿Cuál es el propósito?", AudioEspanol: "", Ingles: "What´s the purpose?", AudioIngles: "" },
		{ Espanol: "¿Cuál es el sitio web?", AudioEspanol: "", Ingles: "What´s the website?", AudioIngles: "" },
		{ Espanol: "¿Cuál es la diferencia?", AudioEspanol: "", Ingles: "What´s the difference?", AudioIngles: "" },
		{ Espanol: "¿Cuál es la dirección?", AudioEspanol: "", Ingles: "What´s the address?", AudioIngles: "" },
		{ Espanol: "¿Cuál es la fecha de hoy?", AudioEspanol: "", Ingles: "What´s today´s date?", AudioIngles: "" },
		{ Espanol: "¿Cuál es la razón?", AudioEspanol: "", Ingles: "What´s the reason?", AudioIngles: "" },
		{ Espanol: "¿Cuál es su nombre?", AudioEspanol: "", Ingles: "What´s their name?", AudioIngles: "" },
		{ Espanol: "¿Cuál es tu estación favorita?", AudioEspanol: "", Ingles: "What´s your favorite season?", AudioIngles: "" },
		{ Espanol: "¿Cuál es tu lengua materna?", AudioEspanol: "", Ingles: "What´s your native language?", AudioIngles: "" },
		{ Espanol: "¿Cuáles son algunos buenos restaurantes?", AudioEspanol: "", Ingles: "What are some good restaurants?", AudioIngles: "" },
		{ Espanol: "¿Cuáles son las alternativas?", AudioEspanol: "", Ingles: "What are the alternatives?", AudioIngles: "" },
		{ Espanol: "¿Cuándo empiezan las vacaciones?", AudioEspanol: "", Ingles: "When do vacations start?", AudioIngles: "" },
		{ Espanol: "¿Cuándo es el examen?", AudioEspanol: "", Ingles: "When is the exam?", AudioIngles: "" },
		{ Espanol: "¿Cuándo es la reunión?", AudioEspanol: "", Ingles: "When is the meeting?", AudioIngles: "" },
		{ Espanol: "¿Cuánto quiéres?", AudioEspanol: "", Ingles: "How many do you want?", AudioIngles: "" },
		{ Espanol: "¿De quién es el cumpleaños?", AudioEspanol: "", Ingles: "Whose birthday is it?", AudioIngles: "" },
		{ Espanol: "¿De quién fue la decisión?", AudioEspanol: "", Ingles: "Whose decision was it?", AudioIngles: "" },
		{ Espanol: "¿Dónde está el grupo?", AudioEspanol: "", Ingles: "Where´s the group?", AudioIngles: "" },
		{ Espanol: "¿Dónde está todo mundo?", AudioEspanol: "", Ingles: "Where is everyone?", AudioIngles: "" },
		{ Espanol: "¿Dónde naciste?", AudioEspanol: "", Ingles: "Where were you born?", AudioIngles: "" },
		{ Espanol: "¿Es legal?", AudioEspanol: "", Ingles: "Is it legal?", AudioIngles: "" },
		{ Espanol: "¿Está lloviendo?", AudioEspanol: "", Ingles: "Is it raining?", AudioIngles: "" },
		{ Espanol: "¿Están todos(as) listos(as)?", AudioEspanol: "", Ingles: "Is everyone ready?", AudioIngles: "" },
		{ Espanol: "¿Estás aquí para trabajar o estudiar?", AudioEspanol: "", Ingles: "Are you here for work or studying?", AudioIngles: "" },
		{ Espanol: "¿Estás tomando medicinas?", AudioEspanol: "", Ingles: "Are you taking medications?", AudioIngles: "" },
		{ Espanol: "¿Esto te está ayudando?", AudioEspanol: "", Ingles: "This is helping you?", AudioIngles: "" },
		{ Espanol: "¿Estoy haciendo algo malo?", AudioEspanol: "", Ingles: "Am I doing something wrong?", AudioIngles: "" },
		{ Espanol: "¿Has practicado hoy?", AudioEspanol: "", Ingles: "Did you practice today?", AudioIngles: "" },
		{ Espanol: "¿Me estás preguntando?", AudioEspanol: "", Ingles: "Are you asking me?", AudioIngles: "" },
		{ Espanol: "¿Me puedes dar eso?", AudioEspanol: "", Ingles: "Can you give me that?", AudioIngles: "" },
		{ Espanol: "¿Me puedes dar un ejemplo?", AudioEspanol: "", Ingles: "Can you give me an example?", AudioIngles: "" },
		{ Espanol: "¿Por qué sucedió?", AudioEspanol: "", Ingles: "Why did it happen?", AudioIngles: "" },
		{ Espanol: "¿Puedes arreglarlo?", AudioEspanol: "", Ingles: "Can it be fixed?", AudioIngles: "" },
		{ Espanol: "¿Puedes encontrarlo?", AudioEspanol: "", Ingles: "Can you find it?", AudioIngles: "" },
		{ Espanol: "¿Puedes parar aquí?", AudioEspanol: "", Ingles: "Can you stop here?", AudioIngles: "" },
		{ Espanol: "¿Puedes repetirlo?", AudioEspanol: "", Ingles: "Can you repeat it?", AudioIngles: "" },
		{ Espanol: "¿Puedes venir?", AudioEspanol: "", Ingles: "Can you come?", AudioIngles: "" },
		{ Espanol: "¿Puedo dejar un mensaje?", AudioEspanol: "", Ingles: "Can I leave a message?", AudioIngles: "" },
		{ Espanol: "¿Puedo entrar?", AudioEspanol: "", Ingles: "Can I enter?", AudioIngles: "" },
		{ Espanol: "¿Qué clases tienes?", AudioEspanol: "", Ingles: "What classes do you have?", AudioIngles: "" },
		{ Espanol: "¿Qué dijeron tus padres?", AudioEspanol: "", Ingles: "What did your parents say?", AudioIngles: "" },
		{ Espanol: "¿Qué hiciste?", AudioEspanol: "", Ingles: "What did you do?", AudioIngles: "" },
		{ Espanol: "¿Qué hora es?", AudioEspanol: "", Ingles: "What time is it?", AudioIngles: "" },
		{ Espanol: "¿Qué idioma estás aprendiendo?", AudioEspanol: "", Ingles: "What language are you learning?", AudioIngles: "" },
		{ Espanol: "¿Qué más necesitamos?", AudioEspanol: "", Ingles: "What else do we need?", AudioIngles: "" },
		{ Espanol: "¿Qué quieres mostrarme?", AudioEspanol: "", Ingles: "What do you want to show me?", AudioIngles: "" },
		{ Espanol: "¿Quién está afuera?", AudioEspanol: "", Ingles: "Who is outside?", AudioIngles: "" },
		{ Espanol: "¿Quién me estaba buscando?", AudioEspanol: "", Ingles: "Who was looking for me?", AudioIngles: "" },
		{ Espanol: "¿Quiéres más información?", AudioEspanol: "", Ingles: "You want more information?", AudioIngles: "" },
		{ Espanol: "¿Te quedas?", AudioEspanol: "", Ingles: "Are you staying?", AudioIngles: "" },
		{ Espanol: "¿Tienes clases hoy?", AudioEspanol: "", Ingles: "Do you have classes today?", AudioIngles: "" },
		{ Espanol: "¿Tienes tus cosas?", AudioEspanol: "", Ingles: "You have your stuff?", AudioIngles: "" },
		{ Espanol: "¿Trabajarás hoy?", AudioEspanol: "", Ingles: "Will you work today?", AudioIngles: "" },
		{ Espanol: "¿Usas el transporte público?", AudioEspanol: "", Ingles: "Do you use public transportation?", AudioIngles: "" },
		{ Espanol: "¿Vas al concierto?", AudioEspanol: "", Ingles: "Are you going to the concert?", AudioIngles: "" }
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
		{ Espanol: "Ahora no", AudioEspanol: "", Ingles: "Not now", AudioIngles: "" },
		{ Espanol: "Alguien está aquí para ti", AudioEspanol: "", Ingles: "Someone is here for you", AudioIngles: "" },
		{ Espanol: "Aprendo mucho", AudioEspanol: "", Ingles: "I learn a lot", AudioIngles: "" },
		{ Espanol: "Baila conmigo", AudioEspanol: "", Ingles: "Dance with me", AudioIngles: "" },
		{ Espanol: "Buena suerte en el examen", AudioEspanol: "", Ingles: "Good luck in the exam", AudioIngles: "" },
		{ Espanol: "Búscame afuera", AudioEspanol: "", Ingles: "Look for me outside", AudioIngles: "" },
		{ Espanol: "Completa este formato", AudioEspanol: "", Ingles: "Complete this form", AudioIngles: "" },
		{ Espanol: "Compré algo para alguien", AudioEspanol: "", Ingles: "I bought something for someone", AudioIngles: "" },
		{ Espanol: "Dame una razón", AudioEspanol: "", Ingles: "Give me a reason", AudioIngles: "" },
		{ Espanol: "El carro tiene poca gasolina", AudioEspanol: "", Ingles: "The car has little gas", AudioIngles: "" },
		{ Espanol: "El tráfico es malo", AudioEspanol: "", Ingles: "The traffic is bad", AudioIngles: "" },
		{ Espanol: "Ellos son gente amable", AudioEspanol: "", Ingles: "They are friendly people", AudioIngles: "" },
		{ Espanol: "Es atractivo(a)", AudioEspanol: "", Ingles: "It´s attractive", AudioIngles: "" },
		{ Espanol: "Es barato aquí", AudioEspanol: "", Ingles: "It´s cheap here", AudioIngles: "" },
		{ Espanol: "Es comida", AudioEspanol: "", Ingles: "It´s food", AudioIngles: "" },
		{ Espanol: "Es demasiado pronto", AudioEspanol: "", Ingles: "It´s too early", AudioIngles: "" },
		{ Espanol: "Es demasiado tarde", AudioEspanol: "", Ingles: "It´s too late", AudioIngles: "" },
		{ Espanol: "El estadio está lleno", AudioEspanol: "", Ingles: "The stadium is full", AudioIngles: "" },
		{ Espanol: "Es famoso(a)", AudioEspanol: "", Ingles: "It´s famous", AudioIngles: "" },
		{ Espanol: "Es la ley", AudioEspanol: "", Ingles: "It´s the law", AudioIngles: "" },
		{ Espanol: "Es para alguien más", AudioEspanol: "", Ingles: "It´s for someone else", AudioIngles: "" },
		{ Espanol: "Es similar", AudioEspanol: "", Ingles: "It´s similar", AudioIngles: "" },
		{ Espanol: "Es un buen libro", AudioEspanol: "", Ingles: "It´s a good book", AudioIngles: "" },
		{ Espanol: "Es un buen lugar", AudioEspanol: "", Ingles: "It´s a good place", AudioIngles: "" },
		{ Espanol: "Es una ciudad grande", AudioEspanol: "", Ingles: "It´s a big city", AudioIngles: "" },
		{ Espanol: "Es una ciudad pequeña", AudioEspanol: "", Ingles: "It´s a small city", AudioIngles: "" },
		{ Espanol: "Es vergonzoso(a)", AudioEspanol: "", Ingles: "It´s embarrassing", AudioIngles: "" },
		{ Espanol: "Esa es una buena razón", AudioEspanol: "", Ingles: "That´s a good reason", AudioIngles: "" },
		{ Espanol: "Está debajo de la silla", AudioEspanol: "", Ingles: "It´s under the chair", AudioIngles: "" },
		{ Espanol: "Está empezando a llover", AudioEspanol: "", Ingles: "It´s starting to rain", AudioIngles: "" },
		{ Espanol: "Está en la cocina", AudioEspanol: "", Ingles: "It´s in the kitchen", AudioIngles: "" },
		{ Espanol: "Está haciendo frío", AudioEspanol: "", Ingles: "It´s getting cold", AudioIngles: "" },
		{ Espanol: "Está lloviendo terriblemente", AudioEspanol: "", Ingles: "It´s raining terribly", AudioIngles: "" },
		{ Espanol: "Está mojado(a)", AudioEspanol: "", Ingles: "It´s wet", AudioIngles: "" },
		{ Espanol: "Está sucio(a)", AudioEspanol: "", Ingles: "It´s dirty", AudioIngles: "" },
		{ Espanol: "Esto me motiva", AudioEspanol: "", Ingles: "Esto me motiva", AudioIngles: "" },
		{ Espanol: "Estoy buscando trabajo", AudioEspanol: "", Ingles: "I´m looking for jobs", AudioIngles: "" },
		{ Espanol: "Estoy cansado(a) de caminar", AudioEspanol: "", Ingles: "I´m tired of walking", AudioIngles: "" },
		{ Espanol: "Estoy cansado(a) de estar sentado(a)", AudioEspanol: "", Ingles: "I´m tired of sitting", AudioIngles: "" },
		{ Espanol: "Estoy celoso(a)", AudioEspanol: "", Ingles: "I´m jealous", AudioIngles: "" },
		{ Espanol: "Estoy comprando algunos libros", AudioEspanol: "", Ingles: "I´m buying some books", AudioIngles: "" },
		{ Espanol: "Estoy eliminado(a)", AudioEspanol: "", Ingles: "I am eliminated", AudioIngles: "" },
		{ Espanol: "Estoy en el primer piso", AudioEspanol: "", Ingles: "I´m in the first floor", AudioIngles: "" },
		{ Espanol: "Estoy en la biblioteca", AudioEspanol: "", Ingles: "I´m in the library", AudioIngles: "" },
		{ Espanol: "Estoy en la oficina", AudioEspanol: "", Ingles: "I´m at the office", AudioIngles: "" },
		{ Espanol: "Estoy en mi sofá", AudioEspanol: "", Ingles: "I´m in my couch", AudioIngles: "" },
		{ Espanol: "Estoy en un hotel", AudioEspanol: "", Ingles: "I´m in a hotel", AudioIngles: "" },
		{ Espanol: "Estoy haciendo una comparación", AudioEspanol: "", Ingles: "I´m making a comparison", AudioIngles: "" },
		{ Espanol: "Estoy intentando romper el récord", AudioEspanol: "", Ingles: "I´m trying to break the record", AudioIngles: "" },
		{ Espanol: "Estoy preguntando por direcciones", AudioEspanol: "", Ingles: "I´m asking for directions", AudioIngles: "" },
		{ Espanol: "Estoy sentado(a) afuera", AudioEspanol: "", Ingles: "I´m sitting outside", AudioIngles: "" },
		{ Espanol: "Estudiaré más duro", AudioEspanol: "", Ingles: "I will study harder", AudioIngles: "" },
		{ Espanol: "Fallé en el examen", AudioEspanol: "", Ingles: "I failed the exam", AudioIngles: "" },
		{ Espanol: "Gané", AudioEspanol: "", Ingles: "I won", AudioIngles: "" },
		{ Espanol: "Hace frío por la noche", AudioEspanol: "", Ingles: "It´s cold at night", AudioIngles: "" },
		{ Espanol: "Has hecho un buen trabajo", AudioEspanol: "", Ingles: "You did a good job", AudioIngles: "" },
		{ Espanol: "Infórmanos", AudioEspanol: "", Ingles: "Inform us", AudioIngles: "" },
		{ Espanol: "La bolsa está pesada", AudioEspanol: "", Ingles: "The bag is heavy", AudioIngles: "" },
		{ Espanol: "La luna está hermosa esta noche", AudioEspanol: "", Ingles: "The moon is beautiful tonight", AudioIngles: "" },
		{ Espanol: "La puerta está cerrada", AudioEspanol: "", Ingles: "The door is closed", AudioIngles: "" },
		{ Espanol: "La puerta no se quiere abrir", AudioEspanol: "", Ingles: "The door doesn´t want to open", AudioIngles: "" },
		{ Espanol: "Las bolsas son pesadas", AudioEspanol: "", Ingles: "The bags are heavy", AudioIngles: "" },
		{ Espanol: "Llámame cuando estés listo(a)", AudioEspanol: "", Ingles: "Call me when you´re ready", AudioIngles: "" },
		{ Espanol: "Lo(a) odio", AudioEspanol: "", Ingles: "I hate it", AudioIngles: "" },
		{ Espanol: "Los esperaremos", AudioEspanol: "", Ingles: "We will wait for them", AudioIngles: "" },
		{ Espanol: "Me aceptaron", AudioEspanol: "", Ingles: "I got accepted", AudioIngles: "" },
		{ Espanol: "Me da vergüenza", AudioEspanol: "", Ingles: "I´m embarrassed", AudioIngles: "" },
		{ Espanol: "Me encanta el olor de la lluvia", AudioEspanol: "", Ingles: "I love the smell of rain", AudioIngles: "" },
		{ Espanol: "Me gusta ayudar a la gente", AudioEspanol: "", Ingles: "I like helping people", AudioIngles: "" },
		{ Espanol: "Me gusta el olor", AudioEspanol: "", Ingles: "I like the smell", AudioIngles: "" },
		{ Espanol: "Me ofrecieron un puesto", AudioEspanol: "", Ingles: "I got offered a position", AudioIngles: "" },
		{ Espanol: "Me voy a casa", AudioEspanol: "", Ingles: "I´m going home", AudioIngles: "" },
		{ Espanol: "Mi vecino necesita ayuda", AudioEspanol: "", Ingles: "My neighbor needs help", AudioIngles: "" },
		{ Espanol: "Mis brazos están cansados", AudioEspanol: "", Ingles: "My arms are tired", AudioIngles: "" },
		{ Espanol: "Mis piernas están cansadas", AudioEspanol: "", Ingles: "My legs are tired", AudioIngles: "" },
		{ Espanol: "Mis zapatos están sucios", AudioEspanol: "", Ingles: "My shoes are dirty", AudioIngles: "" },
		{ Espanol: "Muchos turistas vienen aquí", AudioEspanol: "", Ingles: "Many tourists come here", AudioIngles: "" },
		{ Espanol: "My carro está en el garaje", AudioEspanol: "", Ingles: "My car is in the garage", AudioIngles: "" },
		{ Espanol: "Nada oigo", AudioEspanol: "", Ingles: "I don´t hear anything", AudioIngles: "" },
		{ Espanol: "Necesitamos un nombre", AudioEspanol: "", Ingles: "We need a name", AudioIngles: "" },
		{ Espanol: "Necesito caminar", AudioEspanol: "", Ingles: "I need to walk", AudioIngles: "" },
		{ Espanol: "Necesito sentarme", AudioEspanol: "", Ingles: "I need to sit", AudioIngles: "" },
		{ Espanol: "Necesito un taxi", AudioEspanol: "", Ingles: "I need a taxi", AudioIngles: "" },
		{ Espanol: "Necesito una toalla", AudioEspanol: "", Ingles: "I need a towel", AudioIngles: "" },
		{ Espanol: "Necesito zapatos nuevos", AudioEspanol: "", Ingles: "I need new shoes", AudioIngles: "" },
		{ Espanol: "No es para ti", AudioEspanol: "", Ingles: "It´s not for you", AudioIngles: "" },
		{ Espanol: "No escribí mucho", AudioEspanol: "", Ingles: "I didn´t write much", AudioIngles: "" },
		{ Espanol: "No ha llovido en mucho tiempo", AudioEspanol: "", Ingles: "It hasn´t rained in a while", AudioIngles: "" },
		{ Espanol: "No hay agua caliente", AudioEspanol: "", Ingles: "There´s no hot water", AudioIngles: "" },
		{ Espanol: "No hay gente aquí", AudioEspanol: "", Ingles: "There are no people here", AudioIngles: "" },
		{ Espanol: "No hay sillas", AudioEspanol: "", Ingles: "There are no chairs", AudioIngles: "" },
		{ Espanol: "No me sorprende", AudioEspanol: "", Ingles: "I´m not surprised", AudioIngles: "" },
		{ Espanol: "No pude dormir", AudioEspanol: "", Ingles: "I didn´t sleep", AudioIngles: "" },
		{ Espanol: "Nos reuniremos aquí", AudioEspanol: "", Ingles: "We will meet here", AudioIngles: "" },
		{ Espanol: "Pasé el examen", AudioEspanol: "", Ingles: "I passed the exam", AudioIngles: "" },
		{ Espanol: "Perdí", AudioEspanol: "", Ingles: "I lost", AudioIngles: "" },
		{ Espanol: "Permíteme enseñarte lo que hice", AudioEspanol: "", Ingles: "Let me show you what I did", AudioIngles: "" },
		{ Espanol: "Podemos hacerlo mañana", AudioEspanol: "", Ingles: "We can do it tomorrow", AudioIngles: "" },
		{ Espanol: "Por eso es que lo elegí", AudioEspanol: "", Ingles: "That´s why I chose it", AudioIngles: "" },
		{ Espanol: "Por eso es que me gusta", AudioEspanol: "", Ingles: "This is why I like it", AudioIngles: "" },
		{ Espanol: "Puede ser mejor", AudioEspanol: "", Ingles: "It can be better", AudioIngles: "" },
		{ Espanol: "Puedes decirnos", AudioEspanol: "", Ingles: "You can tell us", AudioIngles: "" },
		{ Espanol: "Quedé despierto(a) toda la noche", AudioEspanol: "", Ingles: "I stayed up all night", AudioIngles: "" },
		{ Espanol: "Quiero bailar", AudioEspanol: "", Ingles: "I want to dance", AudioIngles: "" },
		{ Espanol: "Quiero hablar bien el inglés", AudioEspanol: "", Ingles: "I want to speak good English", AudioIngles: "" },
		{ Espanol: "Quiero irme", AudioEspanol: "", Ingles: "I want to leave", AudioIngles: "" },
		{ Espanol: "Quiero pesar más", AudioEspanol: "", Ingles: "I want to wigh more", AudioIngles: "" },
		{ Espanol: "Quiero pesar menos", AudioEspanol: "", Ingles: "I want to weigh less", AudioIngles: "" },
		{ Espanol: "Saldré mañana", AudioEspanol: "", Ingles: "I will leave tomorrow", AudioIngles: "" },
		{ Espanol: "Siéntate conmigo", AudioEspanol: "", Ingles: "Sit with me", AudioIngles: "" },
		{ Espanol: "Sigue adelante", AudioEspanol: "", Ingles: "Keep going", AudioIngles: "" },
		{ Espanol: "Son muchos estudiantes", AudioEspanol: "", Ingles: "It´s a lot of students", AudioIngles: "" },
		{ Espanol: "Te pagaré", AudioEspanol: "", Ingles: "I will pay you", AudioIngles: "" },
		{ Espanol: "Tenemos que esperar hasta mañana", AudioEspanol: "", Ingles: "We have to wait until tomorrow", AudioIngles: "" },
		{ Espanol: "Tengo mi tarjeta", AudioEspanol: "", Ingles: "I have my card", AudioIngles: "" },
		{ Espanol: "Tengo tus papeles", AudioEspanol: "", Ingles: "I have your papers", AudioIngles: "" },
		{ Espanol: "Tengo un(a) buen(a) profesor(a)", AudioEspanol: "", Ingles: "I have a good professor", AudioIngles: "" },
		{ Espanol: "Tengo una cita", AudioEspanol: "", Ingles: "I have an appointment", AudioIngles: "" },
		{ Espanol: "Tengo una entrevista de trabajo", AudioEspanol: "", Ingles: "I have a job interview", AudioIngles: "" },
		{ Espanol: "Tenías razón", AudioEspanol: "", Ingles: "You were correct", AudioIngles: "" },
		{ Espanol: "Terminé el trabajo", AudioEspanol: "", Ingles: "I´m finished with work", AudioIngles: "" },
		{ Espanol: "There is traffic in the evening", AudioEspanol: "", Ingles: "Hay tráfico en la tarde", AudioIngles: "" },
		{ Espanol: "Tienes algo en tu camisa", AudioEspanol: "", Ingles: "You have something on your shirt", AudioIngles: "" },
		{ Espanol: "Tienes suerte", AudioEspanol: "", Ingles: "You´re lucky", AudioIngles: "" },
		{ Espanol: "Tienes unos ojos preciosos", AudioEspanol: "", Ingles: "You have beautiful eyes", AudioIngles: "" },
		{ Espanol: "Todavía estoy en la cama", AudioEspanol: "", Ingles: "I´m still in bed", AudioIngles: "" },
		{ Espanol: "Todos están durmiendo", AudioEspanol: "", Ingles: "Everyone´s sleeping", AudioIngles: "" },
		{ Espanol: "Todos quieren ir ahí", AudioEspanol: "", Ingles: "Everyone wants to go there", AudioIngles: "" },
		{ Espanol: "Trae los papeles", AudioEspanol: "", Ingles: "Bring the papers", AudioIngles: "" },
		{ Espanol: "Usted está en la dirección correcta", AudioEspanol: "", Ingles: "You´re in the right direction", AudioIngles: "" },
		{ Espanol: "Vengo temprano todos los días", AudioEspanol: "", Ingles: "I come early everyday", AudioIngles: "" },
		{ Espanol: "Veo lo que está pasando", AudioEspanol: "", Ingles: "I see what´s happening", AudioIngles: "" },
		{ Espanol: "Voy a la piscina", AudioEspanol: "", Ingles: "I´m going to the pool", AudioIngles: "" },
		{ Espanol: "Voy al dentista", AudioEspanol: "", Ingles: "I´m going to the dentist", AudioIngles: "" },
		{ Espanol: "Voy al gimnasio", AudioEspanol: "", Ingles: "I´m going to the gym", AudioIngles: "" },
		{ Espanol: "¿Cómo se llama el grupo?", AudioEspanol: "", Ingles: "What´s the group´s name?", AudioIngles: "" },
		{ Espanol: "¿Cuál es el método?", AudioEspanol: "", Ingles: "What´s the method?", AudioIngles: "" },
		{ Espanol: "¿Cuál es el número de tu habitación?", AudioEspanol: "", Ingles: "What is your room number?", AudioIngles: "" },
		{ Espanol: "¿Cuál es tu fecha de nacimiento?", AudioEspanol: "", Ingles: "What´s your date of birth?", AudioIngles: "" },
		{ Espanol: "¿Cuál es tu pasión?", AudioEspanol: "", Ingles: "What´s your passion?", AudioIngles: "" },
		{ Espanol: "¿Cuál universidad?", AudioEspanol: "", Ingles: "What university?", AudioIngles: "" },
		{ Espanol: "¿Cuáles fueron los resultados?", AudioEspanol: "", Ingles: "What were the results?", AudioIngles: "" },
		{ Espanol: "¿Cuáles son los precios?", AudioEspanol: "", Ingles: "What are the prices?", AudioIngles: "" },
		{ Espanol: "¿Cuáles son tus planes futuros?", AudioEspanol: "", Ingles: "What are your future plans?", AudioIngles: "" },
		{ Espanol: "¿Cuándo es el torneo?", AudioEspanol: "", Ingles: "When is the tournament?", AudioIngles: "" },
		{ Espanol: "¿Cuándo vendrán?", AudioEspanol: "", Ingles: "When are they coming?", AudioIngles: "" },
		{ Espanol: "¿Cuántos estudiantes estudian ahí?", AudioEspanol: "", Ingles: "How many students study there?", AudioIngles: "" },
		{ Espanol: "¿Dónde está el lapicero?", AudioEspanol: "", Ingles: "Where´s the pen?", AudioIngles: "" },
		{ Espanol: "¿Dónde está el paraguas?", AudioEspanol: "", Ingles: "Where is the umbrella?", AudioIngles: "" },
		{ Espanol: "¿Dónde está la cafetería?", AudioEspanol: "", Ingles: "Where is the cafeteria?", AudioIngles: "" },
		{ Espanol: "¿Dónde está la oficina?", AudioEspanol: "", Ingles: "Where´s the office?", AudioIngles: "" },
		{ Espanol: "¿Dónde está mi abrigo?", AudioEspanol: "", Ingles: "Where is my coat?", AudioIngles: "" },
		{ Espanol: "¿Dónde está mi bicicleta?", AudioEspanol: "", Ingles: "Where´s my bicycle?", AudioIngles: "" },
		{ Espanol: "¿Dónde está mi cartera?", AudioEspanol: "", Ingles: "Where is my wallet?", AudioIngles: "" },
		{ Espanol: "¿Dónde está tu escritorio?", AudioEspanol: "", Ingles: "Where is your desk?", AudioIngles: "" },
		{ Espanol: "¿Dondé está una gasolinera?", AudioEspanol: "", Ingles: "Where is a gas station?", AudioIngles: "" },
		{ Espanol: "¿Dónde estaba?", AudioEspanol: "", Ingles: "Where was it?", AudioIngles: "" },
		{ Espanol: "¿Dónde están mis libros?", AudioEspanol: "", Ingles: "Where are my books?", AudioIngles: "" },
		{ Espanol: "¿Dónde puedes comprar eso?", AudioEspanol: "", Ingles: "Where can you buy that?", AudioIngles: "" },
		{ Espanol: "¿En qué mes vienes?", AudioEspanol: "", Ingles: "What month are you coming?", AudioIngles: "" },
		{ Espanol: "¿En qué piso estás?", AudioEspanol: "", Ingles: "What floor are you in?", AudioIngles: "" },
		{ Espanol: "¿Eres principiante?", AudioEspanol: "", Ingles: "Are you a beginner?", AudioIngles: "" },
		{ Espanol: "¿Es una buena universidad?", AudioEspanol: "", Ingles: "Is it a good university?", AudioIngles: "" },
		{ Espanol: "¿Escuchas algo?", AudioEspanol: "", Ingles: "Do you hear something?", AudioIngles: "" },
		{ Espanol: "¿Está limpio(a)?", AudioEspanol: "", Ingles: "Is it clean?", AudioIngles: "" },
		{ Espanol: "¿Está sucio(a)?", AudioEspanol: "", Ingles: "Is it dirty?", AudioIngles: "" },
		{ Espanol: "¿Estás listo(a) para ir?", AudioEspanol: "", Ingles: "Are you ready to go?", AudioIngles: "" },
		{ Espanol: "¿Esto duele?", AudioEspanol: "", Ingles: "Does this hurt?", AudioIngles: "" },
		{ Espanol: "¿Hay más jugo?", AudioEspanol: "", Ingles: "Is there more juice?", AudioIngles: "" },
		{ Espanol: "¿Para mí?", AudioEspanol: "", Ingles: "For me?", AudioIngles: "" },
		{ Espanol: "¿Pasaste el examen?", AudioEspanol: "", Ingles: "Did you pass the exam?", AudioIngles: "" },
		{ Espanol: "¿Podemos comprar algo de comida?", AudioEspanol: "", Ingles: "Can we buy some food?", AudioIngles: "" },
		{ Espanol: "¿Podemos hacer una llamada?", AudioEspanol: "", Ingles: "Can we make a call?", AudioIngles: "" },
		{ Espanol: "¿Por qué es malo?", AudioEspanol: "", Ingles: "Why is it wrong?", AudioIngles: "" },
		{ Espanol: "¿Puedes llevarme ahí?", AudioEspanol: "", Ingles: "Can you take me there?", AudioIngles: "" },
		{ Espanol: "¿Puedes oírme?", AudioEspanol: "", Ingles: "Can you hear me?", AudioIngles: "" },
		{ Espanol: "¿Puedes pasarme tus notas?", AudioEspanol: "", Ingles: "Can you pass me your notes?", AudioIngles: "" },
		{ Espanol: "¿Puedes ver dónde está?", AudioEspanol: "", Ingles: "Can you see where it is?", AudioIngles: "" },
		{ Espanol: "¿Puedo esperar en tu carro?", AudioEspanol: "", Ingles: "Can I wait in your car?", AudioIngles: "" },
		{ Espanol: "¿Qué banda está cantando?", AudioEspanol: "", Ingles: "Which band is singing?", AudioIngles: "" },
		{ Espanol: "¿Qué es el premio?", AudioEspanol: "", Ingles: "What´s the prize?", AudioIngles: "" },
		{ Espanol: "¿Qué hay en la bolsa?", AudioEspanol: "", Ingles: "What´s in the bag?", AudioIngles: "" },
		{ Espanol: "¿Qué he hecho?", AudioEspanol: "", Ingles: "What did I do?", AudioIngles: "" },
		{ Espanol: "¿Qué recomienda el doctor?", AudioEspanol: "", Ingles: "What does the doctor recommend?", AudioIngles: "" },
		{ Espanol: "¿Qué te ha pasado?", AudioEspanol: "", Ingles: "What happened to you?", AudioIngles: "" },
		{ Espanol: "¿Quién está ganando?", AudioEspanol: "", Ingles: "Who is winning?", AudioIngles: "" },
		{ Espanol: "¿Quién está perdiendo?", AudioEspanol: "", Ingles: "Who is losing?", AudioIngles: "" },
		{ Espanol: "¿Quiénes son ellos?", AudioEspanol: "", Ingles: "Who are they?", AudioIngles: "" },
		{ Espanol: "¿Quiéres café?", AudioEspanol: "", Ingles: "Do you want coffee?", AudioIngles: "" },
		{ Espanol: "¿Quiéres decir algo?", AudioEspanol: "", Ingles: "Do you want to say something?", AudioIngles: "" },
		{ Espanol: "¿Quiéres helado?", AudioEspanol: "", Ingles: "Do you want ice cream?", AudioIngles: "" },
		{ Espanol: "¿Quiéres nadar conmigo?", AudioEspanol: "", Ingles: "Do you want to swim with me?", AudioIngles: "" },
		{ Espanol: "¿Quiéres un poco de pastel?", AudioEspanol: "", Ingles: "Do you want some cake?", AudioIngles: "" },
		{ Espanol: "¿Sabes dónde está este lugar?", AudioEspanol: "", Ingles: "Do you know where this place is?", AudioIngles: "" },
		{ Espanol: "¿Te acostaste?", AudioEspanol: "", Ingles: "Did you sleep?", AudioIngles: "" },
		{ Espanol: "¿Tienes mis cosas?", AudioEspanol: "", Ingles: "Do you have my stuff?", AudioIngles: "" },
		{ Espanol: "¿Tienes tu tarjeta?", AudioEspanol: "", Ingles: "Do you have your card?", AudioIngles: "" },
		{ Espanol: "¿Tienes una computadora?", AudioEspanol: "", Ingles: "Do you have a computer?", AudioIngles: "" },
		{ Espanol: "¿Todos saben el plan?", AudioEspanol: "", Ingles: "Does everybody know the plan?", AudioIngles: "" },
		{ Espanol: "¿Vives en la ciudad?", AudioEspanol: "", Ingles: "Do you live in the city?", AudioIngles: "" }
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
		{ Espanol: "Abre las cortinas", AudioEspanol: "", Ingles: "Open the curtains", AudioIngles: "" },
		{ Espanol: "Acabo de darme cuenta", AudioEspanol: "", Ingles: "I just realized", AudioIngles: "" },
		{ Espanol: "Ahora trabaja", AudioEspanol: "", Ingles: "It works now", AudioIngles: "" },
		{ Espanol: "Atrae a muchos turistas", AudioEspanol: "", Ingles: "It attracts many tourists", AudioIngles: "" },
		{ Espanol: "Ayúdame a limpiar esto", AudioEspanol: "", Ingles: "Help me clean this", AudioIngles: "" },
		{ Espanol: "Continúa mañana", AudioEspanol: "", Ingles: "It continues tomorrow", AudioIngles: "" },
		{ Espanol: "Deberíamos hacerlo otra vez", AudioEspanol: "", Ingles: "We should do it again", AudioIngles: "" },
		{ Espanol: "El invierno casi está aquí", AudioEspanol: "", Ingles: "Winter is almost here", AudioIngles: "" },
		{ Espanol: "Ellos no quieren decir", AudioEspanol: "", Ingles: "They don´t want to say", AudioIngles: "" },
		{ Espanol: "Ellos quieren visitar", AudioEspanol: "", Ingles: "They want to visit", AudioIngles: "" },
		{ Espanol: "Eres un buen artista", AudioEspanol: "", Ingles: "You´re a good artist", AudioIngles: "" },
		{ Espanol: "Es amargo(a)", AudioEspanol: "", Ingles: "It´s sour", AudioIngles: "" },
		{ Espanol: "Es complicado(a)", AudioEspanol: "", Ingles: "It´s complicated", AudioIngles: "" },
		{ Espanol: "Es el primer día del mes", AudioEspanol: "", Ingles: "It´s the first day of the month", AudioIngles: "" },
		{ Espanol: "Es lo mismo", AudioEspanol: "", Ingles: "It´s the same", AudioIngles: "" },
		{ Espanol: "Es mi sueño", AudioEspanol: "", Ingles: "It´s my dream", AudioIngles: "" },
		{ Espanol: "Es simple", AudioEspanol: "", Ingles: "It´s simple", AudioIngles: "" },
		{ Espanol: "Es trágico(a)", AudioEspanol: "", Ingles: "It´s tragic", AudioIngles: "" },
		{ Espanol: "Es un artículo interesante", AudioEspanol: "", Ingles: "It´s an interesting article", AudioIngles: "" },
		{ Espanol: "Es un buen argumento", AudioEspanol: "", Ingles: "It´s a good argument", AudioIngles: "" },
		{ Espanol: "Es un desastre", AudioEspanol: "", Ingles: "It´s a disaster", AudioIngles: "" },
		{ Espanol: "Es un poco diferente", AudioEspanol: "", Ingles: "It´s a little different", AudioIngles: "" },
		{ Espanol: "Es un viaje doméstico", AudioEspanol: "", Ingles: "It´s a domestic trip", AudioIngles: "" },
		{ Espanol: "Es un viaje internacional", AudioEspanol: "", Ingles: "It´s an international trip", AudioIngles: "" },
		{ Espanol: "Es una buena relación", AudioEspanol: "", Ingles: "It´s a good relationship", AudioIngles: "" },
		{ Espanol: "Es una hermosa estatua", AudioEspanol: "", Ingles: "It´s a beautiful statue", AudioIngles: "" },
		{ Espanol: "Es una hermosa fuente", AudioEspanol: "", Ingles: "It´s a beautiful fountain", AudioIngles: "" },
		{ Espanol: "Es viejo(a)", AudioEspanol: "", Ingles: "It´s old", AudioIngles: "" },
		{ Espanol: "Eso es estúpido", AudioEspanol: "", Ingles: "That´s stupid", AudioIngles: "" },
		{ Espanol: "Espero que te sientas mejor", AudioEspanol: "", Ingles: "I hope you feel better", AudioIngles: "" },
		{ Espanol: "Está cerca de aquí", AudioEspanol: "", Ingles: "It´s near here", AudioIngles: "" },
		{ Espanol: "Está en el centro", AudioEspanol: "", Ingles: "It´s in the center", AudioIngles: "" },
		{ Espanol: "Está lejos de aquí", AudioEspanol: "", Ingles: "It´s far from here", AudioIngles: "" },
		{ Espanol: "Está nevando mucho", AudioEspanol: "", Ingles: "It´s snowing a lot", AudioIngles: "" },
		{ Espanol: "Estamos acentando aplicaciones", AudioEspanol: "", Ingles: "We are accepting applications", AudioIngles: "" },
		{ Espanol: "Estamos comprando un árbol de navidad", AudioEspanol: "", Ingles: "We are buying a Christmas tree", AudioIngles: "" },
		{ Espanol: "Estamos en un bote", AudioEspanol: "", Ingles: "We are in a boat", AudioIngles: "" },
		{ Espanol: "Estamos trabajando juntos", AudioEspanol: "", Ingles: "We are working together", AudioIngles: "" },
		{ Espanol: "Estaré ahí en unas pocas horas", AudioEspanol: "", Ingles: "I will be there in a few hours", AudioIngles: "" },
		{ Espanol: "Esto no debería ocurrir", AudioEspanol: "", Ingles: "It should not happen", AudioIngles: "" },
		{ Espanol: "Esto sucede todos los días", AudioEspanol: "", Ingles: "This happens everyday", AudioIngles: "" },
		{ Espanol: "Estoy cualificado", AudioEspanol: "", Ingles: "I´m qualified", AudioIngles: "" },
		{ Espanol: "Estoy grabando", AudioEspanol: "", Ingles: "I´m recording", AudioIngles: "" },
		{ Espanol: "Estoy haciendo un video", AudioEspanol: "", Ingles: "I´m making a video", AudioIngles: "" },
		{ Espanol: "Estoy leyendo una revista", AudioEspanol: "", Ingles: "I´m reading a magazine", AudioIngles: "" },
		{ Espanol: "Fue memorable", AudioEspanol: "", Ingles: "It was memorable", AudioIngles: "" },
		{ Espanol: "Gracias por el cumplido", AudioEspanol: "", Ingles: "Thanks for the compliment", AudioIngles: "" },
		{ Espanol: "Hay mucha gente aquí", AudioEspanol: "", Ingles: "There are many people here", AudioIngles: "" },
		{ Espanol: "Hay muchas personas aquí", AudioEspanol: "", Ingles: "There are many people here", AudioIngles: "" },
		{ Espanol: "Huele bien", AudioEspanol: "", Ingles: "It smells good", AudioIngles: "" },
		{ Espanol: "Huele mal", AudioEspanol: "", Ingles: "It smells bad", AudioIngles: "" },
		{ Espanol: "Iré cuando haya menos gente", AudioEspanol: "", Ingles: "I´m going when there will be less people", AudioIngles: "" },
		{ Espanol: "La arquitectura es preciosa", AudioEspanol: "", Ingles: "The architecture is beautiful", AudioIngles: "" },
		{ Espanol: "La internet no funciona", AudioEspanol: "", Ingles: "The internet doesn´t work", AudioIngles: "" },
		{ Espanol: "La primavera está a punto de empezar", AudioEspanol: "", Ingles: "Spring is about to begin", AudioIngles: "" },
		{ Espanol: "La silla está sucia", AudioEspanol: "", Ingles: "The chair is dirty", AudioIngles: "" },
		{ Espanol: "La tienda está cerrando", AudioEspanol: "", Ingles: "The store is closing", AudioIngles: "" },
		{ Espanol: "Lo estoy anticipando", AudioEspanol: "", Ingles: "I´m anticipating it", AudioIngles: "" },
		{ Espanol: "Lo hice otra vez", AudioEspanol: "", Ingles: "I did it again", AudioIngles: "" },
		{ Espanol: "Lo hicieron recientemente", AudioEspanol: "", Ingles: "It was made recently", AudioIngles: "" },
		{ Espanol: "Lo recibiré hoy", AudioEspanol: "", Ingles: "I will receive it today", AudioIngles: "" },
		{ Espanol: "Me gusta el invierno", AudioEspanol: "", Ingles: "I like winter", AudioIngles: "" },
		{ Espanol: "Me gusta el verano", AudioEspanol: "", Ingles: "I like summer", AudioIngles: "" },
		{ Espanol: "Me gusta ir al parque", AudioEspanol: "", Ingles: "I like going to the park", AudioIngles: "" },
		{ Espanol: "Me siento enérgico(a)", AudioEspanol: "", Ingles: "I feel energetic", AudioIngles: "" },
		{ Espanol: "Mi computadora no funcionaba", AudioEspanol: "", Ingles: "My computer wasn´t working", AudioIngles: "" },
		{ Espanol: "Mi viaje fue cancelado", AudioEspanol: "", Ingles: "My trip was cancelled", AudioIngles: "" },
		{ Espanol: "Mis amigos están llegando", AudioEspanol: "", Ingles: "My friends are coming", AudioIngles: "" },
		{ Espanol: "Mis amigos están ocupados", AudioEspanol: "", Ingles: "My friends are busy", AudioIngles: "" },
		{ Espanol: "Mis amigos se están yendo", AudioEspanol: "", Ingles: "My friends are leaving", AudioIngles: "" },
		{ Espanol: "Mis padres están en el otro cuarto", AudioEspanol: "", Ingles: "My parents are in the other room", AudioIngles: "" },
		{ Espanol: "Mis padres no están aquí", AudioEspanol: "", Ingles: "My parents aren´t here", AudioIngles: "" },
		{ Espanol: "Mis vacaciones fueron maravillosas", AudioEspanol: "", Ingles: "My vacations were wonderful", AudioIngles: "" },
		{ Espanol: "Nada estoy diciendo", AudioEspanol: "", Ingles: "I´m saying nothing", AudioIngles: "" },
		{ Espanol: "Nadé", AudioEspanol: "", Ingles: "I swam", AudioIngles: "" },
		{ Espanol: "Nadie viene", AudioEspanol: "", Ingles: "Nobody is coming", AudioIngles: "" },
		{ Espanol: "Necesita baterías nuevas", AudioEspanol: "", Ingles: "It needs new batteries", AudioIngles: "" },
		{ Espanol: "Necesitamos más gente", AudioEspanol: "", Ingles: "We need more people", AudioIngles: "" },
		{ Espanol: "Necesitamos un mapa", AudioEspanol: "", Ingles: "We need a map", AudioIngles: "" },
		{ Espanol: "Necesito estirarme", AudioEspanol: "", Ingles: "I need to stretch myself", AudioIngles: "" },
		{ Espanol: "Necesito limpiar mi cama", AudioEspanol: "", Ingles: "I need to clean my bed", AudioIngles: "" },
		{ Espanol: "Necesito terminar algunos documentos", AudioEspanol: "", Ingles: "I need to finish some documents", AudioIngles: "" },
		{ Espanol: "Necesito una bolsa", AudioEspanol: "", Ingles: "I need a bag", AudioIngles: "" },
		{ Espanol: "No debemos ir ahí", AudioEspanol: "", Ingles: "We should not go there", AudioIngles: "" },
		{ Espanol: "No estoy estresado(a)", AudioEspanol: "", Ingles: "I´m not stressed", AudioIngles: "" },
		{ Espanol: "No hay electricidad", AudioEspanol: "", Ingles: "There is no electricity", AudioIngles: "" },
		{ Espanol: "No hay espacio", AudioEspanol: "", Ingles: "There is no room", AudioIngles: "" },
		{ Espanol: "No podemos ir", AudioEspanol: "", Ingles: "We can´t go", AudioIngles: "" },
		{ Espanol: "No pongas demasiado", AudioEspanol: "", Ingles: "Don´t put too much", AudioIngles: "" },
		{ Espanol: "No quiero que termine este día", AudioEspanol: "", Ingles: "I don´t want this day to end", AudioIngles: "" },
		{ Espanol: "No sé qué hacer", AudioEspanol: "", Ingles: "I don´t know what to do", AudioIngles: "" },
		{ Espanol: "No tengo un carro", AudioEspanol: "", Ingles: "I don´t have a car", AudioIngles: "" },
		{ Espanol: "No vamos", AudioEspanol: "", Ingles: "We are not going", AudioIngles: "" },
		{ Espanol: "Nos casaremos pronto", AudioEspanol: "", Ingles: "We are getting married soon", AudioIngles: "" },
		{ Espanol: "Nunca lo olvidaré", AudioEspanol: "", Ingles: "I will never forget it", AudioIngles: "" },
		{ Espanol: "Olvidé el nombre", AudioEspanol: "", Ingles: "I forgot the name", AudioIngles: "" },
		{ Espanol: "Pensaré en tu oferta", AudioEspanol: "", Ingles: "I will think about your offer", AudioIngles: "" },
		{ Espanol: "Perdí mi pasaporte", AudioEspanol: "", Ingles: "I lost my passport", AudioIngles: "" },
		{ Espanol: "Por favor describe", AudioEspanol: "", Ingles: "Please describe", AudioIngles: "" },
		{ Espanol: "Puede ocurrir", AudioEspanol: "", Ingles: "It might happen", AudioIngles: "" },
		{ Espanol: "Puse todo en la basura", AudioEspanol: "", Ingles: "I put everything in the trash", AudioIngles: "" },
		{ Espanol: "Queremos paz", AudioEspanol: "", Ingles: "We want peace", AudioIngles: "" },
		{ Espanol: "Quiero comer fruta", AudioEspanol: "", Ingles: "I want to eat fruit", AudioIngles: "" },
		{ Espanol: "Quiero ver una película esta noche", AudioEspanol: "", Ingles: "I want to watch a movie tonight", AudioIngles: "" },
		{ Espanol: "Recibí una carta", AudioEspanol: "", Ingles: "I received a letter", AudioIngles: "" },
		{ Espanol: "Será una sorpresa", AudioEspanol: "", Ingles: "It will be a surprise", AudioIngles: "" },
		{ Espanol: "Siempre lo recordaré", AudioEspanol: "", Ingles: "I will always remember it", AudioIngles: "" },
		{ Espanol: "Soy responsable aquí", AudioEspanol: "", Ingles: "I´m responsible here", AudioIngles: "" },
		{ Espanol: "Soy un(a) experto(a)", AudioEspanol: "", Ingles: "I´m an expert", AudioIngles: "" },
		{ Espanol: "Sucedió otra vez", AudioEspanol: "", Ingles: "It happened again", AudioIngles: "" },
		{ Espanol: "También a mí me pasó", AudioEspanol: "", Ingles: "It happened to me too", AudioIngles: "" },
		{ Espanol: "Te envié algo", AudioEspanol: "", Ingles: "I sent you something", AudioIngles: "" },
		{ Espanol: "Te llamaré cuando esté ahí", AudioEspanol: "", Ingles: "I will call you when I´m there", AudioIngles: "" },
		{ Espanol: "Te vez cansado(a)", AudioEspanol: "", Ingles: "You look tired", AudioIngles: "" },
		{ Espanol: "Tenemos una reunión familiar", AudioEspanol: "", Ingles: "We are having a family reunion", AudioIngles: "" },
		{ Espanol: "Tengo muchas fotos", AudioEspanol: "", Ingles: "I have many photos", AudioIngles: "" },
		{ Espanol: "Tengo mucho mensajes", AudioEspanol: "", Ingles: "I have many messages", AudioIngles: "" },
		{ Espanol: "Tengo que esperar pocas horas", AudioEspanol: "", Ingles: "I have to wait a few hours", AudioIngles: "" },
		{ Espanol: "Tengo todo preparado", AudioEspanol: "", Ingles: "I have everything prepared", AudioIngles: "" },
		{ Espanol: "Tengo una licencia", AudioEspanol: "", Ingles: "I have a license", AudioIngles: "" },
		{ Espanol: "Todos(as) están despiertos(as)", AudioEspanol: "", Ingles: "Eeryone is awake", AudioIngles: "" },
		{ Espanol: "Todos(as) están emocionados(as)", AudioEspanol: "", Ingles: "Everyone is excited", AudioIngles: "" },
		{ Espanol: "Todos(as) están estudiando para los exámenes", AudioEspanol: "", Ingles: "Everyone is studying for exams", AudioIngles: "" },
		{ Espanol: "Todos(as) piensan lo mismo", AudioEspanol: "", Ingles: "Everyone thinks the same", AudioIngles: "" },
		{ Espanol: "Todos(as) piensan que es bueno", AudioEspanol: "", Ingles: "Everyone thinks it´s good", AudioIngles: "" },
		{ Espanol: "Todos te están buscando", AudioEspanol: "", Ingles: "Everyone is looking for you", AudioIngles: "" },
		{ Espanol: "Toma un descanso", AudioEspanol: "", Ingles: "Take a rest", AudioIngles: "" },
		{ Espanol: "Trabajamos duro", AudioEspanol: "", Ingles: "We work hard", AudioIngles: "" },
		{ Espanol: "Tu casa es grande", AudioEspanol: "", Ingles: "Your house is big", AudioIngles: "" },
		{ Espanol: "Tus manos están frías", AudioEspanol: "", Ingles: "Your hands are cold", AudioIngles: "" },
		{ Espanol: "Únete a nosotros", AudioEspanol: "", Ingles: "Join us", AudioIngles: "" },
		{ Espanol: "Ve a dormir", AudioEspanol: "", Ingles: "Go to sleep", AudioIngles: "" },
		{ Espanol: "Vivo en una casa grande", AudioEspanol: "", Ingles: "I live in a big house", AudioIngles: "" },
		{ Espanol: "Vivo en una casa pequeña", AudioEspanol: "", Ingles: "I live in a small house", AudioIngles: "" },
		{ Espanol: "Voy a preguntar a alguien", AudioEspanol: "", Ingles: "I´m going to ask someone", AudioIngles: "" },
		{ Espanol: "¿A qué hora es tu cita?", AudioEspanol: "", Ingles: "What time is your appointment?", AudioIngles: "" },
		{ Espanol: "¿Alguien se lastimó?", AudioEspanol: "", Ingles: "Did someone get injured?", AudioIngles: "" },
		{ Espanol: "¿Cómo estuvieron tus vacaciones?", AudioEspanol: "", Ingles: "How were your vacations?", AudioIngles: "" },
		{ Espanol: "¿Cómo va tu negocio?", AudioEspanol: "", Ingles: "How is your business?", AudioIngles: "" },
		{ Espanol: "¿Crees que es bueno?", AudioEspanol: "", Ingles: "Do you think it´s good?", AudioIngles: "" },
		{ Espanol: "¿Cuál es el nombre de la capital?", AudioEspanol: "", Ingles: "What´s the name of the capitol?", AudioIngles: "" },
		{ Espanol: "¿Cuál es la distancia?", AudioEspanol: "", Ingles: "What´s the distance?", AudioIngles: "" },
		{ Espanol: "¿Cuál es tu apellido?", AudioEspanol: "", Ingles: "What´s your last name?", AudioIngles: "" },
		{ Espanol: "¿Cuál es tu sugerencia?", AudioEspanol: "", Ingles: "What´s your suggestion?", AudioIngles: "" },
		{ Espanol: "¿Cuándo lo hicieron?", AudioEspanol: "", Ingles: "When was it made?", AudioIngles: "" },
		{ Espanol: "¿Cuánto tiempo tienes?", AudioEspanol: "", Ingles: "How much time do you have?", AudioIngles: "" },
		{ Espanol: "¿Dónde está el azúcar?", AudioEspanol: "", Ingles: "Where is the sugar?", AudioIngles: "" },
		{ Espanol: "¿Dónde está el banco?", AudioEspanol: "", Ingles: "Where is the bank?", AudioIngles: "" },
		{ Espanol: "¿Dónde está la basura?", AudioEspanol: "", Ingles: "Where is the trash?", AudioIngles: "" },
		{ Espanol: "¿Dónde está la lámpara?", AudioEspanol: "", Ingles: "Where is the lamp?", AudioIngles: "" },
		{ Espanol: "¿Es lento(a)?", AudioEspanol: "", Ingles: "Is it slow?", AudioIngles: "" },
		{ Espanol: "¿Eso es necesario?", AudioEspanol: "", Ingles: "Is that necessary?", AudioIngles: "" },
		{ Espanol: "¿Es peligroso(a)?", AudioEspanol: "", Ingles: "Is it dangerous?", AudioIngles: "" },
		{ Espanol: "¿Es rápido(a)?", AudioEspanol: "", Ingles: "Is it fast?", AudioIngles: "" },
		{ Espanol: "¿Es seguro(a)?", AudioEspanol: "", Ingles: "Is it safe?", AudioIngles: "" },
		{ Espanol: "¿Está usted cualificado?", AudioEspanol: "", Ingles: "Are you qualified?", AudioIngles: "" },
		{ Espanol: "¿Estás despierto(a)?", AudioEspanol: "", Ingles: "Are you awake?", AudioIngles: "" },
		{ Espanol: "¿Estás listo(a) para salir?", AudioEspanol: "", Ingles: "Are you ready to leave?", AudioIngles: "" },
		{ Espanol: "¿Esto es?", AudioEspanol: "", Ingles: "Is it this?", AudioIngles: "" },
		{ Espanol: "¿Fuiste a la playa?", AudioEspanol: "", Ingles: "Did yo go to the beach?", AudioIngles: "" },
		{ Espanol: "¿Hay espacio?", AudioEspanol: "", Ingles: "Is there room?", AudioIngles: "" },
		{ Espanol: "¿Hay internet aquí?", AudioEspanol: "", Ingles: "Is there internet here?", AudioIngles: "" },
		{ Espanol: "¿Hay leche?", AudioEspanol: "", Ingles: "Is there milk?", AudioIngles: "" },
		{ Espanol: "¿Hay limones?", AudioEspanol: "", Ingles: "Are there lemons?", AudioIngles: "" },
		{ Espanol: "¿Me estás mirando?", AudioEspanol: "", Ingles: "Are you looking at me?", AudioIngles: "" },
		{ Espanol: "¿Necesitas alguna ayuda?", AudioEspanol: "", Ingles: "Do you need any help?", AudioIngles: "" },
		{ Espanol: "¿Puedes grabarlo?", AudioEspanol: "", Ingles: "Can you record it?", AudioIngles: "" },
		{ Espanol: "¿Puedes llamar al hotel?", AudioEspanol: "", Ingles: "Can you call the hotel?", AudioIngles: "" },
		{ Espanol: "¿Puedes pasar la sal?", AudioEspanol: "", Ingles: "Can you pass the salt?", AudioIngles: "" },
		{ Espanol: "¿Puedes sostener esto?", AudioEspanol: "", Ingles: "Can you hold this?", AudioIngles: "" },
		{ Espanol: "¿Puedes ver la diferencia?", AudioEspanol: "", Ingles: "Can you see the difference?", AudioIngles: "" },
		{ Espanol: "¿Puedo tener la cuenta?", AudioEspanol: "", Ingles: "Can I have the check?", AudioIngles: "" },
		{ Espanol: "¿Qué comiste?", AudioEspanol: "", Ingles: "What did you eat?", AudioIngles: "" },
		{ Espanol: "¿Qué debo cocinar esta noche?", AudioEspanol: "", Ingles: "What should I cook tonight?", AudioIngles: "" },
		{ Espanol: "¿Qué debo elegir?", AudioEspanol: "", Ingles: "What should I choose?", AudioIngles: "" },
		{ Espanol: "¿Qué debo estudiar?", AudioEspanol: "", Ingles: "What should I study?", AudioIngles: "" },
		{ Espanol: "¿Qué deportes juegas?", AudioEspanol: "", Ingles: "What sports do you play?", AudioIngles: "" },
		{ Espanol: "¿Qué dije?", AudioEspanol: "", Ingles: "What did I say?", AudioIngles: "" },
		{ Espanol: "¿Qué hacemos?", AudioEspanol: "", Ingles: "What do we do?", AudioIngles: "" },
		{ Espanol: "¿Qué hay en la caja?", AudioEspanol: "", Ingles: "What´s in the box?", AudioIngles: "" },
		{ Espanol: "¿Qué más harás?", AudioEspanol: "", Ingles: "What else will you do?", AudioIngles: "" },
		{ Espanol: "¿Qué película verás?", AudioEspanol: "", Ingles: "What movie will you see?", AudioIngles: "" },
		{ Espanol: "¿Qué querían ellos(as)?", AudioEspanol: "", Ingles: "What did they want?", AudioIngles: "" },
		{ Espanol: "¿Qué quieres cambiar?", AudioEspanol: "", Ingles: "What do you want to change?", AudioIngles: "" },
		{ Espanol: "¿Qué tipo de trabajo tienes?", AudioEspanol: "", Ingles: "What type of job do you have?", AudioIngles: "" },
		{ Espanol: "¿Qué vas a estudiar?", AudioEspanol: "", Ingles: "What will you study?", AudioIngles: "" },
		{ Espanol: "¿Quién es el propietario?", AudioEspanol: "", Ingles: "Who is the owner?", AudioIngles: "" },
		{ Espanol: "¿Quién es el responsable aquí?", AudioEspanol: "", Ingles: "Who is responsible here?", AudioIngles: "" },
		{ Espanol: "¿Quién es tu maestro(a)?", AudioEspanol: "", Ingles: "Who is your teacher?", AudioIngles: "" },
		{ Espanol: "¿Quién es un(a) experto?", AudioEspanol: "", Ingles: "Who is an expert?", AudioIngles: "" },
		{ Espanol: "¿Quién lo descubrió?", AudioEspanol: "", Ingles: "Who discovered it?", AudioIngles: "" },
		{ Espanol: "¿Quién murió?", AudioEspanol: "", Ingles: "Who died?", AudioIngles: "" },
		{ Espanol: "¿Quién te está enseñando?", AudioEspanol: "", Ingles: "Who is teaching you?", AudioIngles: "" },
		{ Espanol: "¿Quién te inspira?", AudioEspanol: "", Ingles: "Who inspires you?", AudioIngles: "" },
		{ Espanol: "¿Quién te llamó?", AudioEspanol: "", Ingles: "Who called you?", AudioIngles: "" },
		{ Espanol: "¿Quién tomó esta foto?", AudioEspanol: "", Ingles: "Who took this photo?", AudioIngles: "" },
		{ Espanol: "¿Te gustan los dramas?", AudioEspanol: "", Ingles: "Do you like dramas?", AudioIngles: "" },
		{ Espanol: "¿Te he visto antes?", AudioEspanol: "", Ingles: "Have I seen you before?", AudioIngles: "" },
		{ Espanol: "¿Tienes licencia?", AudioEspanol: "", Ingles: "Do you have a license?", AudioIngles: "" },
		{ Espanol: "¿Tienes vino?", AudioEspanol: "", Ingles: "Do you have wine?", AudioIngles: "" }
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