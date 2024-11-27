var passedOnce = false;
let isPaused = false;
let currentTimeouts = [];
let lastTimestamp = 0;

export function wordsForTranslate() {
  const lyricsData = {
    lyricsTimeVerse: [
      { 0: "Quand j'étais petit garçon" },
      { 9000: "Je repassais mes leçons" },
      { 11620: "En chantant" },
      { 14760: "Et bien des années plus tard" },
      { 16360: "Je chassais mes idées noires" },
      { 19360: "En chantant" },
      { 22860: "C'est beaucoup moins inquiétant" },
      { 25000: "De parler du mauvais temps" },
      { 28200: "En chantant" },
      { 31000: "Et c'est tellement plus mignon" },
      { 32880: "De se faire traiter de con" },
      { 35850: "En chanson" },
      { 38900: "La vie c'est plus marrant" },
      { 40840: "C'est moins désespérant" },
      { 43660: "En chantant" },
      { 46560: "La première fille de ma vie" },
      { 48900: "Dans la rue je l'ai suivie" },
      { 51860: "En chantant" },
      { 54780: "Quand elle s'est déshabillée" },
      { 56780: "J'ai joué le vieil habitué" },
      { 59900: "En chantant" },
      { 62800: "J'étais si content de moi" },
      { 64000: "Que j'ai fait l'amour dix fois" },
      { 67600: "En chantant" },
      { 70000: "Mais je n'peux pas m'expliquer" },
      { 72000: "Qu'au matin elle m'ait quitté" },
      { 75000: "Enchantée" },
      { 78000: "L'amour c'est plus marrant" },
      { 80000: "C'est moins désespérant" },
      { 82600: "En chantant" },
      { 86000: "Tout les hommes vont en galère" },
      { 88000: "À la pêche ou à la guerre" },
      { 91000: "En chantant" },
      { 94000: "La fleur au bout du fusil" },
      { 96000: "La victoire se gagne aussi" },
      { 99000: "En chantant" },
      { 101000: "On ne parle à Jéhovah" },
      { 104000: "À Jupiter à Bouddha" },
      { 107000: "Qu'en chantant" },
      { 109000: "Qu'elles que soient nos opinions" },
      { 112000: "On fait sa révolution" },
      { 115000: "En chanson" },
      { 118000: "Le monde est plus marrant" },
      { 119600: "C'est moins désespérant" },
      { 122000: "En chantant" },
      { 125800: "Puisqu'il faut mourir enfin" },
      { 127600: "Que ce soit côté jardin" },
      { 130000: "En chantant" },
      { 133700: "Si ma femme a de la peine" },
      { 135000: "Que mes enfants la soutiennent" },
      { 137800: "En chantant" },
      { 141000: "Quand j'irai revoir mon père" },
      { 143000: "Qui m'attend les bras ouverts" },
      { 146000: "En chantant" },
      { 149000: "J'aimerais que sur la Terre" },
      { 151000: "Tous mes bons copains m'enterrent" },
      { 154000: "En chantant" },
      { 157000: "La mort c'est plus marrant" },
      { 159000: "C'est moins désespérant" },
      { 162000: "En chantant" },
      { 167000: "Quand j'étais petit garçon" },
      { 169000: "Je repassais mes leçons" },
      { 171600: "En chantant" },
      { 175000: "Et bien des années plus tard" },
      { 177000: "Je chassais mes idées noires" },
      { 180000: "En chantant" },
      { 182000: "C'est beaucoup moins inquiétant" },
      { 185000: "De parler du mauvais temps" },
      { 188000: "En chantant" },
      { 191000: "Et c'est tellement plus mignon" },
      { 193000: "De se faire traiter de con" },
      { 195700: "En chanson" },
      { 200000: "Nanana nananana [...]" },
      { 220000: "" },
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
