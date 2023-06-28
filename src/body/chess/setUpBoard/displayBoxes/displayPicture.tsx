import { dragItem } from "../../chessUtils/props";
import { useDrag } from "react-dnd";
import { showLegalMove } from "../../legalMove/legalMove";
import { useEffect } from "react";
import { setlegalMoveToZero } from "../setUpUseState";

function checkIfDraggable(props: dragItem): boolean {
    let isDraggable: boolean = false;
    if (props.pieceProps == null) return isDraggable;
    if (
        (props.stateProps.turn % 2 == 0 &&
            props.pieceProps.colorPiece == "white") ||
        (props.stateProps.turn % 2 == 1 &&
            props.pieceProps.colorPiece == "black")
    ) {
        isDraggable = true;
    }
    return isDraggable;
}

function displayNoPicture(props: dragItem): JSX.Element {
    return (
        <div
            className={` h-6 w-6 ${
                props.stateProps.legalMoveArray[props.origin.y][
                    props.origin.x
                ] > 0
                    ? " rounded-full bg-amber-400"
                    : ""
            }`}
        ></div>
    );
}

function isBorderNeeded(props: dragItem, isDragging: boolean): boolean {
    if (props.stateProps.legalMoveArray[props.origin.y][props.origin.x] == 1)
        return true;
    return isDragging;
}

function displayPicture(
    props: dragItem,
    drag: any,
    isDragging: boolean | any
): JSX.Element {
    let isDraggable: boolean = checkIfDraggable(props);
    if (props.pieceProps == null) return <></>;
    return (
        <img
            //onClick={() => console.log("todo")}
            ref={isDraggable ? drag : null}
            className={`h-full ${
                isBorderNeeded(props, isDragging)
                    ? " border-4 border-amber-400"
                    : ""
            }`}
            id={props.pieceProps.id}
            src={`../../../../img/${props.pieceProps.colorPiece}_${props.pieceProps.piece}.svg`}
            alt={`${props.pieceProps.colorPiece} ${props.pieceProps.piece}`}
        />
    );
}

function setUpDragEvent(props: dragItem) {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: "image",
        item: { pieceProps: props, origin: props.origin },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));
    useEffect(() => {
        if (isDragging) {
            showLegalMove(props);
        } else props.stateProps.setLegalMoveArray(setlegalMoveToZero());
    }, [isDragging]);
    return [isDragging, drag];
}

export function Picture(props: dragItem): JSX.Element | null {
    const [isDragging, drag] = setUpDragEvent(props);

    if (props.pieceProps == null) return displayNoPicture(props);
    else return displayPicture(props, drag, isDragging);
}
