import { useStateProps } from "../chessUtils/props";
import { checkLine } from "./lineCheck";
import { checkDiagonal } from "./checkDiagonal";

export function checkIfNextMoveCheck(
    legalMoveArray: any[][],
    stateProps: useStateProps
) {
    stateProps.setPositionWhiteKing((kingPosition: any) => {
        checkLine(legalMoveArray, kingPosition, stateProps, "white");
        checkDiagonal(legalMoveArray, kingPosition, stateProps, "white");
        return kingPosition;
    });
    stateProps.setPositionBlackKing((kingPosition: any) => {
        checkLine(legalMoveArray, kingPosition, stateProps, "black");
        checkDiagonal(legalMoveArray, kingPosition, stateProps, "white");
        return kingPosition;
    });
}
