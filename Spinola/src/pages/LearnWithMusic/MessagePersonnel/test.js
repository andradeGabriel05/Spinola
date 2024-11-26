var passedOnce = false;
let isPaused = false;
let currentTimeouts = [];
let lastTimestamp = 0;

export function test() {
  const lyricsData = {
    lyricsTimeVerse: [
      // 4282
      { 0: "Et il y a les mots que je ne dirai pas" },
      { 7855: "Tous ces mots qui font peur quand ils ne font pas rire" },
      {
        11434: "Qui sont dans trop de films de chansons et de livres",
      },
      { 15034: "Je voudrais vous les dire" },
      { 19034: "Et je voudrais les vivre" },
      { 22567: "Je ne le ferai pas" },
      { 26034: "Je veux je ne peux pas" },
      { 30034: "Je suis seule à crever et je sais où vous êtes" },
      {
        34534: "J'arrive attendez-moi nous allons nous connaître",
      },
      {
        39034: "Préparez votre temps pour vous j'ai tout le mien",
      },
      { 45034: "Je voudrais arriver je reste je me déteste" },
      { 52034: "Je n'arriverai pas" },
      { 55034: "Je veux je ne peux pas" },
      { 61034: "Je devrais vous parler" },
      { 64034: "Je devrais arriver" },
      { 67034: "Ou je devrais dormir" },
      { 76034: "J'ai peur que tu sois sourd" },
      { 78034: "J'ai peur que tu sois lâche" },
      { 80534: "J'ai peur d'être indiscrète" },
      {
        88034: "Je ne peux pas vous dire que je t'aime peut-être",
      },
      { 90034: "Mais si tu crois un jour que tu m'aimes" },
      { 94034: "Ne crois pas que tes souvenirs me gênent" },
      { 99034: "Et cours cours jusqu'à perdre haleine" },
      { 104034: "Viens me retrouver" },
      { 109034: "Si tu crois un jour que tu m'aimes" },
      { 113034: "Et si ce jour-là tu as de la peine" },
      { 118034: "À trouver où tous ces chemins te mènent" },
      { 123034: "Viens me retrouver" },
      { 130034: "Si le dégoût de la vie vient en toi" },
      { 138033: "Si la paresse de la vie s'installe en toi" },
      { 145034: "Pense à moi" },
      { 149034: "Pense à moi" },
      { 155034: "Mais si tu crois un jour que tu m'aimes" },
      { 158034: "Ne le considère pas comme un problème" },
      { 163034: "Et cours et cours jusqu'à perdre haleine" },
      { 168034: "Viens me retrouver" },
      { 173034: "Si tu crois un jour que tu m'aimes" },
      { 177034: "N'attends pas un jour, pas une semaine" },
      { 182034: "Car tu ne sais pas où la vie t'amène" },
      { 187034: "Viens me retrouver" },
      { 194034: "Si le dégoût de la vie vient en toi" },
      { 202034: "Si la paresse de la vie s'installe en toi" },
      { 209034: "Pense à moi" },
      { 213034: "Pense à moi" },
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
