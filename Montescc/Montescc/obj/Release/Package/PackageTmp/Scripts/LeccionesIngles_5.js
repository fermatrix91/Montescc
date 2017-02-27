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

           { Espanol: "Acabo de tomar una ducha", AudioEspanol: "/audio/ParteCinco/03001AcaboDeTomarUnaDucha.mp3", Ingles: "I just took a shower", AudioIngles: "/audio/ParteCinco/iJustTookAShower.mp3" },
            { Espanol: "Aquí estoy para ti", AudioEspanol: "/audio/ParteCinco/03002AquiEstoyParaTi.mp3", Ingles: "I´m here for you", AudioIngles: "/audio/ParteCinco/amHereForYou.mp3" },
            { Espanol: "Confío en ti", AudioEspanol: "/audio/ParteCinco/03003ConfioEnTi.mp3", Ingles: "I trust you", AudioIngles: "/audio/ParteCinco/iTrustYou.mp3" },
            { Espanol: "Dame tu opinión", AudioEspanol: "/audio/ParteCinco/03004DameTuOpinion.mp3", Ingles: "Give me your opinion", AudioIngles: "/audio/ParteCinco/giveYourOpinion.mp3" },
            { Espanol: "Dime algo interesante", AudioEspanol: "/audio/ParteCinco/03005DimeAlgoInteresante.mp3", Ingles: "Tell me something interesting", AudioIngles: "/audio/ParteCinco/tellMeSomethingInteresting.mp3" },
            { Espanol: "Dime cómo te sientes", AudioEspanol: "/audio/ParteCinco/03006DimeComoTeSientes.mp3", Ingles: "Tell me how you feel", AudioIngles: "/audio/ParteCinco/tellMeHowYouFeel.mp3" },
            { Espanol: "Dime la verdad", AudioEspanol: "/audio/ParteCinco/03007DimeLaVerdad.mp3", Ingles: "Tell me the truth", AudioIngles: "/audio/ParteCinco/tellMeTheThruth.mp3" },
            { Espanol: "Dime si necesitas algo", AudioEspanol: "/audio/ParteCinco/03008DimeSiNecesitasAlgo.mp3", Ingles: "Tell me if you need something", AudioIngles: "/audio/ParteCinco/tellMeIfYouNeedSomething.mp3" },
            { Espanol: "Ellos son amables", AudioEspanol: "/audio/ParteCinco/03009EllosSonAmables.mp3", Ingles: "They are friendly", AudioIngles: "/audio/ParteCinco/theyAreFriendly.mp3" },
            { Espanol: "En serio", AudioEspanol: "/audio/ParteCinco/03010EnSerio.mp3", Ingles: "I´m serious", AudioIngles: "/audio/ParteCinco/amSerious.mp3" },
            { Espanol: "Encontré el problema", AudioEspanol: "/audio/ParteCinco/03011EncontreElProblema.mp3", Ingles: "I found the problem", AudioIngles: "/audio/ParteCinco/iFoundTheProblem.mp3" },
            { Espanol: "Entiendo lo que dijiste", AudioEspanol: "/audio/ParteCinco/03012EntiendoLoQueDijiste.mp3", Ingles: "I understand what you said", AudioIngles: "/audio/ParteCinco/iUnderstandWhatYouSaid.mp3" },
            { Espanol: "Eres mi mejor amigo(a)", AudioEspanol: "/audio/ParteCinco/03013EresMiMejorAmigo.mp3", Ingles: "You´re my best friend", AudioIngles: "/audio/ParteCinco/youAreMyBestFriend.mp3" },
            { Espanol: "Es comprensible", AudioEspanol: "/audio/ParteCinco/03014EsComprensible.mp3", Ingles: "It´s understandable", AudioIngles: "/audio/ParteCinco/itsUnderstandable.mp3" },
            { Espanol: "Es imposible", AudioEspanol: "/audio/ParteCinco/03015EsImposible.mp3", Ingles: "It´s impossible", AudioIngles: "/audio/ParteCinco/itsImpossible.mp3" },
            { Espanol: "Es mi culpa", AudioEspanol: "/audio/ParteCinco/03016EsMiCulpa.mp3", Ingles: "It´s my fault", AudioIngles: "/audio/ParteCinco/itsMyFault.mp3" },
            { Espanol: "Es mi responsabilidad", AudioEspanol: "/audio/ParteCinco/03017EsMiResponsabilidad.mp3", Ingles: "It´s my responsibility", AudioIngles: "/audio/ParteCinco/itsMyResponsability.mp3" },
            { Espanol: "Es mi turno", AudioEspanol: "/audio/ParteCinco/03018EsMiTurno.mp3", Ingles: "It´s my turn", AudioIngles: "/audio/ParteCinco/itsMyTurn.mp3" },
            { Espanol: "Es misterioso(a)", AudioEspanol: "/audio/ParteCinco/03019EsMisterioso.mp3", Ingles: "It´s mysterious", AudioIngles: "/audio/ParteCinco/itsMisterious.mp3" },
            { Espanol: "Es muy hermoso(a)", AudioEspanol: "/audio/ParteCinco/03020EsMuyHermoso.mp3", Ingles: "It´s very beautiful", AudioIngles: "/audio/ParteCinco/itsVeryBeautiful.mp3" },
            { Espanol: "Es posible", AudioEspanol: "/audio/ParteCinco/03021EsPosible.mp3", Ingles: "It´s possible", AudioIngles: "/audio/ParteCinco/itsPossible.mp3" },
            { Espanol: "Es una buena historia", AudioEspanol: "/audio/ParteCinco/03022EsUnaBuenaHistoria.mp3", Ingles: "It´s a good story", AudioIngles: "/audio/ParteCinco/itsAGoodStory.mp3" },
            { Espanol: "Es una decisión difícil", AudioEspanol: "/audio/ParteCinco/03023EsUnaDecisionDificil.mp3", Ingles: "It´s a tough decision", AudioIngles: "/audio/ParteCinco/itsAToughDecision.mp3" },
            { Espanol: "Es una hermosa noche", AudioEspanol: "/audio/ParteCinco/03024EsUnaHermosaNoche.mp3", Ingles: "It´s a beautiful night", AudioIngles: "/audio/ParteCinco/itsABeautifulNight.mp3" },
            { Espanol: "Es una mala idea", AudioEspanol: "/audio/ParteCinco/03025EsUnaMalaIdea.mp3", Ingles: "It´s a bad idea", AudioIngles: "/audio/ParteCinco/itsABadIdea.mp3" },
            { Espanol: "Es una mentira", AudioEspanol: "/audio/ParteCinco/03026EsUnaMentira.mp3", Ingles: "It´s a lie", AudioIngles: "/audio/ParteCinco/itsALie.mp3" },
            { Espanol: "Es una oportunidad", AudioEspanol: "/audio/ParteCinco/03027EsUnaOportunidad.mp3", Ingles: "It´s an opportunity", AudioIngles: "/audio/ParteCinco/itsAnOpportunity.mp3" },
            { Espanol: "Es una pena", AudioEspanol: "/audio/ParteCinco/03028EsUnaPena.mp3", Ingles: "It´s a shame", AudioIngles: "/audio/ParteCinco/itsAShame.mp3" },
            { Espanol: "Está bloqueado(a)", AudioEspanol: "/audio/ParteCinco/03029EstaBloqueado.mp3", Ingles: "It´s blocked", AudioIngles: "/audio/ParteCinco/itsBlocked.mp3" },
            { Espanol: "Esta es buena información", AudioEspanol: "/audio/ParteCinco/03030EstaEsBuenaInformacion.mp3", Ingles: "This is good information", AudioIngles: "/audio/ParteCinco/thisIsGoodInformation.mp3" },
            { Espanol: "Está húmedo", AudioEspanol: "/audio/ParteCinco/03031EstaHumedo.mp3", Ingles: "It´s humid", AudioIngles: "/audio/ParteCinco/itsHumid.mp3" },
            { Espanol: "Está lloviendo", AudioEspanol: "/audio/ParteCinco/03032EstaLloviendo.mp3", Ingles: "It´s raining", AudioIngles: "/audio/ParteCinco/itsraining.mp3" },
            { Espanol: "Está ocupado", AudioEspanol: "/audio/ParteCinco/03033EstaOcupado.mp3", Ingles: "It´s occupied", AudioIngles: "/audio/ParteCinco/itsOccuped.mp3" },
            { Espanol: "Está por comenzar", AudioEspanol: "/audio/ParteCinco/03034EstaPorComenzar.mp3", Ingles: "It´s about to start", AudioIngles: "/audio/ParteCinco/itsAboutToStart.mp3" },
            { Espanol: "Está tomando mucho tiempo", AudioEspanol: "/audio/ParteCinco/03035EstaTomandoMuchoTiempo.mp3", Ingles: "It´s taking a long time", AudioIngles: "/audio/ParteCinco/itsTakingALongTime.mp3" },
            { Espanol: "Estás loco(a)", AudioEspanol: "/audio/ParteCinco/03036EstasLoco.mp3", Ingles: "You´re crazy", AudioIngles: "/audio/ParteCinco/youreCrazy.mp3" },
            { Espanol: "Este lugar es caro", AudioEspanol: "/audio/ParteCinco/03037EsteLugarEsCaro.mp3", Ingles: "This place is expensive", AudioIngles: "/audio/ParteCinco/thisPlaceIsExpensive.mp3" },
            { Espanol: "Estoy ahorrando dinero", AudioEspanol: "/audio/ParteCinco/03038EstoyAhorrandoDinero.mp3", Ingles: "I´m saving money", AudioIngles: "/audio/ParteCinco/amSavingMoney.mp3" },
            { Espanol: "Estoy cansado de tenerlo", AudioEspanol: "/audio/ParteCinco/03039EstoyCansadoDeTenerlo.mp3", Ingles: "I´m tired of having it", AudioIngles: "/audio/ParteCinco/amTiredOfHavingIt.mp3" },
            { Espanol: "Estoy de vacaciones", AudioEspanol: "/audio/ParteCinco/03040EstoyDeVacaciones.mp3", Ingles: "I´m on vacation", AudioIngles: "/audio/ParteCinco/amOnVacation.mp3" },
            { Espanol: "Estoy decidido(a)", AudioEspanol: "/audio/ParteCinco/03041EstoyDecidido.mp3", Ingles: "I´m determined", AudioIngles: "/audio/ParteCinco/amDetermined.mp3" },
            { Espanol: "Estoy desayunando", AudioEspanol: "/audio/ParteCinco/03042EstoyDesayunando.mp3", Ingles: "I´m eating breakfast", AudioIngles: "/audio/ParteCinco/amEatingBreakfast.mp3" },
            { Espanol: "Estoy en el aeropuerto", AudioEspanol: "/audio/ParteCinco/03043EstoyEnElAeropuerto.mp3", Ingles: "I´m at the airport", AudioIngles: "/audio/ParteCinco/amAtTheAirport.mp3" },
            { Espanol: "Estoy en el baño", AudioEspanol: "/audio/ParteCinco/03044EstoyEnElBano.mp3", Ingles: "I´m in the bathroom", AudioIngles: "/audio/ParteCinco/amInTheBathroom.mp3" },
            { Espanol: "Estoy en una situación difícil", AudioEspanol: "/audio/ParteCinco/03045EstoyEnUnaSituacionDificil.mp3", Ingles: "I´m in a tough situation", AudioIngles: "/audio/ParteCinco/amInAToughSituation.mp3" },
            { Espanol: "Estoy en vacaciones de verano", AudioEspanol: "/audio/ParteCinco/03046EstoyEnVacacionesDeVerano.mp3", Ingles: "I´m on summer vacation", AudioIngles: "/audio/ParteCinco/amOnSummerVacation.mp3" },
            { Espanol: "Estoy estudiando para un examen", AudioEspanol: "/audio/ParteCinco/03047EstoyEstudiandoParaUnExamen.mp3", Ingles: "I´m studying for an exam", AudioIngles: "/audio/ParteCinco/amStudyingForAnExam.mp3" },
            { Espanol: "Estoy feliz de estar aquí", AudioEspanol: "/audio/ParteCinco/03048EstoyFelizDeEstarAqui.mp3", Ingles: "I´m happy to be here", AudioIngles: "/audio/ParteCinco/amHappyToBeHere.mp3" },
            { Espanol: "Estoy haciendo lo que puedo", AudioEspanol: "/audio/ParteCinco/03049EstoyHaciendoLoQuePuedo.mp3", Ingles: "I´m doing what I can", AudioIngles: "/audio/ParteCinco/amDoingWhatICan.mp3" },
            { Espanol: "Estoy leyendo las noticias", AudioEspanol: "/audio/ParteCinco/03050EstoyLeyendoLasNoticias.mp3", Ingles: "I´m reading the news", AudioIngles: "/audio/ParteCinco/amReadingTheNews.mp3" },
            { Espanol: "Estoy libre en la tarde", AudioEspanol: "/audio/ParteCinco/03051EstoyLibreEnLaTarde.mp3", Ingles: "I´m free in the evening", AudioIngles: "/audio/ParteCinco/amFreeInTheEvening.mp3" },
            { Espanol: "Estoy tomando un descanso", AudioEspanol: "/audio/ParteCinco/03052EstoyTomandoUnDescanso.mp3", Ingles: "I´m taking a rest", AudioIngles: "/audio/ParteCinco/amTakingARest.mp3" },
            { Espanol: "Estoy trabajando duro", AudioEspanol: "/audio/ParteCinco/03053EstoyTrabajandoDuro.mp3", Ingles: "I´m working hard", AudioIngles: "/audio/ParteCinco/amWorkingHard.mp3" },
            { Espanol: "Estoy trabajando en un proyecto", AudioEspanol: "/audio/ParteCinco/03054EstoyTrabajandoEnUnProyecto.mp3", Ingles: "I´m working on a project", AudioIngles: "/audio/ParteCinco/amWorkingOnAProject.mp3" },
            { Espanol: "Estoy viendo el juego", AudioEspanol: "/audio/ParteCinco/03055EstoyViendoElJuego.mp3", Ingles: "I´m watching the game", AudioIngles: "/audio/ParteCinco/amWatchingTheGame.mp3" },
            { Espanol: "Estoy viendo un documental", AudioEspanol: "/audio/ParteCinco/03056EstoyViendoUnDocumental.mp3", Ingles: "I´m watching a documentary", AudioIngles: "/audio/ParteCinco/amWatchingADocumentary.mp3" },
            { Espanol: "Estoy viendo un video", AudioEspanol: "/audio/ParteCinco/03057EstoyViendoUnVideo.mp3", Ingles: "I´m watching a video", AudioIngles: "/audio/ParteCinco/amWatchingAVideo.mp3" },
            { Espanol: "Estoy visitando amigos", AudioEspanol: "/audio/ParteCinco/03058EstoyVisitandoAmigos.mp3", Ingles: "I´m visiting friends", AudioIngles: "/audio/ParteCinco/amVisitingFriends.mp3" },
            { Espanol: "Estuve aquí", AudioEspanol: "/audio/ParteCinco/03059EstuveAqui.mp3", Ingles: "I was here", AudioIngles: "/audio/ParteCinco/iWasHere.mp3" },
            { Espanol: "Estuve enfermo(a)", AudioEspanol: "/audio/ParteCinco/03060EstuveEnfermo.mp3", Ingles: "I was sick", AudioIngles: "/audio/ParteCinco/iWasSick.mp3" },
            { Espanol: "Hace tanto calor hoy", AudioEspanol: "/audio/ParteCinco/03061HaceTantoCalorHoy.mp3", Ingles: "It´s so hot today", AudioIngles: "/audio/ParteCinco/itsSoHotToday.mp3" },
            { Espanol: "Hace tanto frío hoy", AudioEspanol: "/audio/ParteCinco/03062HaceTantoFrioHoy.mp3", Ingles: "It´s so cold today", AudioIngles: "/audio/ParteCinco/itsSoColdToday.mp3" },
            { Espanol: "Haré una llamada", AudioEspanol: "/audio/ParteCinco/03063HareUnaLlamada.mp3", Ingles: "I will make a call", AudioIngles: "/audio/ParteCinco/iWillMakeACall.mp3" },
            { Espanol: "Hay tráfico", AudioEspanol: "/audio/ParteCinco/03064HayTrafico.mp3", Ingles: "There´s traffic", AudioIngles: "/audio/ParteCinco/thereIsTraffic.mp3" },
            { Espanol: "He estado ocupado(a)", AudioEspanol: "/audio/ParteCinco/03065HeEstadoOcupado.mp3", Ingles: "I have been busy", AudioIngles: "/audio/ParteCinco/iHaveBeenBusy.mp3" },
            { Espanol: "Llegaré tarde", AudioEspanol: "/audio/ParteCinco/03066LlegareTarde.mp3", Ingles: "I´m going to be late", AudioIngles: "/audio/ParteCinco/amGoingToBeLate.mp3" },
            { Espanol: "Me estoy preparando", AudioEspanol: "/audio/ParteCinco/03067MeEstoyPreparando.mp3", Ingles: "I´m getting ready", AudioIngles: "/audio/ParteCinco/amGettingReady.mp3" },
            { Espanol: "Me estoy quedando en un apartamento", AudioEspanol: "/audio/ParteCinco/03068MeEstoyQuedandoEnUnApartamento.mp3", Ingles: "I´m staying in an apartment", AudioIngles: "/audio/ParteCinco/amStayingInAnApartment.mp3" },
            { Espanol: "Me gusta tu honestidad", AudioEspanol: "/audio/ParteCinco/03069MeGustaTuHonestidad.mp3", Ingles: "I like your honesty", AudioIngles: "/audio/ParteCinco/iLikeYourHonesty.mp3" },
            { Espanol: "Me hiciste sentir mejor", AudioEspanol: "/audio/ParteCinco/03070MeHicisteSentirMejor.mp3", Ingles: "You made me feel better", AudioIngles: "/audio/ParteCinco/youMadeMeFeelBetter.mp3" },
            { Espanol: "Me interesa", AudioEspanol: "/audio/ParteCinco/03071MeInteresa.mp3", Ingles: "It interest me", AudioIngles: "/audio/ParteCinco/itInterestMe.mp3" },
            { Espanol: "Me olvidé", AudioEspanol: "/audio/ParteCinco/03072MeOlvide.mp3", Ingles: "I forgot", AudioIngles: "/audio/ParteCinco/iForgot.mp3" },
            { Espanol: "Mi cabello está desordenado", AudioEspanol: "/audio/ParteCinco/03073MiCabelloEstaDesordenado.mp3", Ingles: "My hair is messy", AudioIngles: "/audio/ParteCinco/myHairIsMessy.mp3" },
            { Espanol: "Mi cabello está mojado", AudioEspanol: "/audio/ParteCinco/03074MiCabelloEstaMojado.mp3", Ingles: "My hair is wet", AudioIngles: "/audio/ParteCinco/myHairIsWet.mp3" },
            { Espanol: "Mis padres están aquí", AudioEspanol: "/audio/ParteCinco/03075MisPadresEstanAqui.mp3", Ingles: "My parents are here", AudioIngles: "/audio/ParteCinco/myParentsAreHere.mp3" },
            { Espanol: "Mis padres están durmiendo", AudioEspanol: "/audio/ParteCinco/03076MisPadresEstanDurmiendo.mp3", Ingles: "My parents are sleeping", AudioIngles: "/audio/ParteCinco/myParentsAreSleeping.mp3" },
            { Espanol: "Nací aquí", AudioEspanol: "/audio/ParteCinco/03077NaciAqui.mp3", Ingles: "I was born here", AudioIngles: "/audio/ParteCinco/iWasBornHere.mp3" },
            { Espanol: "Nadie sabe", AudioEspanol: "/audio/ParteCinco/03078NadieSabe.mp3", Ingles: "Nobody knows", AudioIngles: "/audio/ParteCinco/nobodyKnows.mp3" },
            { Espanol: "Necesito dinero", AudioEspanol: "/audio/ParteCinco/03079NecesitoDinero.mp3", Ingles: "I need money", AudioIngles: "/audio/ParteCinco/iNeedMoney.mp3" },
            { Espanol: "Necesito espacio", AudioEspanol: "/audio/ParteCinco/03080NecesitoEspacio.mp3", Ingles: "I need space", AudioIngles: "/audio/ParteCinco/iNeedSpace.mp3" },
            { Espanol: "Necesito más información", AudioEspanol: "/audio/ParteCinco/03081NecesitoMasInformacion.mp3", Ingles: "I need more information", AudioIngles: "/audio/ParteCinco/iNeedMoreInformation.mp3" },
            { Espanol: "Necesito tomar una ducha", AudioEspanol: "/audio/ParteCinco/03082NecesitoTomarUnaDucha.mp3", Ingles: "I need to take a shower", AudioIngles: "/audio/ParteCinco/iNeedToTakeAShower.mp3" },
            { Espanol: "No es necesario preocuparse", AudioEspanol: "/audio/ParteCinco/03083NoEsNecesarioPreocuparse.mp3", Ingles: "No need to worry", AudioIngles: "/audio/ParteCinco/noNeedToWorry.mp3" },
            { Espanol: "No estamos seguros", AudioEspanol: "/audio/ParteCinco/03084NoEstamosSeguros.mp3", Ingles: "We are not sure", AudioIngles: "/audio/ParteCinco/weAreNotSure.mp3" },
            { Espanol: "No estoy listo(a)", AudioEspanol: "/audio/ParteCinco/03085NoEstoyListo.mp3", Ingles: "I´m not ready", AudioIngles: "/audio/ParteCinco/amNotReady.mp3" },
            { Espanol: "No fui afuera hoy", AudioEspanol: "/audio/ParteCinco/03086NoFuiAfueraHoy.mp3", Ingles: "I didn´t go outside today", AudioIngles: "/audio/ParteCinco/iDidnotGoOutsideToday.mp3" },
            { Espanol: "No hay comida", AudioEspanol: "/audio/ParteCinco/03087NoHayComida.mp3", Ingles: "There´s no food", AudioIngles: "/audio/ParteCinco/thereIsNotFood.mp3" },
            { Espanol: "No puedo decidir", AudioEspanol: "/audio/ParteCinco/03088NoPuedoDecidir.mp3", Ingles: "I can´t decide", AudioIngles: "/audio/ParteCinco/iCantDecide.mp3" },
            { Espanol: "No puedo ir mañana", AudioEspanol: "/audio/ParteCinco/03089NoPuedoIrManana.mp3", Ingles: "I can´t go tomorrow", AudioIngles: "/audio/ParteCinco/iCantGoTomorrow.mp3" },
            { Espanol: "No quiero hacerlo", AudioEspanol: "/audio/ParteCinco/03090NoQuieroHacerlo.mp3", Ingles: "I don´t want to do it", AudioIngles: "/audio/ParteCinco/iDontWantToDoIt.mp3" },
            { Espanol: "No soy de aquí", AudioEspanol: "/audio/ParteCinco/03091NoSoyDeAqui.mp3", Ingles: "I´m not from here", AudioIngles: "/audio/ParteCinco/amNotFromHere.mp3" },
            { Espanol: "No te conozco", AudioEspanol: "/audio/ParteCinco/03092NoTeConozco.mp3", Ingles: "I don´t know you", AudioIngles: "/audio/ParteCinco/iDontKnowYou.mp3" },
            { Espanol: "No tengo sueño", AudioEspanol: "/audio/ParteCinco/03093NoTengoSueno.mp3", Ingles: "I´m not sleepy", AudioIngles: "/audio/ParteCinco/amNotSleepy.mp3" },
            { Espanol: "Pagaré", AudioEspanol: "/audio/ParteCinco/03094Pagare.mp3", Ingles: "I will pay", AudioIngles: "/audio/ParteCinco/iWillPay.mp3" },
            { Espanol: "Podemos hacer esto", AudioEspanol: "/audio/ParteCinco/03095PodemosHacerEsto.mp3", Ingles: "We can do this", AudioIngles: "/audio/ParteCinco/weCanDoThis.mp3" },
            { Espanol: "Por favor, ayúdame", AudioEspanol: "/audio/ParteCinco/03096PorFavorAyudenme.mp3", Ingles: "Please, help me", AudioIngles: "/audio/ParteCinco/pleaseHelpMe.mp3" },
            { Espanol: "Por supuesto", AudioEspanol: "/audio/ParteCinco/03097PorSupuesto.mp3", Ingles: "Of course", AudioIngles: "/audio/ParteCinco/ofCourse.mp3" },
            { Espanol: "Practico inglés todos los días", AudioEspanol: "/audio/ParteCinco/03098PracticoInglesTodosLosDias.mp3", Ingles: "I practice English everyday", AudioIngles: "/audio/ParteCinco/iPracticeEnglishEveryDay.mp3" },
            { Espanol: "Prométeme", AudioEspanol: "/audio/ParteCinco/03099Prometeme.mp3", Ingles: "Promise me", AudioIngles: "/audio/ParteCinco/promiseMe.mp3" },
            { Espanol: "Qué desafortunado", AudioEspanol: "/audio/ParteCinco/03100QueDesafortunado.mp3", Ingles: "How unfortunate", AudioIngles: "/audio/ParteCinco/howUnfortuned.mp3" }

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