


resoudre = function() {

  var initialChain = "r?d?drdd";
  var chain = "";

  var startingRow = 0;
  var startingCol = 0;

  var endRow = 4;
  var endCol = 4;

  var chainLength = 8;

  let startingPos = {row: startingRow, col: startingCol};
  let endPos = {row: endRow, col: endCol};

  var deplacementsStart = 0;
  var deplacementsEnd = 0;


  for (i = 0; i < chainLength; i++){
    while (initialChain.charAt(i) != "?"){
    switch (initialChain.charAt(i)) {

      case "l":
        startingPos.row = startingPos.row - 1;
        deplacementsStart++;
      break;

      case "r":
        startingPos.row = startingPos.row + 1;
        deplacementsStart++;
      break;

      case "u":
        startingPos.col = startingPos.col - 1;
        deplacementsStart++;
      break;

      case "d":
        startingPos.col = startingPos.col + 1;
        deplacementsStart++;
      break;
    }
  }
}

    for (i = chainLength - 1; i > 0; i--){
      while (initialChain.charAt(i) != "?"){
      switch (initialChain.charAt(i)) {

        case "r":
          endPos.row = endPos.row - 1;
          deplacementsEnd++;
        break;

        case "l":
          endPos.row = endPos.row + 1;
          deplacementsEnd++;
        break;

        case "d":
          endPos.col = endPos.col - 1;
          deplacementsEnd++;
        break;

        case "u":
          endPos.col = endPos.col + 1;
          deplacementsEnd++;
        break;
      }
    }
  }

  chainLength = chainLength - deplacementsStart - deplacementsEnd;
  var chain = initialChain.substring(deplacementsStart, (chainLength - deplacementsEnd));
  var startChain = initialChain.substring(0, deplacementsStart);
  var endChain = initialChain.substring((chainLength - deplacementsEnd), chainLength);

  var deplacementHorizontal = endPos.row - startingPos.row;
  var deplacementVertical = endPos.col - startingPos.col;

  for (i = 0; i < chainLength; i++){
     switch (chain.charAt(i)){

       case "l":
         deplacementHorizontal++;
         break;

       case "r":
         deplacementHorizontal--;
         break;

       case "u":
         deplacementVertical++;
         break;

       case "d":
         deplacementVertical--;
         break;
         
       case "?":
         break;
     }
  }

  for (i = 0; i < chainLength; i++){
    var modified = false;
    if (chain.charAt(i) == "?"){
      if (deplacementHorizontal > 0){
          chain.charAt(i) = "r";
          deplacementHorizontal--;
          modified = true;
      } else if (deplacementHorizontal < 0 && modified == false){
        chain.charAt(i) = "l";
        deplacementHorizontal++;
        modified = true;
      } else if (deplacementVertical > 0 && modified == false){
        chain.charAt(i) = "u";
        deplacementVertical--;
        modified = true;
      } else if (deplacementVertical < 0 && modified == false){
        chain.charAt(i) = "d";
        deplacementVertical++;
        modified = true;
      }
    }
  }

  var finalChain = startChain + chain + endChain;
  return finalChain;
}
