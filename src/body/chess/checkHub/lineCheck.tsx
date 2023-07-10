import { pieceProps, useStateProps } from "../chessUtils/props";

function checkPiece(
    pieceToCheck: pieceProps,
    color: string,
    numberSameColor: number,
    stateProps: useStateProps,
    pinnedPosition: { x: number; y: number },
    currentPosition: { x: number; y: number },
    legalMoveArray: any[][]
) {
    if (color == pieceToCheck.colorPiece) {
        pinnedPosition.x = currentPosition.x;
        pinnedPosition.y = currentPosition.y;
        numberSameColor += 1;
    } else {
        if (pieceToCheck.piece == "queen" || pieceToCheck.piece == "rook") {
            if (numberSameColor === 0) {
                stateProps.setCheck(true);
            } else if (numberSameColor === 1) {
                legalMoveArray[pinnedPosition.y][pinnedPosition.x].pin = true;
            }
        }
    }
    return numberSameColor;
}

function checkLineBot(
    legalMoveArray: any[][],
    kingPosition: { x: number; y: number },
    stateProps: useStateProps,
    color: string
) {
    let tempX = kingPosition.x;
    let tempY = kingPosition.y;
    let pinnedPosition: { x: number; y: number } = { x: -1, y: -1 };
    let numberSameColor: number = 0;
    while (tempY > 0) {
        tempY -= 1;
        if (legalMoveArray[tempY][tempX] != null) {
            numberSameColor = checkPiece(
                legalMoveArray[tempY][tempX],
                color,
                numberSameColor,
                stateProps,
                pinnedPosition,
                { x: tempX, y: tempY },
                legalMoveArray
            );
        }
        if (
            legalMoveArray[tempY][tempX] != null &&
            legalMoveArray[tempY][tempX]?.colorPiece != color
        )
            break;
    }
}

function checkLineTop(
    legalMoveArray: any[][],
    kingPosition: { x: number; y: number },
    stateProps: useStateProps,
    color: string
) {
    let tempX = kingPosition.x;
    let tempY = kingPosition.y;
    let pinnedPosition: { x: number; y: number } = { x: -1, y: -1 };
    let numberSameColor: number = 0;
    while (tempY < 7) {
        tempY += 1;
        if (legalMoveArray[tempY][tempX] != null) {
            numberSameColor = checkPiece(
                legalMoveArray[tempY][tempX],
                color,
                numberSameColor,
                stateProps,
                pinnedPosition,
                { x: tempX, y: tempY },
                legalMoveArray
            );
        }
        if (
            legalMoveArray[tempY][tempX] != null &&
            legalMoveArray[tempY][tempX]?.colorPiece != color
        )
            break;
    }
}

function checkLineLeft(
    legalMoveArray: any[][],
    kingPosition: { x: number; y: number },
    stateProps: useStateProps,
    color: string
) {
    let tempX = kingPosition.x;
    let tempY = kingPosition.y;
    let pinnedPosition: { x: number; y: number } = { x: -1, y: -1 };
    let numberSameColor: number = 0;
    while (tempX > 0) {
        tempX -= 1;
        if (legalMoveArray[tempY][tempX] != null) {
            numberSameColor = checkPiece(
                legalMoveArray[tempY][tempX],
                color,
                numberSameColor,
                stateProps,
                pinnedPosition,
                { x: tempX, y: tempY },
                legalMoveArray
            );
        }
        if (
            legalMoveArray[tempY][tempX] != null &&
            legalMoveArray[tempY][tempX]?.colorPiece != color
        )
            break;
    }
}

function checkLineRight(
    legalMoveArray: any[][],
    kingPosition: { x: number; y: number },
    stateProps: useStateProps,
    color: string
) {
    let tempX = kingPosition.x;
    let tempY = kingPosition.y;
    let pinnedPosition: { x: number; y: number } = { x: -1, y: -1 };
    let numberSameColor: number = 0;
    while (tempX > 0) {
        tempX -= 1;
        if (legalMoveArray[tempY][tempX] != null) {
            numberSameColor = checkPiece(
                legalMoveArray[tempY][tempX],
                color,
                numberSameColor,
                stateProps,
                pinnedPosition,
                { x: tempX, y: tempY },
                legalMoveArray
            );
        }
        if (
            legalMoveArray[tempY][tempX] != null &&
            legalMoveArray[tempY][tempX]?.colorPiece != color
        )
            break;
    }
}

export function checkLine(
    legalMoveArray: any[][],
    kingPosition: { x: number; y: number },
    stateProps: useStateProps,
    color: string
) {
    checkLineBot(legalMoveArray, kingPosition, stateProps, color);
    checkLineTop(legalMoveArray, kingPosition, stateProps, color);
    checkLineLeft(legalMoveArray, kingPosition, stateProps, color);
    checkLineRight(legalMoveArray, kingPosition, stateProps, color);
}
