import { useDrop } from "react-dnd";
import { useEffect, useState } from "react";
import { useStateObject } from "../../chessUtils/object";
import { dragItem, pieceObject, boxObject } from "../../chessUtils/object";
import { Picture } from "./displayPicture";
import { pawnSpecialAction } from "./pawnSpecialAction";
import { setlegalMoveToZero } from "../../chessUtils/setUpUseState";
import { checkIfNextMoveCheck } from "../../checkHub/checkIfCheck";

function setUpObject(
    pieceObject: pieceObject | null,
    boxObject: boxObject,
    position: { x: number; y: number },
    stateObject: useStateObject
) {
    let objectDragItem: dragItem = {
        origin: position,
        pieceObject: pieceObject,
        boxObject: boxObject,
        stateObject: stateObject,
    };
    return objectDragItem;
}

function setUpKingOrigin(
    stateObject: useStateObject,
    ending: { x: number; y: number },
    row: pieceObject
) {
    if (row.piece === "king") {
        if (row.colorPiece === "white")
            stateObject.setPositionWhiteKing(ending);
        else stateObject.setPositionBlackKing(ending);
    }
}

function updateBoard(
    stateObject: useStateObject,
    origin: { x: number; y: number },
    ending: { x: number; y: number }
) {
    stateObject.setBoard((prevBoard: (pieceObject | null)[][]) => {
        let copyBoard = prevBoard.map((row: any) => [...row]);
        copyBoard[ending.y][ending.x] = {
            ...copyBoard[origin.y][origin.x],
        };
        setUpKingOrigin(stateObject, ending, copyBoard[ending.y][ending.x]);
        pawnSpecialAction(origin, ending, copyBoard, stateObject);
        copyBoard[origin.y][origin.x] = null;
        checkIfNextMoveCheck(copyBoard, stateObject);
        return copyBoard;
    });
    stateObject.setTurn((prevTurn: number) => {
        let nextTurn = prevTurn + 1;
        return nextTurn;
    });
}

function setUpDropEvent(
    stateObject: useStateObject,
    origin: { x: number; y: number }
) {
    const [, drop] = useDrop(() => ({
        accept: "image",
        drop: (item: dragItem) => {
            updateBoard(stateObject, item.origin, origin);
        },
    }));

    return [, drop];
}

function handleSecondClick(
    stateObject: useStateObject,
    origin: { x: number; y: number }
) {
    if (
        stateObject.legalMoveArray[origin.y][origin.x] > 0 &&
        stateObject.originClick.x != -1
    ) {
        updateBoard(stateObject, stateObject.originClick, origin);
        stateObject.setOriginClick({ x: -1, y: -1 });
        stateObject.setLegalMoveArray(setlegalMoveToZero());
    }
}

function getBoxColor(
    pieceObject: pieceObject | null,
    stateObject: useStateObject,
    boxObject: boxObject,
    setColor: React.Dispatch<React.SetStateAction<string>>
) {
    useEffect(() => {
        if (
            pieceObject?.piece === "king" &&
            pieceObject.colorPiece === stateObject.check
        ) {
            setColor("bg-red-500");
            stateObject.setCheck("");
        } else {
            setColor(boxObject.colorBox);
        }
    }, [stateObject.board]);
}

export function BoxNoPiece(
    boxObject: boxObject,
    pieceObject: pieceObject | null,
    origin: { x: number; y: number },
    stateObject: useStateObject
): JSX.Element {
    let dragItemObject: dragItem = setUpObject(
        pieceObject,
        boxObject,
        origin,
        stateObject
    );
    const [, drop] = setUpDropEvent(stateObject, origin);
    const [color, setColor] = useState(boxObject.colorBox);

    getBoxColor(pieceObject, stateObject, boxObject, setColor);
    return (
        <li
            ref={
                stateObject.legalMoveArray[origin.y][origin.x] > 0 ? drop : null
            }
            onClick={() => handleSecondClick(stateObject, origin)}
            id="box"
            className={`column-2 fixed ${color} ${boxObject.bottom} ${boxObject.left} flex aspect-square w-1/8 items-center justify-center`}
        >
            <Picture {...dragItemObject} />
        </li>
    );
}
