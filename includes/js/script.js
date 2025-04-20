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

class King extends Piece{
    constructor(color){
        super(color);
    }

    generatepiece(){
        const piece = document.createElement('p');
        piece.style.fontSize = '25px';
        piece.textContent = this.color == 'white' ? '\u2654' : '\u265A';
        return piece;
    }
}

class Queen extends Piece{
    constructor(color){
        super(color);
    }

    generatepiece(){
        const piece = document.createElement('p');
        piece.style.fontSize = '25px';
        piece.textContent = this.color == 'white' ? '\u2655' : '\u265B';
        return piece;
    }
}

class Rook extends Piece{
    constructor(color){
        super(color);
    }

    generatepiece(){
        const piece = document.createElement('p');
        piece.style.fontSize = '25px';
        piece.textContent = this.color == 'white' ? '\u2656' : '\u265C';
        return piece;
    }
}

class Bishop extends Piece{
    constructor(color){
        super(color);
    }

    generatepiece(){
        const piece = document.createElement('p');
        piece.style.fontSize = '25px';
        piece.textContent = this.color == 'white' ? '\u2657' : '\u265D';
        return piece;
    }
}

class Knight extends Piece{
    constructor(color){
        super(color);
    }

    generatepiece(){
        const piece = document.createElement('p');
        piece.style.fontSize = '25px';
        piece.textContent = this.color == 'white' ? '\u2658' : '\u265E';
        return piece;
    }
}

// White Pieces
const whitepawn = new Pawn('white');
const whiteking = new King('white');
const whitequeen = new Queen('white');
const whiterook = new Rook('white');
const whitebishop = new Bishop('white');
const whiteknight = new Knight('white');

// Black Pieces
const blackpawn = new Pawn('black');
const blackking = new King('black');
const blackqueen = new Queen('black');
const blackrook = new Rook('black');
const blackbishop = new Bishop('black');
const blackknight = new Knight('black');

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
            } else if(j==0){
                switch(i){
                    case 4:
                        boardpiece.appendChild(whiteking.generatepiece());
                        break;
                    case 0:
                    case 7:
                        boardpiece.appendChild(whiterook.generatepiece());
                        break;
                    case 1:
                    case 6:
                        boardpiece.appendChild(whiteknight.generatepiece());
                        break;
                    case 2:
                    case 5:
                        boardpiece.appendChild(whitebishop.generatepiece());
                        break;
                    case 3:
                        boardpiece.appendChild(whitequeen.generatepiece());
                        break;
                }
            }
        } else if(j>5){
            if(j==6){
                boardpiece.appendChild(blackpawn.generatepiece());
            } else if(j==7){
                switch(i){
                    case 4:
                        boardpiece.appendChild(blackking.generatepiece());
                        break;
                    case 0:
                    case 7:
                        boardpiece.appendChild(blackrook.generatepiece());
                        break;
                    case 1:
                    case 6:
                        boardpiece.appendChild(blackknight.generatepiece());
                        break;
                    case 2:
                    case 5:
                        boardpiece.appendChild(blackbishop.generatepiece());
                        break;
                    case 3:
                        boardpiece.appendChild(blackqueen.generatepiece());
                        break;
                }
            }
        }

        switch(j%2){
            case 0:
                switch(i%2){
                    case 0:
                        square.style.backgroundColor='brown';
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
                        square.style.backgroundColor='brown';
                        break;
                }
        }

        square.appendChild(boardpiece);
        chessBoard.appendChild(square);
    }
}