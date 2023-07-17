import { dragItem } from "../../chessUtils/object";
import { checkIfEmptyOrEatable } from "./moveUtils";

function xLeftAxisMove(
    objectDragItem: dragItem,
    canEat: string,
    copyLegalMoveArray: any[][]
) {
    let copyX = objectDragItem.origin.x - 1;

    while (copyX >= 0) {
        if (
            checkIfEmptyOrEatable(objectDragItem, canEat, copyLegalMoveArray, {
                x: copyX,
                y: objectDragItem.origin.y,
            }) == false
        )
            break;
        copyX -= 1;
    }
}

function xRightAxisMove(
    objectDragItem: dragItem,
    canEat: string,
    copyLegalMoveArray: any[][]
) {
    let copyX = objectDragItem.origin.x + 1;

    while (copyX <= 7) {
        if (
            checkIfEmptyOrEatable(objectDragItem, canEat, copyLegalMoveArray, {
                x: copyX,
                y: objectDragItem.origin.y,
            }) == false
        )
            break;
        copyX += 1;
    }
}

function yBottomAxisMove(
    objectDragItem: dragItem,
    canEat: string,
    copyLegalMoveArray: any[][]
) {
    let copyY = objectDragItem.origin.y - 1;

    while (copyY >= 0) {
        if (
            checkIfEmptyOrEatable(objectDragItem, canEat, copyLegalMoveArray, {
                x: objectDragItem.origin.x,
                y: copyY,
            }) == false
        )
            break;
        copyY -= 1;
    }
}

function yTopAxisMove(
    objectDragItem: dragItem,
    canEat: string,
    copyLegalMoveArray: any[][]
) {
    let copyY = objectDragItem.origin.y + 1;

    while (copyY <= 7) {
        if (
            checkIfEmptyOrEatable(objectDragItem, canEat, copyLegalMoveArray, {
                x: objectDragItem.origin.x,
                y: copyY,
            }) == false
        )
            break;
        copyY += 1;
    }
}

export function lineMove(
    objectDragItem: dragItem,
    canEat: string,
    copyLegalMoveArray: any[][]
) {
    xLeftAxisMove(objectDragItem, canEat, copyLegalMoveArray);
    xRightAxisMove(objectDragItem, canEat, copyLegalMoveArray);
    yBottomAxisMove(objectDragItem, canEat, copyLegalMoveArray);
    yTopAxisMove(objectDragItem, canEat, copyLegalMoveArray);
}
