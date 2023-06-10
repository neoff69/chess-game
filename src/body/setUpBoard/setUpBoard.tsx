import { EmptyLine } from "./setUpEmptyLine";
import {
    SetUpFullPieceLineBlack,
    SetUpFullPieceLineWhite,
} from "./setUpFullLine";
import { pieceProps } from "../chess/chessUtils/BoxesJSX";
import { convertBoardInJSX } from "./convertBoardInJSX";
import { useState } from "react";

function setArrayElement(): (pieceProps | null)[][] {
    let arrayElement: (pieceProps | null)[][] = [];

    arrayElement = arrayElement.concat(
        SetUpFullPieceLineWhite(),
        EmptyLine(),
        SetUpFullPieceLineBlack()
    );
    return arrayElement;
}

export function SetUpBoard(): JSX.Element {
    let arrayElement = setArrayElement();
    const [board, setBoard] = useState<(pieceProps | null)[][]>(arrayElement);

    return (
        <>
            {board.map((element, index) => (
                <ul key={index}>
                    {convertBoardInJSX(element, index, [board, setBoard])}
                </ul>
            ))}
        </>
    );
}
