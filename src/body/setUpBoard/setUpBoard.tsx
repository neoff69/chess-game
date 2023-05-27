import { EmptyLine } from "./setUpEmptyLine";
import {
    SetUpFullPieceLineBlack,
    SetUpFullPieceLineWhite,
} from "./setUpFullLine";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function getGameBoardArray(arrayElement: { element: JSX.Element }[][]) {
    let arrayGameBoard: JSX.Element[][] = [];
    for (let index = 0; index < arrayElement.length; index++) {
        arrayGameBoard[index] = arrayElement[index].map(({ element }) => (
            <React.Fragment key={uuidv4()}>{element}</React.Fragment>
        ));
    }
    return arrayGameBoard;
}

export function SetUpBoard(): JSX.Element {
    let arrayElement: { element: JSX.Element }[][] = [];

    arrayElement = arrayElement.concat(
        SetUpFullPieceLineWhite(),
        EmptyLine(),
        SetUpFullPieceLineBlack()
    );

    const [board, setBoard] = useState(getGameBoardArray(arrayElement));

    return <ul>{board}</ul>;
}
