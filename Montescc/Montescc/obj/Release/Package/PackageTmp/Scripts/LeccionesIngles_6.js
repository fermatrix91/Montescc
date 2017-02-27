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

           { Espanol: "Quiero atención", AudioEspanol: "/audio/ParteSeis/03101QuieroAtencion.mp3", Ingles: "I want attention", AudioIngles: "/audio/ParteSeis/iWantAttention.mp3" },
            { Espanol: "Quiero iniciar un negocio", AudioEspanol: "/audio/ParteSeis/03102QuieroIniciarUnNegocio.mp3", Ingles: "I want to start a business", AudioIngles: "/audio/ParteSeis/iWantToStartABusiness.mp3" },
            { Espanol: "Quiero practicar contigo", AudioEspanol: "/audio/ParteSeis/03103QuieroPracticarContigo.mp3", Ingles: "I want to practice with you", AudioIngles: "/audio/ParteSeis/iWantToPracticeWithYou.mp3" },
            { Espanol: "Quiero quedarme aquí", AudioEspanol: "/audio/ParteSeis/03104QuieroQuedarmeAqui.mp3", Ingles: "I want to stay here", AudioIngles: "/audio/ParteSeis/iWantToStayHere.mp3" },
            { Espanol: "Quiero venderlo", AudioEspanol: "/audio/ParteSeis/03105QuieroVenderlo.mp3", Ingles: "I want to sell it", AudioIngles: "/audio/ParteSeis/iWantToSellIt.mp3" },
            { Espanol: "Se está haciendo tarde", AudioEspanol: "/audio/ParteSeis/03106SeEstaHaciendoTarde.mp3", Ingles: "It´s getting late", AudioIngles: "/audio/ParteSeis/itsGettingLate.mp3" },
            { Espanol: "Se ve delicioso", AudioEspanol: "/audio/ParteSeis/03107SeVeDelicioso.mp3", Ingles: "It looks delicious", AudioIngles: "/audio/ParteSeis/itLooksDelicious.mp3" },
            { Espanol: "Somos como una familia", AudioEspanol: "/audio/ParteSeis/03108SomosComoUnaFamilia.mp3", Ingles: "We are like family", AudioIngles: "/audio/ParteSeis/weAreLikeFamily.mp3" },
            { Espanol: "Soy un estudiante extranjero", AudioEspanol: "/audio/ParteSeis/03109SoyUnEstudianteExtranjero.mp3", Ingles: "I´m a foreign student", AudioIngles: "/audio/ParteSeis/amAForentStudent.mp3" },
            { Espanol: "Te espero afuera", AudioEspanol: "/audio/ParteSeis/03110TeEsperoAfuera.mp3", Ingles: "I´ll wait for you outside", AudioIngles: "/audio/ParteSeis/illWaitForYouOutside.mp3" },
            { Espanol: "Te perdono", AudioEspanol: "/audio/ParteSeis/03111TePerdono.mp3", Ingles: "I forgive you", AudioIngles: "/audio/ParteSeis/iForgiveYou.mp3" },
            { Espanol: "Te prometo", AudioEspanol: "/audio/ParteSeis/03112TePrometo.mp3", Ingles: "I promise", AudioIngles: "/audio/ParteSeis/iPromise.mp3" },
            { Espanol: "Tenemos que practicar también", AudioEspanol: "/audio/ParteSeis/03113TenemosQuePracticarTambien.mp3", Ingles: "We need to practice too", AudioIngles: "/audio/ParteSeis/weNeedToPracticeToo.mp3" },
            { Espanol: "Tengo prisa", AudioEspanol: "/audio/ParteSeis/03114TengoPrisa.mp3", Ingles: "I´m in a hurry", AudioIngles: "/audio/ParteSeis/amInAHurry.mp3" },
            { Espanol: "Tengo un problema", AudioEspanol: "/audio/ParteSeis/03115TengoUnProblema.mp3", Ingles: "I have a problem", AudioIngles: "/audio/ParteSeis/iHaveAProblem.mp3" },
            { Espanol: "Tomaré una decisión", AudioEspanol: "/audio/ParteSeis/03116TomareUnaDecision.mp3", Ingles: "I will make a decision", AudioIngles: "/audio/ParteSeis/iWillMakeADecision.mp3" },
            { Espanol: "Tu pronunciación es buena", AudioEspanol: "/audio/ParteSeis/03117TuPronunciacionEsBuena.mp3", Ingles: "Your pronunciation is good", AudioIngles: "/audio/ParteSeis/yourPronnunciationIsGood.mp3" },
            { Espanol: "Tuve un buen día", AudioEspanol: "/audio/ParteSeis/03118TuveUnBuenDia.mp3", Ingles: "I had a good day", AudioIngles: "/audio/ParteSeis/iHadAGoodDay.mp3" },
            { Espanol: "Vamos a practicar pronto", AudioEspanol: "/audio/ParteSeis/03119VamosAPracticarPronto.mp3", Ingles: "Let´s practice soon", AudioIngles: "/audio/ParteSeis/letsPracticeSoon.mp3" },
            { Espanol: "Vivo con un(a) amigo(a)", AudioEspanol: "/audio/ParteSeis/03120VivoConUnAmigo.mp3", Ingles: "I live with a friend", AudioIngles: "/audio/ParteSeis/iLiveWithAFriend.mp3" },
            { Espanol: "¿A qué hora abren?", AudioEspanol: "/audio/ParteSeis/03121AQueHoraAbren.mp3", Ingles: "At what time does it open?", AudioIngles: "/audio/ParteSeis/atWhatTimeDoesItOpen.mp3" },
            { Espanol: "¿A quién apoyas?", AudioEspanol: "/audio/ParteSeis/03122AQuienApoyas.mp3", Ingles: "Who do you support?", AudioIngles: "/audio/ParteSeis/whoDoYouSupport.mp3" },
            { Espanol: "¿A quién le toca?", AudioEspanol: "/audio/ParteSeis/03123AQuienLeToca.mp3", Ingles: "Whose turn is it?", AudioIngles: "/audio/ParteSeis/whoseTurnIsIt.mp3" },
            { Espanol: "¿Aceptas tarjetas de crédito?", AudioEspanol: "/audio/ParteSeis/03124AceptasTarjetasDeCredito.mp3", Ingles: "Do you accept credit cards?", AudioIngles: "/audio/ParteSeis/doYouAcceptCreditCards.mp3" },
            { Espanol: "¿Casi estás aquí?", AudioEspanol: "/audio/ParteSeis/03125CasiEstasAqui.mp3", Ingles: "Are you almost here?", AudioIngles: "/audio/ParteSeis/areYouAlmostHere.mp3" },
            { Espanol: "¿Cómo debemos hacerlo?", AudioEspanol: "/audio/ParteSeis/03126ComoDebemosHacerlo.mp3", Ingles: "How should we do this?", AudioIngles: "/audio/ParteSeis/howShoulWeDoThis.mp3" },
            { Espanol: "¿Cómo terminó?", AudioEspanol: "/audio/ParteSeis/03127ComoTermino.mp3", Ingles: "How did it end?", AudioIngles: "/audio/ParteSeis/howDidItEnd.mp3" },
            { Espanol: "¿Cuál es el nombre del bebé?", AudioEspanol: "/audio/ParteSeis/03128CualEsElNombreDelBebe.mp3", Ingles: "What´s the name of the baby?", AudioIngles: "/audio/ParteSeis/whatsTheNameOfTheBaby.mp3" },
            { Espanol: "¿Cuál es el plan?", AudioEspanol: "/audio/ParteSeis/03129CualEsElPlan.mp3", Ingles: "What´s the plan?", AudioIngles: "/audio/ParteSeis/whatsThePlan.mp3" },
            { Espanol: "¿Cuál es el problema?", AudioEspanol: "/audio/ParteSeis/03130CualEsElProblema.mp3", Ingles: "What´s the problem?", AudioIngles: "/audio/ParteSeis/whatsTheProblem.mp3" },
            { Espanol: "¿Cuál es la respuesta?", AudioEspanol: "/audio/ParteSeis/03131CualEsLaRespuesta.mp3", Ingles: "What´s the answer?", AudioIngles: "/audio/ParteSeis/whatsTheAnswer.mp3" },
            { Espanol: "¿Cuál es mejor?", AudioEspanol: "/audio/ParteSeis/03132CualEsMejor.mp3", Ingles: "Which is better?", AudioIngles: "/audio/ParteSeis/whichIsBetter.mp3" },
            { Espanol: "¿Cuál es tu comida favorita?", AudioEspanol: "/audio/ParteSeis/03133CualEsTuComidaFavorita.mp3", Ingles: "What´s your favorite food?", AudioIngles: "/audio/ParteSeis/whatsYourFavoriteFood.mp3" },
            { Espanol: "¿Cuál es tu decisión?", AudioEspanol: "/audio/ParteSeis/03134CualEsTuDecision.mp3", Ingles: "What´s your decision?", AudioIngles: "/audio/ParteSeis/whatsYourDecision.mp3" },
            { Espanol: "¿Cuál es tu dirección?", AudioEspanol: "/audio/ParteSeis/03135CualEsTuDireccion.mp3", Ingles: "What´s your address?", AudioIngles: "/audio/ParteSeis/whatsYourAddress.mp3" },
            { Espanol: "¿Cuál es tu opinión?", AudioEspanol: "/audio/ParteSeis/03136CualEsTuOpinion.mp3", Ingles: "What´s your opinion?", AudioIngles: "/audio/ParteSeis/whatsYourOpinion.mp3" },
            { Espanol: "¿Cuáles países quieres visitar?", AudioEspanol: "/audio/ParteSeis/03137CualesPaisesQuieresVisitar.mp3", Ingles: "Which countries do you want to visit?", AudioIngles: "/audio/ParteSeis/whichCountriesDoYouWantToVisit.mp3" },
            { Espanol: "¿Cuáles son tus libros favoritos?", AudioEspanol: "/audio/ParteSeis/03138CualesSonTusLibrosFavoritos.mp3", Ingles: "Which are your favorite books?", AudioIngles: "/audio/ParteSeis/whichAreYourFavoriteBooks.mp3" },
            { Espanol: "¿Cuáles son tus planes para hoy?", AudioEspanol: "/audio/ParteSeis/03139CualesSonTusPlanesParaHoy.mp3", Ingles: "What are your plans for today?", AudioIngles: "/audio/ParteSeis/whatAreYourPlansForToday.mp3" },
            { Espanol: "¿Cuándo es la mejor hora para visitar?", AudioEspanol: "/audio/ParteSeis/03140CuandoEsLaMejorHoraParaVisitar.mp3", Ingles: "When is the best hour to visit?", AudioIngles: "/audio/ParteSeis/whenIsTheBestHourToVisit.mp3" },
            { Espanol: "¿Cuándo nos vamos?", AudioEspanol: "/audio/ParteSeis/03141CuandoNosVamos.mp3", Ingles: "When are we leaving?", AudioIngles: "/audio/ParteSeis/whenAreWeLeaving.mp3" },
            { Espanol: "¿Cuándo termina?", AudioEspanol: "/audio/ParteSeis/03142CuandoTermina.mp3", Ingles: "When does it end?", AudioIngles: "/audio/ParteSeis/whenDoesItEnd.mp3" },
            { Espanol: "¿Cuánto mides?", AudioEspanol: "/audio/ParteSeis/03143CuantoMides.mp3", Ingles: "How tall are you?", AudioIngles: "/audio/ParteSeis/howTallAreYou.mp3" },
            { Espanol: "¿Cuánto tiempo tengo?", AudioEspanol: "/audio/ParteSeis/03144CuantoTiempoTengo.mp3", Ingles: "How much time do I have?", AudioIngles: "/audio/ParteSeis/howMuchTimeDoIHave.mp3" },
            { Espanol: "¿De qué color son tus ojos?", AudioEspanol: "/audio/ParteSeis/03145DeQueColorSonTusOjos.mp3", Ingles: "What color are your eyes?", AudioIngles: "/audio/ParteSeis/whatColorAreYourEyes.mp3" },
            { Espanol: "¿Dónde es(está) eso?", AudioEspanol: "/audio/ParteSeis/03146DondeEsEso.mp3", Ingles: "Where is that?", AudioIngles: "/audio/ParteSeis/whereIsThat.mp3" },
            { Espanol: "¿Dónde está el(la) maestro(a)?", AudioEspanol: "/audio/ParteSeis/03147DondeEstaElMaestro.mp3", Ingles: "Where´s the teacher?", AudioIngles: "/audio/ParteSeis/whereIsTheTeacher.mp3" },
            { Espanol: "¿Dónde está mi teléfono?", AudioEspanol: "/audio/ParteSeis/03148DondeEstaMiTelefono.mp3", Ingles: "Where´s my phone?", AudioIngles: "/audio/ParteSeis/whereIsMyPhone.mp3" },
            { Espanol: "¿Dónde están mis cosas?", AudioEspanol: "/audio/ParteSeis/03149DondeEstanMisCosas.mp3", Ingles: "Where´s my stuff?", AudioIngles: "/audio/ParteSeis/whereIsMyStuff.mp3" },
            { Espanol: "¿Dónde estoy?", AudioEspanol: "/audio/ParteSeis/03150DondeEstoy.mp3", Ingles: "Where am I?", AudioIngles: "/audio/ParteSeis/whereAmI.mp3" },
            { Espanol: "¿Está abierta la tienda?", AudioEspanol: "/audio/ParteSeis/03151EstaAbiertaLaTienda.mp3", Ingles: "Is the store open?", AudioIngles: "/audio/ParteSeis/isTheStoreOpen.mp3" },
            { Espanol: "¿Está pasando algo?", AudioEspanol: "/audio/ParteSeis/03152EstaPasandoAlgo.mp3", Ingles: "Is something happening?", AudioIngles: "/audio/ParteSeis/isSomethingHappening.mp3" },
            { Espanol: "¿Estás en apuro?", AudioEspanol: "/audio/ParteSeis/03153EstasEnApuro.mp3", Ingles: "Are you in a hurry?", AudioIngles: "/audio/ParteSeis/areYouInAHurry.mp3" },
            { Espanol: "¿Estás mintiendo?", AudioEspanol: "/audio/ParteSeis/03154EstasMintiendo.mp3", Ingles: "Are you lying?", AudioIngles: "/audio/ParteSeis/areYouLying.mp3" },
            { Espanol: "¿Estás trabajando?", AudioEspanol: "/audio/ParteSeis/03155EstasTrabajando.mp3", Ingles: "Are you working?", AudioIngles: "/audio/ParteSeis/areYouWorking.mp3" },
            { Espanol: "¿Esto es apropiado?", AudioEspanol: "/audio/ParteSeis/03156EstoEsApropiado.mp3", Ingles: "Is this appropiate?", AudioIngles: "/audio/ParteSeis/isThisAppropiated.mp3" },
            { Espanol: "¿Esto está bien?", AudioEspanol: "/audio/ParteSeis/03157EstoEstaBien.mp3", Ingles: "Is this okay?", AudioIngles: "/audio/ParteSeis/isThisOk.mp3" },
            { Espanol: "¿Estudiaste?", AudioEspanol: "/audio/ParteSeis/03158Estudiaste.mp3", Ingles: "Did you study?", AudioIngles: "/audio/ParteSeis/didYouStudy.mp3" },
            { Espanol: "¿Has decidido?", AudioEspanol: "/audio/ParteSeis/03159HasDecidido.mp3", Ingles: "Have you decided?", AudioIngles: "/audio/ParteSeis/haveYouDecided.mp3" },
            { Espanol: "¿Has dejado un mensaje?", AudioEspanol: "/audio/ParteSeis/03160HasDejadoUnMensaje.mp3", Ingles: "Did you leave a message?", AudioIngles: "/audio/ParteSeis/didYouLeaveAMessage.mp3" },
            { Espanol: "¿Has estado allí?", AudioEspanol: "/audio/ParteSeis/03161HasEstadoAhi.mp3", Ingles: "Have you been there?", AudioIngles: "/audio/ParteSeis/haveYouBeenThere.mp3" },
            { Espanol: "¿Hay algo que te molesta?", AudioEspanol: "/audio/ParteSeis/03162HayAlgoQueTeMolesta.mp3", Ingles: "Is something bothering you?", AudioIngles: "/audio/ParteSeis/isSomethingBotheringYou.mp3" },
            { Espanol: "¿Hay habitaciones disponibles?", AudioEspanol: "/audio/ParteSeis/03163HayHabitacionesDisponibles.mp3", Ingles: "Are there rooms available?", AudioIngles: "/audio/ParteSeis/areTheRoomsAvaliable.mp3" },
            { Espanol: "¿Lo estoy haciendo bien?", AudioEspanol: "/audio/ParteSeis/03164LoEstoyHaciendoBien.mp3", Ingles: "Am I doing this right?", AudioIngles: "/audio/ParteSeis/amIDoingThisRight.mp3" },
            { Espanol: "¿Me perdonas?", AudioEspanol: "/audio/ParteSeis/03165MePerdonas.mp3", Ingles: "Do you forgive me?", AudioIngles: "/audio/ParteSeis/doYouForgiveMe.mp3" },
            { Espanol: "¿Me puedes dar un consejo?", AudioEspanol: "/audio/ParteSeis/03166MePuedesDarUnConsejo.mp3", Ingles: "Can you give me advice?", AudioIngles: "/audio/ParteSeis/canYouGiveMeAdvise.mp3" },
            { Espanol: "¿Me puedes hacer un favor?", AudioEspanol: "/audio/ParteSeis/03167MePuedesHacerUnFavor.mp3", Ingles: "Can you do me a favor?", AudioIngles: "/audio/ParteSeis/canYouDoMeAFavor.mp3" },
            { Espanol: "¿Me recuerdas?", AudioEspanol: "/audio/ParteSeis/03168MeRecuerdas.mp3", Ingles: "Do you remember me?", AudioIngles: "/audio/ParteSeis/doYouRememberMe.mp3" },
            { Espanol: "¿Por qué lo hiciste?", AudioEspanol: "/audio/ParteSeis/03169PorQueLoHiciste.mp3", Ingles: "Why did you do it?", AudioIngles: "/audio/ParteSeis/whyDidYouDoIt.mp3" },
            { Espanol: "¿Puedo enviar algo?", AudioEspanol: "/audio/ParteSeis/03170PuedoEnviarAlgo.mp3", Ingles: "Can I send you something?", AudioIngles: "/audio/ParteSeis/canISendYouSomething.mp3" },
            { Espanol: "¿Puedo sentarme aquí?", AudioEspanol: "/audio/ParteSeis/03171PuedoSentarmeAqui.mp3", Ingles: "Can I sit here?", AudioIngles: "/audio/ParteSeis/canISitHere.mp3" },
            { Espanol: "¿Puedo verte mañana?", AudioEspanol: "/audio/ParteSeis/03172PuedoVerteManana.mp3", Ingles: "Can I see you tomorrow?", AudioIngles: "/audio/ParteSeis/canISeeYouTomorrow.mp3" },
            { Espanol: "¿Qué debo elegir?", AudioEspanol: "/audio/ParteSeis/03173QueDeboElegir.mp3", Ingles: "What should I choose?", AudioIngles: "/audio/ParteSeis/whatShouldIChoose.mp3" },
            { Espanol: "¿Qué deportes juegas?", AudioEspanol: "/audio/ParteSeis/03174QueDeportesJuegas.mp3", Ingles: "What sports do you play?", AudioIngles: "/audio/ParteSeis/whatSportsDoYouPlay.mp3" },
            { Espanol: "¿Qué estás dibujando?", AudioEspanol: "/audio/ParteSeis/03175QueEstasDibujando.mp3", Ingles: "What are you drawing?", AudioIngles: "/audio/ParteSeis/whatAreYouDrawing.mp3" },
            { Espanol: "¿Qué estás enviando?", AudioEspanol: "/audio/ParteSeis/03176QueEstasEnviando.mp3", Ingles: "What are you sending?", AudioIngles: "/audio/ParteSeis/whatAreYouSending.mp3" },
            { Espanol: "¿Qué estás leyendo?", AudioEspanol: "/audio/ParteSeis/03177QueEstasLeyendo.mp3", Ingles: "What are you reading?", AudioIngles: "/audio/ParteSeis/whatAreYouReading.mp3" },
            { Espanol: "¿Qué estás vendiendo?", AudioEspanol: "/audio/ParteSeis/03178QueEstasVendiendo.mp3", Ingles: "What are you selling?", AudioIngles: "/audio/ParteSeis/whatAreYouSelling.mp3" },
            { Espanol: "¿Qué estás viendo?", AudioEspanol: "/audio/ParteSeis/03179QueEstasViendo.mp3", Ingles: "What are you watching?", AudioIngles: "/audio/ParteSeis/whatAreYouWatching.mp3" },
            { Espanol: "¿Qué hay para desayunar?", AudioEspanol: "/audio/ParteSeis/03180QueHayParaDesayunar.mp3", Ingles: "What´s for breakfast?", AudioIngles: "/audio/ParteSeis/whatsForBreakfast.mp3" },
            { Espanol: "¿Qué me pongo?", AudioEspanol: "/audio/ParteSeis/03181QueMePongo.mp3", Ingles: "What should I wear?", AudioIngles: "/audio/ParteSeis/whatShouldIWear.mp3" },
            { Espanol: "¿Qué quiere decir?", AudioEspanol: "/audio/ParteSeis/03182QueQuiereDecir.mp3", Ingles: "What does it mean?", AudioIngles: "/audio/ParteSeis/whatDoesItMean.mp3" },
            { Espanol: "¿Quién dijo eso?", AudioEspanol: "/audio/ParteSeis/03183QuienDijoEso.mp3", Ingles: "Who said that?", AudioIngles: "/audio/ParteSeis/whoSaidThat.mp3" },
            { Espanol: "¿Quién es responsable?", AudioEspanol: "/audio/ParteSeis/03184QuienEsResponsable.mp3", Ingles: "Who´s responsible?", AudioIngles: "/audio/ParteSeis/whosResponsable.mp3" },
            { Espanol: "¿Quién es?", AudioEspanol: "/audio/ParteSeis/03185QuienEs.mp3", Ingles: "Who is it?", AudioIngles: "/audio/ParteSeis/whoIsIt.mp3" },
            { Espanol: "¿Quién ganó?", AudioEspanol: "/audio/ParteSeis/03186QuienGano.mp3", Ingles: "Who won?", AudioIngles: "/audio/ParteSeis/whoWon.mp3" },
            { Espanol: "¿Quién hace eso?", AudioEspanol: "/audio/ParteSeis/03187QuienHaceEso.mp3", Ingles: "Who´s doing that?", AudioIngles: "/audio/ParteSeis/whoIsDoingThat.mp3" },
            { Espanol: "¿Quién hizo esto?", AudioEspanol: "/audio/ParteSeis/03188QuienHizoEsto.mp3", Ingles: "Who did this?", AudioIngles: "/audio/ParteSeis/whoDidThis.mp3" },
            { Espanol: "¿Quién perdió?", AudioEspanol: "/audio/ParteSeis/03189QuienPerdio.mp3", Ingles: "Who lost?", AudioIngles: "/audio/ParteSeis/whoLost.mp3" },
            { Espanol: "¿Quién te lo dijo?", AudioEspanol: "/audio/ParteSeis/03190QuienTeLoDijo.mp3", Ingles: "Who told you?", AudioIngles: "/audio/ParteSeis/whoToldYou.mp3" },
            { Espanol: "¿Quiéres jugar?", AudioEspanol: "/audio/ParteSeis/03191QuieresJugar.mp3", Ingles: "Do you want to play?", AudioIngles: "/audio/ParteSeis/doYouWantToPlayAGame.mp3" },
            { Espanol: "¿Quiéres vivir aquí?", AudioEspanol: "/audio/ParteSeis/03192QuieresVivirAqui.mp3", Ingles: "Do you want to live here?", AudioIngles: "/audio/ParteSeis/doYouWantToLiveHere.mp3" },
            { Espanol: "¿Sabes la respuesta?", AudioEspanol: "/audio/ParteSeis/03193SabesLaRespuesta.mp3", Ingles: "Do you know the answer?", AudioIngles: "/audio/ParteSeis/doYouKnowTheAnswer.mp3" },
            { Espanol: "¿Sabes?", AudioEspanol: "/audio/ParteSeis/03194Sabes.mp3", Ingles: "Do you know?", AudioIngles: "/audio/ParteSeis/doYouKnow.mp3" },
            { Espanol: "¿Te estoy molestando?", AudioEspanol: "/audio/ParteSeis/03195TeEstoyMolestando.mp3", Ingles: "Am I bothering you?", AudioIngles: "/audio/ParteSeis/amIBotheringYou.mp3" },
            { Espanol: "¿Te gusta bailar?", AudioEspanol: "/audio/ParteSeis/03196TeGustaBailar.mp3", Ingles: "Do you like dancing?", AudioIngles: "/audio/ParteSeis/doYouLikeDancing.mp3" },
            { Espanol: "¿Te preocupa?", AudioEspanol: "/audio/ParteSeis/03197TePreocupa.mp3", Ingles: "Do you worry?", AudioIngles: "/audio/ParteSeis/doYouWorry.mp3" },
            { Espanol: "¿Tenemos permiso?", AudioEspanol: "/audio/ParteSeis/03198TenemosPermiso.mp3", Ingles: "Do we have permission?", AudioIngles: "/audio/ParteSeis/doWeHavePermission.mp3" },
            { Espanol: "¿Tengo que esperar?", AudioEspanol: "/audio/ParteSeis/03199TengoQueEsperar.mp3", Ingles: "Do I have to wait?", AudioIngles: "/audio/ParteSeis/doIHaveToWait.mp3" },
            { Espanol: "¿Tienes sueño?", AudioEspanol: "/audio/ParteSeis/03200TienesSueno.mp3", Ingles: "Are you sleepy?", AudioIngles: "/audio/ParteSeis/areYouSleepy.mp3" }

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