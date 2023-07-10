import { dragItem } from "../../chessUtils/props";
import { checkIfEmptyOrEatable } from "./moveUtils";

function bottomLeftMove(
    props: dragItem,
    canEat: string,
    copyLegalMoveArray: any[][]
) {
    let copyX = props.origin.x - 1;
    let copyY = props.origin.y - 1;

    while (copyX >= 0 && copyY >= 0) {
        if (
            checkIfEmptyOrEatable(props, canEat, copyLegalMoveArray, {
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
    props: dragItem,
    canEat: string,
    copyLegalMoveArray: any[][]
) {
    let copyX = props.origin.x + 1;
    let copyY = props.origin.y - 1;

    while (copyX <= 7 && copyY >= 0) {
        if (
            checkIfEmptyOrEatable(props, canEat, copyLegalMoveArray, {
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
    props: dragItem,
    canEat: string,
    copyLegalMoveArray: any[][]
) {
    let copyX = props.origin.x - 1;
    let copyY = props.origin.y + 1;

    while (copyX >= 0 && copyY <= 7) {
        if (
            checkIfEmptyOrEatable(props, canEat, copyLegalMoveArray, {
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
    props: dragItem,
    canEat: string,
    copyLegalMoveArray: any[][]
) {
    let copyX = props.origin.x + 1;
    let copyY = props.origin.y + 1;

    while (copyX <= 7 && copyY <= 7) {
        if (
            checkIfEmptyOrEatable(props, canEat, copyLegalMoveArray, {
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
    props: dragItem,
    canEat: string,
    copyLegalMoveArray: any[][]
) {
    bottomLeftMove(props, canEat, copyLegalMoveArray);
    bottomRightMove(props, canEat, copyLegalMoveArray);
    topLeftMove(props, canEat, copyLegalMoveArray);
    topRightMove(props, canEat, copyLegalMoveArray);
}
