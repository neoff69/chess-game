import { pieceProps, boxProps } from "../chess/chessUtils/BoxesJSX";
import { BoxNoPiece } from "../chess/chessUtils/BoxesJSX";
import React from "react";
function getColorBox(line: number, column: number): string {
    if (line % 2 == 1) {
        if (column % 2 == 0) return "bg-white";
        else return "bg-blue-400";
    } else {
        if (column % 2 == 0) return "bg-blue-400";
        else return "bg-white";
    }
}

function getBox(line: number, column: number): boxProps {
    let box: boxProps = {
        bottom: `bottom-${line.toString()}/8`,
        left: `left-${column.toString()}/8`,
        colorBox: getColorBox(line, column),
    };

    return box;
}

export function convertBoardInJSX(
    element: (pieceProps | null)[],
    line: number,
    [board, setBoard]: any
): JSX.Element {
    return (
        <>
            {element.map((piece, column) => {
                let box: boxProps = getBox(line + 1, column + 1);
                return (
                    <React.Fragment key={`${line}-${column}`}>
                        {BoxNoPiece(box, piece, { x: column, y: line }, [
                            board,
                            setBoard,
                        ])}
                    </React.Fragment>
                );
            })}
        </>
    );
}
