import { useStateObject } from "../chessUtils/object";
import { setCheckState } from "./checkDiagonal";

function knightCondition(
    board: any[][],
    kingPosition: { x: number; y: number },
    xIncrement: number,
    yIncrement: number,
    stateObject: useStateObject,
    color: string
) {
    if (
        board[kingPosition.y + yIncrement][kingPosition.x + xIncrement] !=
            null &&
        board[kingPosition.y + yIncrement][kingPosition.x + xIncrement]
            ?.piece === "knight" &&
        board[kingPosition.y + yIncrement][kingPosition.x + xIncrement]
            ?.colorPiece != color
    ) {
        setCheckState(board, kingPosition, stateObject);
    }
}

function topLeftCheck(
    board: any[][],
    kingPosition: { x: number; y: number },
    stateObject: useStateObject,
    color: string
) {
    if (kingPosition.x - 2 >= 0 && kingPosition.y + 1 <= 7)
        knightCondition(board, kingPosition, -2, 1, stateObject, color);
    if (kingPosition.x - 1 >= 0 && kingPosition.y + 2 <= 7)
        knightCondition(board, kingPosition, -1, 2, stateObject, color);
}

function topRightCheck(
    board: any[][],
    kingPosition: { x: number; y: number },
    stateObject: useStateObject,
    color: string
) {
    if (kingPosition.x + 2 <= 7 && kingPosition.y + 1 <= 7)
        knightCondition(board, kingPosition, 2, 1, stateObject, color);
    if (kingPosition.x + 1 <= 7 && kingPosition.y + 2 <= 7) {
        knightCondition(board, kingPosition, 1, 2, stateObject, color);
    }
}

function bottomLeftCheck(
    board: any[][],
    kingPosition: { x: number; y: number },
    stateObject: useStateObject,
    color: string
) {
    if (kingPosition.x - 2 >= 0 && kingPosition.y - 1 >= 0)
        knightCondition(board, kingPosition, -2, -1, stateObject, color);
    if (kingPosition.x - 1 >= 0 && kingPosition.y - 2 >= 0)
        knightCondition(board, kingPosition, -1, -2, stateObject, color);
}

function bottomRightCheck(
    board: any[][],
    kingPosition: { x: number; y: number },
    stateObject: useStateObject,
    color: string
) {
    if (kingPosition.x + 2 <= 7 && kingPosition.y - 1 >= 0)
        knightCondition(board, kingPosition, 2, -1, stateObject, color);

    if (kingPosition.x + 1 <= 7 && kingPosition.y - 2 >= 0)
        knightCondition(board, kingPosition, 1, -2, stateObject, color);
}

export function checkKnight(
    board: any[][],
    kingPosition: { x: number; y: number },
    stateObject: useStateObject,
    color: string
) {
    topLeftCheck(board, kingPosition, stateObject, color);
    topRightCheck(board, kingPosition, stateObject, color);
    bottomLeftCheck(board, kingPosition, stateObject, color);
    bottomRightCheck(board, kingPosition, stateObject, color);
}
