//NEED TO MAKE CHECK PREVISION

// import { dragItem } from "../../chessUtils/object";
// import { checkIfNextMoveCheck } from "../../checkHub/checkIfCheck";
// import { useEffect } from "react";

// function CheckIfMoveIsNotCheck(
//     objectDragItem: dragItem,
//     copyLegalMoveArray: any[][],
//     ending: { x: number; y: number }
// ) {
//     if (objectDragItem.pieceObject?.colorPiece === "white") {
//         objectDragItem.stateObject.setPositionWhiteKing(() => {
//             return ending;
//         });
//     } else
//         objectDragItem.stateObject.setPositionBlackKing(() => {
//             objectDragItem.stateObject.PositionBlackKing;
//             return ending;
//         });
//     objectDragItem.stateObject.setBoard((actualBoard) => {
//         let copyBoard = actualBoard.map((subArray) => [...subArray]);
//         copyBoard[ending.y][ending.x] = objectDragItem.pieceObject;
//         copyBoard[objectDragItem.origin.y][objectDragItem.origin.x] = null;
//         //checkIfNextMoveCheck(copyBoard, objectDragItem.stateObject);
//         return actualBoard;
//     });
//     objectDragItem.stateObject.setCheck((prevCheck) => {
//         const newCheck = "";
//         if (prevCheck == "") copyLegalMoveArray[ending.y][ending.x] = 1;
//         return newCheck;
//     });
//     if (objectDragItem.pieceObject?.colorPiece === "white") {
//         objectDragItem.stateObject.setPositionWhiteKing(() => {
//             return objectDragItem.origin;
//         });
//     } else
//         objectDragItem.stateObject.setPositionBlackKing(() => {
//             return objectDragItem.origin;
//         });
// }

// function checkIfMovePossible(
//     objectDragItem: dragItem,
//     canEat: string,
//     copyLegalMoveArray: any[][],
//     ending: { x: number; y: number }
// ) {
//     if (objectDragItem.stateObject.board[ending.y][ending.x] === null) {
//         CheckIfMoveIsNotCheck(objectDragItem, copyLegalMoveArray, ending);
//     } else if (
//         objectDragItem.stateObject.board[ending.y][ending.x]?.colorPiece ===
//         canEat
//     ) {
//         CheckIfMoveIsNotCheck(objectDragItem, copyLegalMoveArray, ending);
//     }
// }

// function leftMove(
//     objectDragItem: dragItem,
//     canEat: string,
//     copyLegalMoveArray: any[][]
// ) {
//     if (objectDragItem.origin.x > 0) {
//         checkIfMovePossible(objectDragItem, canEat, copyLegalMoveArray, {
//             x: objectDragItem.origin.x - 1,
//             y: objectDragItem.origin.y,
//         });
//         if (objectDragItem.origin.y > 0) {
//             checkIfMovePossible(objectDragItem, canEat, copyLegalMoveArray, {
//                 x: objectDragItem.origin.x - 1,
//                 y: objectDragItem.origin.y - 1,
//             });
//         }
//         if (objectDragItem.origin.y < 7)
//             checkIfMovePossible(objectDragItem, canEat, copyLegalMoveArray, {
//                 x: objectDragItem.origin.x - 1,
//                 y: objectDragItem.origin.y + 1,
//             });
//     }
// }

// function rightMove(
//     objectDragItem: dragItem,
//     canEat: string,
//     copyLegalMoveArray: any[][]
// ) {
//     if (objectDragItem.origin.x < 7) {
//         checkIfMovePossible(objectDragItem, canEat, copyLegalMoveArray, {
//             x: objectDragItem.origin.x + 1,
//             y: objectDragItem.origin.y,
//         });
//         if (objectDragItem.origin.y > 0)
//             checkIfMovePossible(objectDragItem, canEat, copyLegalMoveArray, {
//                 x: objectDragItem.origin.x + 1,
//                 y: objectDragItem.origin.y - 1,
//             });
//         if (objectDragItem.origin.y < 7)
//             checkIfMovePossible(objectDragItem, canEat, copyLegalMoveArray, {
//                 x: objectDragItem.origin.x + 1,
//                 y: objectDragItem.origin.y + 1,
//             });
//     }
// }

// function middleMove(
//     objectDragItem: dragItem,
//     canEat: string,
//     copyLegalMoveArray: any[][]
// ) {
//     if (objectDragItem.origin.y > 0)
//         checkIfMovePossible(objectDragItem, canEat, copyLegalMoveArray, {
//             x: objectDragItem.origin.x,
//             y: objectDragItem.origin.y - 1,
//         });
//     if (objectDragItem.origin.y < 7)
//         checkIfMovePossible(objectDragItem, canEat, copyLegalMoveArray, {
//             x: objectDragItem.origin.x,
//             y: objectDragItem.origin.y + 1,
//         });
// }

// export function kingDeplacement(
//     objectDragItem: dragItem,
//     canEat: string,
//     copyLegalMoveArray: any[][]
// ) {
//     leftMove(objectDragItem, canEat, copyLegalMoveArray);
//     rightMove(objectDragItem, canEat, copyLegalMoveArray);
//     middleMove(objectDragItem, canEat, copyLegalMoveArray);
// }
