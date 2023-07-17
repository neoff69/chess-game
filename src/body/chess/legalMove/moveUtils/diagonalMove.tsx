import { dragItem } from "../../chessUtils/object";
import { checkIfEmptyOrEatable } from "./moveUtils";

function bottomLeftMove(
    objectDragItem: dragItem,
    canEat: string,
    copyLegalMoveArray: any[][]
) {
    let copyX = objectDragItem.origin.x - 1;
    let copyY = objectDragItem.origin.y - 1;

    while (copyX >= 0 && copyY >= 0) {
        if (
            checkIfEmptyOrEatable(objectDragItem, canEat, copyLegalMoveArray, {
                x: copyX,
                y: copyY,
            }) == false
        )
            break;
        copyX -= 1;
        copyY -= 1;
    }
}

function bottomRightMove(
    objectDragItem: dragItem,
    canEat: string,
    copyLegalMoveArray: any[][]
) {
    let copyX = objectDragItem.origin.x + 1;
    let copyY = objectDragItem.origin.y - 1;

    while (copyX <= 7 && copyY >= 0) {
        if (
            checkIfEmptyOrEatable(objectDragItem, canEat, copyLegalMoveArray, {
                x: copyX,
                y: copyY,
            }) == false
        )
            break;
        copyX += 1;
        copyY -= 1;
    }
}

function topLeftMove(
    objectDragItem: dragItem,
    canEat: string,
    copyLegalMoveArray: any[][]
) {
    let copyX = objectDragItem.origin.x - 1;
    let copyY = objectDragItem.origin.y + 1;

    while (copyX >= 0 && copyY <= 7) {
        if (
            checkIfEmptyOrEatable(objectDragItem, canEat, copyLegalMoveArray, {
                x: copyX,
                y: copyY,
            }) == false
        )
            break;
        copyX -= 1;
        copyY += 1;
    }
}

function topRightMove(
    objectDragItem: dragItem,
    canEat: string,
    copyLegalMoveArray: any[][]
) {
    let copyX = objectDragItem.origin.x + 1;
    let copyY = objectDragItem.origin.y + 1;

    while (copyX <= 7 && copyY <= 7) {
        if (
            checkIfEmptyOrEatable(objectDragItem, canEat, copyLegalMoveArray, {
                x: copyX,
                y: copyY,
            }) == false
        )
            break;
        copyX += 1;
        copyY += 1;
    }
}

export function diagonalMove(
    objectDragItem: dragItem,
    canEat: string,
    copyLegalMoveArray: any[][]
) {
    bottomLeftMove(objectDragItem, canEat, copyLegalMoveArray);
    bottomRightMove(objectDragItem, canEat, copyLegalMoveArray);
    topLeftMove(objectDragItem, canEat, copyLegalMoveArray);
    topRightMove(objectDragItem, canEat, copyLegalMoveArray);
}
