import { useDrag, useDrop } from "react-dnd";
import { showLegalMove } from "../legalMove/legalMove";

export type boxProps = {
    bottom: string;
    left: string;
    colorBox: string;
};

export type pieceProps = {
    colorPiece: string;
    piece: string;
    key: number;
    id: string;
};

export interface dragItem {
    pieceProps: pieceProps;
    origin: { x: number; y: number };
    setBoard: (newBoard: any) => void;
    turn: number;
}

function checkIfDraggable(props: dragItem): boolean {
    let isDraggable: boolean = false;
    if (
        (props.turn % 2 == 0 && props.pieceProps.colorPiece == "white") ||
        (props.turn % 2 == 1 && props.pieceProps.colorPiece == "black")
    ) {
        isDraggable = true;
    }
    return isDraggable;
}

function Picture(props: dragItem): JSX.Element | null {
    let isDraggable: boolean = checkIfDraggable(props);

    const [{ isDragging }, drag] = useDrag(() => ({
        type: "image",
        item: { pieceProps: props, origin: props.origin },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));

    if (isDragging) showLegalMove(props);

    return (
        <img
            //onClick={() => console.log("todo")}
            ref={isDraggable ? drag : null}
            className={`h-full `}
            id={props.pieceProps.id}
            src={`../../../../img/${props.pieceProps.colorPiece}_${props.pieceProps.piece}.svg`}
            alt={`${props.pieceProps.colorPiece} ${props.pieceProps.piece}`}
        />
    );
}

function setUpProps(
    pieceProps: pieceProps,
    position: { x: number; y: number },
    turn: number,
    setBoard: any
) {
    let props: dragItem = {
        origin: position,
        pieceProps: pieceProps,
        turn: turn,
        setBoard: setBoard,
    };
    return props;
}

function updateBoard(
    setBoard: any,
    setTurn: any,
    origin: { x: number; y: number },
    ending: { x: number; y: number }
) {
    setBoard((prevBoard: (pieceProps | null)[][]) => {
        let tempBoard = prevBoard.map((row: any) => [...row]);

        tempBoard[ending.y][ending.x] = {
            ...tempBoard[origin.y][origin.x],
        };
        tempBoard[origin.y][origin.x] = null;
        return tempBoard;
    });
    setTurn((prevTurn: number) => {
        let nextTurn = prevTurn + 1;
        return nextTurn;
    });
}

export function BoxNoPiece(
    props: boxProps,
    pieceProps: pieceProps | null,
    origin: { x: number; y: number },
    setBoard: React.Dispatch<React.SetStateAction<(pieceProps | null)[][]>>,
    [turn, setTurn]: any
): JSX.Element {
    const [, drop] = useDrop(() => ({
        accept: "image",
        drop: (item: dragItem) => {
            updateBoard(setBoard, setTurn, item.origin, origin);
        },
    }));
    return (
        <li
            ref={drop}
            id="box"
            className={`column-2 fixed ${props.colorBox} ${props.bottom} ${props.left} flex aspect-square w-1/8 items-center justify-center`}
        >
            {pieceProps ? (
                <Picture {...setUpProps(pieceProps, origin, turn, setBoard)} />
            ) : (
                ""
            )}
        </li>
    );
}
