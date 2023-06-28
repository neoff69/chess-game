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
    prevState: enPassant,
    tempBoard: any[][],
    ending: { x: number; y: number },
    origin: { x: number; y: number }
) {
    if (
        tempBoard[ending.y][ending.x].piece == "pawn" &&
        origin.x != ending.x &&
        Math.abs(prevState.y - ending.y) == 1 &&
        ending.x == prevState.x
    ) {
        if (tempBoard[ending.y][ending.x].colorPiece == "white") {
            console.log(ending.y - 1, ending.x);
            tempBoard[ending.y - 1][ending.x] = null;
        } else tempBoard[ending.y + 1][ending.x] = null;
    } else {
        tempBoard[prevState.y][prevState.x].enPassant = false;
    }
}

function removeEnPassant(
    stateProps: useStateProps,
    tempBoard: any[][],
    ending: { x: number; y: number },
    origin: { x: number; y: number }
) {
    stateProps.setEnPassant((prevState: enPassant) => {
        deletePieceIfEnPassant(prevState, tempBoard, ending, origin);
        if (prevState.isEnPassant == true) {
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
