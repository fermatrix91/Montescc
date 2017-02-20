var appModulo = angular.module('inglesApp', []);

appModulo.controller('inglesController', ['$scope', '$sce', function ($scope, $sce) {
    $scope.NivelActual = $('#nivelActual').text();

    $('#cuadroInglesEspanol').css('background', '#d45151');
    $('#cuadroInglesEspanol').css('padding', '1px');

    NivelTres();

    function NivelTres() {
        $('#tabUno').removeClass('active');
        $('#paginaUno').removeClass('active');
        $('#tabDos').removeClass('active');
        $('#paginaDos').removeClass('active');

        $('#tabTres').addClass('active');
        $('#paginaTres').removeClass('tab-pane');
        $('#paginaTres').removeClass('fade');
        $('#paginaTres').addClass('active');
        $('#paginaTres').css('display', 'block');

        $('#tresBTN').css('background-color', '#333');

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
            { Espanol: "No tengo dinero", AudioEspanol: "/audio/nivelDos/02100NoTengoDinero.mp3", Ingles: "I don´t have money", AudioIngles: "/audio/videoDos/idonthavemoney.mp3" }

        ];


        $('#divTablaTres').append('<section class="table" ng-controller="inglesController" class=""></section>');
        var tabla = $('#divTablaTres').children();

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


}]);