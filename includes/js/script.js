const chessBoard = document.getElementById('chessboard');

const UnicodeChessPieces = {
    WHITE: {
        KING: '♔',
        QUEEN: '♕',
        ROOK: '♖',
        BISHOP: '♗',
        KNIGHT: '♘',
        PAWN: '♙'
    },
    BLACK: {
        KING: '♚',
        QUEEN: '♛',
        ROOK: '♜',
        BISHOP: '♝',
        KNIGHT: '♞',
        PAWN: '♟'
    }
};

for (j=0; j < 8; j++){
    for (i=0; i < 8; i++){
        const square = document.createElement('div');
        
        square.style.height = '75px';
        square.style.width = '112.5px';

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

        chessBoard.appendChild(square);
    }
}