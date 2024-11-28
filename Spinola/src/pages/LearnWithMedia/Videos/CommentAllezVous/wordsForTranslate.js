var passedOnce = false;
let isPaused = false;
let currentTimeouts = [];
let lastTimestamp = 0;

export function wordsForTranslate() {
  const lyricsData = {
    lyricsTimeVerse: [
      { 990: "[Musique]" },
      { 34250: "vous regardez coffee break ferry bonjour" },
      { 38180: "et bienvenue à tous pour ce tout premier" },
      { 40250: "épisode qu'au public french to go ma" },
      { 43370: "question aujourd'hui est vraiment facile" },
      { 45470: "pour ce premier épisode" },
      { 46960: "comment vas-tu plus formel comment allez" },
      { 50629: "vous je répète comment vas-tu plus" },
      { 53629: "formel comment allez vous alors" },
      { 57050: "regardons ensemble les réponses je vais" },
      { 60080: "bien merci" },
      { 61239: "très bien très très bien" },
      { 65700: "je vais bien merci je vais bien je vais" },
      { 71250: "bien je vais très bien il fait beau" },
      { 75010: "je vais très bien je vais très bien" },
      { 78340: "merci" },
      { 80840: "je vais très bien j'y vais très bien je" },
      { 85070: "viens de moi j'ai une très bonne glace" },
      { 88460: "je vais très bien aujourd'hui ça va très" },
      { 92430: "bien ça va aussi" },
      { 95030: "ça va très bien super bien je vais très" },
      { 100050: "très bien fait beau le soleil brille et" },
      { 103500: "je suis en vacances je vais très bien" },
      { 107340: "avec ce grand soleil l'écouté je vais" },
      { 110730: "très bien chaudement" },
      { 114740: "je vais super bien je suis actuellement" },
      { 117030: "avec des amis" },
      { 119210: "je fais très bien on a retrouvé des amis" },
      { 121700: "il fait beau c'est formidable je vais" },
      { 125750: "très bien j'ai très chaud aujourd'hui ça" },
      { 129979: "va très bien j'ai passé une agréable" },
      { 131090: "journée" },
      { 131780: "j'ai fait du bateau et comme il faisait" },
      { 135560: "chaud il y avait de l'air et c'était" },
      { 137300: "très agréable" },
      { 138610: "alors c'était facile regardons les" },
      { 141350: "réponses" },
      { 141770: "encore une fois mais cette fois ci avec" },
      { 147400: "les sous titres je vais bien merci" },
      { 151830: "très bien très très bien" },
      { 157410: "je vais bien merci je vais bien je vais" },
      { 161130: "bien je vais très bien il fait beau" },
      { 164490: "je vais très bien je vais très bien" },
      { 167000: "merci" },
      { 171990: "je vais très bien j'y mettrai bien je" },
      { 175590: "viens de manger une très bonne glace je" },
      { 178590: "vais très bien aujourd'hui ça va très" },
      { 181160: "bien ça va aussi" },
      { 186180: "ça va très bien super bien je vais très" },
      { 189630: "très bien fait beau le soleil brille et" },
      { 193500: "je suis en vacances je vais très bien" },
      { 195650: "avec ce grand soleil" },
      { 201110: "écoutez je vais très bien chaudement" },
      { 203760: "je vais super bien je suis actuellement" },
      { 223170: "avec des amis je vais très bien où on a" },
      { 229079: "retrouvé des amis de fait beau c'est" },
      { 233370: "formidable je vais très bien j'ai très" },
      { 236849: "chaud aujourd'hui ça va très bien j'ai" },
      { 237930: "passé une agréable journée" },
      { 241709: "j'ai fait du bateau et comme il faisait" },
      { 243450: "chaud il y avait de l'air et c'était" },
      { 247049: "très agréable excellente ses réponses" },
      { 249510: "non alors moi maintenant j'ai une" },
      { 254239: "question pour vous comment allez vous" },
      { 257760: "bravo malheureusement c'est tout pour" },
      { 259500: "aujourd'hui mais à très bientôt pour un" },
      { 261450: "autre épisode de koh phi briques french" },
      { 263900: "to go salut à la prochaine" },
      { 264370: "[Musique]" },
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
