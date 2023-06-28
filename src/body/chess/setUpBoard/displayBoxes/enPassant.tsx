import { useEffect } from "react";
import { useStateProps } from "../../chessUtils/props";
import { enPassant } from "../../chessUtils/props";

function checkIfEnPassant(
    origin: { x: number; y: number },
    ending: { x: number; y: number },
    element: any,
    stateProps: useStateProps
) {
    if (
        (element.piece == "pawn" && origin.y - ending.y == 2) ||
        (element.piece == "pawn" && origin.y - ending.y == -2)
    ) {
        stateProps.setEnPassant(() => {
            element.enPassant = true;
            let temp: enPassant = {
                isEnPassant: true,
                y: ending.y,
                x: ending.x,
            };
            element.enPassant = true;
            return temp;
        });
    }
}

function deletePieceIfEnPassant(
    tempBoard: any[][],
    ending: { x: number; y: number },
    origin: { x: number; y: number }
) {
    if (
        tempBoard[ending.y][ending.x].piece == "pawn" &&
        origin.x != ending.x &&
        tempBoard[ending.y - 1][ending.x].enPassant === true &&
        tempBoard[ending.y][ending.x].colorPiece == "white"
    )
        tempBoard[ending.y - 1][ending.x] = null;
    else if (
        tempBoard[ending.y][ending.x].piece == "pawn" &&
        origin.x != ending.x &&
        tempBoard[ending.y + 1][ending.x].enPassant === true &&
        tempBoard[ending.y][ending.x].colorPiece == "black"
    )
        tempBoard[ending.y + 1][ending.x] = null;
}

function removeEnPassant(
    stateProps: useStateProps,
    tempBoard: any[][],
    ending: { x: number; y: number },
    origin: { x: number; y: number }
) {
    deletePieceIfEnPassant(tempBoard, ending, origin);
    stateProps.setEnPassant((prevState: enPassant) => {
        if (prevState.isEnPassant == true) {
            if (tempBoard[prevState.y][prevState.x])
                tempBoard[prevState.y][prevState.x].enPassant = false;
            let temp: enPassant = {
                isEnPassant: false,
                y: 0,
                x: 0,
            };
            return temp;
        }
        return prevState;
    });
}

export function enPassantManager(
    origin: { x: number; y: number },
    ending: { x: number; y: number },
    tempBoard: any[][],
    stateProps: useStateProps
) {
    removeEnPassant(stateProps, tempBoard, ending, origin);
    if (
        tempBoard[ending.y][ending.x].piece == "pawn" &&
        (ending.y == 3 || ending.y == 4)
    ) {
        checkIfEnPassant(
            origin,
            ending,
            tempBoard[ending.y][ending.x],
            stateProps
        );
    }
}
