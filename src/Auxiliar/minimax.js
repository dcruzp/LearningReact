board = [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ']; 
aviable = [] ;

function bestMove(){
  let bestScore = -Infinity; 
  let bestMove ;

  for(let i =0 ; i < 9 ; i++){
    if (board [i] === ' '){
      board[i] = ai; 
      let score = minimax(board); 
      board[i] = ' '; 
      if (score > bestScore){
        bestScore = score; 
        bestMove = {i} ; 
      }
    }
  }
  let move = random(aviable) ; 
  board [move.i] = ai ;
  currentPlayer = human; 
}

function minimax (board) {
  return 1 ;
}