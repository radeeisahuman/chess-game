const chessBoard = document.getElementById('chessboard');

const pieceheight = '50px';
const piecewidth = '50px';

class Piece{
    constructor(color){
        this.color = color;
    }
}

class Pawn extends Piece{
    constructor(color){
        super(color);
    }

    generatepiece(){
        const piece = document.createElement('p');
        piece.style.fontSize = '25px';
        piece.textContent = this.color == 'white' ? '\u2659' : '\u265F';
        return piece;
    }
}

const whitepawn = new Pawn('white');

for (j=0; j < 8; j++){
    for (i=0; i < 8; i++){
        const square = document.createElement('div');
        const boardpiece = document.createElement('div');
        

        boardpiece.style.height = pieceheight;
        boardpiece.style.width = piecewidth;
        boardpiece.style.display = 'flex';
        boardpiece.style.alignItems = 'center';
        boardpiece.style.justifyContent = 'center';
        
        square.style.display = 'flex';
        square.style.alignItems = 'center';
        square.style.justifyContent = 'center';
        square.style.height = '75px';
        square.style.width = '112.5px';

        if(j<2){
            if(j==1){
                boardpiece.appendChild(whitepawn.generatepiece());
            }
        }

        switch(j%2){
            case 0:
                switch(i%2){
                    case 0:
                        square.style.backgroundColor='black';
                        break;
                    case 1:
                        square.style.backgroundColor='white';
                        break;
                }
                break;
            case 1:
                switch(i%2){
                    case 0:
                        square.style.backgroundColor='white';
                        break;
                    case 1:
                        square.style.backgroundColor='black';
                        break;
                }
        }

        square.appendChild(boardpiece);
        chessBoard.appendChild(square);
    }
}