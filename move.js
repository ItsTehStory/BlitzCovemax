/**
 *
 * @param {{row: int, col: int}} origin
 * @param {{row: int, col: int}} end
 * @param {String} initialChain
 */
const chemin = (origin, end, initialChain) => {

    var deltaX = end.col - origin.col;
    var delatY = end.row - origin.row;
    var depXAccumule = 0;
    var depYAccumule = 0;
    var nbInconnues = 0;

    for (let i = 0; i < initialChain.length; i++) {
        switch (initialChain.charAt(i)) {

            case 'l':
                depXAccumule--;
                break;

            case 'r':
                depXAccumule++;
                break;

            case 'u':
                depYAccumule--;
                break;

            case 'd':
                depYAccumule++;
                break;
            default:
                nbInconnues++;
                break;
        }
    }

    var depXManquant = deltaX - depXAccumule;
    var depYManquant = delatY - depYAccumule;
    var solution = [];

    while (nbInconnues != 0) {

        if (depXManquant > 0) {
            solution.push('r');
            nbInconnues--;
            depXManquant--;
        } else if (depXManquant < 0) {
            solution.push('l');
            nbInconnues--;
            depXManquant++;
        } else { // DepX == 0
            if (origin.col + depXAccumule === end.col && depYManquant !== nbInconnues) {
                solution.push('r', 'l');
                nbInconnues -= 2;
            }
        }

        if (depYManquant > 0) {
            solution.push('u');
            nbInconnues--;
            depYManquant--;
        } else if (depYManquant < 0) {
            solution.push('d');
            nbInconnues--;
            depYManquant++;
        } else { // DepY == 0
            if (origin.row + depYAccumule === end.row && depXManquant !== nbInconnues) {
                solution.push('r', 'l');
                nbInconnues -= 2;
            }
        }
    }

    const position = {
        row: origin.row,
        col: origin.col
    }

    

    for (let i = 0; i < initialChain.length; i++) {
        if (initialChain.charAt(i) !== '?')
            continue;
        if (position.col - 1 > -1)
            possible.push('l');
        if (position.col + 1 < 5)
            possible.push('r');
        if (position.row - 1 > -1)
            possible.push('u');
        if (position.row + 1 > 5)
            possible.push('d');

        solution.forEach(element => {
            const element = solution[i];
            const possible = [];
            switch (element) {

                case 'l':
                    if (position.col - 1 > -1)
                        possible.push(element);
                    break;

                case 'r':
                    if (position.col + 1 < 5)
                        possible.push(element);
                    break;

                case 'u':
                    if (position.row - 1 > -1)
                        possible.push(element);
                    break;

                case 'd':
                    if (position.row + 1 > 5)
                        possible.push(element);
                    break;
                default:
                    break;
            }
        });

    }

}