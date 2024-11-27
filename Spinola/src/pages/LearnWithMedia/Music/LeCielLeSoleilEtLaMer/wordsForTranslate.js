var passedOnce = false;
let isPaused = false;
let currentTimeouts = [];
let lastTimestamp = 0;

export function wordsForTranslate() {
  const lyricsData = {
    lyricsTimeVerse: [
      { 0: "il y a" },
      { 3000: "le ciel le soleil et la mer" },
      { 7000: "il y a" },
      { 10559: "le ciel le soleil et la mer" },
      { 16000: "allongé sur la plage les cheveux dans" },
      { 20000: "les yeux et le nez dans le sable on est" },
      { 27160: "bien tous les deux c'est" },
      { 30320: "l'été les vacances oh mon dieu quelle" },
      { 36120: "chance il y" },
      { 38440: "a le" },
      { 40280: "ciel le soleil et la" },
      { 44000: "mer il y" },
      { 45920: "a le" },
      { 47760: "ciel le soleil et la mer ma cabane est" },
      { 54399: "en planche et le lit n'est pas grand" },
      { 60039: "tous les jours ce dimanche et nous" },
      { 64400: "dormons" },
      { 65920: "longtemps à" },
      { 71400: "midi sur la plage les amis de notre âge" },
      { 74114: "chanteent" },
      { 75159: "tous le ciel le" },
      { 79179: "soleil la" },
      { 81239: "mer chante tous le" },
      { 82480: "ciel le soleil et la mer et le soir" },
      { 85320: "tous ensemble quand nous allons" },
      { 87360: "danser un air qui te" },
      { 89339: "ressemble vient toujours te" },
      { 91360: "chercher il parle de vacances et d'amour" },
      { 95360: "et de chance en" },
      { 98360: "chantant le" },
      { 101439: "ciel le soleil et la mer en chantant" },
      { 104760: "dans le ciel le soleil et la mer quelque" },
      { 107759: "part en" },
      { 109720: "septembre nous nous retrouverons et le" },
      { 113679: "soir dans ta" },
      { 116720: "chambre nous le" },
      { 119239: "rechanterons malgré le vent" },
      { 123239: "d'automne et les pluies" },
      { 126200: "monotones nous aurons" },
      { 129360: "le ciel le soleil et la mer nous" },
      { 132040: "aurons le" },
      { 134879: "ciel le" },
      { 137720: "soleil la" },
      { 140680: "mer nous" },
      { 143440: "aurons le" },
      { 145920: "ciel le soleil et la mer nous" },
      { 148920: "aurons le ciel" }
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
