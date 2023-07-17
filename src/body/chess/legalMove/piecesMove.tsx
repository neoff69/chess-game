import { dragItem } from "../chessUtils/object";
import { squareMove } from "./moveUtils/squareMove";
import { diagonalMove } from "./moveUtils/diagonalMove";
//import { kingDeplacement } from "./moveUtils/kingDeplacement";
import { lineMove } from "./moveUtils/lineMove";
import { knightLegalMove } from "./moveUtils/knightMove";
import { setCanEatColor } from "./moveUtils/moveUtils";

export function queenMove(objectDragItem: dragItem) {
    let canEat = setCanEatColor(objectDragItem.pieceObject?.colorPiece);
    objectDragItem.stateObject.setLegalMoveArray((prevBoard: number[][]) => {
        let copyLegalMoveArray = prevBoard.map((row: any) => [...row]);
        squareMove(objectDragItem, canEat, copyLegalMoveArray);
        diagonalMove(objectDragItem, canEat, copyLegalMoveArray);
        lineMove(objectDragItem, canEat, copyLegalMoveArray);
        return copyLegalMoveArray;
    });
}

export function kingMove(objectDragItem: dragItem) {
    let canEat = setCanEatColor(objectDragItem.pieceObject?.colorPiece);
    objectDragItem.stateObject.setLegalMoveArray((prevBoard: number[][]) => {
        let copyLegalMoveArray = prevBoard.map((row: any) => [...row]);
        //kingDeplacement(objectDragItem, canEat, copyLegalMoveArray);
        squareMove(objectDragItem, canEat, copyLegalMoveArray);
        return copyLegalMoveArray;
    });
}

export function rookMove(objectDragItem: dragItem) {
    let canEat = setCanEatColor(objectDragItem.pieceObject?.colorPiece);
    objectDragItem.stateObject.setLegalMoveArray((prevBoard: number[][]) => {
        let copyLegalMoveArray = prevBoard.map((row: any) => [...row]);
        lineMove(objectDragItem, canEat, copyLegalMoveArray);
        return copyLegalMoveArray;
    });
}

export function bishopMove(objectDragItem: dragItem) {
    let canEat = setCanEatColor(objectDragItem.pieceObject?.colorPiece);
    objectDragItem.stateObject.setLegalMoveArray((prevBoard: number[][]) => {
        let copyLegalMoveArray = prevBoard.map((row: any) => [...row]);
        diagonalMove(objectDragItem, canEat, copyLegalMoveArray);
        return copyLegalMoveArray;
    });
}

export function knightMove(objectDragItem: dragItem) {
    let canEat = setCanEatColor(objectDragItem.pieceObject?.colorPiece);
    objectDragItem.stateObject.setLegalMoveArray((prevBoard: number[][]) => {
        let copyLegalMoveArray = prevBoard.map((row: any) => [...row]);
        knightLegalMove(objectDragItem, canEat, copyLegalMoveArray);
        return copyLegalMoveArray;
    });
}
