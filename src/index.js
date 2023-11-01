let nomeHeroi = "Lord Rowan"
let xpHeroi = 9500
let nivel;

switch(true){
    case xpHeroi <= 1000:
        nivel = "FERRO"
    break;

    case xpHeroi > 1000 && xpHeroi <= 2000:
        nivel = "BRONZE"
        break;

    case xpHeroi > 2000 && xpHeroi <= 5000:
        nivel = "PRATA"
        break;

    case xpHeroi > 5000 && xpHeroi <= 7000:
        nivel = "OURO"
        break;

    case xpHeroi > 7000 && xpHeroi <= 8000:
        nivel = "PLATINA"
        break;

    case xpHeroi > 8000 && xpHeroi <= 9000:
        nivel = "ASCENDENTE"
        break;

    case xpHeroi > 9000 && xpHeroi <= 10000:
        nivel = "IMORTAL"
        break;

    default:
        nivel = "RADIANTE"
}

console.log("O héroi de nome " + nomeHeroi + " está no nível " + nivel)