import { dragItem } from "../../chessUtils/object";
import { checkIfEmptyOrEatable } from "./moveUtils";

function topLeftMove(
    objectDragItem: dragItem,
    canEat: string,
    copyLegalMoveArray: any[][]
) {
    if (objectDragItem.origin.x - 2 >= 0 && objectDragItem.origin.y + 1 <= 7)
        checkIfEmptyOrEatable(objectDragItem, canEat, copyLegalMoveArray, {
            x: objectDragItem.origin.x - 2,
            y: objectDragItem.origin.y + 1,
        });
    if (objectDragItem.origin.x - 1 >= 0 && objectDragItem.origin.y + 2 <= 7)
        checkIfEmptyOrEatable(objectDragItem, canEat, copyLegalMoveArray, {
            x: objectDragItem.origin.x - 1,
            y: objectDragItem.origin.y + 2,
        });
}

function topRightMove(
    objectDragItem: dragItem,
    canEat: string,
    copyLegalMoveArray: any[][]
) {
    if (objectDragItem.origin.x + 2 <= 7 && objectDragItem.origin.y + 1 <= 7)
        checkIfEmptyOrEatable(objectDragItem, canEat, copyLegalMoveArray, {
            x: objectDragItem.origin.x + 2,
            y: objectDragItem.origin.y + 1,
        });
    if (objectDragItem.origin.x + 1 <= 7 && objectDragItem.origin.y + 2 <= 7)
        checkIfEmptyOrEatable(objectDragItem, canEat, copyLegalMoveArray, {
            x: objectDragItem.origin.x + 1,
            y: objectDragItem.origin.y + 2,
        });
}

function bottomLeftMove(
    objectDragItem: dragItem,
    canEat: string,
    copyLegalMoveArray: any[][]
) {
    if (objectDragItem.origin.x - 2 >= 0 && objectDragItem.origin.y - 1 >= 0)
        checkIfEmptyOrEatable(objectDragItem, canEat, copyLegalMoveArray, {
            x: objectDragItem.origin.x - 2,
            y: objectDragItem.origin.y - 1,
        });
    if (objectDragItem.origin.x - 1 >= 0 && objectDragItem.origin.y - 2 >= 0)
        checkIfEmptyOrEatable(objectDragItem, canEat, copyLegalMoveArray, {
            x: objectDragItem.origin.x - 1,
            y: objectDragItem.origin.y - 2,
        });
}

function bottomRightMove(
    objectDragItem: dragItem,
    canEat: string,
    copyLegalMoveArray: any[][]
) {
    if (objectDragItem.origin.x + 2 <= 7 && objectDragItem.origin.y - 1 >= 0)
        checkIfEmptyOrEatable(objectDragItem, canEat, copyLegalMoveArray, {
            x: objectDragItem.origin.x + 2,
            y: objectDragItem.origin.y - 1,
        });
    if (objectDragItem.origin.x + 1 <= 7 && objectDragItem.origin.y - 2 >= 0)
        checkIfEmptyOrEatable(objectDragItem, canEat, copyLegalMoveArray, {
            x: objectDragItem.origin.x + 1,
            y: objectDragItem.origin.y - 2,
        });
}

export function knightLegalMove(
    objectDragItem: dragItem,
    canEat: string,
    copyLegalMoveArray: any[][]
) {
    topLeftMove(objectDragItem, canEat, copyLegalMoveArray);
    topRightMove(objectDragItem, canEat, copyLegalMoveArray);
    bottomLeftMove(objectDragItem, canEat, copyLegalMoveArray);
    bottomRightMove(objectDragItem, canEat, copyLegalMoveArray);
}
