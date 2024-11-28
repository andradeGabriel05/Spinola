var passedOnce = false;
let isPaused = false;
let currentTimeouts = [];
let lastTimestamp = 0;

export function wordsForTranslate() {
  const lyricsData = {
    lyricsTimeVerse: [
      { 5730: "Le French Club et jordi vous présentent le French Podcast, le podcast en français facile [Musique]" },
      { 15690: "Salut les french-clubbers ! Comment allez-vous ? Un, deux, trois, quatre, cinq, six, sept," },
      { 25200: "c'est le huitième épisode du French Podcast ! Je vous rappelle le principe du French Podcast," },
      { 33480: "c'est un podcast en français facile. C'est-à-dire un français que je souhaite" },
      { 40260: "accessible pour des personnes qui ont le niveau A2+, B1. Le niveau qu'on qualifie" },
      { 48780: "souvent d'intermédiaire et je vous rappelle que vous pouvez écouter ce French Podcast sur YouTube," },
      { 58170: "bien sûr, mais aussi sur Spotify, Google Podcasts et d'autres plateformes encore…" },
      { 66090: "Aujourd'hui c'est le 8 mars, et le 8 mars c'est la Journée internationale des Droits des Femmes." },
      { 71780: "Pour cette occasion, je voulais mettre à l'honneur une femme française mais laquelle choisir ? Alors," },
      { 79520: "j'ai laissé la communauté du French Club voter sur ma chaîne YouTube" },
      { 86940: "et, oui, vous le savez je suis un grand partisan de la démocratie. Vous aviez le" },
      { 93930: "choix entre quatre femmes : premièrement Jeanne d'Arc, l'héroïne de la guerre de Cent ans," },
      { 105960: "celle qui - alors que notre pays était dans une situation extrêmement critique- a délivré" },
      { 116360: "la France de l'occupation anglaise ce qui a permis au Roi de france d'obtenir une victoire totale et" },
      { 121540: "définitive sur son grand rival anglais. Jeanne d'Arc fait aujourd'hui l'objet d'une tentative" },
      { 132880: "de récupération de la part de l'extrême droite en France, c'est-à-dire de la partie la plus" },
      { 137570: "conservatrice du pays. Deuxièmement, je vous avais proposé le choix de Marie Curie, la scientifique." },
      { 145730: "Première femme à obtenir un prix Nobel. Je vous avais également proposé Brigitte Bardot," },
      { 159320: "le sex symbol du cinéma des années 60. Brigitte Bardot qu'on surnomme BB. « BB», ce sont ces" },
      { 171800: "initiales : Brigitte Bardot. Brigitte Bardot, elle est aussi connue en France pour son engagement" },
      { 183370: "pour la cause animale et contre la souffrance animale, elle s'est engagée dans cette lutte à" },
      { 193060: "une époque où on parlait très peu de cette cause. Brigitte Bardot est beaucoup plus qu'un ancien sex" },
      { 200390: "symbol. Brigitte Bardot, c'est l'histoire d'une femme engagée. Le quatrième et dernier choix" },
      { 209920: "était celui de Simone Veil. Simone Veil, c'est une femme d'État française. Elle a été déportée avec" },
      { 218170: "toute sa famille dans le camp de concentration nazi d'Auschwitz lorsqu'elle était enfant. Elle" },
      { 231940: "y a malheureusement perdu son père et sa mère mais elle et sa sœur vont survivre à cet enfer. Simone" },
      { 239650: "Veil est devenue un personnage incontournable du XXème siècle, c'est-à-dire un personnage très très" },
      { 251470: "important du vingtième siècle. Une fois ministre de la Santé, c'était dans les années 70-74 ou 75," },
      { 261160: "elle a proposé au Parlement une loi permettant aux femmes enceintes (c'est-à-dire les femmes" },
      { 270190: "qui portent dans leur ventre un enfant) de recourir à l’IVG (l'interruption volontaire" },
      { 280030: "de grossesse) c'est-à-dire d'offrir aux femmes la possibilité d'avorter. J'aurais pu ajouter" },
      { 291030: "d'autres femmes importantes à cette liste. Certains d'entre vous m'ont proposé par exemple" },
      { 298270: "Coco Chanel ou Marie-Antoinette. Cependant, il fallait faire un choix et vous avez été" },
      { 307220: "près de deux cents à voter. Vous avez choisi d'écouter un podcast sur… Marie Curie ! Vous" },
      { 316220: "avez été 40% à voter pour Marie Curie. Suivie de Jeanne d'Arc récupère quand même 29% des voix." },
      { 350590: "Que vous dire sur Marie Curie ? Certains d'entre vous contesteront peut-être le fait" },
    { 357310: "que Marie Curie était française. En effet, Marie Curie est née le 7 novembre 1867 à Varsovie," },
    { 368410: "capitale de l'actuelle Pologne. À cette époque, la Pologne est sous tutelle de la" },
    { 377170: "Russie. C'est-à-dire que la Pologne existait comme réalité nationale mais elle n'était pas" },
    { 385750: "indépendante. Elle appartenait à la Russie. Le nom de naissance de Marie Curie est d'ailleurs" },
    { 396640: "Maria Saloma Sklodowska alors je le prononce à la française pour respecter cette jolie" },
    { 409420: "langue qu’est le polonais. Marie Curie deviendra française par mariage. Enfant, on l'a surnommait" },
    { 415950: "«Magna» et c'était la petite dernière d'une famille nombreuse. Elle avait quatre grands" },
    { 424200: "frères et sœurs. Sa maman était institutrice et son papa professeur de mathématiques. La petite" },
    { 431400: "Maria était brillante à l'école. C'était la première de sa classe. À l'âge de 23 ans," },
    { 438140: "Maria travaille comme gouvernante dans une famille d'aristocrates. Les aristocrates" },
    { 447280: "sont des personnes riches qui appartiennent à l'élite. Maria travaille pour pouvoir rejoindre" },
    { 454140: "sa grande sœur à Paris et pour poursuivre ses études de mathématiques et de sciences" },
    { 461940: "physiques à l'Académie des sciences. Maria qu'on appelle désormais « Marie » découvre la France." },
    { 468870: "À cette époque, les filles qui étudiaient à l'université étaient très minoritaires." },
    { 476820: "Il y avait seulement 23 filles inscrites à l'université pour plus de 1800 jeunes hommes." },
    { 488540: "Elle obtient deux diplômes, le premier en sciences physiques et le deuxième en mathématiques. Elle" },
    { 497130: "commence à travailler dans des laboratoires aux côtés des plus grands scientifiques de l'époque." },
    { 505050: "Alors que Marie s'apprêtait à quitter la France pour servir son pays natal, la Pologne, Marie" },
    { 514000: "tombe amoureuse d'un charmant jeune homme qui lui aussi était un brillant chercheur : Pierre Curie." },
    { 524440: "Ils se sont mariés en 1895. Puis, Marie passe l'agrégation. L'agrégation, c'est" },
    { 533810: "le concours pour devenir professeure en France. Naturellement, Marie termine première du concours." },
    { 546620: "Deux ans après le mariage de Pierre et Marie, est née la petite Irène Curie, leur première" },
    { 555800: "fille. Irène deviendra, également par la suite, une grande scientifique et sera notamment l'un" },
    { 566000: "des six commissaires du Commissariat à l'énergie atomique créé par le général de Gaulle. En 1945," },
    { 575900: "Pierre et Marie Curie aménagent leurs laboratoires dans une étable. Une étable," },
    { 584210: "c'est l'endroit où on garde les vaches. Ils font des recherches sur la radioactivité mais" },
    { 593180: "ils travaillent sans aucune protection car à cette époque-là ils ne savaient pas que" },
    { 600850: "la radioactivité pouvait avoir des conséquences mortelles. Les deux chercheurs découvrent deux" },
    { 609230: "nouveaux éléments radioactifs : le polonium ainsi nommé en hommage au pays natal de Marie," },
    { 618710: "la Pologne, et le radium. En 1900, Marie développe une nouvelle technique de traitement du cancer qui" },
    { 631400: "consiste à irradier une tumeur avec une substance radioactive. En 1903, c'est la consécration," },
    { 643190: "les deux scientifiques Marie et Pierre - et leur associé Henri Becquerel - reçoivent le prix Nobel" },
    { 652420: "pour leurs recherches sur la radiation. Marie devient ainsi la première femme de l'histoire" },
    { 659650: "à obtenir un prix Nobel. En 1906, Marie et Pierre ont un deuxième bébé, la petite Ève Curie est née." },
    { 673510: "Contrairement à ses parents et à sa grande sœur, Ève sera une femme de lettres et une artiste. Sa" },
    { 682600: "mère, Marie, l'a d'ailleurs encouragée à suivre son propre chemin. Malheureusement," },
    { 694560: "c'est également en 1906 que Pierre est décédé, que Pierre est mort : il a été renversé par une" },
    { 703640: "calèche. Une calèche, c'est une voiture ancienne tractée par des chevaux. Marie" },
    { 710950: "se retrouve seule avec ses deux filles, Irène et Ève. Marie Curie récupère donc le poste de" },
    { 720350: "professeure à la Faculté des Sciences de Paris qu'occupait son époux Pierre. 1911 est une année" },
    { 731170: "particulière durant laquelle Marie a connu le meilleur mais aussi le pire. Le meilleur," },
    { 741240: "tout d'abord, elle est la seule femme invitée au Congrès Solvay. Le congrès Solvay était des" },
    { 752680: "conférences où se réunissaient les plus grands scientifiques de l'époque. Il y en a eu plusieurs" },
    { 760240: "tout au long du XXème siècle et ces congrès continuent d'exister au début du XXIème siècle." },
    { 769200: "Elle reçoit également un deuxième prix Nobel, en chimie cette fois-ci. Le pire, c'est la maladie" },
    { 781540: "qui fait son apparition Marie Curie est victime des effets de la radioactivité. Cette maladie va" },
    { 789960: "la ronger et entraînera sa mort un peu plus de vingt ans plus tard. Le pire aussi lorsque Marie" },
    { 798240: "est traînée dans la boue par la presse parisienne. Ça veut dire qu’elle a été injustement attaquée" },
    { 806790: "par la presse. La presse lui reproche d'avoir une relation amoureuse avec le physicien Paul" },
    { 814860: "Langevin. Marie Curie n'est pas seulement une des plus grandes scientifiques de l'histoire." },
    { 823490: "Marie Curie, c'est avant tout et surtout une femme libre. Une femme libre et une femme courageuse." },
    { 834310: "En 1914, c'est la Première Guerre mondiale. Marie Curie, élevée dans une famille de" },
    { 843120: "patriotes polonais et qui est restée toute sa vie très attachée à son pays natal a aussi" },
    { 853400: "fait preuve de patriotisme envers son pays d'adoption : la France. Elle part d'abord à" },
    { 860950: "Bordeaux pour protéger les réserves de radium. Lors de la première offensive" },
    { 871210: "allemande afin que ses réserves de radium ne tombent pas entre les mains ennemies. Puis," },
    { 878930: "elle a créé avec l'aide de la Croix rouge internationale des petites" },
    { 889350: "ambulances révolutionnaires équipées de matériel radiologique pour secourir les poilus. Les poilus," },
    { 896770: "c'est le nom que l'on donnait aux soldats français durant la Première Guerre mondiale." },
    { 904410: "Grâce aux appareils radiographiques qui se trouvent dans les ambulances on peut" },
    { 913920: "désormais savoir où se trouvent les éclats d'obus. C'est-à-dire les petits morceaux" },
    { 922630: "de bombes qui étaient entrées dans le corps des soldats blessés. Si nécessaire, on pouvait opérer" },
    { 930700: "directement depuis l'ambulance. Marie Curie a donc inventé le concept même de l'ambulance" },
    { 941570: "moderne. C'est-à-dire une voiture qui ne sert pas seulement à véhiculer les blessés mais qui" },
    { 1010240: "sert aussi à les prendre en charge, à les soigner directement depuis l'ambulance. Les militaires" },
    { 1020320: "français appellerons ces ambulances les «petites Curie». Courageuses, Mari et sa fille Irène," },
    { 1030500: "Irène a moins de 20 ans, vont passer leur permis de conduire pour pouvoir conduire elles-mêmes," },
    { 1040120: "ces «Petites Curie» au plus près du front. Le front, c'est la zone où s'affrontaient" },
    { 1050120: "les soldats français et allemands. On estime que ces 18 « petites Curie» ont permis de" },
    { 1060730: "sauver des dizaines de milliers de soldats français. Son courage, sa créativité vont" },
    { 1070930: "la rendre très populaire aux yeux des Français. En 1921, trois ans après la victoire française," },
    { 1081630: "Marie prend la défense d'une suffragette. C'était une suffragette emprisonnée. Les suffragettes" },
    { 1093050: "étaient des féministes qui protestaient pour le droit de vote des femmes. Je vous rappelle que" },
    { 1103730: "les femmes ne pouvaient pas voter en France. Les premières Françaises à voter le feront en 1945," },
    { 1111410: "après la Deuxième Guerre mondiale. Marie a très rarement pris la parole sur les questions" },
    { 1121480: "politiques. Elle pouvait élever la voix face à des situations qu'elle estimait injustes. Très marquée" },
    { 1130620: "par la guerre, Marie Curie comprend l'importance de la coopération entre les nations. Elle s'est" },
    { 1141560: "associée à un autre très grand scientifique, Albert Einstein, pour fonder la Commission" },
    { 1152390: "internationale de coopération intellectuelle qui est en fait l'ancêtre de l'actuelle Unesco." },
    { 1162360: "1934, Marie meurt de sa maladie due à une trop forte exposition au radium. L'histoire" },
    { 1173640: "de Marie Curie est finalement l'histoire d'une petite patriote polonaise, vive et intelligente," },
    { 1185260: "qui avait un destin résolument français. Marie Curie a été une grande scientifique," },
    { 1192520: "qui a fait avancer la science avec la découverte de la radioactivité. Marie" },
    { 1205990: "Curie a aussi été une pionnière, première femme à obtenir un diplôme en sciences à la Sorbonne." },
    { 1214180: "C'est le nom de l'université historique de Paris, première femme à avoir un doctorat de sciences," },
    { 1221110: "première femme professeur de sciences à la Sorbonne, première femme à obtenir un prix" },
    { 1232130: "Nobel en 1903. C'est encore aujourd'hui elle qui est la seule scientifique," },
    { 1242730: "hommes et femmes confondus, à obtenir deux prix Nobel dans des domaines différents : prix" },
    { 1253430: "Nobel de physique en 1903 et prix Nobel de chimie en 1911. Le plus incroyable," },
    { 1260430: "le plus extraordinaire, c'est que la petite Maria Salomea Sklodowska est arrivée en France" },
    { 1270150: "sans argent, sans soutien et qu'elle ne doit sa réussite qu’à son intelligence et son courage." },
    { 1280200: "Voilà ! C'était l'émouvante, l'incroyable histoire de cette grande scientifique qu’est Marie Curie." },
    { 1291030: "J'espère que cette histoire vous a plu. Je vous invite à me mettre un like à ce podcast," },
    { 1301630: "à cette vidéo. Je vous invite également à vous abonner à ces podcasts, cette chaîne parce que" },
    { 1312310: "j'ai plein d'autres podcast sur la langue et la culture françaises. Une dernière information," },
    { 1320320: "avant de se quitter : j'ai créé un groupe sur Telegram, un groupe qui s'appelle Le French" },
    { 1330350: "Club pour tout simplement les personnes qui ont envie de discuter, de parler en français, c’est" },
    { 1340190: "complètement gratuit, je le fais gratuitement, je l'anime de temps en temps. J’interviens de" },
    { 1350320: "temps en temps pour vous poser des questions, pour pour participer mais c'est surtout vous," },
    { 1360420: "entre vous, qui discutez. J'ai vu d'ailleurs que ça discute bien en ce moment. C'est complètement" },
    { 1370610: "gratuit l'adresse t.me/lefrenchclub D'accord ? Je vous invite à rejoindre le groupe Telegram. Voilà," },
    { 1380320: "je n'ai plus qu'à vous dire au revoir et à vous souhaiter une excellente semaine. Moi," },
    { 1390120: "je vous dis à vendredi pour la prochaine vidéo hebdomadaire du French Club" }
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
