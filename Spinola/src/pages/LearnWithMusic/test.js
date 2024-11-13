const timeoutIds = [];
var time = 0;
var currentTime = 0;
const valoresAtuais = [];
var currentVerseIndex = 0;
var tempoAtual = 0
export function test(videoState, passedOnce) {
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

  if (videoState === "pause") {
    timeoutIds.forEach((id) => clearTimeout(id));
    valoresAtuais.length = 0;
    timeoutIds.length = 0;
    console.log("Pausou");
    console.log(time);

    //para pegar o tempo do pause
    setValor(time);
    return time;
  }

  valoresAtuais.length = 0;
  let contador = 0;

  lyricsData.lyricsTimeVerse.forEach((lista, index) => {
    const originalKey = Object.keys(lista)[0];


    const intervalId = setTimeout(
      () => {
        let key = originalKey;
        if (passedOnce && time != undefined) {
          time = Number(originalKey);
        }

        const verse = lista[originalKey]; // Sempre usa a key original para pegar o verso
        if (!verse) {
          console.warn(`No verse found for key ${originalKey}`);
          return;
        }

        time = Number(originalKey);
        lyricsPageId.innerHTML = "";
        const words = verse.split(" ");

        words.forEach((word) => {
          contador += 1;
          const chanceOfWrite = parseInt(Math.random() * 100 + 1);

          const input = document.createElement("input");
          input.id = `input-${contador}`;
          input.setAttribute("data-word", word);

          if (chanceOfWrite < 100) {
            input.value = word;
            input.disabled = true;
          } else {
            input.value = "";
          }

          lyricsPageId.appendChild(input);
          valoresAtuais.push(input.value);

          input.addEventListener("keyup", () => {
            checkInputs();
          });
        });

        if (index + 1 < lyricsData.lyricsTimeVerse.length) {
          const nextVerse = lyricsData.lyricsTimeVerse[index + 1];
          time = Number(Object.keys(nextVerse)[0]);
          console.log("Próximo tempo:", time);
        }

        if (valoresAtuais.includes("")) {
          test("pause", true);
          return;
        }

        tempoAtual = passedOnce ? Number(originalKey) - time : Number(originalKey)
      },
      passedOnce ? Number(originalKey) - time : Number(originalKey)
    );
    timeoutIds.push(intervalId);
  });
}

function checkInputs() {
  console.log(time);
  const inputs = document.querySelectorAll("#lyricsPageId input");
  let allCorrect = true;

  inputs.forEach((input) => {
    const correctWord = input.getAttribute("data-word");
    if (input.value !== correctWord) {
      allCorrect = false;
    }
  });

  if (allCorrect) {
    console.log("foi!"); // Prossegue o tempo do texto
    console.log(time);

    setValor(tempoAtual);
    valoresAtuais.length = 0;

    test("playing", true);
  } else {
    console.log("não foi");
  }
}

let valorDeRetorno = 0;

export function setValor(valor) {
  valorDeRetorno = valor;
}

export function getValor() {
  return valorDeRetorno;
}
