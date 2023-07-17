import { useStateObject } from "../chessUtils/object";
import { setCheckState } from "./checkDiagonal";

function checkForBlackWithPawn(
    board: any[][],
    kingPosition: { x: number; y: number },
    stateObject: useStateObject,
    color: string
) {
    if (color === "black") {
        if (kingPosition.y > 0) {
            if (kingPosition.x > 0)
                if (
                    board[kingPosition.y - 1][kingPosition.x - 1]?.piece ===
                        "pawn" &&
                    board[kingPosition.y - 1][kingPosition.x - 1]
                        ?.colorPiece === "white"
                )
                    setCheckState(board, kingPosition, stateObject);
            if (kingPosition.x < 7)
                if (
                    board[kingPosition.y - 1][kingPosition.x + 1]?.piece ===
                        "pawn" &&
                    board[kingPosition.y - 1][kingPosition.x + 1]
                        ?.colorPiece === "white"
                ) {
                    setCheckState(board, kingPosition, stateObject);
                }
        }
    }
}

function checkForWhiteWithPawn(
    board: any[][],
    kingPosition: { x: number; y: number },
    stateObject: useStateObject,
    color: string
) {
    if (color === "white") {
        if (kingPosition.y < 7) {
            if (kingPosition.x > 0)
                if (
                    board[kingPosition.y + 1][kingPosition.x - 1]?.piece ===
                        "pawn" &&
                    board[kingPosition.y + 1][kingPosition.x - 1]
                        ?.colorPiece === "black"
                )
                    setCheckState(board, kingPosition, stateObject);
            if (kingPosition.x < 7)
                if (
                    board[kingPosition.y + 1][kingPosition.x + 1]?.piece ===
                        "pawn" &&
                    board[kingPosition.y + 1][kingPosition.x + 1]
                        ?.colorPiece === "black"
                ) {
                    setCheckState(board, kingPosition, stateObject);
                }
        }
    }
}

function leftCheck(
    board: any[][],
    kingPosition: { x: number; y: number },
    stateObject: useStateObject,
    color: string
) {
    if (kingPosition.x > 0) {
        if (
            board[kingPosition.y][kingPosition.x - 1]?.piece == "king" &&
            board[kingPosition.y][kingPosition.x - 1]?.colorPiece != color
        )
            setCheckState(board, kingPosition, stateObject);
        if (kingPosition.y > 0)
            if (
                board[kingPosition.y - 1][kingPosition.x - 1]?.piece ==
                    "king" &&
                board[kingPosition.y - 1][kingPosition.x - 1]?.colorPiece !=
                    color
            )
                setCheckState(board, kingPosition, stateObject);
        if (kingPosition.y < 7)
            if (
                board[kingPosition.y + 1][kingPosition.x - 1]?.piece ==
                    "king" &&
                board[kingPosition.y + 1][kingPosition.x - 1]?.colorPiece !=
                    color
            )
                setCheckState(board, kingPosition, stateObject);
    }
}

function rightCheck(
    board: any[][],
    kingPosition: { x: number; y: number },
    stateObject: useStateObject,
    color: string
) {
    if (kingPosition.x < 7) {
        if (
            board[kingPosition.y][kingPosition.x + 1]?.piece == "king" &&
            board[kingPosition.y][kingPosition.x + 1]?.colorPiece != color
        )
            setCheckState(board, kingPosition, stateObject);
    }
    if (kingPosition.y > 0) {
        if (
            board[kingPosition.y - 1][kingPosition.x + 1]?.piece == "king" &&
            board[kingPosition.y - 1][kingPosition.x + 1]?.colorPiece != color
        )
            setCheckState(board, kingPosition, stateObject);
    }
    if (kingPosition.y < 7) {
        if (
            board[kingPosition.y + 1][kingPosition.x + 1]?.piece == "king" &&
            board[kingPosition.y + 1][kingPosition.x + 1]?.colorPiece != color
        )
            setCheckState(board, kingPosition, stateObject);
    }
}

function middleCheck(
    board: any[][],
    kingPosition: { x: number; y: number },
    stateObject: useStateObject,
    color: string
) {
    if (kingPosition.y > 0)
        if (
            board[kingPosition.y - 1][kingPosition.x]?.piece == "king" &&
            board[kingPosition.y - 1][kingPosition.x]?.colorPiece != color
        ) {
            setCheckState(board, kingPosition, stateObject);
        }
    if (kingPosition.y < 7)
        if (
            board[kingPosition.y + 1][kingPosition.x]?.piece == "king" &&
            board[kingPosition.y + 1][kingPosition.x]?.colorPiece != color
        ) {
            setCheckState(board, kingPosition, stateObject);
        }
}

function checkKing(
    board: any[][],
    kingPosition: { x: number; y: number },
    stateObject: useStateObject,
    color: string
) {
    leftCheck(board, kingPosition, stateObject, color);
    rightCheck(board, kingPosition, stateObject, color);
    middleCheck(board, kingPosition, stateObject, color);
}

export function checkSquare(
    board: any[][],
    kingPosition: { x: number; y: number },
    stateObject: useStateObject,
    color: string
) {
    checkForBlackWithPawn(board, kingPosition, stateObject, color);
    checkForWhiteWithPawn(board, kingPosition, stateObject, color);
    checkKing(board, kingPosition, stateObject, color);
}
