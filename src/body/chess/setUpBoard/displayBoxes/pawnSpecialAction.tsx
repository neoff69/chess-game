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
    copyLegalMoveArray: any[][],
    ending: { x: number; y: number },
    origin: { x: number; y: number }
) {
    if (
        copyLegalMoveArray[ending.y][ending.x].piece == "pawn" &&
        origin.x != ending.x &&
        ending.y > 0 &&
        copyLegalMoveArray[ending.y - 1][ending.x]?.enPassant === true &&
        copyLegalMoveArray[ending.y][ending.x].colorPiece == "white"
    )
        copyLegalMoveArray[ending.y - 1][ending.x] = null;
    else if (
        copyLegalMoveArray[ending.y][ending.x].piece == "pawn" &&
        origin.x != ending.x &&
        ending.y < 7 &&
        copyLegalMoveArray[ending.y + 1][ending.x]?.enPassant === true &&
        copyLegalMoveArray[ending.y][ending.x].colorPiece == "black"
    )
        copyLegalMoveArray[ending.y + 1][ending.x] = null;
}

function removeEnPassant(
    stateProps: useStateProps,
    copyLegalMoveArray: any[][],
    ending: { x: number; y: number },
    origin: { x: number; y: number }
) {
    deletePieceIfEnPassant(copyLegalMoveArray, ending, origin);
    stateProps.setEnPassant((prevState: enPassant) => {
        if (prevState.isEnPassant == true) {
            if (copyLegalMoveArray[prevState.y][prevState.x])
                copyLegalMoveArray[prevState.y][prevState.x].enPassant = false;
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

function changePiece(
    copyLegalMoveArray: any[][],
    ending: { x: number; y: number }
) {
    copyLegalMoveArray[ending.y][ending.x].piece = "queen";
}

export function pawnSpecialAction(
    origin: { x: number; y: number },
    ending: { x: number; y: number },
    copyLegalMoveArray: any[][],
    stateProps: useStateProps
) {
    removeEnPassant(stateProps, copyLegalMoveArray, ending, origin);
    if (copyLegalMoveArray[ending.y][ending.x].piece == "pawn") {
        if (ending.y == 3 || ending.y == 4) {
            checkIfEnPassant(
                origin,
                ending,
                copyLegalMoveArray[ending.y][ending.x],
                stateProps
            );
        } else if (ending.y == 0 || ending.y == 7) {
            changePiece(copyLegalMoveArray, ending);
        }
    }
}
