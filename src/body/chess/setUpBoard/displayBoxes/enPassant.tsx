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

function removeEnPassant(stateProps: useStateProps, tempBoard: any[][]) {
    stateProps.setEnPassant((prevState: enPassant) => {
        if (prevState.isEnPassant == true) {
            let temp: enPassant = {
                isEnPassant: false,
                y: 0,
                x: 0,
            };
            tempBoard[prevState.y][prevState.x].enPassant = false;
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
    removeEnPassant(stateProps, tempBoard);
    if (tempBoard[ending.y][ending.x].piece == "pawn") {
        checkIfEnPassant(
            origin,
            ending,
            tempBoard[ending.y][ending.x],
            stateProps
        );
    }
}
