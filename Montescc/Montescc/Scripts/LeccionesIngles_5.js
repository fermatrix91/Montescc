var appModulo = angular.module('inglesApp', []);

appModulo.controller('inglesController', ['$scope', '$sce', function ($scope, $sce) {
    $scope.NivelActual = $('#nivelActual').text();

    $('#cuadroInglesEspanol').css('background', '#d45151');
    $('#cuadroInglesEspanol').css('padding', '1px');

    NivelCinco();

    function NivelCinco() {
        $('#tabUno').removeClass('active');
        $('#paginaUno').removeClass('active');
        $('#tabDos').removeClass('active');
        $('#paginaDos').removeClass('active');
        $('#tabTres').removeClass('active');
        $('#paginaTres').removeClass('active');
        $('#tabCuatro').removeClass('active');
        $('#paginaCuatro').removeClass('active');

        $('#tabCinco').addClass('active');
        $('#paginaCinco').removeClass('tab-pane');
        $('#paginaCinco').removeClass('fade');
        $('#paginaCinco').addClass('active');
        $('#paginaCinco').css('display', 'block');

        $('#cincoBTN').css('background-color', '#333');

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
            { Espanol: "Qué desafortunado", AudioEspanol: "/audio/nivelTres/03100QueDesafortunado.mp3", Ingles: "How unfortunate", AudioIngles: "/audio/videoTres/howUnfortuned.mp3" }

        ];


        $('#divTablaCinco').append('<section class="table" ng-controller="inglesController" class=""></section>');
        var tabla = $('#divTablaCinco').children();

        $scope.registroUnoInglesE = [];

        for (var i = 0 ; i < $scope.registroUnoIngles.length ; i++) {
            var color = "white";
            if (i % 2 == 0)
                color = "#f5f5f5";

            $scope.registroUnoInglesE   .push({
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