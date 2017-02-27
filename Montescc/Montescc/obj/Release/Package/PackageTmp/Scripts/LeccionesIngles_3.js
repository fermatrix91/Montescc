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
            
            { Espanol: "Acabo de llegar a casa", AudioEspanol: "/audio/ParteTres/02001AcaboDeLlegarACasa.mp3", Ingles: "I just got home", AudioIngles: "/audio/ParteTres/ijustgothome.mp3" },
            { Espanol: "Agradezco tu ayuda", AudioEspanol: "/audio/ParteTres/02002AgradezcoTuAyuda.mp3", Ingles: "I appreciate your help", AudioIngles: "/audio/ParteTres/iAppreciateYourHelp.mp3" },
            { Espanol: "Alguien me está llamando", AudioEspanol: "/audio/ParteTres/02003AlguienMeEstaLlamando.mp3", Ingles: "Someone is calling me", AudioIngles: "/audio/ParteTres/someoneIsCallingMe.mp3" },
            { Espanol: "Aquí es de noche", AudioEspanol: "/audio/ParteTres/02004AquiEsDeNoche.mp3", Ingles: "It´s night here", AudioIngles: "/audio/ParteTres/itsNightHere.mp3" },
            { Espanol: "Aquí es medianoche", AudioEspanol: "/audio/ParteTres/02005AquiEsMedianoche.mp3", Ingles: "It´s midnight here", AudioIngles: "/audio/ParteTres/itsMidNightHere.mp3" },
            { Espanol: "Aquí estaré", AudioEspanol: "/audio/ParteTres/02006AquiEstare.mp3", Ingles: "I will be here", AudioIngles: "/audio/ParteTres/iWillBeHere.mp3" },
            { Espanol: "Aquí tienes", AudioEspanol: "/audio/ParteTres/02007AquiTienes.mp3", Ingles: "Here you go", AudioIngles: "/audio/ParteTres/hereYouGo.mp3" },
            { Espanol: "Baja el volumen", AudioEspanol: "/audio/ParteTres/02008BajaElVolumen.mp3", Ingles: "Turn the volume down", AudioIngles: "/audio/ParteTres/turnthevolumedown.mp3" },
            { Espanol: "Con nadie estoy", AudioEspanol: "/audio/ParteTres/02009ConNadieEstoy.mp3", Ingles: "I´m with nobody", AudioIngles: "/audio/ParteTres/amWithNobody.mp3" },
            { Espanol: "Dime cuando estés listo(a)", AudioEspanol: "/audio/ParteTres/02010DimeCuandoEstesListo.mp3", Ingles: "Tell me when you´re ready", AudioIngles: "/audio/ParteTres/tellmewhenureready.mp3" },
            { Espanol: "Dime más", AudioEspanol: "/audio/ParteTres/02011DimeMas.mp3", Ingles: "Tell me more", AudioIngles: "/audio/ParteTres/tellmemore.mp3" },
            { Espanol: "Dime si necesitas ayuda", AudioEspanol: "/audio/ParteTres/02012DimeSiNecesitasAyuda.mp3", Ingles: "Tell me if you need help", AudioIngles: "/audio/ParteTres/helpMeIfYouNeedHelp.mp3" },
            { Espanol: "Dormí como bebé", AudioEspanol: "/audio/ParteTres/02013DormiComoBebe.mp3", Ingles: "I slept like a baby", AudioIngles: "/audio/ParteTres/isleptlikeababy.mp3" },
            { Espanol: "Él es mi esposo", AudioEspanol: "/audio/ParteTres/02014ElEsMiEsposo.mp3", Ingles: "He´s my husband", AudioIngles: "/audio/ParteTres/heIsMyHusband.mp3" },
            { Espanol: "El inglés es difícil", AudioEspanol: "/audio/ParteTres/02015ElInglesEsDificil.mp3", Ingles: "English is difficult", AudioIngles: "/audio/ParteTres/englishisdifficult.mp3" },
            { Espanol: "El inglés es fácil", AudioEspanol: "/audio/ParteTres/02016ElInglesEsFacil.mp3", Ingles: "English is easy", AudioIngles: "/audio/ParteTres/englishiseasy.mp3" },
            { Espanol: "El teléfono está sonando", AudioEspanol: "/audio/ParteTres/02017ElTelefonoEstaSonando.mp3", Ingles: "The phone is ringing", AudioIngles: "/audio/ParteTres/thePhoneIsRinging.mp3" },
            { Espanol: "Ella es mi esposa", AudioEspanol: "/audio/ParteTres/02018EllaEsMiEsposa.mp3", Ingles: "She´s my wife", AudioIngles: "/audio/ParteTres/sheIsMyWife.mp3" },
            { Espanol: "Eres un(a) buen(a) maestro(a)", AudioEspanol: "/audio/ParteTres/02019EresUnBuenMaestro.mp3", Ingles: "You´re a good teacher", AudioIngles: "/audio/ParteTres/youAreAGoodTeacher.mp3" },
            { Espanol: "Es algo importante", AudioEspanol: "/audio/ParteTres/02020EsAlgoImportante.mp3", Ingles: "It´s something important", AudioIngles: "/audio/ParteTres/itsSomethingImportant.mp3" },
            { Espanol: "Es cierto", AudioEspanol: "/audio/ParteTres/02021EsCierto.mp3", Ingles: "It´s true", AudioIngles: "/audio/ParteTres/itstrue.mp3" },
            { Espanol: "Es emocionante", AudioEspanol: "/audio/ParteTres/02022EsEmocionante.mp3", Ingles: "It´s exciting", AudioIngles: "/audio/ParteTres/itsexciting.mp3" },
            { Espanol: "Es gracioso porque es cierto", AudioEspanol: "/audio/ParteTres/02023EsGraciosoPorqueEsCierto.mp3", Ingles: "It´s funny because it´s true", AudioIngles: "/audio/ParteTres/itsfunnybecauseitstrue.mp3" },
            { Espanol: "Es hora de alistarme", AudioEspanol: "/audio/ParteTres/02024EsHoraDeAlistarme.mp3", Ingles: "It´s time for me to get ready", AudioIngles: "/audio/ParteTres/itsTimeForMeToGetReady.mp3" },
            { Espanol: "Es hora de cenar", AudioEspanol: "/audio/ParteTres/02025EsHoraDeCenar.mp3", Ingles: "It´s time for dinner", AudioIngles: "/audio/ParteTres/itsTimeForDinner.mp3" },
            { Espanol: "Es hora de ir", AudioEspanol: "/audio/ParteTres/02026EsHoraDeIr.mp3", Ingles: "It´s time to leave", AudioIngles: "/audio/ParteTres/itsTimeToLeave.mp3" },
            { Espanol: "Es impresionante", AudioEspanol: "/audio/ParteTres/02027EsImpresionante.mp3", Ingles: "It´s awesome", AudioIngles: "/audio/ParteTres/itsawesome.mp3" },
            { Espanol: "Es inspirador(a)", AudioEspanol: "/audio/ParteTres/02028EsInspirador.mp3", Ingles: "It´s inspiring", AudioIngles: "/audio/ParteTres/itsinspiring.mp3" },
            { Espanol: "Es interesante", AudioEspanol: "/audio/ParteTres/02029EsInteresante.mp3", Ingles: "It´s interesting", AudioIngles: "/audio/ParteTres/itsinteresting.mp3" },
            { Espanol: "Es mío(a)", AudioEspanol: "/audio/ParteTres/02030EsMio.mp3", Ingles: "It´s mine", AudioIngles: "/audio/ParteTres/itsMine.mp3" },
            { Espanol: "Es muy útil", AudioEspanol: "/audio/ParteTres/02031EsMuyUtil.mp3", Ingles: "It´s very helpful", AudioIngles: "/audio/ParteTres/itsveryhelpful.mp3" },
            { Espanol: "Es normal", AudioEspanol: "/audio/ParteTres/02032EsNormal.mp3", Ingles: "It´s normal", AudioIngles: "/audio/ParteTres/itsnormal.mp3" },
            { Espanol: "Es ruidoso(a)", AudioEspanol: "/audio/ParteTres/02033EsRuidoso.mp3", Ingles: "It´s noisy", AudioIngles: "/audio/ParteTres/itsnoisy.mp3" },
            { Espanol: "Es terrible", AudioEspanol: "/audio/ParteTres/02034EsTerrible.mp3", Ingles: "It´s terrible", AudioIngles: "/audio/ParteTres/itsterrible.mp3" },
            { Espanol: "Es un buen trabajo", AudioEspanol: "/audio/ParteTres/02035EsUnBuenTrabajo.mp3", Ingles: "It´s a good job", AudioIngles: "/audio/ParteTres/itsAGoodJob.mp3" },
            { Espanol: "Es un error", AudioEspanol: "/audio/ParteTres/02036EsUnError.mp3", Ingles: "It´s a mistake", AudioIngles: "/audio/ParteTres/itsamistake.mp3" },
            { Espanol: "Es un milagro", AudioEspanol: "/audio/ParteTres/02037EsUnMilagro.mp3", Ingles: "It´s a miracle", AudioIngles: "/audio/ParteTres/itsamiracle.mp3" },
            { Espanol: "Es un secreto", AudioEspanol: "/audio/ParteTres/02038EsUnSecreto.mp3", Ingles: "It´s a secret", AudioIngles: "/audio/ParteTres/itsasecret.mp3" },
            { Espanol: "Espérame", AudioEspanol: "/audio/ParteTres/02039Esperame.mp3", Ingles: "Wait for me", AudioIngles: "/audio/ParteTres/waitforme.mp3" },
            { Espanol: "Espero verte pronto", AudioEspanol: "/audio/ParteTres/02040EsperoVertePronto.mp3", Ingles: "I hope to see you soon", AudioIngles: "/audio/ParteTres/ihopetoseeyousoon.mp3" },
            { Espanol: "Está callado(a)", AudioEspanol: "/audio/ParteTres/02041EstaCallado.mp3", Ingles: "It´s quiet", AudioIngles: "/audio/ParteTres/itsquiet.mp3" },
            { Espanol: "Está funcionando", AudioEspanol: "/audio/ParteTres/02042EstaFuncionando.mp3", Ingles: "It´s working", AudioIngles: "/audio/ParteTres/itsworking.mp3" },
            { Espanol: "Está mejor", AudioEspanol: "/audio/ParteTres/02043EstaMejor.mp3", Ingles: "It´s better", AudioIngles: "/audio/ParteTres/itsbetter.mp3" },
            { Espanol: "Está oscuro", AudioEspanol: "/audio/ParteTres/02044EstaOscuro.mp3", Ingles: "It´s dark", AudioIngles: "/audio/ParteTres/itsDark.mp3" },
            { Espanol: "Está peor", AudioEspanol: "/audio/ParteTres/02045EstaPeor.mp3", Ingles: "It´s worse", AudioIngles: "/audio/ParteTres/itsworse.mp3" },
            { Espanol: "Estaba pensando en ti", AudioEspanol: "/audio/ParteTres/02046EstabaPensandoEnTi.mp3", Ingles: "I was thinking of you", AudioIngles: "/audio/ParteTres/iwasthinkingofyou.mp3" },
            { Espanol: "Están todos callados", AudioEspanol: "/audio/ParteTres/02047EstanTodosCallados.mp3", Ingles: "Everyone is quiet", AudioIngles: "/audio/ParteTres/everyoneIsQuiet.mp3" },
            { Espanol: "Estos son mis hijos", AudioEspanol: "/audio/ParteTres/02048EstonSonMisHijos.mp3", Ingles: "These are my children", AudioIngles: "/audio/ParteTres/theseAreMyChildren.mp3" },
            { Espanol: "Estoy aburrido(a)", AudioEspanol: "/audio/ParteTres/02049EstoyAburrido.mp3", Ingles: "I´m bored", AudioIngles: "/audio/ParteTres/amBored.mp3" },
            { Espanol: "Estoy aquí", AudioEspanol: "/audio/ParteTres/02050EstoyAqui.mp3", Ingles: "I´m here", AudioIngles: "/audio/ParteTres/amhere.mp3" },
            { Espanol: "Estoy aquí para ayudar", AudioEspanol: "/audio/ParteTres/02051EstoyAquiParaAyudar.mp3", Ingles: "I´m here to help", AudioIngles: "/audio/ParteTres/amheretohelp.mp3" },
            { Espanol: "Estoy casado(a)", AudioEspanol: "/audio/ParteTres/02052EstoyCasado.mp3", Ingles: "I´m married", AudioIngles: "/audio/ParteTres/amMarried.mp3" },
            { Espanol: "Estoy cerca", AudioEspanol: "/audio/ParteTres/02053EstoyCerca.mp3", Ingles: "I´m close", AudioIngles: "/audio/ParteTres/amClose.mp3" },
            { Espanol: "Estoy comprometido(a)", AudioEspanol: "/audio/ParteTres/02054EstoyComprometido.mp3", Ingles: "I´m engaged", AudioIngles: "/audio/ParteTres/amEngaged.mp3" },
            { Espanol: "Estoy en el camino", AudioEspanol: "/audio/ParteTres/02055EstoyEnElCamino.mp3", Ingles: "I´m on the way", AudioIngles: "/audio/ParteTres/amOnTheWay.mp3" },
            { Espanol: "Estoy en mi cama", AudioEspanol: "/audio/ParteTres/02056EstoyEnMiCama.mp3", Ingles: "I´m on my bed", AudioIngles: "/audio/ParteTres/amOnMyBed.mp3" },
            { Espanol: "Estoy en mi carro", AudioEspanol: "/audio/ParteTres/02057EstoyEnMiCarro.mp3", Ingles: "I´m in my car", AudioIngles: "/audio/ParteTres/amInMyCar.mp3" },
            { Espanol: "Estoy en problemas", AudioEspanol: "/audio/ParteTres/02058EstoyEnProblemas.mp3", Ingles: "I´m in trouble", AudioIngles: "/audio/ParteTres/amintrouble.mp3" },
            { Espanol: "Estoy estudiando en este momento", AudioEspanol: "/audio/ParteTres/02059EstoyEstudiandoEnEsteMomento.mp3", Ingles: "I´m studying right now", AudioIngles: "/audio/ParteTres/amstudyingrightnow.mp3" },
            { Espanol: "Estoy feliz de verte", AudioEspanol: "/audio/ParteTres/02060EstoyFelizDeVerte.mp3", Ingles: "I´m happy to see you", AudioIngles: "/audio/ParteTres/amHappyToSeeYou.mp3" },
            { Espanol: "Estoy feliz por ti", AudioEspanol: "/audio/ParteTres/02061EstoyFelizPorTi.mp3", Ingles: "I´m happy for you", AudioIngles: "/audio/ParteTres/amhappyforyou.mp3" },
            { Espanol: "Estoy haciendo lo mismo", AudioEspanol: "/audio/ParteTres/02062EstoyHaciendoLoMismo.mp3", Ingles: "I´m doing the same", AudioIngles: "/audio/ParteTres/amdoingthesame.mp3" },
            { Espanol: "Estoy haciendo planes", AudioEspanol: "/audio/ParteTres/02063EstoyHaciendoPlanes.mp3", Ingles: "I´m making plans", AudioIngles: "/audio/ParteTres/ammakingplans.mp3" },
            { Espanol: "Estoy lejos", AudioEspanol: "/audio/ParteTres/02064EstoyLejos.mp3", Ingles: "I´m far", AudioIngles: "/audio/ParteTres/amFar.mp3" },
            { Espanol: "Estoy libre este fin de semana", AudioEspanol: "/audio/ParteTres/02065EstoyLibreEsteFinDeSemana.mp3", Ingles: "I´m free this weekend", AudioIngles: "/audio/ParteTres/amfreethisweekend.mp3" },
            { Espanol: "Estoy listo(a)", AudioEspanol: "/audio/ParteTres/02066EstoyListo.mp3", Ingles: "I´m ready", AudioIngles: "/audio/ParteTres/amready.mp3" },
            { Espanol: "Estoy ocupado(a) con la escuela", AudioEspanol: "/audio/ParteTres/02067EstoyOcupadoConLaEscuela.mp3", Ingles: "I´m busy with school", AudioIngles: "/audio/ParteTres/ambusywithschool.mp3" },
            { Espanol: "Estoy practicando inglés", AudioEspanol: "/audio/ParteTres/02068EstoyPracticandoIngles.mp3", Ingles: "I´m practicing English", AudioIngles: "/audio/ParteTres/amPracticingEnglish.mp3" },
            { Espanol: "Estoy seguro(a)", AudioEspanol: "/audio/ParteTres/02069EstoySeguro.mp3", Ingles: "I´m sure", AudioIngles: "/audio/ParteTres/amsure.mp3" },
            { Espanol: "Estoy solo(a) en casa", AudioEspanol: "/audio/ParteTres/02070EstoySoloEnCasa.mp3", Ingles: "I´m home alone", AudioIngles: "/audio/ParteTres/amhomealone.mp3" },
            { Espanol: "Explica esto", AudioEspanol: "/audio/ParteTres/02071ExplicaEsto.mp3", Ingles: "Explain this", AudioIngles: "/audio/ParteTres/explainthis.mp3" },
            { Espanol: "Felicidades", AudioEspanol: "/audio/ParteTres/02072Felicidades.mp3", Ingles: "Congratulations", AudioIngles: "/audio/ParteTres/congratulations.mp3" },
            { Espanol: "Fue un accidente", AudioEspanol: "/audio/ParteTres/02073FueUnAccidente.mp3", Ingles: "It was an accident", AudioIngles: "/audio/ParteTres/itWasAnAccident.mp3" },
            { Espanol: "Gracias por tu apoyo", AudioEspanol: "/audio/ParteTres/02074GraciasPorTuApoyo.mp3", Ingles: "Thanks for your support", AudioIngles: "/audio/ParteTres/thanksforyoursupport.mp3" },
            { Espanol: "Gracias por tu hospitalidad", AudioEspanol: "/audio/ParteTres/02075GraciasPorTuHospitalidad.mp3", Ingles: "Thanks for your hospitality", AudioIngles: "/audio/ParteTres/thanksforyourhospitality.mp3" },
            { Espanol: "Hora de dormir", AudioEspanol: "/audio/ParteTres/02076HoraDeDormir.mp3", Ingles: "Time to sleep", AudioIngles: "/audio/ParteTres/timeToSleep.mp3" },
            { Espanol: "Hoy estoy libre", AudioEspanol: "/audio/ParteTres/02077HoyEstoyLibre.mp3", Ingles: "I´m free today", AudioIngles: "/audio/ParteTres/amFreeToday.mp3" },
            { Espanol: "Hoy fue un día de locura", AudioEspanol: "/audio/ParteTres/02078HoyFueUnDiaDeLocura.mp3", Ingles: "Today was a crazy day", AudioIngles: "/audio/ParteTres/todaywasacrazyday.mp3" },
            { Espanol: "La cena está casi lista", AudioEspanol: "/audio/ParteTres/02079LaCenaCasiEstaLista.mp3", Ingles: "Dinner is almost ready", AudioIngles: "/audio/ParteTres/dinnerIsAlmostReady.mp3" },
            { Espanol: "Le pasa a todo mundo", AudioEspanol: "/audio/ParteTres/02080LePasaATodoMundo.mp3", Ingles: "It happens to everyone", AudioIngles: "/audio/ParteTres/ithappentoeveryone.mp3" },
            { Espanol: "Me encanta aprender idiomas", AudioEspanol: "/audio/ParteTres/02081MeEncantaAprenderIdiomas.mp3", Ingles: "I love learning languages", AudioIngles: "/audio/ParteTres/iLoveLearningLanguages.mp3" },
            { Espanol: "Me gusta aprender sobre diferentes culturas", AudioEspanol: "/audio/ParteTres/02082MeGustaAprenderSobreDiferentesCulturas.mp3", Ingles: "I like learning about different cultures", AudioIngles: "/audio/ParteTres/ilikelearningaboutdifferentcultures.mp3" },
            { Espanol: "Me gusta cómo piensas", AudioEspanol: "/audio/ParteTres/02083MeGustaComoPiensas.mp3", Ingles: "I like how you think", AudioIngles: "/audio/ParteTres/ilikehowuthink.mp3" },
            { Espanol: "Me gusta este lugar", AudioEspanol: "/audio/ParteTres/02084MeGustaEsteLugar.mp3", Ingles: "I like this place", AudioIngles: "/audio/ParteTres/iLikeThisPlace.mp3" },
            { Espanol: "Me levanto tarde", AudioEspanol: "/audio/ParteTres/02085MeLevantoTarde.mp3", Ingles: "I wake up late", AudioIngles: "/audio/ParteTres/iWakeUpLate.mp3" },
            { Espanol: "Me levanto temprano", AudioEspanol: "/audio/ParteTres/02086MeLevantoTemprano.mp3", Ingles: "I wake up early", AudioIngles: "/audio/ParteTres/iWakeUpEarly.mp3" },
            { Espanol: "Mi banda favorita es...", AudioEspanol: "/audio/ParteTres/02087MiBandaFavoritaEs.mp3", Ingles: "My favorite band is...", AudioIngles: "/audio/ParteTres/myfavoritebandis.mp3" },
            { Espanol: "Mi cantante favorito(a) es...", AudioEspanol: "/audio/ParteTres/02088MiCantanteFavoritoEs.mp3", Ingles: "My favorite singer is...", AudioIngles: "/audio/ParteTres/myfavoritesingeris.mp3" },
            { Espanol: "Mi internet es lenta", AudioEspanol: "/audio/ParteTres/02089MiInternetEsLenta.mp3", Ingles: "I have slow internet", AudioIngles: "/audio/ParteTres/iHaveSlowInternet.mp3" },
            { Espanol: "Mi pronunciación necesita práctica", AudioEspanol: "/audio/ParteTres/02090MiPronunciacionNecesitaPractica.mp3", Ingles: "My pronunciation needs practice", AudioIngles: "/audio/ParteTres/mypronunciationneedpractice.mp3" },
            { Espanol: "Nada pasó", AudioEspanol: "/audio/ParteTres/02091NadaPaso.mp3", Ingles: "Nothing happened", AudioIngles: "/audio/ParteTres/nothingHappened.mp3" },
            { Espanol: "Nadie era", AudioEspanol: "/audio/ParteTres/02092NadieEra.mp3", Ingles: "It was nobody", AudioIngles: "/audio/ParteTres/itWasNobody.mp3" },
            { Espanol: "Necesito ayuda con el inglés", AudioEspanol: "/audio/ParteTres/02093NecesitoAyudaConElIngles.mp3", Ingles: "I need help with English", AudioIngles: "/audio/ParteTres/iNeedHelpWithEnglish.mp3" },
            { Espanol: "Necesito descansar", AudioEspanol: "/audio/ParteTres/02094NecesitoDescansar.mp3", Ingles: "I need to rest", AudioIngles: "/audio/ParteTres/ineedtorest.mp3" },
            { Espanol: "No está funcionando", AudioEspanol: "/audio/ParteTres/02095NoEstaFuncionando.mp3", Ingles: "It´s not working", AudioIngles: "/audio/ParteTres/itsnotworking.mp3" },
            { Espanol: "No puedo en este momento", AudioEspanol: "/audio/ParteTres/02096NoPuedoEnEsteMomento.mp3", Ingles: "I can´t right now", AudioIngles: "/audio/ParteTres/icantrightnow.mp3" },
            { Espanol: "No puedo encontrarte", AudioEspanol: "/audio/ParteTres/02097NoPuedoEncontrarte.mp3", Ingles: "I can´t find you", AudioIngles: "/audio/ParteTres/iCantFindYou.mp3" },
            { Espanol: "No puedo ir hoy", AudioEspanol: "/audio/ParteTres/02098NoPuedoIrHoy.mp3", Ingles: "I can´t go today", AudioIngles: "/audio/ParteTres/iCantGoToday.mp3" },
            { Espanol: "No te preocupes", AudioEspanol: "/audio/ParteTres/02099NoTePreocupes.mp3", Ingles: "Don´t worry", AudioIngles: "/audio/ParteTres/dontWorry.mp3" },
            { Espanol: "No tengo dinero", AudioEspanol: "/audio/ParteTres/02100NoTengoDinero.mp3", Ingles: "I don´t have money", AudioIngles: "/audio/ParteTres/idonthavemoney.mp3" }

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