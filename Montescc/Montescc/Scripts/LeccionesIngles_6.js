var appModulo = angular.module('inglesApp', []);

appModulo.controller('inglesController', ['$scope', '$sce', function ($scope, $sce) {
    $scope.NivelActual = $('#nivelActual').text();

    $('#cuadroInglesEspanol').css('background', '#d45151');
    $('#cuadroInglesEspanol').css('padding', '1px');

    NivelSeis();

    function NivelSeis() {
        $('#tabUno').removeClass('active');
        $('#paginaUno').removeClass('active');
        $('#tabDos').removeClass('active');
        $('#paginaDos').removeClass('active');
        $('#tabTres').removeClass('active');
        $('#paginaTres').removeClass('active');
        $('#tabCuatro').removeClass('active');
        $('#paginaCuatro').removeClass('active');
        $('#tabCuatro').removeClass('active');
        $('#paginaCuatro').removeClass('active');

        $('#tabSeis').addClass('active');
        $('#paginaSeis').removeClass('tab-pane');
        $('#paginaSeis').removeClass('fade');
        $('#paginaSeis').addClass('active');
        $('#paginaSeis').css('display', 'block');

        $('#seisBTN').css('background-color', '#333');

        $scope.registroUnoIngles = [

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


        $('#divTablaSeis').append('<section class="table" ng-controller="inglesController" class=""></section>');
        var tabla = $('#divTablaSeis').children();

        $scope.registroUnoInglesF = [];

        for (var i = 0 ; i < $scope.registroUnoIngles.length ; i++) {
            var color = "white";
            if (i % 2 == 0)
                color = "#f5f5f5";

            $scope.registroUnoInglesF.push({
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