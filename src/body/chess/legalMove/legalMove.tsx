import { dragItem } from "../setUpBoard/displayBoxes";
import { pawnMove } from "./pawnMove";

export function showLegalMove(props: dragItem): void {
    if (props.pieceProps.piece == "pawn") pawnMove(props);
}
