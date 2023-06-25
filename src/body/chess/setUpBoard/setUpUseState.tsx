import {
    setUpFullPieceLineBlack,
    setUpFullPieceLineWhite,
    setUpEmptyLine,
} from "../chessUtils/setUpLine";
import { pieceProps, useStateProps } from "../chessUtils/props";
import { useState } from "react";

function setArrayElement(): (pieceProps | null)[][] {
    let arrayElement: (pieceProps | null)[][] = [];

    arrayElement = arrayElement.concat(
        setUpFullPieceLineWhite(),
        setUpEmptyLine(),
        setUpFullPieceLineBlack()
    );
    return arrayElement;
}

export function setlegalMoveToZero(): number[][] {
    let legalMoveArray: number[][] = [];

    for (let i = 0; i < 8; i++) {
        legalMoveArray[i] = [];
        for (let y = 0; y < 8; y++) {
            legalMoveArray[i][y] = 0;
        }
    }
    return legalMoveArray;
}

export function setUpState(): useStateProps {
    const [board, setBoard] = useState<(pieceProps | null)[][]>(
        setArrayElement()
    );
    const [legalMoveArray, setlegalMoveArray] = useState<number[][]>(
        setlegalMoveToZero()
    );
    const [turn, setTurn] = useState<number>(0);
    let stateProps: useStateProps = {
        board: board,
        setBoard: setBoard,
        legalMoveArray: legalMoveArray,
        setLegalMoveArray: setlegalMoveArray,
        turn: turn,
        setTurn: setTurn,
    };
    return stateProps;
}
