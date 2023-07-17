import { dragItem } from "../../chessUtils/object";
import { checkIfEmptyOrEatable } from "./moveUtils";

function leftMove(
    objectDragItem: dragItem,
    canEat: string,
    copyLegalMoveArray: any[][]
) {
    if (objectDragItem.origin.x > 0) {
        checkIfEmptyOrEatable(objectDragItem, canEat, copyLegalMoveArray, {
            x: objectDragItem.origin.x - 1,
            y: objectDragItem.origin.y,
        });
        if (objectDragItem.origin.y > 0)
            checkIfEmptyOrEatable(objectDragItem, canEat, copyLegalMoveArray, {
                x: objectDragItem.origin.x - 1,
                y: objectDragItem.origin.y - 1,
            });
        if (objectDragItem.origin.y < 7)
            checkIfEmptyOrEatable(objectDragItem, canEat, copyLegalMoveArray, {
                x: objectDragItem.origin.x - 1,
                y: objectDragItem.origin.y + 1,
            });
    }
}

function rightMove(
    objectDragItem: dragItem,
    canEat: string,
    copyLegalMoveArray: any[][]
) {
    if (objectDragItem.origin.x < 7) {
        checkIfEmptyOrEatable(objectDragItem, canEat, copyLegalMoveArray, {
            x: objectDragItem.origin.x + 1,
            y: objectDragItem.origin.y,
        });
        if (objectDragItem.origin.y > 0)
            checkIfEmptyOrEatable(objectDragItem, canEat, copyLegalMoveArray, {
                x: objectDragItem.origin.x + 1,
                y: objectDragItem.origin.y - 1,
            });
        if (objectDragItem.origin.y < 7)
            checkIfEmptyOrEatable(objectDragItem, canEat, copyLegalMoveArray, {
                x: objectDragItem.origin.x + 1,
                y: objectDragItem.origin.y + 1,
            });
    }
}

function middleMove(
    objectDragItem: dragItem,
    canEat: string,
    copyLegalMoveArray: any[][]
) {
    if (objectDragItem.origin.y > 0)
        checkIfEmptyOrEatable(objectDragItem, canEat, copyLegalMoveArray, {
            x: objectDragItem.origin.x,
            y: objectDragItem.origin.y - 1,
        });
    if (objectDragItem.origin.y < 7)
        checkIfEmptyOrEatable(objectDragItem, canEat, copyLegalMoveArray, {
            x: objectDragItem.origin.x,
            y: objectDragItem.origin.y + 1,
        });
}

export function squareMove(
    objectDragItem: dragItem,
    canEat: string,
    copyLegalMoveArray: any[][]
) {
    leftMove(objectDragItem, canEat, copyLegalMoveArray);
    rightMove(objectDragItem, canEat, copyLegalMoveArray);
    middleMove(objectDragItem, canEat, copyLegalMoveArray);
}
