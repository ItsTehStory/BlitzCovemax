


var resoudre = function () {

    var initialChain = "r?d?drdd";

    var startingRow = 0;
    var startingCol = 0;

    var endRow = 4;
    var endCol = 4;

    var chainLength = 8;

    let startingPos = { row: startingRow, col: startingCol };
    let endPos = { row: endRow, col: endCol };

    var deplacementsStart = 0;
    var deplacementsEnd = 0;

    var i = 0;

    while (initialChain.charAt(i) != '?' && i != chainLength - 1) {
        switch (initialChain.charAt(i)) {

            case 'l':
                startingPos.row = startingPos.row - 1;
                deplacementsStart++;
                break;

            case 'r':
                startingPos.row = startingPos.row + 1;
                deplacementsStart++;
                break;

            case 'u':
                startingPos.col = startingPos.col - 1;
                deplacementsStart++;
                break;

            case 'd':
                startingPos.col = startingPos.col + 1;
                deplacementsStart++;
                break;
        }
        i++;
    }

    i = chainLength - 1;

    while (initialChain.charAt(i) != '?' && i > 0) {
        switch (initialChain.charAt(i)) {

            case 'r':
                endPos.row = endPos.row - 1;
                deplacementsEnd++;
                break;

            case 'l':
                endPos.row = endPos.row + 1;
                deplacementsEnd++;
                break;

            case 'd':
                endPos.col = endPos.col - 1;
                deplacementsEnd++;
                break;

            case 'u':
                endPos.col = endPos.col + 1;
                deplacementsEnd++;
                break;
        }
        i--;
    }

    var chain = initialChain.substring(deplacementsStart, (chainLength - deplacementsEnd));
    var startChain = initialChain.substring(0, deplacementsStart);
    var endChain = initialChain.substring((chainLength - deplacementsEnd), chainLength);
    chainLength = chainLength - deplacementsStart - deplacementsEnd;

    var deplacementHorizontal = endPos.row - startingPos.row;
    var deplacementVertical = endPos.col - startingPos.col;

    for (i = 0; i < chainLength; i++) {
        switch (chain.charAt(i)) {

            case 'l':
                deplacementHorizontal++;
                break;

            case 'r':
                deplacementHorizontal--;
                break;

            case 'u':
                deplacementVertical++;
                break;

            case 'd':
                deplacementVertical--;
                break;

            case '?':
                break;
        }
    }

    var questionMarks = 0;

    for (i = 0; i < chainLength; i++) {
        if (chain.charAt(i) == '?') {
            questionMarks++;
        }
    }

    for (i = 0; i < chainLength; i++) {
        var modified = false;
        if (chain.charAt(i) == '?') {
            if (deplacementHorizontal > 0 && startingPos.row != 4) {
                chain = chain.substring(0, i) + "r" + chain.substring(i + 1, chainLength);
                deplacementHorizontal--;
                questionMarks--;
                modified = true;
                startingPos.row += 1;
            } else if (deplacementHorizontal < 0 && modified == false && startingPos.row != 0) {
                chain = chain.substring(0, i) + "l" + chain.substring(i + 1, chainLength);
                deplacementHorizontal++;
                questionMarks--;
                modified = true;
                startingPos.row -= 1;
            } else if (deplacementVertical > 0 && modified == false && startingPos.col != 4) {
                chain = chain.substring(0, i) + "d" + chain.substring(i + 1, chainLength);
                deplacementVertical--;
                questionMarks--;
                modified = true;
                startingPos.col += 1;
            } else if (deplacementVertical < 0 && modified == false && startingPos.col != 0) {
                chain = chain.substring(0, i) + "u" + chain.substring(i + 1, chainLength);
                deplacementVertical++;
                questionMarks--;
                modified = true;
                startingPos.col -= 1;
            } else if (deplacementHorizontal == 0 && questionMarks > 0 && startingPos.row != 4) {
                chain = chain.substring(0, i) + "l" + chain.substring(i + 1, chainLength);
                deplacementHorizontal++;
                questionMarks--;
                modified = true;
                startingPos.row += 1;
            } else if (deplacementVertical == 0 && questionMarks > 0 && startingPos.col != 4) {
                chain = chain.substring(0, i) + "d" + chain.substring(i + 1, chainLength);
                deplacementVertical--;
                questionMarks--;
                modified = true;
                startingPos.col += 1;
            }
        }
    }

    var finalChain = startChain + chain + endChain;
    return finalChain;
}

module.exports = resoudre;