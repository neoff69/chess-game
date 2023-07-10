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
        if (pieceToCheck.piece == "bishop" || pieceToCheck.piece == "queen") {
            if (numberSameColor === 0) {
                console.log("cc");
                stateProps.setCheck(true);
            } else if (numberSameColor === 1) {
                legalMoveArray[pinnedPosition.y][pinnedPosition.x].pin = true;
            }
        }
    }
    return numberSameColor;
}

function checkDiagonalTopLeft(
    legalMoveArray: any[][],
    kingPosition: { x: number; y: number },
    stateProps: useStateProps,
    color: string
) {
    let tempX = kingPosition.x;
    let tempY = kingPosition.y;
    let pinnedPosition: { x: number; y: number } = { x: -1, y: -1 };
    let numberSameColor: number = 0;
    while (tempY > 0 && tempX > 0) {
        tempY -= 1;
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

function checkDiagonalTopRight(
    legalMoveArray: any[][],
    kingPosition: { x: number; y: number },
    stateProps: useStateProps,
    color: string
) {
    let tempX = kingPosition.x;
    let tempY = kingPosition.y;
    let pinnedPosition: { x: number; y: number } = { x: -1, y: -1 };
    let numberSameColor: number = 0;
    while (tempY > 0 && tempX < 7) {
        tempY -= 1;
        tempX += 1;
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

function checkDiagonalBotLeft(
    legalMoveArray: any[][],
    kingPosition: { x: number; y: number },
    stateProps: useStateProps,
    color: string
) {
    let tempX = kingPosition.x;
    let tempY = kingPosition.y;
    let pinnedPosition: { x: number; y: number } = { x: -1, y: -1 };
    let numberSameColor: number = 0;
    while (tempX > 0 && tempY < 7) {
        tempX -= 1;
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

function checkDiagonalBotRight(
    legalMoveArray: any[][],
    kingPosition: { x: number; y: number },
    stateProps: useStateProps,
    color: string
) {
    let tempX = kingPosition.x;
    let tempY = kingPosition.y;
    let pinnedPosition: { x: number; y: number } = { x: -1, y: -1 };
    let numberSameColor: number = 0;
    while (tempX < 7 && tempY < 7) {
        tempX += 1;
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

export function checkDiagonal(
    legalMoveArray: any[][],
    kingPosition: { x: number; y: number },
    stateProps: useStateProps,
    color: string
) {
    checkDiagonalTopLeft(legalMoveArray, kingPosition, stateProps, color);
    checkDiagonalTopRight(legalMoveArray, kingPosition, stateProps, color);
    checkDiagonalBotLeft(legalMoveArray, kingPosition, stateProps, color);
    checkDiagonalBotRight(legalMoveArray, kingPosition, stateProps, color);
}
