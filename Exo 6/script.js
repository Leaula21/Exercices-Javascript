// Code de départ
let conteneur = document.getElementById("displayContainer");
//// Utilisation de parseInt pour que les nombres soient reconnus
let numeroDuJeu = parseInt(prompt("Entrez le numéro du jeu (1, 2, 3 ou 4):"));
// Utilisation de switch case pour déterminer la signification du code et l'afficher.
let jeuName = "";
switch (numeroDuJeu) {
    case 1:
        jeuName = "Space Adventure";
        break;
    case 2:
        jeuName = "Castle Quest";
        break;
    case 3:
        jeuName = "Mystery Island";
        break;
    case 4:
        jeuName = "Robot Wars";
        break;
    default:
        jeuName = "Jeu inconnu";
}
console.log(jeuName); 
//// Affichage du nom du jeu dans le container HTML
conteneur.innerHTML = jeuName;