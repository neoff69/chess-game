import { BoxWithPiece } from "../chess/chessUtils/BoxesUtils";
import {
    whiteFullPieceData,
    whiteFullPawnData,
    blackFullPieceData,
    blackFullPawnData,
} from "./setUpFullLineData";

export function SetUpFullPieceLineWhite(): Array<
    Array<{ element: JSX.Element }>
> {
    const pieceLine = whiteFullPieceData.map((piece) => ({
        key: piece.key,
        element: BoxWithPiece(piece),
    }));
    const pawnLine = whiteFullPawnData.map((piece) => ({
        key: piece.key,
        element: BoxWithPiece(piece),
    }));

    return [pieceLine, pawnLine];
}

export function SetUpFullPieceLineBlack(): Array<
    Array<{ element: JSX.Element }>
> {
    const pieceLine = blackFullPieceData.map((piece) => ({
        key: piece.key,
        element: BoxWithPiece(piece),
    }));
    const pawnLine = blackFullPawnData.map((piece) => ({
        key: piece.key,
        element: BoxWithPiece(piece),
    }));
    return [pieceLine, pawnLine];
}
