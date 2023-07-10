import {
    setUpFullPieceLineBlack,
    setUpFullPieceLineWhite,
    setUpEmptyLine,
} from "./setUpLine";
import { enPassant, pieceProps, useStateProps } from "./props";
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

function setUpEnPassant(): enPassant {
    let enPassant: enPassant = {
        isEnPassant: false,
        x: 0,
        y: 0,
    };
    return enPassant;
}

export function setUpState(): useStateProps {
    const [board, setBoard] = useState<(pieceProps | null)[][]>(
        setArrayElement()
    );
    const [legalMoveArray, setlegalMoveArray] = useState<number[][]>(
        setlegalMoveToZero()
    );
    const [turn, setTurn] = useState<number>(0);
    const [enPassant, setEnPassant] = useState<enPassant>(setUpEnPassant());
    const [originClick, setOriginClick] = useState({ x: -1, y: -1 });
    const [PositionWhiteKing, setPositionWhiteKing] = useState({ x: 4, y: 0 });
    const [PositionBlackKing, setPositionBlackKing] = useState({ x: 4, y: 7 });
    const [check, setCheck] = useState(false);
    let stateProps: useStateProps = {
        board: board,
        setBoard: setBoard,
        legalMoveArray: legalMoveArray,
        setLegalMoveArray: setlegalMoveArray,
        turn: turn,
        setTurn: setTurn,
        enPassant: enPassant,
        setEnPassant: setEnPassant,
        originClick,
        setOriginClick,
        PositionWhiteKing,
        setPositionWhiteKing,
        PositionBlackKing,
        setPositionBlackKing,
        check,
        setCheck,
    };
    return stateProps;
}
