export function test() {
  const lyricsData = {
    lyricsTimeVerse: [
      // 4282
      { 0: "Et il y a les mots que je ne dirai pas" },
      { 7855: "Tous ces mots qui font peur quand ils ne font pas rire" },
      {
        11434: "Qui sont dans trop de films, de chansons et de livres",
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

  var contador = 0;

  lyricsData.lyricsTimeVerse.forEach((lista) => {
    var originalKey = Object.keys(lista)[0];

    setTimeout(() => {
      lyricsPageId.innerHTML = "";
      const words = lista[originalKey].split(" ");

      words.forEach((word) => {
        contador += 1;

        const span = document.createElement("span");
        span.id = `span-${contador}`;
        span.setAttribute("data-word", word);

        span.textContent = word;
        span.disabled = true;

        lyricsPageId.appendChild(span);

        span.addEventListener("click", () => {
          setClickedWord(span.textContent);
          const wordTranslate = document.createElement("div");
          wordTranslate.id = "wordTranslateBox";

          lyricsPageId.appendChild(wordTranslate);

          const spanInsideDiv = document.createElement("span");
          spanInsideDiv.id = `spanInsideDiv`;
          spanInsideDiv.textContent = span.textContent; //o texto que o usuario clicou

          wordTranslate.appendChild(spanInsideDiv);

          const closeX = document.createElement("p");
          closeX.id = "closeX";
          closeX.textContent = "X";
          closeX.onclick = teste;

          spanInsideDiv.appendChild(closeX);
        });
      });
    }, originalKey);
    // }, 0);
  });
}
let clickedWord = "";

function setClickedWord(word) {
  clickedWord = word;
}

export function getClickedWord() {
  return clickedWord;
}

function teste() {
  const wordTranslate = document.getElementById("wordTranslateBox");
  wordTranslate.remove();
  setClickedWord("'");
}
