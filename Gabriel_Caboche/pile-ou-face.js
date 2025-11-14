
let options = ["true", "false"]
let etat_piece = "";
let replay = true;

function lancer(){
    etat_piece = Math.floor(Math.random() * 2) + 1;
    if (etat_piece === 1) {
        etat_piece = "pile";
    }
    else if (etat_piece === 2) {
        etat_piece = "face";
    }
    console.log(etat_piece);
    return etat_piece;
}
while (replay == true) {
    let choixUser = prompt("Pile ou Face ?").toLowerCase();
    while (choixUser !== "pile" && choixUser !== "face") {
        choixUser = prompt("Veuillez choisir entre Pile ou Face").toLowerCase()
    }

    lancer();

    if (choixUser === etat_piece) {
        alert("Gagné !");
        replay = confirm("Voulez-vous rejouer ?");
    } else {
        alert("Perdu !");
        replay = confirm("Voulez-vous rejouer ?");
    }
}