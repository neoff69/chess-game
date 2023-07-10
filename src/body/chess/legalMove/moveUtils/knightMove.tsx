import { dragItem } from "../../chessUtils/props";
import { checkIfEmptyOrEatable } from "./moveUtils";

function topLeftMove(
    props: dragItem,
    canEat: string,
    copyLegalMoveArray: any[][]
) {
    if (props.origin.x - 2 >= 0 && props.origin.y + 1 <= 7)
        checkIfEmptyOrEatable(props, canEat, copyLegalMoveArray, {
            x: props.origin.x - 2,
            y: props.origin.y + 1,
        });
    if (props.origin.x - 1 >= 0 && props.origin.y + 2 <= 7)
        checkIfEmptyOrEatable(props, canEat, copyLegalMoveArray, {
            x: props.origin.x - 1,
            y: props.origin.y + 2,
        });
}

function topRightMove(
    props: dragItem,
    canEat: string,
    copyLegalMoveArray: any[][]
) {
    if (props.origin.x + 2 <= 7 && props.origin.y + 1 <= 7)
        checkIfEmptyOrEatable(props, canEat, copyLegalMoveArray, {
            x: props.origin.x + 2,
            y: props.origin.y + 1,
        });
    if (props.origin.x + 1 <= 7 && props.origin.y + 2 <= 7)
        checkIfEmptyOrEatable(props, canEat, copyLegalMoveArray, {
            x: props.origin.x + 1,
            y: props.origin.y + 2,
        });
}

function bottomLeftMove(
    props: dragItem,
    canEat: string,
    copyLegalMoveArray: any[][]
) {
    if (props.origin.x - 2 >= 0 && props.origin.y - 1 >= 0)
        checkIfEmptyOrEatable(props, canEat, copyLegalMoveArray, {
            x: props.origin.x - 2,
            y: props.origin.y - 1,
        });
    if (props.origin.x - 1 >= 0 && props.origin.y - 2 >= 0)
        checkIfEmptyOrEatable(props, canEat, copyLegalMoveArray, {
            x: props.origin.x - 1,
            y: props.origin.y - 2,
        });
}

function bottomRightMove(
    props: dragItem,
    canEat: string,
    copyLegalMoveArray: any[][]
) {
    if (props.origin.x + 2 <= 7 && props.origin.y - 1 >= 0)
        checkIfEmptyOrEatable(props, canEat, copyLegalMoveArray, {
            x: props.origin.x + 2,
            y: props.origin.y - 1,
        });
    if (props.origin.x + 1 <= 7 && props.origin.y - 2 >= 0)
        checkIfEmptyOrEatable(props, canEat, copyLegalMoveArray, {
            x: props.origin.x + 1,
            y: props.origin.y - 2,
        });
}

export function knightLegalMove(
    props: dragItem,
    canEat: string,
    copyLegalMoveArray: any[][]
) {
    topLeftMove(props, canEat, copyLegalMoveArray);
    topRightMove(props, canEat, copyLegalMoveArray);
    bottomLeftMove(props, canEat, copyLegalMoveArray);
    bottomRightMove(props, canEat, copyLegalMoveArray);
}
