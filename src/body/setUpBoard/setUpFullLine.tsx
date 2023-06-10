import {
    whiteFullPieceData,
    whiteFullPawnData,
    blackFullPieceData,
    blackFullPawnData,
} from "./setUpFullLineData";
import { pieceProps } from "../chess/chessUtils/BoxesJSX";

export function SetUpFullPieceLineWhite(): pieceProps[][] {
    let pieceLine = whiteFullPieceData;
    let pawnLine = whiteFullPawnData;

    return [pieceLine, pawnLine];
}

export function SetUpFullPieceLineBlack(): pieceProps[][] {
    let pieceLine = blackFullPieceData;
    let pawnLine = blackFullPawnData;

    return [pawnLine, pieceLine];
}
