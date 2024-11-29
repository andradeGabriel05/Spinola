var passedOnce = false;
let isPaused = false;
let currentTimeouts = [];
let lastTimestamp = 0;

export function wordsForTranslate() {
  const lyricsData = {
    lyricsTimeVerse: [
      {
        14700:
          "Salut Je m'appelle Lucas. Mon nom est Lucas. Je vais l'écrire.",
      },
      { 23400: "Lucas. Donc mon nom est Lucas" },
      { 35190: "moi, ... j'aime bien" },
      { 41620: "YouTube je vais écrire YouTube YouTube" },
      { 53350: "moi, j'aime bien YouTube et j'aime beaucoup les" },
      { 62230: "langues." },
      {
        64830:
          "J'aime beaucoup les langues, j'aime beaucoup l'allemand, j'aime",
      },
      { 69610: "beaucoup l'espagnol, j'aime beaucoup le français..." },
      {
        72280:
          "J'aime beaucoup les langues. Par exemple, j'aime bien écouter des choses en",
      },
      { 80740: "allemand, j'écoute des podcasts  en allemand, j'essaye de" },
      {
        89799:
          "comprendre ...ahhh ok... j'apprends j'apprends l'allemand. J'aime bien lire",
      },
      {
        97799:
          "lire ....ah ok ah ouai... j'aime bien lire en allemand aussi, ok?",
      },
      { 106070: "J'aime bien apprendre l'allemand. Aussi, j'aime bien" },
      {
        109600:
          "l'espagnol, j'aime bien apprendre l'espagnol. Par exemple, écouter de la",
      },
      {
        115400:
          "musique en espagnol ... ah ok ... essayer de comprendre ou bien lire en espagnol ou",
      },
      {
        122960:
          "bien parler, parler avec quelqu'un parler en espagnol bla bla bla bla",
      },
      { 128240: "parler en espagnol. Donc j'aime beaucoup les langues," },
      {
        134080:
          "ok?  J'aime beaucoup les langues et moi ma langue c'est le français. Je parle je",
      },
      { 144170: "parle français. Et donc j'ai pensé :" },
      { 150220: "j'aime bien YouTube et j'aime bien les langues." },
      {
        157930: "Peut-être que je peux faire des vidéos sur YouTube pour vous,",
      },
      { 168170: "pour que vous puissiez apprendre le français." },
      {
        174920:
          "Ok, donc moi je veux faire des vidéos sur YouTube pour que vous vous puissiez",
      },
      { 182720: "apprendre le français. Donc aujourd'hui, maintenant," },
      { 189530: "c'est la première vidéo, c'est la vidéo numéro 1." },
      {
        201610: "Aujourd'hui, c'est la vidéo numéro 1, c'est une introduction.",
      },
      { 209800: "On se voit dans la vidéo numéro 2, ok ? À bientôt !" },
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

      if (timestamp >= startFrom) {
        const timeout = setTimeout(() => {
          lyricsPageId.innerHTML = "";
          const words = lista[timestamp].split(" ");

          words.forEach((word) => {
            const span = document.createElement("span");
            span.textContent = word;

            span.addEventListener("click", () => {
              isPaused = true;
              lastTimestamp = timestamp;

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

  playLyrics(0);

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
