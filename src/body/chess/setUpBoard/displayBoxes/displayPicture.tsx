import { dragItem } from "../../chessUtils/object";
import { useDrag } from "react-dnd";
import { showLegalMove } from "../../legalMove/legalMove";
import { useEffect } from "react";
import { setlegalMoveToZero } from "../../chessUtils/setUpUseState";

function checkIfDraggable(objectDragItem: dragItem): boolean {
    let isDraggable: boolean = false;
    if (objectDragItem.pieceObject == null) return isDraggable;
    if (
        (objectDragItem.stateObject.turn % 2 == 0 &&
            objectDragItem.pieceObject.colorPiece == "white") ||
        (objectDragItem.stateObject.turn % 2 == 1 &&
            objectDragItem.pieceObject.colorPiece == "black")
    ) {
        isDraggable = true;
    }
    return isDraggable;
}

function displayNoPicture(objectDragItem: dragItem): JSX.Element {
    return (
        <div
            className={` h-6 w-6 ${
                objectDragItem.stateObject.legalMoveArray[
                    objectDragItem.origin.y
                ][objectDragItem.origin.x] > 0
                    ? " rounded-full bg-amber-400"
                    : ""
            }`}
        ></div>
    );
}

function isBorderNeeded(
    objectDragItem: dragItem,
    isDragging: boolean,
    origin: { x: number; y: number }
): boolean {
    if (
        objectDragItem.stateObject.legalMoveArray[objectDragItem.origin.y][
            objectDragItem.origin.x
        ] === 1
    )
        return true;
    if (
        origin.x === objectDragItem.origin.x &&
        origin.y === objectDragItem.origin.y
    )
        return true;
    return isDragging;
}

function handleFirstClick(objectDragItem: dragItem, isDraggable: boolean) {
    if (isDraggable) {
        showLegalMove(objectDragItem);
        objectDragItem.stateObject.setOriginClick({
            x: objectDragItem.origin.x,
            y: objectDragItem.origin.y,
        });
    }
}

function displayPicture(
    objectDragItem: dragItem,
    drag: any,
    isDragging: boolean | any
): JSX.Element {
    let isDraggable: boolean = checkIfDraggable(objectDragItem);
    if (objectDragItem.pieceObject == null) return <></>;
    return (
        <img
            onClick={() => handleFirstClick(objectDragItem, isDraggable)}
            ref={isDraggable ? drag : null}
            className={`h-full ${
                isBorderNeeded(
                    objectDragItem,
                    isDragging,
                    objectDragItem.stateObject.originClick
                )
                    ? " border-4 border-amber-400"
                    : ""
            }`}
            id={objectDragItem.pieceObject.id}
            src={`../../../../img/${objectDragItem.pieceObject.colorPiece}_${objectDragItem.pieceObject.piece}.svg`}
            alt={`${objectDragItem.pieceObject.colorPiece} ${objectDragItem.pieceObject.piece}`}
        />
    );
}

function setUpDragEvent(objectDragItem: dragItem) {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: "image",
        item: { pieceObject: objectDragItem, origin: objectDragItem.origin },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));
    useEffect(() => {
        if (isDragging) {
            showLegalMove(objectDragItem);
        } else
            objectDragItem.stateObject.setLegalMoveArray(setlegalMoveToZero());
    }, [isDragging]);
    return [isDragging, drag];
}

export function Picture(objectDragItem: dragItem): JSX.Element | null {
    const [isDragging, drag] = setUpDragEvent(objectDragItem);

    if (objectDragItem.pieceObject == null)
        return displayNoPicture(objectDragItem);
    else return displayPicture(objectDragItem, drag, isDragging);
}
