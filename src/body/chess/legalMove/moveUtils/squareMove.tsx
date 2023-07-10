import { dragItem } from "../../chessUtils/props";
import { checkIfEmptyOrEatable } from "./moveUtils";

function leftMove(
    props: dragItem,
    canEat: string,
    copyLegalMoveArray: any[][]
) {
    if (props.origin.x > 0) {
        checkIfEmptyOrEatable(props, canEat, copyLegalMoveArray, {
            x: props.origin.x - 1,
            y: props.origin.y,
        });
        if (props.origin.y > 0)
            checkIfEmptyOrEatable(props, canEat, copyLegalMoveArray, {
                x: props.origin.x - 1,
                y: props.origin.y - 1,
            });
        if (props.origin.y < 7)
            checkIfEmptyOrEatable(props, canEat, copyLegalMoveArray, {
                x: props.origin.x - 1,
                y: props.origin.y + 1,
            });
    }
}

function rightMove(
    props: dragItem,
    canEat: string,
    copyLegalMoveArray: any[][]
) {
    if (props.origin.x < 7) {
        checkIfEmptyOrEatable(props, canEat, copyLegalMoveArray, {
            x: props.origin.x + 1,
            y: props.origin.y,
        });
        if (props.origin.y > 0)
            checkIfEmptyOrEatable(props, canEat, copyLegalMoveArray, {
                x: props.origin.x + 1,
                y: props.origin.y - 1,
            });
        if (props.origin.y < 7)
            checkIfEmptyOrEatable(props, canEat, copyLegalMoveArray, {
                x: props.origin.x + 1,
                y: props.origin.y + 1,
            });
    }
}

function middleMove(
    props: dragItem,
    canEat: string,
    copyLegalMoveArray: any[][]
) {
    if (props.origin.y > 0)
        checkIfEmptyOrEatable(props, canEat, copyLegalMoveArray, {
            x: props.origin.x,
            y: props.origin.y - 1,
        });
    if (props.origin.y < 7)
        checkIfEmptyOrEatable(props, canEat, copyLegalMoveArray, {
            x: props.origin.x,
            y: props.origin.y + 1,
        });
}

export function squareMove(
    props: dragItem,
    canEat: string,
    copyLegalMoveArray: any[][]
) {
    leftMove(props, canEat, copyLegalMoveArray);
    rightMove(props, canEat, copyLegalMoveArray);
    middleMove(props, canEat, copyLegalMoveArray);
}
