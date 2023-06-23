import {
    setUpFullPieceLineBlack,
    setUpFullPieceLineWhite,
    setUpEmptyLine,
} from "../chessUtils/setUpLine";
import { pieceProps } from "./displayBoxes";
import { convertBoardInJSX } from "./convertBoardInJSX";
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

export function SetUpBoard(): JSX.Element {
    const [board, setBoard] = useState<(pieceProps | null)[][]>(
        setArrayElement()
    );
    const [turn, setTurn] = useState<number>(0);
    return (
        <>
            {board.map((element, index) => (
                <ul key={index}>
                    {convertBoardInJSX(element, index, setBoard, [
                        turn,
                        setTurn,
                    ])}
                </ul>
            ))}
        </>
    );
}
