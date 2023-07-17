import { dragItem } from "../chessUtils/object";

function pieceEatableEnPassant(
    objectDragItem: dragItem,
    copyLegalMoveArray: number[][],
    direction: number
) {
    if (
        objectDragItem.stateObject.board[objectDragItem.origin.y][
            objectDragItem.origin.x + 1
        ]?.enPassant == true
    )
        copyLegalMoveArray[objectDragItem.origin.y + direction][
            objectDragItem.origin.x + 1
        ] = 1;
    else if (
        objectDragItem.stateObject.board[objectDragItem.origin.y][
            objectDragItem.origin.x - 1
        ]?.enPassant == true
    )
        copyLegalMoveArray[objectDragItem.origin.y + direction][
            objectDragItem.origin.x - 1
        ] = 1;
}

function pieceEatable(
    objectDragItem: dragItem,
    direction: number,
    copyLegalMoveArray: number[][]
) {
    let colorOpponent = "white";
    if (direction == 1) colorOpponent = "black";
    if (objectDragItem.origin.y < 7 && objectDragItem.origin.y > 0) {
        if (
            objectDragItem.stateObject.board[
                objectDragItem.origin.y + 1 * direction
            ][objectDragItem.origin.x + 1]?.colorPiece == colorOpponent
        )
            copyLegalMoveArray[objectDragItem.origin.y + 1 * direction][
                objectDragItem.origin.x + 1
            ] = 1;
        else if (
            objectDragItem.stateObject.board[
                objectDragItem.origin.y + 1 * direction
            ][objectDragItem.origin.x - 1]?.colorPiece == colorOpponent
        )
            copyLegalMoveArray[objectDragItem.origin.y + 1 * direction][
                objectDragItem.origin.x - 1
            ] = 1;
    }
    if (objectDragItem.origin.y == 4 && direction == 1)
        pieceEatableEnPassant(objectDragItem, copyLegalMoveArray, direction);
    else if (objectDragItem.origin.y == 3 && direction == -1) {
        pieceEatableEnPassant(objectDragItem, copyLegalMoveArray, direction);
    }
}

function firstDeplacement(
    objectDragItem: dragItem,
    direction: number,
    copyLegalMoveArray: number[][]
) {
    if (
        objectDragItem.origin.y < 7 &&
        objectDragItem.origin.y > 0 &&
        objectDragItem.stateObject.board[
            objectDragItem.origin.y + 1 * direction
        ][objectDragItem.origin.x] == null
    )
        copyLegalMoveArray[objectDragItem.origin.y + 1 * direction][
            objectDragItem.origin.x
        ] = 1;
}

function secondDeplacement(
    objectDragItem: dragItem,
    direction: number,
    copyLegalMoveArray: number[][]
) {
    if (
        ((objectDragItem.origin.y == 1 && direction == 1) ||
            (objectDragItem.origin.y == 6 && direction == -1)) &&
        objectDragItem.stateObject.board[
            objectDragItem.origin.y + 1 * direction
        ][objectDragItem.origin.x] == null &&
        objectDragItem.stateObject.board[
            objectDragItem.origin.y + 2 * direction
        ][objectDragItem.origin.x] == null
    ) {
        copyLegalMoveArray[objectDragItem.origin.y + 2 * direction][
            objectDragItem.origin.x
        ] = 1;
    }
}

function checkPawnMove(objectDragItem: dragItem, direction: number) {
    objectDragItem.stateObject.setLegalMoveArray((prevBoard: number[][]) => {
        let copyLegalMoveArray = prevBoard.map((row: any) => [...row]);
        firstDeplacement(objectDragItem, direction, copyLegalMoveArray);
        secondDeplacement(objectDragItem, direction, copyLegalMoveArray);
        pieceEatable(objectDragItem, direction, copyLegalMoveArray);
        return copyLegalMoveArray;
    });
}

export function pawnMove(objectDragItem: dragItem): void {
    if (objectDragItem.pieceObject == null) return;
    if (objectDragItem.pieceObject.colorPiece == "white")
        checkPawnMove(objectDragItem, 1);
    else checkPawnMove(objectDragItem, -1);
}
