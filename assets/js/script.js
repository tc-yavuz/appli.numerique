let chapters = {
    debut: {
        titre: "Le Choix Fatidique",
        description: "Vous, un pirate audacieux, étiez déterminé à former l'équipage le plus redoutable de tous les temps. Cependant, le destin avait un plan bien différent pour vous ce jour-là. Un chasseur de pirates capturé, un homme robuste aux cheveux en bataille et aux yeux perçants, était traîné devant vous. Ses poignets étaient liés, et il fixait l'horizon, résigné à son sort. Le bruit de la foule enragée monta en crescendo, réclamant la mort du chasseur. Vous aviez trois options cruciales à considérer : laisser cet homme mourir, le sauver et en faire un membre de votre équipage, ou lui rendre ses épées pour lui donner une chance de se battre pour sa vie.",
        image: "./assets/img/debut.jpg",
        boutons: [{
                titre: "Le laissez mourir",
                destination: "noyade",
            },
            {
                titre: "Tu le sauves",
                destination: "alliance",
            },
            {
                titre: "Tu lui rends ses épées",
                destination: "remercie",
            },
        ],
    },
    noyade: {
        titre: "L'Abondance",
        description: "Tu le laisses mourir, tu navigues dans les mers et tu te noies immédiatement.",
        image: "./assets/img/noyade.jpg",
        boutons: [{
            titre: "Recommencer",
            destination: "debut",
        }, ],
    },
    remercie: {
        titre: "Remercie",
        description: "Tu lui rends ses épées et il t'exprime sa gratitude.",
        image: "./assets/img/remercie.jpg",
        boutons: [{
            titre: "Suite",
            destination: "alliance",
        }, ],
    },
    alliance: {
        titre: "L'Alliance Inattendue",
        description: "Contre toute attente, vous avez choisi de sauver le chasseur de pirates. Il se leva, essuya la poussière de ses vêtements, et avec un regard de gratitude mêlé de méfiance, il prêta serment de fidélité à votre équipage. Alors que vous prépariez votre fuite de l'île, une silhouette agile se glissa dans l'ombre. Une voleuse de cartes vous proposa de rejoindre votre équipage. Ses talents pourraient s'avérer précieux, mais sa réputation était celle d'une opportuniste sans scrupules. Acceptez-vous son offre?",
        image: "./assets/img/alliance.webp",
        boutons: [{
                titre: "Oui",
                destination: "dilemme",
            },
            {
                titre: "Non",
                destination: "perte",
            },
        ],
    },
    perte: {
        titre: "Une Grande Perte",
        description: "Elle se fait capturer, et vous perdez la carte qu'elle possédait menant au grand trésor.",
        image: "./assets/img/perte.jpg",
        boutons: [{
            titre: "Recommencer",
            destination: "debut",
        }, ],
    },
    dilemme: {
        titre: "Le Dilemme de la Nourriture",
        description: "La voleuse de carte intégra rapidement l'équipage, apportant avec elle sa connaissance des mers et son talent pour dérober les trésors cachés. Votre équipage s'apprêtait à appareiller, mais une question épineuse se posa : deviez-vous remplir le bateau de provisions ou risquer de naviguer à vide?",
        image: "./assets/img/dilemme.webp",
        boutons: [{
                titre: "Oui",
                destination: "assault",
            },
            {
                titre: "Non",
                destination: "famine",
            },
        ],
    },
    assault: {
        titre: "Attaque de Pirates!",
        description: "Après avoir chargé le bateau de nourriture, vous prenez la mer, mais vous êtes attaqués par des pirates. Dans ce moment critique, le chasseur décide de vous protéger.",
        image: "./assets/img/assault.jpg",
        boutons: [{
            titre: "Suite",
            destination: "defaite",
        }, ],
    },
    triomphe: {
        titre: "Victoire Contre les Pirates!",
        description: "Le chasseur de pirates parvient à vous défendre efficacement avec ses épées, ce qui vous permet de vous échapper.",
        image: "./assets/img/triomphe.jpg",
        boutons: [{
            titre: "Suite",
            destination: "naviguer",
        }, ],
    },
    defaite: {
        titre: "Defaite Contre les Pirates!",
        description: "Vous mourrez et c'est la fin de l'aventure.",
        image: "./assets/img/defaite.webp",
        boutons: [{
            titre: "Recommencer",
            destination: "debut",
        }, ],
    },
    famine: {
        titre: "La Famine",
        description: "Vous mourrez tous de faim avant de trouver le grand trésor.",
        image: "./assets/img/famine.jpg",
        boutons: [{
            titre: "Recommencer",
            destination: "debut",
        }, ],
    },
    naviguer: {
        titre: "La Naviguation",
        description: "Prêtes à affronter les tempêtes et les longues traversées. Alors que vous vous apprêtiez à larguer les amarres, une autre décision cruciale devait être prise. Qui va naviguer le bateau?",
        image: "./assets/img/naviguer.jpg",
        boutons: [{
                titre: "Vous",
                destination: "capitaine",
            },
            {
                titre: "Chasseur de pirates",
                destination: "chasseur",
            },
            {
                titre: "La voleuse",
                destination: "voleuse",
            },
        ],
    },
    capitaine: {
        titre: "Naviguateur: Vous!",
        description: "Vous ne savez pas naviguer le bateau et vous vous perdez dans l'océan.",
        image: "./assets/img/capitaine.jpg",
        boutons: [{
            titre: "Recommencer",
            destination: "debut",
        }, ],
    },
    chasseur: {
        titre: "Naviguateur: Le Chasseur de pirates!",
        description: "Il vous dirige dans un tsunami et vous mourez.",
        image: "./assets/img/tsunami.jpg",
        boutons: [{
            titre: "Recommencer",
            destination: "debut",
        }, ],
    },
    voleuse: {
        titre: "Naviguatrice: La Voleuse!",
        description: "La voleuse possède l'expérience nécessaire et sait comment naviguer, ce qui vous permet de découvrir le grand trésor !",
        image: "./assets/img/voleuse.jpg",
        boutons: [{
            titre: "Victoire",
            destination: "victoire",
        }, ],
    },
    victoire: {
        titre: "Victoire!",
        description: "Félicitation! Vous avez trouver le grand trésor!",
        image: "./assets/img/victoire.jpg",
        boutons: [{
            titre: "Retour",
            destination: "debut",
        }, ],
    },
}; //Faut faire pour les autres chapitres aussi

let twist = false;

function goToChapter(chapitre) {
    let objet = chapters[chapitre];

    if (objet != undefined) {
        let titreChap = document.getElementById("titre");
        let paragrapheChap = document.getElementById("para");
        let imgChap = document.getElementById("logo");

        titreChap.textContent = objet.titre;
        paragrapheChap.textContent = objet.description;
        imgChap.src = objet.image;

        let btn = document.querySelector(".bouton");

        while (btn.firstChild) {
            btn.removeChild(btn.firstChild);
        }

        if (objet.boutons && objet.boutons.length > 0) {
            for (let i = 0; i < objet.boutons.length; i++) {
                let newBtn = document.createElement("button");
                newBtn.setAttribute("id", "btn");
                newBtn.textContent = objet.boutons[i].titre;

                newBtn.addEventListener("click", () => {
                    let chapitrePresent = objet.boutons[i].destination;
                    goToChapter(chapitrePresent);
                });

                btn.appendChild(newBtn);
            }
        }
        if (chapitre === "remercie") {
            twist = true;
        }
        if (chapitre === "assault") {
            if (twist === true) {
                objet.boutons[0].destination = "triomphe";
            }
        }
    }
}
goToChapter("debut");