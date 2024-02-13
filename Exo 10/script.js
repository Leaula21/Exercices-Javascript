// Code de départ
let jeux = ["Space Adventure", "Castle Quest", "Mystery Island", "Robot Wars", "Jungle Journey", "Racing Rush", "Pirate's Treasure", "Alien Invasion", "Super Sports", "Haunted Mansion", "Galactic Odyssey", "Winter Wonderland"];
let mois = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
let liste = document.getElementById("listeJeux");

//// Créer une liste ordonnée sur la page web qui affiche chaque mois avec son jeu vidéo associé.

// Utilisez la boucle for pour parcourir le tableau des jeux. 
for ( let i = 0; i<jeux.length; i++ ){
console.log(`${jeux[i]} : ${mois[i]}`)
// Pour chaque jeu, créez un élément de liste (li)
let listItem = document.createElement("li");
listItem.textContent = `${jeux[i]} : ${mois[i]}`;
// Ajoutez-le à la liste ordonnée (ol) déjà présente sur la page
liste.appendChild(listItem);}
