import { pieceObject, useStateObject } from "../chessUtils/object";
import { setCheckState } from "./checkDiagonal";

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
        if (pieceToCheck.piece == "queen" || pieceToCheck.piece == "rook") {
            if (numberSameColor === 0) {
                setCheckState(board, kingPosition, stateObject);
            } else if (numberSameColor === 1) {
                board[pinnedPosition.y][pinnedPosition.x].pin = true;
            }
        }
    }
    return numberSameColor;
}

function checkLineBot(
    board: any[][],
    kingPosition: { x: number; y: number },
    stateObject: useStateObject,
    color: string
) {
    let tempX = kingPosition.x;
    let tempY = kingPosition.y;
    let pinnedPosition: { x: number; y: number } = { x: -1, y: -1 };
    let numberSameColor: number = 0;
    while (tempY > 0) {
        tempY -= 1;
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

function checkLineTop(
    board: any[][],
    kingPosition: { x: number; y: number },
    stateObject: useStateObject,
    color: string
) {
    let tempX = kingPosition.x;
    let tempY = kingPosition.y;
    let pinnedPosition: { x: number; y: number } = { x: -1, y: -1 };
    let numberSameColor: number = 0;
    while (tempY < 7) {
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

function checkLineLeft(
    board: any[][],
    kingPosition: { x: number; y: number },
    stateObject: useStateObject,
    color: string
) {
    let tempX = kingPosition.x;
    let tempY = kingPosition.y;
    let pinnedPosition: { x: number; y: number } = { x: -1, y: -1 };
    let numberSameColor: number = 0;
    while (tempX > 0) {
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

function checkLineRight(
    board: any[][],
    kingPosition: { x: number; y: number },
    stateObject: useStateObject,
    color: string
) {
    let tempX = kingPosition.x;
    let tempY = kingPosition.y;
    let pinnedPosition: { x: number; y: number } = { x: -1, y: -1 };
    let numberSameColor: number = 0;
    while (tempX > 0) {
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

export function checkLine(
    board: any[][],
    kingPosition: { x: number; y: number },
    stateObject: useStateObject,
    color: string
) {
    checkLineBot(board, kingPosition, stateObject, color);
    checkLineTop(board, kingPosition, stateObject, color);
    checkLineLeft(board, kingPosition, stateObject, color);
    checkLineRight(board, kingPosition, stateObject, color);
}
