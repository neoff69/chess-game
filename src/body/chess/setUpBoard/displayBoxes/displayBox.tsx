import { useDrop } from "react-dnd";
import { useStateProps } from "../../chessUtils/props";
import { dragItem, pieceProps, boxProps } from "../../chessUtils/props";
import { Picture } from "./displayPicture";
import { pawnSpecialAction } from "./pawnSpecialAction";
import { setlegalMoveToZero } from "../../chessUtils/setUpUseState";
import { checkIfNextMoveCheck } from "../../checkHub/checkIfCheck";

function setUpProps(
    pieceProps: pieceProps | null,
    boxProps: boxProps,
    position: { x: number; y: number },
    stateProps: useStateProps
) {
    let props: dragItem = {
        origin: position,
        pieceProps: pieceProps,
        boxProps: boxProps,
        stateProps: stateProps,
    };
    return props;
}

function setUpKingOrigin(
    stateProps: useStateProps,
    ending: { x: number; y: number },
    row: pieceProps
) {
    if (row.piece === "king") {
        if (row.colorPiece === "white") stateProps.setPositionWhiteKing(ending);
        else stateProps.setPositionBlackKing(ending);
    }
}

function updateBoard(
    stateProps: useStateProps,
    origin: { x: number; y: number },
    ending: { x: number; y: number }
) {
    stateProps.setBoard((prevBoard: (pieceProps | null)[][]) => {
        let copyLegalMoveArray = prevBoard.map((row: any) => [...row]);
        copyLegalMoveArray[ending.y][ending.x] = {
            ...copyLegalMoveArray[origin.y][origin.x],
        };
        setUpKingOrigin(
            stateProps,
            ending,
            copyLegalMoveArray[ending.y][ending.x]
        );
        pawnSpecialAction(origin, ending, copyLegalMoveArray, stateProps);
        copyLegalMoveArray[origin.y][origin.x] = null;
        checkIfNextMoveCheck(copyLegalMoveArray, stateProps, ending);
        return copyLegalMoveArray;
    });
    stateProps.setTurn((prevTurn: number) => {
        let nextTurn = prevTurn + 1;
        return nextTurn;
    });
}

function setUpDropEvent(
    stateProps: useStateProps,
    origin: { x: number; y: number }
) {
    const [, drop] = useDrop(() => ({
        accept: "image",
        drop: (item: dragItem) => {
            updateBoard(stateProps, item.origin, origin);
        },
    }));

    return [, drop];
}

function handleSecondClick(
    stateProps: useStateProps,
    origin: { x: number; y: number }
) {
    if (
        stateProps.legalMoveArray[origin.y][origin.x] > 0 &&
        stateProps.originClick.x != -1
    ) {
        updateBoard(stateProps, stateProps.originClick, origin);
        stateProps.setOriginClick({ x: -1, y: -1 });
        stateProps.setLegalMoveArray(setlegalMoveToZero());
    }
}

export function BoxNoPiece(
    props: boxProps,
    pieceProps: pieceProps | null,
    origin: { x: number; y: number },
    stateProps: useStateProps
): JSX.Element {
    let dragItemProps: dragItem = setUpProps(
        pieceProps,
        props,
        origin,
        stateProps
    );
    const [, drop] = setUpDropEvent(stateProps, origin);
    return (
        <li
            ref={
                stateProps.legalMoveArray[origin.y][origin.x] > 0 ? drop : null
            }
            onClick={() => handleSecondClick(stateProps, origin)}
            id="box"
            className={`column-2 fixed ${props.colorBox} ${props.bottom} 
            ${props.left} flex aspect-square w-1/8 items-center justify-center`}
        >
            <Picture {...dragItemProps} />
        </li>
    );
}
