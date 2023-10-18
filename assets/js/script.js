let chapters = {
    debut: {
        titre: "Le Choix Fatidique",
        description: "Vous, un pirate audacieux, étiez déterminé à former l'équipage le plus redoutable de tous les temps. Cependant, le destin avait un plan bien différent pour vous ce jour-là. Un chasseur de pirates capturé, un homme robuste aux cheveux en bataille et aux yeux perçants, était traîné devant vous. Ses poignets étaient liés, et il fixait l'horizon, résigné à son sort. Le bruit de la foule enragée monta en crescendo, réclamant la mort du chasseur. Vous aviez trois options cruciales à considérer : laisser cet homme mourir, le sauver et en faire un membre de votre équipage, ou lui rendre ses épées pour lui donner une chance de se battre pour sa vie.",
        image: "./img/imgchap1.jpg",
        boutons: [
            {titre: "Le laissez mourir", destination: "noyade"},
            {titre: "Tu le sauves", destination: "Rejoin"},
            {titre: "Tu lui rends ses épées", destination: "Rejoin"}
        ]
    },
    alliance: {
        titre: "L'Alliance Inattendue",
        description: "Contre toute attente, vous avez choisi de rendre les épées au chasseur de pirates. Il se leva, essuya la poussière de ses vêtements, et avec un regard de gratitude mêlé de méfiance, il prêta serment de fidélité à votre équipage. Alors que vous prépariez votre fuite de l'île, une silhouette agile se glissa dans l'ombre. Une voleuse de cartes vous proposa de rejoindre votre équipage. Ses talents pourraient s'avérer précieux, mais sa réputation était celle d'une opportuniste sans scrupules. Acceptez-vous son offre ?",
        image: "./img/allianceimg.png",
        boutons: [
            {titre: "Oui", destination: "Carte"},
            {titre: "Non", destination: "Perte"}
        ]
    },
    dilemme: {
        titre: "Le Dilemme de la Nourriture",
        description: "La voleuse de carte intégra rapidement l'équipage, apportant avec elle sa connaissance des mers et son talent pour dérober les trésors cachés. Votre équipage s'apprêtait à appareiller, mais une question épineuse se posa : deviez-vous remplir le bateau de provisions ou risquer de naviguer à vide ?",
        image: "./img/dilemmeimg.jpg",
        boutons: [
            {titre: "Oui", destination: "Famine"},
            {titre: "Non", destination: "Provisions"}
        ]
    },
    naviguer: {
        titre: "Le Dilemme de la Nourriture",
        description: "Les cales du navire étaient remplies de provisions, prêtes à affronter les tempêtes et les longues traversées. Alors que vous vous apprêtiez à larguer les amarres, une autre décision cruciale devait être prise. Qui va naviguer le bateau ?",
        image: "./img/naviguerimg.webp",
        boutons: [
            {titre: "Vous", destination: "Perdu"},
            {titre: "Chasseur de pirates", destination: "Tsunami"},
            {titre: "La voleuse", destination: "Tresor"}
        ]
    }
};//Faut faire pour les autres chapitres aussi

let twist = false;

function goToChapter(chapitre) {
    
    const objet = chapters[chapitre];

    if (objet) {
        console.log("Titre du chapitre:", objet.titre);
        console.log("Chapitre:", objet.description);
        console.log("Boutons:", objet.boutons.map(bouton => bouton.destination).join(', '));
    } else {
        console.log("Le chapitre spécifié n'existe pas.");
    }

    const btn = document.querySelector(".bouton");

    while (btn.firstChild) {
        btn.removeChild(btn.firstChild);
    }

    for (let i = 0; i < objet.boutons.length; i++) {
        const newBtn = document.createElement("button");
        newBtn.textContent = objet.boutons[i].titre;

        newBtn.addEventListener("click", () => {
            goToChapter(objet.boutons[i].destination);
        });

        btn.appendChild(newBtn);
    }
}

goToChapter('debut');
