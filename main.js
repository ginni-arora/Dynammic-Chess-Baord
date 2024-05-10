function createBoard(){
    var boardsize = document.getElementById('boardsize').value;
    var chessboard = document.getElementById('chessboard');
    chessboard.style.width = `${boardsize*100}px`;
    chessboard.style.height = `${boardsize*100}px`;

    var row,col;
    for(row=0;row<boardsize;row++){
        for(col=0;col<boardsize;col++){
            var box = document.createElement('div');
            box.className = 'box';
            if((row+col)%2 === 0){
                box.classList.add('white');
            }else{
                box.classList.add('black');
            }
            chessboard.appendChild(box);
        }
    }
}