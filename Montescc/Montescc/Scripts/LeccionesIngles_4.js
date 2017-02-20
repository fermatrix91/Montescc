var appModulo = angular.module('inglesApp', []);

appModulo.controller('inglesController', ['$scope', '$sce', function ($scope, $sce) {
    $scope.NivelActual = $('#nivelActual').text();

    $('#cuadroInglesEspanol').css('background', '#d45151');
    $('#cuadroInglesEspanol').css('padding', '1px');

    NivelCuatro();

    function NivelCuatro() {
        $('#tabUno').removeClass('active');
        $('#paginaUno').removeClass('active');
        $('#tabDos').removeClass('active');
        $('#paginaDos').removeClass('active');
        $('#tabTres').removeClass('active');
        $('#paginaTres').removeClass('active');

        $('#tabCuatro').addClass('active');
        $('#paginaCuatro').removeClass('tab-pane');
        $('#paginaCuatro').removeClass('fade');
        $('#paginaCuatro').addClass('active');
        $('#paginaCuatro').css('display', 'block');

        $('#cuatroBTN').css('background-color', '#333');

        $scope.registroUnoIngles = [

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


        $('#divTablaCuatro').append('<section class="table" ng-controller="inglesController" class=""></section>');
        var tabla = $('#divTablaCuatro').children();

        $scope.registroUnoInglesD = [];

        for (var i = 0 ; i < $scope.registroUnoIngles.length ; i++) {
            var color = "white";
            if (i % 2 == 0)
                color = "#f5f5f5";

            $scope.registroUnoInglesD.push({
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