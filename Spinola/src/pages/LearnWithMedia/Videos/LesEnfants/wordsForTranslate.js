var passedOnce = false;
let isPaused = false;
let currentTimeouts = [];
let lastTimestamp = 0;

export function wordsForTranslate() {
  const lyricsData = {
    lyricsTimeVerse: [
      { 130: "[Musique]" },
      { 18740: "bonjour je m'appelle Jeanne vaillant mon" },
      { 23279: "prénom est Jeanne et mon nom de famille" },
      { 25380: "et vaillant je suis une fille salut je" },
      { 30240: "m'appelle Grégoire vaillant Grégoire et" },
      { 33540: "mon prénom et vaillant et mon nom de" },
      { 35219: "famille je suis un garçon" },
      { 38820: "tu t'appelles Grégoire tu es un garçon" },
      { 40800: "tu t'appelles John tu es une fille" },
      { 43280: "Grégoire et mon frère c'est un garçon" },
      { 45980: "jaune et ma sœur c'est une fille" },
      { 51660: "j'ai" },
      { 53700: "12 ans" },
      { 55920: "moi aussi j'ai" },
      { 59879: "12 ans nous sommes jumeaux" },
      { 65700: "[Musique]" },
      { 69060: "bonjour et vous qui êtes-vous comment" },
      { 71460: "t'appelles-tu bonjour je m'appelle" },
      { 75180: "Aliette Laroche Aliette mon prénom la" },
      { 75980: "roche c'est mon nom de famille et je" },
      { 78659: "suis une fille" },
      { 82259: "bonjour Aliette quel âge as-tu" },
      { 85979: "j'ai 12 ans et toi comment t'appelles-tu" },
      { 89040: "quel est ton prénom mon prénom est" },
      { 90780: "Victor" },
      { 93240: "et quel est ton nom de famille mon nom" },
      { 96000: "de famille est le futur tu t'appelles" },
      { 100579: "Victor Le Fur nous sommes des garçons" },
      { 101520: "quel âge a Victor" },
      { 105259: "j'ai 12 ans" },
      { 108659: "comme c'est drôle j'ai 12 ans tu as 12" },
      { 112200: "ans Aliette a 12 ans mon frère a 12 ans" },
      { 115680: "nous avons tous 12 ans" },
      { 124360: "[Musique]" },
      { 133200: "est-ce que tu t'appelles pierre non" },
      { 135980: "je ne m'appelle pas pierre je m'appelle" },
      { 139080: "Grégoire" },
      { 141959: "ah oui ton prénom est Grégoire quel est" },
      { 145260: "ton nom de famille" },
      { 147420: "mon nom de famille est vaillant je" },
      { 150120: "m'appelle Grégoire vaillant" },
      { 153420: "et toi est-ce que tu t'appelles Arthur" },
      { 157340: "non je ne m'appelle pas Arthur ah oui" },
      { 161720: "comment t'appelles-tu" },
      { 164580: "je m'appelle Victor" },
      { 168000: "il s'appelle Victor" },
      { 171500: "est-ce que tu t'appelles Victor du parc" },
      { 174660: "non je m'appelle Victor Le Fur" },
      { 178800: "son nom de famille est LE FUR il" },
      { 181500: "s'appelle Victor Le Fur" },
      { 184379: "et elle comment s'appelle-t-elle elle" },
      { 188099: "s'appelle Aliette oui je m'appelle Agnès" },
      { 192200: "je répète tu t'appelles Victor il" },
      { 196620: "s'appelle Grégoire il le frère de Jeanne" },
      { 206110: "[Musique]" },
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
