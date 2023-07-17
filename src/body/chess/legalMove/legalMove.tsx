import { dragItem } from "../chessUtils/object";
import { pawnMove } from "./pawnMove";
import {
    queenMove,
    kingMove,
    bishopMove,
    rookMove,
    knightMove,
} from "./piecesMove";

import { setlegalMoveToZero } from "../chessUtils/setUpUseState";

export function showLegalMove(objectDragItem: dragItem): void {
    objectDragItem.stateObject.setLegalMoveArray(setlegalMoveToZero());
    if (objectDragItem.pieceObject == null) return;
    if (objectDragItem.pieceObject.piece == "pawn") pawnMove(objectDragItem);
    else if (objectDragItem.pieceObject.piece == "queen")
        queenMove(objectDragItem);
    else if (objectDragItem.pieceObject.piece == "king")
        kingMove(objectDragItem);
    else if (objectDragItem.pieceObject.piece == "bishop")
        bishopMove(objectDragItem);
    else if (objectDragItem.pieceObject.piece == "rook")
        rookMove(objectDragItem);
    else if (objectDragItem.pieceObject.piece == "knight")
        knightMove(objectDragItem);
}
