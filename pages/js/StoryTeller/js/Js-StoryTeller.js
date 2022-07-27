console.log("Début du script");

var prenom = prompt("Entrez un prénom.");
var compagnon = prompt("Entrez deux autres prénoms séparé par un 'et'");
var classe = prompt("Entrez une classe d'héroïque fantasy.");
var monstre = prompt("Entrez le nom commun d'une créature fantastique (ex: un vampire)");
var membre = prompt("Entrez un membre du corps humain. (ex : la jambe gauche)");
var splCompagnon = compagnon.split("et");
var compagnon1 = splCompagnon[0];
var compagnon2 = splCompagnon[1];
var splMonstre = monstre.split(", ");
var artMonstre = splMonstre[0];
var nomMonstre = splMonstre[1];
var splMembre = membre.split(" ");
var artMembre = splMembre[0];
var nomMembre = splMembre[1];
var coteMembre = splMembre[2];
var genre = prompt("Quel est votre sexe ? (homme/femme)");

function definie() {
    if (artMonstre == "un") {
        genre2 = "le";
    } else {
        genre2 = "la";
    }
}
//
function definie2() {
    if (artMonstre == "un") {
        genre3 = "le";
    } else {
        genre3 = "la";
    }
}

function bless() {
    if (artMembre == "la") {
        artMembre = "à la";
    } else {
        artMembre = "au";
    }
}

function sexe() {
    if (genre == "femme") {
        genre = "la candidate parfaite";
    } else {
        genre = "le candidat parfait";
    }
}

definie()

definie2()

bless()

sexe()

var test = ["Le", "monde", "d’Almeria", "est", "en", "proie", "à", "de", "terribles", "ténèbres,", "moi :", prenom, "ainsi", "que", "mes", "compagnons :", compagnon, "avons", "pour", "tâche", "d’éviter", "que", "cela", "se", "produise,", "grâce", "à", "mes", "compétences", "de", classe, "je", "suis", genre, "pour", "éliminer", "ce", "mal.", "Je", "viens", "du", "petit", "village", "de", "Maigrepassage,", "j’ai", "eu", "une", "enfance", "compliqué", "car", "en", "effet", "mon", "village", "s’est", "fait", "raser", "par", artMonstre, nomMonstre, "et", "ses", "sbires.", "Je", "ne", "sortis", "pas", "indemne", "de", "cette", "nuit,", "en", "effet", "j’ai", "subi", "une", "grave", "blessure", artMembre, nomMembre, coteMembre, "qui", "encore", "aujourd’hui", "me", "fait", "souffrir", "et", "me", "pousse", "à", "chercher", "vengeance."];

var i = 0;
var text = test[i];

function write() {
    i++;
    document.getElementById("debut").innerHTML = text;
    text = text + " " + test[i];
}

function refresh() {
    if (i != test.length) {
        write();
    }
}

setInterval("refresh()", 150);


var test2 = ["Nous", "avons", "donc", "embarqué", "sur", "un", "vieux", "rafiot", "pour", "traverser", "une", "mer", "agitée,", "je", "ne", "pensais", "pas", "que", "ce", "navire", "allé", "résister", "à", "la", "traversée,", "mais", "nous", "sommes", "bel", "et", "bien", "arrivés", "sur", "l’île", "aux", "échos.",
    "C’est", "sur", "cette", "île", "que", "nous", "devions", "trouver", "le", "responsable", "de", "toute", "cette", "menace.", "Dès", "que", "nous", "avons", "posé", "le", "pied", "sur", "cette", "île", compagnon2, "a", "ressenti", "une", "puissance", "colossale.",
    "Nous", "avancions", "alors", "avec", "la", "plus", "grande", "prudence,", "nous", "reussîmes", "à", "déjouer", "moult", "pièges,", "vaincu", "de", "nombreuses", "créatures", "impies.",
    "Malheureusement", compagnon1, "n’a", "pas", "survécu", "à", "la", "dernière", "embuscade,", "il", "se", "sacrifia", "pour", "nous", "permettre", "d’atteindre", "le", "centre", "de", "l’île."
]

console.log(test2.length);

var j = 0;
var text2 = test2[j];

function write2() {
    j++;
    document.getElementById("milieu").innerHTML = text2;
    text2 = text2 + " " + test2[j];
}

function refresh2() {
    if (j != test2.length && i == test.length) {
        write2();
    }
}

setInterval("refresh2()", 150);

var test3 = ["La", "vision", "qui", "ai", "apparue", "devant", "nous", "était", "effroyable,", "un", "charnier", "pourrissant","remplis", "de", "corps", "exsangues,", "de", "vers", "grouillants",
"se", "repaissant", "de", "ces", "carcasses,", "et", "surtout", "face", "à", "moi", "se", "trouvait", "mon", "pire", "ennemi.", genre2, nomMonstre, "qui", "avait", "ravagé", "mon",
 "village,", "tué", "mes", "parents,", "massacré", "tous", "mes", "amis.", "Cette", "vision", "a", "produit", "deux", "réactions", "chez", "moi,", "premièrement", "mon", "sang", "se",
 "glaça,", "puis", "peu", "de", "temps", "après", "il", "se", "mit", "a", "bouillir", "de", "rage.", "Je", "m’élança", "pour", "l’occire", "de", "mes", "mains.",
 "Quelle", "mauvaise", "idée", "se", "fut,", "au", "moment", "où", "je", "vis", "son", "corps", "s’écrouler", "sur", "le", "sol,", "je", "ne", genre3, "voyais",
 "plus", "devant", "moi,", "mais", "à", "la", "place", "il", "y", "avait", compagnon2, "transpercé", "par", "mon", "arme,", "son", "regard", "vide,", "son", "sang",
 "coulant", "sur", "mes", "mains.","Ne", "pouvant", "plus", "bouger", "tétanisé", "par", "cette", "vision", "je", "fus", "sans", "défense.", "Je", "ne", "tardai", "pas",
 "à", "rejoindre", "mes", "deux", "compagnons,", "enfin", "c’est", "ce", "que", "j’espérai.", "Mais", "non", "cette", "créature", "avait", "d’autres", "plans", "pour", "moi.", "Depuis",
 "ce", "jour", "je", "ne", "suis", "plus", "qu’un", "corps", "sans", "volonté", "à", "son", "service,", "ayant", "plus", "que", "mes", "souvenirs", "pour", "me",
 "hanter."
];


var a = 0;
var text3 = test3[a];

function write3() {
    a++;
    document.getElementById("fin").innerHTML = text3;
    text3 = text3 + " " + test3[a];
}

function refresh3() {
    if (a != test3.length && j == test2.length && i == test.length) {
        write3();
    }
}

setInterval("refresh3()", 150);

document.getElementById('debut').style.animationPlayState = "running";
document.getElementById('milieu').style.animationPlayState = "running"
document.getElementById('fin').style.animationPlayState = "running"


console.log("Prenom = ", +prenom);
console.log("Compagnon = ", +compagnon);
console.log("Classe = ", +classe);
console.log("Monstre = ", +monstre);
console.log("Membre = ", +membre);

console.log("fin du script");
