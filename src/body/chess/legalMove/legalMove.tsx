import { dragItem } from "../chessUtils/props";
import { pawnMove } from "./pawnMove";

export function showLegalMove(props: dragItem): void {
    if (props.pieceProps == null) return;
    if (props.pieceProps.piece == "pawn") pawnMove(props);
}
