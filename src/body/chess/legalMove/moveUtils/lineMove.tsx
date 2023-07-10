import { dragItem } from "../../chessUtils/props";
import { checkIfEmptyOrEatable } from "./moveUtils";

function xLeftAxisMove(
    props: dragItem,
    canEat: string,
    copyLegalMoveArray: any[][]
) {
    let copyX = props.origin.x - 1;

    while (copyX >= 0) {
        if (
            checkIfEmptyOrEatable(props, canEat, copyLegalMoveArray, {
                x: copyX,
                y: props.origin.y,
            }) == false
        )
            break;
        copyX -= 1;
    }
}

function xRightAxisMove(
    props: dragItem,
    canEat: string,
    copyLegalMoveArray: any[][]
) {
    let copyX = props.origin.x + 1;

    while (copyX <= 7) {
        if (
            checkIfEmptyOrEatable(props, canEat, copyLegalMoveArray, {
                x: copyX,
                y: props.origin.y,
            }) == false
        )
            break;
        copyX += 1;
    }
}

function yBottomAxisMove(
    props: dragItem,
    canEat: string,
    copyLegalMoveArray: any[][]
) {
    let copyY = props.origin.y - 1;

    while (copyY >= 0) {
        if (
            checkIfEmptyOrEatable(props, canEat, copyLegalMoveArray, {
                x: props.origin.x,
                y: copyY,
            }) == false
        )
            break;
        copyY -= 1;
    }
}

function yTopAxisMove(
    props: dragItem,
    canEat: string,
    copyLegalMoveArray: any[][]
) {
    let copyY = props.origin.y + 1;

    while (copyY <= 7) {
        if (
            checkIfEmptyOrEatable(props, canEat, copyLegalMoveArray, {
                x: props.origin.x,
                y: copyY,
            }) == false
        )
            break;
        copyY += 1;
    }
}

export function lineMove(
    props: dragItem,
    canEat: string,
    copyLegalMoveArray: any[][]
) {
    xLeftAxisMove(props, canEat, copyLegalMoveArray);
    xRightAxisMove(props, canEat, copyLegalMoveArray);
    yBottomAxisMove(props, canEat, copyLegalMoveArray);
    yTopAxisMove(props, canEat, copyLegalMoveArray);
}
