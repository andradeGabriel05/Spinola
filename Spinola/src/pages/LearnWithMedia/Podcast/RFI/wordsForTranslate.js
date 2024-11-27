var passedOnce = false;
let isPaused = false;
let currentTimeouts = [];
let lastTimestamp = 0;

export function wordsForTranslate() {
  const lyricsData = {
    lyricsTimeVerse: [
    { 9800: "bonjour bonjour à toutes et à tous à l'écoute des RFI en direct de la guetté lyrique à Paris" },
    { 14280: "pour le festival de la Francophonie il est 18h le journal Le journal en France est facile" },
    { 22400: "Adrien Delgrange 16h temps universel 19h à Beyrouth nous sommes le mercredi 2 octobre" },
    { 29520: "et sommaire de cette édition au lendemain de l'attaque iranienne sur Israël la population" },
    { 35480: "israélienne est sous le choc reportage à suivre aujourd'hui encore des affrontements" },
    { 40520: "à la frontière entre le Liban et Israël ont eu lieu Israël annonce à l'instant la mort de H de" },
    { 46920: "ces soldats au sommaire aussi Patrick pouyanet est à New York pour collecter de l'argent le" },
    { 52680: "patron de Total énergie cherche à séduire des investisseurs et puis enfin nous sommes à 3h" },
    { 58560: "du coup d'envoi d'un match de football d'ors et déjà gravé dans les mémoires Ligue des Champions" },
    { 64560: "le petit Lille aux grands espoirs accueille le géant espagnol le Real de Madrid et nous en" },
    { 69560: "parlerons juste après ce journal dans radio foot internationale voilà pour les titres soyez les" },
    { 91560: "bienvenus hier à cette heure-ci il y a tout juste 24h le ciel israélien s'illuminé de tir" },
    { 96880: "de missile des traînées blanches fissurer le ciel des missiles tirés d'Iran avec pour objectif le" },
    { 103200: "territoire israélien quelques dégâts matériels mais pas de mort officiellement alors si le dô" },
    { 109160: "de fer sorte de barrage aérien a bien intercepté environ 200 missiles au sol les israélien restent" },
    { 116040: "choqués ils ont dû passer un long moment dans des abris souterrains reportage RFI de Michel" },
    { 120360: "Paul à Jérusalem ils sont établés dans un café de ravia un quartier résidentiel de Jérusalem annaël" },
    { 125480: "reconnaît que la veille dans un immeuble sans abri elle a eu chaud j'ai eu peur j'ai eu peur" },
    { 132520: "oui oui c'est cétait stressant c'est sûr c'est c'est dur après de il faut continuer à vivre" },
    { 138880: "mais c'est c'est pas facile je sais pas ce qui va se passer du tout mais il y aura j'imagine" },
    { 144360: "une réaction ou peut-être pas je je sais pas je sais pas plus décontracté Jacob parle d'une" },
    { 153240: "expérience qui espère-t-il ne se renouvellera pas écoutez on était calme on se rappelle que" },
    { 159160: "la dernière attaque de l'Iran n'avait pas provoqué de dégâts alors on a fait confiance dans l'armée" },
    { 165280: "un véritable traumatisme pour les enfantsirme de son côté Lana on aimerait leur donner une enfance" },
    { 172160: "heureuse et normale et c'est très différent de la normalité que j'ai eu en grandissant à" },
    { 178680: "Paris enfant on va dire que si demain Paris se faisait se prenait 300 missiles ou 180 missile" },
    { 185560: "en pleine nuit ou même à 6h du soir je suis pas sûr que euh la France réagirait euh pas" },
    { 190320: "plus brutalement que l'État d'Israël ne le fait aujourd'hui dans quelques heures débute le long" },
    { 196720: "weekend de Rocha Chana le NouvelAn juif les repas de famille pourront avoir lieu du moins dans le" },
    { 202880: "centre du pays les restrictions de rassemblement de la Défense Passive ont été levés Michel Paul" },
    { 210640: "Jérusalem RFI le secrétaire général de l'ONU a fini par condamner dit-il avec force l'attaque" },
    { 298960: "de cette attaque de l'Iran contre Israël à des milliers de kilomètres de là en Europe du Nord" },
    { 304240: "les ambassades d'Israël au Danemark et en Suède ont été visé la nuit dernière par des tirs et des" },
    { 310200: "explosions la guerre au Moyen-Orient n'éclipse pas la guerre en Ukraine l'armée russe gagne" },
    { 318720: "du terrain la ville de vougledar tombe aux mains des Russes avou les ukrainien aujourd'hui cette" },
    { 324880: "ville qui comptait 15000 habitants avant la guerre située entre Donetsk et mari" },
    { 330040: "est stratégique car elle pourrait permettre à la Russie de relier les fronts sud et est de faire" },
    { 336440: "rejoindre les territoire conquis dans le sud et l'est de l'Ukraine RFI à New York il est 13h passé" },
    { 344560: "de 5 minutes il est l'un des patrons français dont la parole est la plus observée la plus écoutée" },
    { 350120: "Patrick pouyané le PDG le président directeur général de Total énergie s'est exprimé à New York" },
    { 357360: "devant des investisseurs un grand orale pour les convaincre d'investir pour soutenir les projets" },
    { 364480: "du géant français Arthur Ponchelet c'est devant une centaine d'investisseurs que Patrick pouyanet" },
    { 371640: "a pris la parole comme il le fait depuis 2017 alors que près de la moitié des actionnaires des" },
    { 376640: "investisseurs de Total Energie sont nordaméricains le patron est venu les rassurer d'abord sur la" },
    { 382720: "production d'hydrocarbures de pétrole et de gaz l'entreprise annonce une croissance une hausse" },
    { 388840: "de 3 % par an plus que ce qu'elle avait prévu un atout pour son patron parmi les" },
    { 394200: "plus grandes entreprises d'hydrocarbures nous offrons aujourd'hui le plus haut rendement des" },
    { 400000: "capitaux investis et dans le futur nous aurons la meilleure croissance dans la production d'énergie" },
    { 406000: "production group Patrick pouyané a aussi annoncé 8 milliards de dollars de rachat" },
    { 415680: "d'action une mesure bien accueilli par la Bourse à Paris la valeur de l'action du titre de Total à" },
    { 423000: "augmenté de plus de 4 %. Arthur Ponchelet dans ce journal en France est facile l'actualité au" },
    { 427000: "aux États-Unis avec les ravages de l'Ouragan Hélen l'ouragan a causé la mort d'au moins" },
    { 432000: "155 personnes Joe Biden Kamala Haris vont se rendre compte par eux-mêmes des dégâts" },
    { 437280: "le président américain et sa vice-présidente désormais candidate à l'élections américaines" },
    { 442680: "vont notamment survoler en hélicoptère les zones particulièrement touchées dans l'état" },
    { 449480: "de Caroline du Nord Joe Biden annonce également mobiliser un millier de soldats supplémentaires" },
    { 456320: "RFI à Mexico il est 10h7 elle est la première femme à diriger le Mexique elle est aussi à la" },
    { 464000: "tête du pays le plus hispanophone au monde avec 129 millions d'habitants Claudia shenbaum a été" },
    { 470440: "ce qu'on appelle aujourd'hui investi présidente du Mexique elle commence donc officiellement" },
    { 477480: "aujourd'hui son mandat pour une durée de de 6 ans et parmi ses priorités la lutte contre" },
    { 485560: "les violences liées au trafic de drogue en France côté court le Sommet de la Francophonie" },
    { 491160: "va débuter dans 2 jours environ 321 millions de personnes parl le français dans le monde plus de" },
    { 496280: "50 chefs d'État sont attendus à à Paris et villarcotteret d'ici la fin de la semaine côté" },
    { 502880: "jardin le festival de la Francophonie ouvre ses portes aujourd'hui à la guetté lyrique en plein" },
    { 508840: "cœur de Paris là où nous sommes à l'heure actuelle un événement qui propose de découvrir la richesse" },
    { 513520: "de la scène artistique francophone dans toute sa diversité à l'échelle internationale que serait-ce" },
    { 520360: "une communauté sans humour existe-t-il plusieurs formes d'humour au sein de l'espace francophone" },
  ],
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
