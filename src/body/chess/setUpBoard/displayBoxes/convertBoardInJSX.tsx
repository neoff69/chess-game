import { boxObject, pieceObject } from "../../chessUtils/object";
import { BoxNoPiece } from "./displayBox";
import React from "react";
import { useStateObject } from "../../chessUtils/object";

function getColorBox(line: number, column: number): string {
    if (line % 2 == 1) {
        if (column % 2 == 0) return "bg-white";
        else return "bg-blue-400";
    } else {
        if (column % 2 == 0) return "bg-blue-400";
        else return "bg-white";
    }
}

function getBox(line: number, column: number): boxObject {
    let box: boxObject = {
        bottom: `bottom-${line.toString()}/8`,
        left: `left-${column.toString()}/8`,
        colorBox: getColorBox(line, column),
    };

    return box;
}

export function convertBoardInJSX(
    element: (pieceObject | null)[],
    line: number,
    stateObject: useStateObject
): JSX.Element {
    return (
        <>
            {element.map((piece, column) => {
                let box: boxObject = getBox(line + 1, column + 1);
                return (
                    <React.Fragment key={`${line}-${column}`}>
                        {BoxNoPiece(
                            box,
                            piece,
                            { x: column, y: line },
                            stateObject
                        )}
                    </React.Fragment>
                );
            })}
        </>
    );
}
