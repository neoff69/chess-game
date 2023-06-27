import { useDrop } from "react-dnd";
import { useStateProps } from "../../chessUtils/props";
import { dragItem, pieceProps, boxProps } from "../../chessUtils/props";
import { Picture } from "./displayPicture";
import { enPassantManager } from "./enPassant";

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

function updateBoard(
    stateProps: useStateProps,
    origin: { x: number; y: number },
    ending: { x: number; y: number }
) {
    stateProps.setBoard((prevBoard: (pieceProps | null)[][]) => {
        let tempBoard = prevBoard.map((row: any) => [...row]);
        tempBoard[ending.y][ending.x] = {
            ...tempBoard[origin.y][origin.x],
        };
        enPassantManager(origin, ending, tempBoard, stateProps);
        tempBoard[origin.y][origin.x] = null;
        return tempBoard;
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

export function BoxNoPiece(
    props: boxProps,
    pieceProps: pieceProps | null,
    origin: { x: number; y: number },
    stateProps: useStateProps
): JSX.Element {
    const [, drop] = setUpDropEvent(stateProps, origin);
    return (
        <li
            ref={
                stateProps.legalMoveArray[origin.y][origin.x] > 0 ? drop : null
            }
            id="box"
            className={`column-2 fixed ${props.colorBox} ${props.bottom} 
            ${props.left} flex aspect-square w-1/8 items-center justify-center`}
        >
            <Picture {...setUpProps(pieceProps, props, origin, stateProps)} />
        </li>
    );
}
