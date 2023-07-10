import { dragItem } from "../../chessUtils/props";

export function setCanEatColor(color: string | undefined): string {
    if (color == "white") return "black";
    return "white";
}
export function checkIfEmptyOrEatable(
    props: dragItem,
    canEat: string,
    copyLegalMoveArray: any[][],
    ending: { x: number; y: number }
): boolean {
    if (props.stateProps.board[ending.y][ending.x] === null) {
        copyLegalMoveArray[ending.y][ending.x] = 1;
        return true;
    } else if (
        props.stateProps.board[ending.y][ending.x]?.colorPiece === canEat
    ) {
        copyLegalMoveArray[ending.y][ending.x] = 1;
    }
    return false;
}
