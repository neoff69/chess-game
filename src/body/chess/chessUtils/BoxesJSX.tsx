import { useDrag, useDrop } from "react-dnd";

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

interface dragItem {
    pieceProps: pieceProps;
    origin: { x: number; y: number };
}

function Picture(props: dragItem): JSX.Element | null {
    const [{ isDragging }, drag, preview] = useDrag(() => ({
        type: "image",
        item: { pieceProps: props, origin: props.origin },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
        end: (item, monitor) => {},
    }));

    return (
        <img
            ref={drag}
            className={`h-full `}
            id={props.pieceProps.id}
            src={`../../../../img/${props.pieceProps.colorPiece}_${props.pieceProps.piece}.svg`}
            alt={`${props.pieceProps.colorPiece} ${props.pieceProps.piece}`}
        />
    );
}

function setUpProps(
    pieceProps: pieceProps,
    position: { x: number; y: number }
) {
    let props: dragItem = {
        origin: position,
        pieceProps: pieceProps,
    };
    return props;
}

function updateBoard(
    [board, setBoard]: any,
    origin: { x: number; y: number },
    ending: { x: number; y: number }
) {
    let tempBoard = board.map((row: any) => [...row]);

    tempBoard[ending.y][ending.x] = {
        ...tempBoard[origin.y][origin.x],
    };
    tempBoard[origin.y][origin.x] = null;

    setBoard(tempBoard);
    console.log("Updated board state: ", board);
}

export function BoxNoPiece(
    props: boxProps,
    pieceProps: pieceProps | null,
    origin: { x: number; y: number },
    [board, setBoard]: any
): JSX.Element {
    const [, drop] = useDrop(() => ({
        accept: "image",
        drop: (item: dragItem, monitor) => {
            updateBoard([board, setBoard], item.origin, origin);
        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
        }),
    }));

    return (
        <li
            ref={drop}
            id="box"
            className={`column-2 fixed ${props.colorBox} ${props.bottom} ${props.left} flex aspect-square w-1/8 items-center justify-center`}
        >
            {pieceProps ? <Picture {...setUpProps(pieceProps, origin)} /> : ""}
        </li>
    );
}
