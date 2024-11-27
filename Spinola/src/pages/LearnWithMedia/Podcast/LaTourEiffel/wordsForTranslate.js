var passedOnce = false;
let isPaused = false;
let currentTimeouts = [];
let lastTimestamp = 0;

export function wordsForTranslate() {
  const lyricsData = {
    lyricsTimeVerse: [
      { 0: "Bonjour Comment ça va Aujourd'hui, je vous propose un podcast qui va parler de l'histoire" },
    { 6540: "de la tour Eiffel. Alors tout le monde connaît, évidemment, la tour Eiffel mais peu de gens" },
    { 13759: "connaissent, en réalité, son histoire réelle. Donc, on commence..." },
    { 18760: "L'histoire de la tour Eiffel Aujourd'hui tout le monde connaît la tour" },
    { 23810: "Eiffel , symbole de Paris et même de la France. Mais combien de personnes connaissent son" },
    { 30040: "histoire Qui connaît sa date de construction ou même sa hauteur exacte Qui sait qu'au" },
    { 36170: "début, cette tour était loin de plaire à tout le monde et qu'elle a même failli être" },
    { 40510: "détruite" },
    { 44980: "Le XIXe siècle est marqué par un enthousiasme particulier pour le progrès scientifique." },
    { 52640: "sont organisées dans les différents pays industrialisés afin d'exposer les dernières" },
    { 58170: "avancées technologiques. Mais les gouvernements s'aperçoivent vite que derrière la technologique" },
    { 64799: "il y a un important intérêt politique, dont il serait dommage de ne pas profiter. Le pays" },
    { 70750: "qui accueille l'exposition enseigne au reste du monde son savoir industriel et technologique" },
    { 76659: "mais aussi et surtout son avancée et sa supériorité sur les autres puissances européennes, qui" },
    { 82810: "régnent alors sur le monde. Ainsi, la France décide d'organiser une exposition" },
    { 88399: "universelle à Paris, du 5 mai au 31 octobre 1889. L'année choisie n'est pas innocente," },
    { 93390: "puisqu'elle symbolise le centenaire de la Révolution française. \"Paris sera encore" },
    { 99159: "une fois au centre du monde\" pensaient les organisateurs français mais personne n'imaginait" },
    { 103640: "alors que la tour Eiffel serait le spectacle principal de cette exposition." },
    { 113640: "En fait, l'idée d'une tour géante n'est pas née avec l'exposition de 1889. En effet," },
    { 122200: "lors de l'exposition universelle de Philadelphie en 1876, les ingénieurs américains Clark" },
    { 129580: "et Reeves, imaginent un projet d'une tour d'une hauteur totale d'environ trois cents" },
    { 136120: "mètres. Mais les deux ingénieurs ne trouvent pas les crédits nécessaires et finalement" },
    { 140670: "leur projet ne pourra jamais voir le jour. Mais une tour qui pourrait atteindre l'extraordinaire" },
    { 146569: "hauteur de trois cents mètres de haut reste un défi qui fait rêver les ingénieurs de" },
    { 151290: "l'époque. En juin 1884, deux ingénieurs des entreprises" },
    { 156319: "Eiffel, Maurice Koechlin et Émile Nouguier, réfléchissent à leur tour à un projet" },
    { 163180: "de tour métallique de trois cents mètres de haut. Ils espèrent pouvoir en faire le" },
    { 167659: "monument principal de l'exposition de 1889. Le 6 juin, très exactement, Maurice Koechlin" },
    { 175640: "dessine le tout premier dessin de l'édifice. Le dessin représente un haut pylône de trois" },
    { 182010: "cents mètres, où quatre piliers incurvés se rejoignent au sommet et sont reliées par" },
    { 187700: "des plates-formes tous les cinquante mètres. Quand Gustave Eiffel voit le plan, il ne s'y" },
    { 192590: "intéresse pas particulièrement. Il trouve le projet un peu extravagant mais il laisse" },
    { 197720: "cependant les deux ingénieurs poursuivre leurs recherches." },
    { 207849: "Stephen Sauvestre, important architecte des entreprises Eiffel, va finalement aider Maurice" },
    { 212939: "Koechlin et Émile Nouguier. Il redessine complètement le projet pour lui donner une" },
    { 218530: "autre envergure : il rajoute de lourds pieds en maçonnerie et consolide la tour jusqu'au" },
    { 224150: "premier étage grâce à des arcs, réduit le nombre de plates-formes de cinq à deux" },
    { 230310: "et il rajoute en haut de la tour un genre de chapeau qui donne à la tour une légère" },
    { 234340: "allure de phare. Ce nouveau projet est à nouveau présenté" },
    { 239060: "à Gustave Eiffel qui, cette fois-ci, se montre enthousiasmé. Il est tellement sûr que le" },
    { 244719: "projet va devenir un succès qu'il rachète tous les droits de Koechlin et Nouguier, pour" },
    { 250780: "détenir les droits exclusifs sur la future tour. C'est donc finalement parce que Gustave" },
    { 254760: "Eiffel a racheté ces droits que la tour s'appelle la tour Eiffel" },
    { 260418: "En 1886, Gustave Eiffel gagne le concours qui l'autorise à construire sa tour pour" },
    { 266070: "l'exposition universelle de 1889. Gustave Eiffel avait prévu douze mois de" },
    { 271060: "travaux ; en réalité, il fallut vingt-quatre mois de travaux. La phase de construction" },
    { 279520: "qui débuta le 28 janvier 1887, s'acheva finalement en mars 1889, juste avant l'ouverture" },
    { 284229: "officielle de l'exposition universelle. Le nombre d'ouvriers ne dépasse jamais" },
    { 289509: "les deux cent cinquante car une grande partie du travail se fait dans les usines des entreprises" },
    { 294120: "Eiffel à Levallois-Perret. Cinquante ingénieurs exécutèrent pendant" }
  ]
  };

  function playLyrics(startFrom = 0) {
    // Limpa timeouts anteriores
    currentTimeouts.forEach((timeout) => clearTimeout(timeout));
    currentTimeouts = [];

    lyricsData.lyricsTimeVerse.forEach((lista) => {
      const timestamp = Number(Object.keys(lista)[0]);
      console.log(timestamp);
      console.log(startFrom);
      console.log(timestamp >= startFrom);
      // Só cria novos timeouts para timestamps maiores que startFrom
      if (timestamp >= startFrom) {
        const timeout = setTimeout(() => {
          lyricsPageId.innerHTML = "";
          const words = lista[timestamp].split(" ");

          words.forEach((word) => {
            const span = document.createElement("span");
            span.textContent = word;

            span.addEventListener("click", () => {
              // Pausa a reprodução
              isPaused = true;
              lastTimestamp = timestamp;

              // Limpa timeouts futuros
              currentTimeouts.forEach((times) => clearTimeout(times));

              setValorKey(timestamp);
              setClickedWord(span.textContent);

              const wordTranslate = document.createElement("div");
              wordTranslate.id = "wordTranslateBox";
              lyricsPageId.appendChild(wordTranslate);

              const spanInsideDiv = document.createElement("span");
              spanInsideDiv.id = "spanInsideDiv";
              spanInsideDiv.innerHTML += `<p>${span.textContent}</p>`;
              wordTranslate.appendChild(spanInsideDiv);

              const closeX = document.createElement("p");
              closeX.id = "closeX";
              closeX.textContent = "X";
              closeX.onclick = () => {
                teste();
                // Retoma a reprodução do último timestamp
                resume();
              };

              spanInsideDiv.appendChild(closeX);
              passedOnce = true;
            });

            lyricsPageId.appendChild(span);
          });
        }, timestamp - startFrom);

        currentTimeouts.push(timeout);
      }
    });
  }

  function pause() {
    isPaused = true;
    currentTimeouts.forEach((timeout) => clearTimeout(timeout));
  }

  function resume() {
    if (isPaused) {
      console.log("resume");
      isPaused = false;
      console.log(lastTimestamp);
      playLyrics(lastTimestamp);
    }
  }

  // Inicia a reprodução
  playLyrics(0);

  // Retorna os controles
  return {
    pause,
    resume,
    isPaused: () => isPaused,
  };
}

var clickedWord = "";
var valorKey = 0;

function setClickedWord(word) {
  clickedWord = word;
}

export function getClickedWord() {
  return clickedWord;
}

function setValorKey(key) {
  valorKey = key;
}

export function getValorKey() {
  console.log(valorKey);
  return valorKey;
}

function teste() {
  console.log("resume");

  const wordTranslate = document.getElementById("wordTranslateBox");

  wordTranslate.remove();
  setClickedWord("'");
}
