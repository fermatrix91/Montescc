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

            { Espanol: "No tengo tiempo", AudioEspanol: "/audio/ParteCuatro/02101NoTengoTiempo.mp3", Ingles: "I don´t have time", AudioIngles: "/audio/ParteCuatro/idonthavetime.mp3" },
            { Espanol: "Odio levantarme temprano", AudioEspanol: "/audio/ParteCuatro/02102OdioLevantarmeTemprano.mp3", Ingles: "I hate waking up early", AudioIngles: "/audio/ParteCuatro/iHateWakingUpEarly.mp3" },
            { Espanol: "Póngase cómodo(a)", AudioEspanol: "/audio/ParteCuatro/02103PongaseComodo.mp3", Ingles: "Make yourself comfortable", AudioIngles: "/audio/ParteCuatro/makeyourselfcomfortable.mp3" },
            { Espanol: "Practico cuando estoy libre", AudioEspanol: "/audio/ParteCuatro/02104PracticoCuandoEstoyLibre.mp3", Ingles: "I practice when I´m free", AudioIngles: "/audio/ParteCuatro/ipracticewhenamfree.mp3" },
            { Espanol: "Practico escuchando", AudioEspanol: "/audio/ParteCuatro/02105PracticoEscuchando.mp3", Ingles: "I practice by listening", AudioIngles: "/audio/ParteCuatro/ipracticebylistening.mp3" },
            { Espanol: "Pregúntame", AudioEspanol: "/audio/ParteCuatro/02106Preguntame.mp3", Ingles: "Ask me", AudioIngles: "/audio/ParteCuatro/askMe.mp3" },
            { Espanol: "Puedo escucharte", AudioEspanol: "/audio/ParteCuatro/02107PuedoEscucharte.mp3", Ingles: "I can hear you", AudioIngles: "/audio/ParteCuatro/icanhearyou.mp3" },
            { Espanol: "Puedo esperar", AudioEspanol: "/audio/ParteCuatro/02108PuedoEsperar.mp3", Ingles: "I can wait", AudioIngles: "/audio/ParteCuatro/iCantWait.mp3" },
            { Espanol: "Puedo explicar", AudioEspanol: "/audio/ParteCuatro/02109PuedoExplicar.mp3", Ingles: "I can explain", AudioIngles: "/audio/ParteCuatro/icanexplain.mp3" },
            { Espanol: "Puedo verte", AudioEspanol: "/audio/ParteCuatro/02110PuedoVerte.mp3", Ingles: "I can see you", AudioIngles: "/audio/ParteCuatro/icanseeyou.mp3" },
            { Espanol: "Quiero viajar", AudioEspanol: "/audio/ParteCuatro/02111QuieroViajar.mp3", Ingles: "I want to travel", AudioIngles: "/audio/ParteCuatro/iWantToTravel.mp3" },
            { Espanol: "Siempre duermo tarde", AudioEspanol: "/audio/ParteCuatro/02112SiempreDuermoTarde.mp3", Ingles: "I always sleep late", AudioIngles: "/audio/ParteCuatro/iAlwaysSleepLate.mp3" },
            { Espanol: "Siempre duermo temprano", AudioEspanol: "/audio/ParteCuatro/02113SiempreDuermoTemprano.mp3", Ingles: "I always sleep early", AudioIngles: "/audio/ParteCuatro/iAlwaysSleepEarly.mp3" },
            { Espanol: "Siempre llaman", AudioEspanol: "/audio/ParteCuatro/02114SiempreLlaman.mp3", Ingles: "They always call", AudioIngles: "/audio/ParteCuatro/theyAlwaysCall.mp3" },
            { Espanol: "Soy el(la) más joven", AudioEspanol: "/audio/ParteCuatro/02115SoyElMasJoven.mp3", Ingles: "I´m the youngest", AudioIngles: "/audio/ParteCuatro/amTheYoungest.mp3" },
            { Espanol: "Soy estudiante universitario(a)", AudioEspanol: "/audio/ParteCuatro/02116SoyEstudianteUniversitario.mp3", Ingles: "I´m a university student", AudioIngles: "/audio/ParteCuatro/amAnUniversityStudent.mp3" },
            { Espanol: "Soy soltero(a)", AudioEspanol: "/audio/ParteCuatro/02117SoySoltero.mp3", Ingles: "I´m single", AudioIngles: "/audio/ParteCuatro/amSingle.mp3" },
            { Espanol: "Soy tímido(a)", AudioEspanol: "/audio/ParteCuatro/02118SoyTimido.mp3", Ingles: "I´m shy", AudioIngles: "/audio/ParteCuatro/amShy.mp3" },
            { Espanol: "Sube el volumen", AudioEspanol: "/audio/ParteCuatro/02119SubeElVolumen.mp3", Ingles: "Turn the volume up", AudioIngles: "/audio/ParteCuatro/turnthevolumeup.mp3" },
            { Espanol: "Te gustará", AudioEspanol: "/audio/ParteCuatro/02120TeGustara.mp3", Ingles: "You will like it", AudioIngles: "/audio/ParteCuatro/youWillLikeIt.mp3" },
            { Espanol: "Te lo diré más tarde", AudioEspanol: "/audio/ParteCuatro/02121TeLoDireMasTarde.mp3", Ingles: "I´ll tell you later", AudioIngles: "/audio/ParteCuatro/illtellyoulater.mp3" },
            { Espanol: "Te voy a esperar", AudioEspanol: "/audio/ParteCuatro/02122TeVoyAEsperar.mp3", Ingles: "I´ll wait for you", AudioIngles: "/audio/ParteCuatro/illwaitforu.mp3" },
            { Espanol: "Tenemos una fiesta", AudioEspanol: "/audio/ParteCuatro/02123TenemosUnaFiesta.mp3", Ingles: "We are having a party", AudioIngles: "/audio/ParteCuatro/weAreHavingAParty.mp3" },
            { Espanol: "Tengo buenas noticias", AudioEspanol: "/audio/ParteCuatro/02124TengoBuenasNoticias.mp3", Ingles: "I have good news", AudioIngles: "/audio/ParteCuatro/ihavegoodnews.mp3" },
            { Espanol: "Tengo confianza", AudioEspanol: "/audio/ParteCuatro/02125TengoConfianza.mp3", Ingles: "I´m confident", AudioIngles: "/audio/ParteCuatro/amconfident.mp3" },
            { Espanol: "Tengo dinero", AudioEspanol: "/audio/ParteCuatro/02126TengoDinero.mp3", Ingles: "I have money", AudioIngles: "/audio/ParteCuatro/ihavemoney.mp3" },
            { Espanol: "Tengo problemas con la pronunciación", AudioEspanol: "/audio/ParteCuatro/02127TengoProblemasConLaPronunciacion.mp3", Ingles: "I have problems with the pronounciation", AudioIngles: "/audio/ParteCuatro/ihaveproblemswiththepronunciation.mp3" },
            { Espanol: "Tengo que pedir permiso", AudioEspanol: "/audio/ParteCuatro/02128TengoQuePedirPermiso.mp3", Ingles: "I have to ask for permission", AudioIngles: "/audio/ParteCuatro/iHaveToAskForPermission.mp3" },
            { Espanol: "Tengo tiempo", AudioEspanol: "/audio/ParteCuatro/02129TengoTiempo.mp3", Ingles: "I have time", AudioIngles: "/audio/ParteCuatro/ihavetime.mp3" },
            { Espanol: "Tengo un negocio", AudioEspanol: "/audio/ParteCuatro/02130TengoUnNegocio.mp3", Ingles: "I have a business", AudioIngles: "/audio/ParteCuatro/iHaveABusiness.mp3" },
            { Espanol: "Tengo una familia grande", AudioEspanol: "/audio/ParteCuatro/02131TengoUnaFamiliaGrande.mp3", Ingles: "I have a big family", AudioIngles: "/audio/ParteCuatro/iHaveABigFamily.mp3" },
            { Espanol: "Tengo una familia pequeña", AudioEspanol: "/audio/ParteCuatro/02132TengoUnaFamiliaPequeña.mp3", Ingles: "I have a small family", AudioIngles: "/audio/ParteCuatro/iHaveASmallFamily.mp3" },
            { Espanol: "Tiempo para celebrar", AudioEspanol: "/audio/ParteCuatro/02133TiempoParaCelebrar.mp3", Ingles: "Time to celebrate", AudioIngles: "/audio/ParteCuatro/timetocelebrate.mp3" },
            { Espanol: "Tienes mi apoyo", AudioEspanol: "/audio/ParteCuatro/02134TienesMiApoyo.mp3", Ingles: "You have my support", AudioIngles: "/audio/ParteCuatro/uhavemysupport.mp3" },
            { Espanol: "Tienes una hermosa casa", AudioEspanol: "/audio/ParteCuatro/02135TienesUnaHermosaCasa.mp3", Ingles: "You have a beautiful house", AudioIngles: "/audio/ParteCuatro/youhaveabeautifulhouse.mp3" },
            { Espanol: "Tienes una hermosa familia", AudioEspanol: "/audio/ParteCuatro/02136TienesUnaHermosaFamilia.mp3", Ingles: "You have a beautiful family", AudioIngles: "/audio/ParteCuatro/youHaveABeautifulFamily.mp3" },
            { Espanol: "Tienes unos hijos hermosos", AudioEspanol: "/audio/ParteCuatro/02137TienesUnosHijosHermosos.mp3", Ingles: "You have beautiful children", AudioIngles: "/audio/ParteCuatro/youHaveBeautifulChildren.mp3" },
            { Espanol: "Tomaré una ducha", AudioEspanol: "/audio/ParteCuatro/02138TomareUnaDucha.mp3", Ingles: "I´ll take a shower", AudioIngles: "/audio/ParteCuatro/illtakeashower.mp3" },
            { Espanol: "Tómate tu tiempo", AudioEspanol: "/audio/ParteCuatro/02139TomateTuTiempo.mp3", Ingles: "Take your time", AudioIngles: "/audio/ParteCuatro/takeyourtime.mp3" },
            { Espanol: "Tuve un sueño", AudioEspanol: "/audio/ParteCuatro/02140TuveUnSueño.mp3", Ingles: "I had a dream", AudioIngles: "/audio/ParteCuatro/ihadadream.mp3" },
            { Espanol: "Usted es bienvenido(a)", AudioEspanol: "/audio/ParteCuatro/02141UstedEsBienvenido.mp3", Ingles: "You´re welcome", AudioIngles: "/audio/ParteCuatro/youAreWelcomeToCome.mp3" },
            { Espanol: "Ven más tarde", AudioEspanol: "/audio/ParteCuatro/02142VenMasTarde.mp3", Ingles: "Come later", AudioIngles: "/audio/ParteCuatro/comeLater.mp3" },
            { Espanol: "Visítame", AudioEspanol: "/audio/ParteCuatro/02143Visitame.mp3", Ingles: "Visit me", AudioIngles: "/audio/ParteCuatro/visitMe.mp3" },
            { Espanol: "Vivo con mi familia", AudioEspanol: "/audio/ParteCuatro/02144VivoConMiFamilia.mp3", Ingles: "I live with my family", AudioIngles: "/audio/ParteCuatro/iLiveWithMyFamily.mp3" },
            { Espanol: "Vivo en un apartamento", AudioEspanol: "/audio/ParteCuatro/02145VivoEnUnApartamento.mp3", Ingles: "I live in an apartment", AudioIngles: "/audio/ParteCuatro/iLiveInAnApartment.mp3" },
            { Espanol: "Vivo en una casa", AudioEspanol: "/audio/ParteCuatro/02146VivoEnUnaCasa.mp3", Ingles: "I live in a house", AudioIngles: "/audio/ParteCuatro/iLiveInAHouse.mp3" },
            { Espanol: "Vivo solo(a)", AudioEspanol: "/audio/ParteCuatro/02147VivoSolo.mp3", Ingles: "I live alone", AudioIngles: "/audio/ParteCuatro/iLiveAlone.mp3" },
            { Espanol: "Yo lo escribiré", AudioEspanol: "/audio/ParteCuatro/02148YoLoEscribire.mp3", Ingles: "I´ll write it down", AudioIngles: "/audio/ParteCuatro/illwriteitdown.mp3" },
            { Espanol: "¿A qué hora despiertas?", AudioEspanol: "/audio/ParteCuatro/02149AQueHoraDespiertas.mp3", Ingles: "What time do you wake up?", AudioIngles: "/audio/ParteCuatro/whatTimeDoYouWakeUp.mp3" },
            { Espanol: "¿A qué hora estás libre?", AudioEspanol: "/audio/ParteCuatro/02150AQueHoraEstasLibre.mp3", Ingles: "What time are you free?", AudioIngles: "/audio/ParteCuatro/whattimeareyoufree.mp3" },
            { Espanol: "¿A qué hora vas a dormir?", AudioEspanol: "/audio/ParteCuatro/02151AQueHoraVasADormir.mp3", Ingles: "What time are you going to sleep?", AudioIngles: "/audio/ParteCuatro/whatTimeAreYouGoingToSleep.mp3" },
            { Espanol: "¿Buscas algo?", AudioEspanol: "/audio/ParteCuatro/02152BuscasAlgo.mp3", Ingles: "Are you looking for something?", AudioIngles: "/audio/ParteCuatro/areulookingforsomething.mp3" },
            { Espanol: "¿Cómo aprendes?", AudioEspanol: "/audio/ParteCuatro/02153ComoAprendes.mp3", Ingles: "How do you learn?", AudioIngles: "/audio/ParteCuatro/howdoulearn.mp3" },
            { Espanol: "¿Cómo es posible?", AudioEspanol: "/audio/ParteCuatro/02154ComoEsPosible.mp3", Ingles: "How is possible?", AudioIngles: "/audio/ParteCuatro/howisitpossible.mp3" },
            { Espanol: "¿Cómo está tu pronunciación?", AudioEspanol: "/audio/ParteCuatro/02155ComoEstaTuPronunciacion.mp3", Ingles: "How is your pronunciation?", AudioIngles: "/audio/ParteCuatro/howIsYourPronunciation.mp3" },
            { Espanol: "¿Cómo estuvo tu fin de semana?", AudioEspanol: "/audio/ParteCuatro/02156ComoEstuvoTuFinDeSemana.mp3", Ingles: "How was your weekend?", AudioIngles: "/audio/ParteCuatro/howwasyourweekend.mp3" },
            { Espanol: "¿Cómo fue?", AudioEspanol: "/audio/ParteCuatro/02157ComoFue.mp3", Ingles: "How was it?", AudioIngles: "/audio/ParteCuatro/howwasit.mp3" },
            { Espanol: "¿Cómo ha ocurrido?", AudioEspanol: "/audio/ParteCuatro/02158ComoHaOcurrido.mp3", Ingles: "How did it happen?", AudioIngles: "/audio/ParteCuatro/howdidithappen.mp3" },
            { Espanol: "¿Cómo lo haces?", AudioEspanol: "/audio/ParteCuatro/02159ComoLoHaces.mp3", Ingles: "How do you it?", AudioIngles: "/audio/ParteCuatro/howdoyoudoit.mp3" },
            { Espanol: "¿Con quién estás?", AudioEspanol: "/audio/ParteCuatro/02160ConQuienEstas.mp3", Ingles: "Who are you with?", AudioIngles: "/audio/ParteCuatro/whoAreYouWith.mp3" },
            { Espanol: "¿Cuál es tu banda favorita?", AudioEspanol: "/audio/ParteCuatro/02161CualEsTuBandaFavorita.mp3", Ingles: "Who´s your favorite band?", AudioIngles: "/audio/ParteCuatro/whosyourfavorteband.mp3" },
            { Espanol: "¿Cuál es?", AudioEspanol: "/audio/ParteCuatro/02162CualEs.mp3", Ingles: "Which is it?", AudioIngles: "/audio/ParteCuatro/whichIsIt.mp3" },
            { Espanol: "¿Cuáles son las opciones?", AudioEspanol: "/audio/ParteCuatro/02163CualesSonLasOpciones.mp3", Ingles: "What are the options?", AudioIngles: "/audio/ParteCuatro/whataretheoptions.mp3" },
            { Espanol: "¿Cuándo es la boda?", AudioEspanol: "/audio/ParteCuatro/02164CuandoEsLaBoda.mp3", Ingles: "When is the wedding?", AudioIngles: "/audio/ParteCuatro/whenIsTheWedding.mp3" },
            { Espanol: "¿De quién es?", AudioEspanol: "/audio/ParteCuatro/02165DeQuienEs.mp3", Ingles: "Whose is it?", AudioIngles: "/audio/ParteCuatro/whosIsIt.mp3" },
            { Espanol: "¿Dónde fuiste?", AudioEspanol: "/audio/ParteCuatro/02166DondeFuiste.mp3", Ingles: "Where did you go?", AudioIngles: "/audio/ParteCuatro/whereDidYouGo.mp3" },
            { Espanol: "¿Eres el(la) más joven?", AudioEspanol: "/audio/ParteCuatro/02167EresElMasJoven.mp3", Ingles: "Are you the youngest?", AudioIngles: "/audio/ParteCuatro/areYouTheYoungest.mp3" },
            { Espanol: "¿Eres estudiante universitario(a)?", AudioEspanol: "/audio/ParteCuatro/02168EresEstudianteUniversitario.mp3", Ingles: "Are you a university student?", AudioIngles: "/audio/ParteCuatro/areYouAnUniversityStudent.mp3" },
            { Espanol: "¿Eres soltero(a)?", AudioEspanol: "/audio/ParteCuatro/02169EresSoltero.mp3", Ingles: "Are you single?", AudioIngles: "/audio/ParteCuatro/areYouSingle.mp3" },
            { Espanol: "¿Es cierto?", AudioEspanol: "/audio/ParteCuatro/02170EsCierto.mp3", Ingles: "Is it true?", AudioIngles: "/audio/ParteCuatro/isItTrue.mp3" },
            { Espanol: "¿Es falso?", AudioEspanol: "/audio/ParteCuatro/02171EsFalso.mp3", Ingles: "Is it false?", AudioIngles: "/audio/ParteCuatro/isItFalse.mp3" },
            { Espanol: "¿Está lista la cena?", AudioEspanol: "/audio/ParteCuatro/02172EstaListaLaCena.mp3", Ingles: "Is dinner ready?", AudioIngles: "/audio/ParteCuatro/isDinnerReady.mp3" },
            { Espanol: "¿Estás aprendiendo inglés también?", AudioEspanol: "/audio/ParteCuatro/02173EstasAprendiendoInglesTambien.mp3", Ingles: "Are you learning English too?", AudioIngles: "/audio/ParteCuatro/areulearningenglishtoo.mp3" },
            { Espanol: "¿Estás listo(a)?", AudioEspanol: "/audio/ParteCuatro/02174EstasListo.mp3", Ingles: "Are you ready?", AudioIngles: "/audio/ParteCuatro/areuready.mp3" },
            { Espanol: "¿Estás seguro(a)?", AudioEspanol: "/audio/ParteCuatro/02175EstasSeguro.mp3", Ingles: "Are you sure?", AudioIngles: "/audio/ParteCuatro/areusure.mp3" },
            { Espanol: "¿Has aprendido algo?", AudioEspanol: "/audio/ParteCuatro/02176HasAprendidoAlgo.mp3", Ingles: "Did you learn something?", AudioIngles: "/audio/ParteCuatro/didulearnsomething.mp3" },
            { Espanol: "¿Has oído las noticias?", AudioEspanol: "/audio/ParteCuatro/02177HasOidoLasNoticias.mp3", Ingles: "Did you hear the news?", AudioIngles: "/audio/ParteCuatro/diduhearthenews.mp3" },
            { Espanol: "¿Hay buenas películas extranjeras para ver?", AudioEspanol: "/audio/ParteCuatro/02178HayBuenasPeliculasExtranjerasParaVer.mp3", Ingles: "What are good foreign films to watch?", AudioIngles: "/audio/ParteCuatro/whataregoodforeignfilmstowatch.mp3" },
            { Espanol: "¿Me puedes ayudar con esto?", AudioEspanol: "/audio/ParteCuatro/02179MePuedesAyudarConEsto.mp3", Ingles: "Can you help me with this?", AudioIngles: "/audio/ParteCuatro/canYouHelpMeWithThis.mp3" },
            { Espanol: "¿Puedes darme eso?", AudioEspanol: "/audio/ParteCuatro/02180PuedesDarmeEso.mp3", Ingles: "Can you give me that?", AudioIngles: "/audio/ParteCuatro/canYouGiveMeThat.mp3" },
            { Espanol: "¿Puedes recogerme?", AudioEspanol: "/audio/ParteCuatro/02181PuedesRecogerme.mp3", Ingles: "Can you pick me up?", AudioIngles: "/audio/ParteCuatro/canYouPickMeUp.mp3" },
            { Espanol: "¿Puedo hacerte una pregunta?", AudioEspanol: "/audio/ParteCuatro/02182PuedoHacerteUnaPregunta.mp3", Ingles: "Can I ask you a question?", AudioIngles: "/audio/ParteCuatro/canIAskYouAQuestion.mp3" },
            { Espanol: "¿Puedo tener tu atención?", AudioEspanol: "/audio/ParteCuatro/02183PuedoTenerTuAtencion.mp3", Ingles: "Can I have your attention?", AudioIngles: "/audio/ParteCuatro/canIHaverYourAttention.mp3" },
            { Espanol: "¿Puedo tener uno(a)?", AudioEspanol: "/audio/ParteCuatro/02184PuedoTenerUno.mp3", Ingles: "Can I have one?", AudioIngles: "/audio/ParteCuatro/canihaveone.mp3" },
            { Espanol: "¿Qué buscas?", AudioEspanol: "/audio/ParteCuatro/02185QueBuscas.mp3", Ingles: "What are you looking for?", AudioIngles: "/audio/ParteCuatro/whatAreYouLookingFor.mp3" },
            { Espanol: "¿Qué es ese ruido?", AudioEspanol: "/audio/ParteCuatro/02186QueEsEseRuido.mp3", Ingles: "What´s that noise?", AudioIngles: "/audio/ParteCuatro/whatIsThatNoice.mp3" },
            { Espanol: "¿Qué están haciendo ellos?", AudioEspanol: "/audio/ParteCuatro/02187QueEstanHaciendoEllos.mp3", Ingles: "What are they doing?", AudioIngles: "/audio/ParteCuatro/whatAreTheyDoing.mp3" },
            { Espanol: "¿Qué estás comprando?", AudioEspanol: "/audio/ParteCuatro/02188QueEstasComprando.mp3", Ingles: "What are you buying?", AudioIngles: "/audio/ParteCuatro/whaAreYouBuying.mp3" },
            { Espanol: "¿Qué estudiaste?", AudioEspanol: "/audio/ParteCuatro/02189QueEstudiaste.mp3", Ingles: "What did you study?", AudioIngles: "/audio/ParteCuatro/whatDidYouStudy.mp3" },
            { Espanol: "¿Qué harás mañana?", AudioEspanol: "/audio/ParteCuatro/02190QueHarasMañana.mp3", Ingles: "What are you doing tomorrow?", AudioIngles: "/audio/ParteCuatro/whatAreYouDoingTomorrow.mp3" },
            { Espanol: "¿Qué es lo nuevo?", AudioEspanol: "/audio/ParteCuatro/02191QueEsLoNuevo.mp3", Ingles: "What´s new?", AudioIngles: "/audio/ParteCuatro/whatsnew.mp3" },
            { Espanol: "¿Qué hora es ahí?", AudioEspanol: "/audio/ParteCuatro/02192QueHoraEsAhi.mp3", Ingles: "What time is it there?", AudioIngles: "/audio/ParteCuatro/whatTimeIsItThere.mp3" },
            { Espanol: "¿Qué necesitas?", AudioEspanol: "/audio/ParteCuatro/02193QueNecesitas.mp3", Ingles: "What do you need?", AudioIngles: "/audio/ParteCuatro/whatdouneed.mp3" },
            { Espanol: "¿Quién es tu cantante favorito(a)?", AudioEspanol: "/audio/ParteCuatro/02194QuienEsTuCantanteFavorito.mp3", Ingles: "Who´s your favorite singer?", AudioIngles: "/audio/ParteCuatro/whosyourfavoritesinger.mp3" },
            { Espanol: "¿Quién está aquí?", AudioEspanol: "/audio/ParteCuatro/02195QuienEstaAqui.mp3", Ingles: "Who´s here?", AudioIngles: "/audio/ParteCuatro/whoIsHere.mp3" },
            { Espanol: "¿Quién necesita ayuda?", AudioEspanol: "/audio/ParteCuatro/02196QuienNecesitaAyuda.mp3", Ingles: "Who needs help?", AudioIngles: "/audio/ParteCuatro/whoneedshelp.mp3" },
            { Espanol: "¿Quiéres hablar?", AudioEspanol: "/audio/ParteCuatro/02197QuieresHablar.mp3", Ingles: "Do you want to talk?", AudioIngles: "/audio/ParteCuatro/douwanttotalk.mp3" },
            { Espanol: "¿Sigues ahí?", AudioEspanol: "/audio/ParteCuatro/02198SiguesAhi.mp3", Ingles: "Are you still there?", AudioIngles: "/audio/ParteCuatro/areYouStillThere.mp3" },
            { Espanol: "¿Te enteraste de lo que pasó?", AudioEspanol: "/audio/ParteCuatro/02199TeEnterasteDeLoQuePaso.mp3", Ingles: "Did you hear about what happened?", AudioIngles: "/audio/ParteCuatro/diduhearaboutwhathappen.mp3" },
            { Espanol: "¿Tienes dinero?", AudioEspanol: "/audio/ParteCuatro/02200TienesDinero.mp3", Ingles: "Do you have money?", AudioIngles: "/audio/ParteCuatro/douhavemoney.mp3" }

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