export function test(videoState) {
  const lyricsData = {
    lyricsTimeVerse: [
      { time: 4282, verse: "Et il y a les mots que je ne dirai pas!" },
      {
        time: 7855,
        verse: "Tous ces mots qui font peur quand ils ne font pas rire!",
      },
      {
        time: 11434,
        verse: "Qui sont dans trop de films, de chansons et de livres!",
      },
      { time: 15034, verse: "Je voudrais vous les dire!" },
      { time: 19034, verse: "Et je voudrais les vivre!" },
      { time: 22567, verse: "Je ne le ferai pas!" },
      { time: 26034, verse: "Je veux, je ne peux pas!" },
      { time: 30034, verse: "Je suis seule à crever et je sais où vous êtes!" },
      {
        time: 34534,
        verse: "J'arrive, attendez-moi, nous allons nous connaître!",
      },
      {
        time: 39034,
        verse: "Préparez votre temps, pour vous j'ai tout le mien!",
      },
      { time: 45034, verse: "Je voudrais arriver, je reste, je me déteste!" },
      { time: 52034, verse: "Je n'arriverai pas!" },
      { time: 55034, verse: "Je veux, je ne peux pas!" },
      { time: 61034, verse: "Je devrais vous parler!" },
      { time: 64034, verse: "Je devrais arriver!" },
      { time: 67034, verse: "Ou je devrais dormir!" },
      { time: 76034, verse: "J'ai peur que tu sois sourd!" },
      { time: 78034, verse: "J'ai peur que tu sois lâche!" },
      { time: 80534, verse: "J'ai peur d'être indiscrète!" },
      {
        time: 88034,
        verse: "Je ne peux pas vous dire que je t'aime peut-être!",
      },
      { time: 90034, verse: "Mais si tu crois un jour que tu m'aimes!" },
      { time: 94034, verse: "Ne crois pas que tes souvenirs me gênent!" },
      { time: 99034, verse: "Et cours, cours jusqu'à perdre haleine!" },
      { time: 104034, verse: "Viens me retrouver!" },
      { time: 109034, verse: "Si tu crois un jour que tu m'aimes!" },
      { time: 113034, verse: "Et si ce jour-là tu as de la peine!" },
      { time: 118034, verse: "À trouver où tous ces chemins te mènent!" },
      { time: 123034, verse: "Viens me retrouver!" },
      { time: 130034, verse: "Si le dégoût de la vie vient en toi!" },
      { time: 138033, verse: "Si la paresse de la vie s'installe en toi!" },
      { time: 145034, verse: "Pense à moi!" },
      { time: 149034, verse: "Pense à moi!" },
      { time: 155034, verse: "Mais si tu crois un jour que tu m'aimes!" },
      { time: 158034, verse: "Ne le considère pas comme un problème!" },
      { time: 163034, verse: "Et cours et cours jusqu'à perdre haleine!" },
      { time: 168034, verse: "Viens me retrouver!" },
      { time: 173034, verse: "Si tu crois un jour que tu m'aimes!" },
      { time: 177034, verse: "N'attends pas un jour, pas une semaine!" },
      { time: 182034, verse: "Car tu ne sais pas où la vie t'amène!" },
      { time: 187034, verse: "Viens me retrouver!" },
      { time: 194034, verse: "Si le dégoût de la vie vient en toi!" },
      { time: 202034, verse: "Si la paresse de la vie s'installe en toi!" },
      { time: 209034, verse: "Pense à moi!" },
      { time: 213034, verse: "Pense à moi!" },
    ],
  };

  lyricsData.lyricsTimeVerse.forEach((lista) => {
    setTimeout(() => {
      lyricsPageId.innerHTML = "";
      const words = lista.verse.split(" ");
      words.forEach((word) => {
        const span = document.createElement("span");
        span.textContent = word;
        lyricsPageId.appendChild(span);
      });
    }, lista.time);
  });
}
