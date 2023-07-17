import {
    whiteFullPieceData,
    whiteFullPawnData,
    blackFullPieceData,
    blackFullPawnData,
} from "./setUpFullLineData";
import { pieceObject } from "../setUpBoard/displayBoxes/displayBox";

export function setUpEmptyLine(): null[][] {
    return Array(4).fill(Array(8).fill(null));
}

export function setUpFullPieceLineWhite(): pieceObject[][] {
    let pieceLine = whiteFullPieceData;
    let pawnLine = whiteFullPawnData;

    return [pieceLine, pawnLine];
}

export function setUpFullPieceLineBlack(): pieceObject[][] {
    let pieceLine = blackFullPieceData;
    let pawnLine = blackFullPawnData;

    return [pawnLine, pieceLine];
}
