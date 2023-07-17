import { useStateObject } from "../chessUtils/object";
import { checkLine } from "./checkLine";
import { checkDiagonal } from "./checkDiagonal";
import { checkSquare } from "./checkSquare";
import { checkKnight } from "./checkKnight";

export function checkIfNextMoveCheck(
    board: any[][],
    stateObject: useStateObject
) {
    stateObject.setPositionWhiteKing((kingPosition: any) => {
        checkLine(board, kingPosition, stateObject, "white");
        checkDiagonal(board, kingPosition, stateObject, "white");
        checkSquare(board, kingPosition, stateObject, "white");
        checkKnight(board, kingPosition, stateObject, "white");
        return kingPosition;
    });
    stateObject.setPositionBlackKing((kingPosition: any) => {
        console.log(kingPosition);
        checkLine(board, kingPosition, stateObject, "black");
        checkDiagonal(board, kingPosition, stateObject, "black");
        checkSquare(board, kingPosition, stateObject, "black");
        checkKnight(board, kingPosition, stateObject, "black");
        return kingPosition;
    });
}
