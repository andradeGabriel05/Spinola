var passedOnce = false;
let isPaused = false;
let currentTimeouts = [];
let lastTimestamp = 0;

export function wordsForTranslate() {
  const lyricsData = {
    lyricsTimeVerse: [
      { "6720": "Quand j'étais petit garçon Je repassais mes leçons" },
      { "11600": "En chantant" },
      { "16760": "Et bien des années plus tard Je chassais mes idées noires" },
      { "22360": "En chantant" },
      { "27200": "C'est beaucoup moins inquiétant De parler du mauvais temps" },
      { "32520": "En chantant" },
      { "38480": "Et c'est tellement plus mignon De se faire traiter de con En chanson" },
      { "42600": "La vie c'est plus marrant C'est moins désespérant" },
      { "48160": "En chantant La première fille de ma vie" },
      { "48560": "Dans la rue je l'ai suivie En chantant" },
      { "54800": "Quand elle s'est déshabillée J'ai joué le vieil habitué" },
      { "58800": "En chantant J'étais si content de moi" },
      { "64000": "Que j'ai fait l'amour dix fois En chantant" },
      { "68440": "Mais je n'peux pas m'expliquer Qu'au matin elle m'ait quitté Enchantée" },
      { "69400": "L'amour c'est plus marrant C'est moins désespérant" },
      { "72560": "En chantant Tout les hommes vont en galère À la pêche ou à la guerre" },
      { "77320": "La fleur au bout du fusil La victoire se gagne aussi" },
      { "84120": "En chantant On ne parle à Jéhovah À Jupiter à Bouddha" },
      { "84960": "Qu'en chantant Qu'elles que soient nos opinions" },
      { "89040": "On fait sa révolution En chanson" },
      { "91720": "Le monde est plus marrant C'est moins désespérant" },
      { "96720": "En chantant Puisqu'il faut mourir enfin Que ce soit côté jardin" },
      { "101760": "Si ma femme a de la peine Que mes enfants la soutiennent En chantant" },
      { "103240": "Quand j'irai revoir mon père Qui m'attend les bras ouverts En chantant" },
      { "106080": "J'aimerais que sur la Terre Tous mes bons copains m'enterrent En chantant" },
      { "107520": "La mort c'est plus marrant C'est moins désespérant" },
      { "114400": "Quand j'étais petit garçon Je repassais mes leçons" },
      { "115200": "En chantant Et bien des années plus tard" },
      { "120280": "Je chassais mes idées noires En chantant" },
      { "120280": "C'est beaucoup moins inquiétant De parler du mauvais temps En chantant" },
      { "120920": "Et c'est tellement plus mignon De se faire traiter de con En chanson" },
      { "123640": "Nanana nananana, nanana nananana" },
      { "123760": "Nanana nananana, nanana nananana" },
      { "123760": "Nanana nananana, nanana nananana Nanana" }
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
