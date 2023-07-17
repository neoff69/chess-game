import { pieceObject, useStateObject } from "../chessUtils/object";

export function setCheckState(
    board: any[][],
    kingPosition: { x: number; y: number },
    stateObject: useStateObject
) {
    console.log("cc");
    stateObject.setCheck(board[kingPosition.y][kingPosition.x].colorPiece);
}

function checkPiece(
    pieceToCheck: pieceObject,
    color: string,
    numberSameColor: number,
    stateObject: useStateObject,
    pinnedPosition: { x: number; y: number },
    currentPosition: { x: number; y: number },
    kingPosition: { x: number; y: number },
    board: any[][]
) {
    if (color == pieceToCheck.colorPiece) {
        pinnedPosition.x = currentPosition.x;
        pinnedPosition.y = currentPosition.y;
        numberSameColor += 1;
    } else {
        if (pieceToCheck.piece == "bishop" || pieceToCheck.piece == "queen") {
            if (numberSameColor === 0) {
                setCheckState(board, kingPosition, stateObject);
            } else if (numberSameColor === 1) {
                board[pinnedPosition.y][pinnedPosition.x].pin = true;
            }
        }
    }
    return numberSameColor;
}

function checkDiagonalTopLeft(
    board: any[][],
    kingPosition: { x: number; y: number },
    stateObject: useStateObject,
    color: string
) {
    let tempX = kingPosition.x;
    let tempY = kingPosition.y;
    let pinnedPosition: { x: number; y: number } = { x: -1, y: -1 };
    let numberSameColor: number = 0;
    while (tempY > 0 && tempX > 0) {
        tempY -= 1;
        tempX -= 1;
        if (board[tempY][tempX] != null) {
            numberSameColor = checkPiece(
                board[tempY][tempX],
                color,
                numberSameColor,
                stateObject,
                pinnedPosition,
                { x: tempX, y: tempY },
                kingPosition,
                board
            );
        }
        if (
            board[tempY][tempX] != null &&
            board[tempY][tempX]?.colorPiece != color
        )
            break;
    }
}

function checkDiagonalTopRight(
    board: any[][],
    kingPosition: { x: number; y: number },
    stateObject: useStateObject,
    color: string
) {
    let tempX = kingPosition.x;
    let tempY = kingPosition.y;
    let pinnedPosition: { x: number; y: number } = { x: -1, y: -1 };
    let numberSameColor: number = 0;
    while (tempY > 0 && tempX < 7) {
        tempY -= 1;
        tempX += 1;
        if (board[tempY][tempX] != null) {
            numberSameColor = checkPiece(
                board[tempY][tempX],
                color,
                numberSameColor,
                stateObject,
                pinnedPosition,
                { x: tempX, y: tempY },
                kingPosition,
                board
            );
        }
        if (
            board[tempY][tempX] != null &&
            board[tempY][tempX]?.colorPiece != color
        )
            break;
    }
}

function checkDiagonalBotLeft(
    board: any[][],
    kingPosition: { x: number; y: number },
    stateObject: useStateObject,
    color: string
) {
    let tempX = kingPosition.x;
    let tempY = kingPosition.y;
    let pinnedPosition: { x: number; y: number } = { x: -1, y: -1 };
    let numberSameColor: number = 0;
    while (tempX > 0 && tempY < 7) {
        tempX -= 1;
        tempY += 1;
        if (board[tempY][tempX] != null) {
            numberSameColor = checkPiece(
                board[tempY][tempX],
                color,
                numberSameColor,
                stateObject,
                pinnedPosition,
                { x: tempX, y: tempY },
                kingPosition,
                board
            );
        }
        if (
            board[tempY][tempX] != null &&
            board[tempY][tempX]?.colorPiece != color
        )
            break;
    }
}

function checkDiagonalBotRight(
    board: any[][],
    kingPosition: { x: number; y: number },
    stateObject: useStateObject,
    color: string
) {
    let tempX = kingPosition.x;
    let tempY = kingPosition.y;
    let pinnedPosition: { x: number; y: number } = { x: -1, y: -1 };
    let numberSameColor: number = 0;
    while (tempX < 7 && tempY < 7) {
        tempX += 1;
        tempY += 1;
        if (board[tempY][tempX] != null) {
            numberSameColor = checkPiece(
                board[tempY][tempX],
                color,
                numberSameColor,
                stateObject,
                pinnedPosition,
                { x: tempX, y: tempY },
                kingPosition,
                board
            );
        }
        if (
            board[tempY][tempX] != null &&
            board[tempY][tempX]?.colorPiece != color
        )
            break;
    }
}

export function checkDiagonal(
    board: any[][],
    kingPosition: { x: number; y: number },
    stateObject: useStateObject,
    color: string
) {
    checkDiagonalTopLeft(board, kingPosition, stateObject, color);
    checkDiagonalTopRight(board, kingPosition, stateObject, color);
    checkDiagonalBotLeft(board, kingPosition, stateObject, color);
    checkDiagonalBotRight(board, kingPosition, stateObject, color);
}
