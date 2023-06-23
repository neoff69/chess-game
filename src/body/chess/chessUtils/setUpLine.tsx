import {
    whiteFullPieceData,
    whiteFullPawnData,
    blackFullPieceData,
    blackFullPawnData,
} from "./setUpFullLineData";
import { pieceProps } from "../setUpBoard/displayBoxes";

export function setUpEmptyLine(): null[][] {
    return Array(4).fill(Array(8).fill(null));
}

export function setUpFullPieceLineWhite(): pieceProps[][] {
    let pieceLine = whiteFullPieceData;
    let pawnLine = whiteFullPawnData;

    return [pieceLine, pawnLine];
}

export function setUpFullPieceLineBlack(): pieceProps[][] {
    let pieceLine = blackFullPieceData;
    let pawnLine = blackFullPawnData;

    return [pawnLine, pieceLine];
}
