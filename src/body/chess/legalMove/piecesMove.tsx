import { dragItem } from "../chessUtils/props";
import { squareMove } from "./moveUtils/squareMove";
import { diagonalMove } from "./moveUtils/diagonalMove";
import { lineMove } from "./moveUtils/lineMove";
import { knightLegalMove } from "./moveUtils/knightMove";
import { setCanEatColor } from "./moveUtils/moveUtils";

export function queenMove(props: dragItem) {
    let canEat = setCanEatColor(props.pieceProps?.colorPiece);
    props.stateProps.setLegalMoveArray((prevBoard: number[][]) => {
        let copyLegalMoveArray = prevBoard.map((row: any) => [...row]);
        squareMove(props, canEat, copyLegalMoveArray);
        diagonalMove(props, canEat, copyLegalMoveArray);
        lineMove(props, canEat, copyLegalMoveArray);
        return copyLegalMoveArray;
    });
}

export function kingMove(props: dragItem) {
    let canEat = setCanEatColor(props.pieceProps?.colorPiece);
    props.stateProps.setLegalMoveArray((prevBoard: number[][]) => {
        let copyLegalMoveArray = prevBoard.map((row: any) => [...row]);
        squareMove(props, canEat, copyLegalMoveArray);
        return copyLegalMoveArray;
    });
}

export function rookMove(props: dragItem) {
    let canEat = setCanEatColor(props.pieceProps?.colorPiece);
    props.stateProps.setLegalMoveArray((prevBoard: number[][]) => {
        let copyLegalMoveArray = prevBoard.map((row: any) => [...row]);
        lineMove(props, canEat, copyLegalMoveArray);
        return copyLegalMoveArray;
    });
}

export function bishopMove(props: dragItem) {
    let canEat = setCanEatColor(props.pieceProps?.colorPiece);
    props.stateProps.setLegalMoveArray((prevBoard: number[][]) => {
        let copyLegalMoveArray = prevBoard.map((row: any) => [...row]);
        diagonalMove(props, canEat, copyLegalMoveArray);
        return copyLegalMoveArray;
    });
}

export function knightMove(props: dragItem) {
    let canEat = setCanEatColor(props.pieceProps?.colorPiece);
    props.stateProps.setLegalMoveArray((prevBoard: number[][]) => {
        let copyLegalMoveArray = prevBoard.map((row: any) => [...row]);
        knightLegalMove(props, canEat, copyLegalMoveArray);
        return copyLegalMoveArray;
    });
}
