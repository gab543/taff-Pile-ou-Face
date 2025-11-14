
let options = ["true", "false"]
let choixUser = prompt("Pile ou Face ?").toLowerCase()

while(options.includes(choixUser)){
}

function lancer(){
    etat_piece = Math.random(1, 2);
    if (etat_piece === 1) {
        etat_piece = "pile"
    }
    elseif (etat_piece === 2) {
        etat_piece = "face"
    }
    console.log(etat_piece)
    return etat_piece
}