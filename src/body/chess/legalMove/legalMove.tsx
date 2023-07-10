import { dragItem } from "../chessUtils/props";
import { pawnMove } from "./pawnMove";
import {
    queenMove,
    kingMove,
    bishopMove,
    rookMove,
    knightMove,
} from "./piecesMove";

import { setlegalMoveToZero } from "../chessUtils/setUpUseState";

export function showLegalMove(props: dragItem): void {
    props.stateProps.setLegalMoveArray(setlegalMoveToZero());
    if (props.pieceProps == null) return;
    if (props.pieceProps.piece == "pawn") pawnMove(props);
    else if (props.pieceProps.piece == "queen") queenMove(props);
    else if (props.pieceProps.piece == "king") kingMove(props);
    else if (props.pieceProps.piece == "bishop") bishopMove(props);
    else if (props.pieceProps.piece == "rook") rookMove(props);
    else if (props.pieceProps.piece == "knight") knightMove(props);
}
