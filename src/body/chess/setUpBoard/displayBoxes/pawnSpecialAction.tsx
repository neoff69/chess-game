import { useStateObject } from "../../chessUtils/object";
import { enPassant } from "../../chessUtils/object";

function checkIfEnPassant(
    origin: { x: number; y: number },
    ending: { x: number; y: number },
    element: any,
    stateObject: useStateObject
) {
    if (
        (element.piece == "pawn" && origin.y - ending.y == 2) ||
        (element.piece == "pawn" && origin.y - ending.y == -2)
    ) {
        stateObject.setEnPassant(() => {
            element.enPassant = true;
            let temp: enPassant = {
                isEnPassant: true,
                y: ending.y,
                x: ending.x,
            };
            element.enPassant = true;
            return temp;
        });
    }
}

function deletePieceIfEnPassant(
    board: any[][],
    ending: { x: number; y: number },
    origin: { x: number; y: number }
) {
    if (
        board[ending.y][ending.x].piece == "pawn" &&
        origin.x != ending.x &&
        ending.y > 0 &&
        board[ending.y - 1][ending.x]?.enPassant === true &&
        board[ending.y][ending.x].colorPiece == "white"
    )
        board[ending.y - 1][ending.x] = null;
    else if (
        board[ending.y][ending.x].piece == "pawn" &&
        origin.x != ending.x &&
        ending.y < 7 &&
        board[ending.y + 1][ending.x]?.enPassant === true &&
        board[ending.y][ending.x].colorPiece == "black"
    )
        board[ending.y + 1][ending.x] = null;
}

function removeEnPassant(
    stateObject: useStateObject,
    board: any[][],
    ending: { x: number; y: number },
    origin: { x: number; y: number }
) {
    deletePieceIfEnPassant(board, ending, origin);
    stateObject.setEnPassant((prevState: enPassant) => {
        if (prevState.isEnPassant == true) {
            if (board[prevState.y][prevState.x])
                board[prevState.y][prevState.x].enPassant = false;
            let temp: enPassant = {
                isEnPassant: false,
                y: 0,
                x: 0,
            };
            return temp;
        }
        return prevState;
    });
}

function changePiece(
    copyLegalMoveArray: any[][],
    ending: { x: number; y: number }
) {
    copyLegalMoveArray[ending.y][ending.x].piece = "queen";
}

export function pawnSpecialAction(
    origin: { x: number; y: number },
    ending: { x: number; y: number },
    board: any[][],
    stateObject: useStateObject
) {
    removeEnPassant(stateObject, board, ending, origin);
    if (board[ending.y][ending.x].piece == "pawn") {
        if (ending.y == 3 || ending.y == 4) {
            checkIfEnPassant(
                origin,
                ending,
                board[ending.y][ending.x],
                stateObject
            );
        } else if (ending.y == 0 || ending.y == 7) {
            changePiece(board, ending);
        }
    }
}
