let final = calculateRanking(10, 3);

function calculateRanking(wins, defeats) {
    let ranking = wins - defeats;
    let level = "";

    if (wins <= 10) {
        level = "Ferro";
        return "O herói tem saldo de " + ranking + " e está no nivel " + level;
    } else if (wins >= 11 && wins <= 20) {
        level = "Bronze";
        return "O herói tem saldo de " + ranking + " e está no nivel " + level;
    } else if (wins >= 21 && wins <= 50) {
        level = "Prata";
        return "O herói tem saldo de " + ranking + " e está no nivel " + level;
    } else if (wins >= 51 && wins <= 80) {
        level = "Ouro";
        return "O herói tem saldo de " + ranking + " e está no nivel " + level;
    } else if (wins >= 81 && wins <= 90) {
        level = "Diamante";
        return "O herói tem saldo de " + ranking + " e está no nivel " + level;
    } else if (wins >= 91 && wins <= 100) {
        level = "Lendário";
        return "O herói tem saldo de " + ranking + " e está no nivel " + level;
    } else if (wins >= 101) {
        level = "Imortal";
        return "O herói tem saldo de " + ranking + " e está no nivel " + level;
    }
}

console.log(final);