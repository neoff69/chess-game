import { useState } from "react";
import { useDrag, useDrop } from "react-dnd";

type boxNoPieceProps = {
    bottom: string;
    left: string;
    colorBox: string;
};

type boxWithPieceProps = {
    bottom: string;
    left: string;
    colorPiece: string;
    colorBox: string;
    piece: string;
    key: number;
    id: string;
};

interface DragItem {
    type: string;
    pieceProps: boxWithPieceProps;
}

function Picture(props: boxWithPieceProps): JSX.Element | null {
    const [pieceDisplay, setPieceDisplay] = useState(true);

    const [{ isDragging }, drag, preview] = useDrag(() => ({
        type: "image",
        item: { pieceProps: props },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
        end: (item, monitor) => {
            if (monitor.didDrop()) {
                setPieceDisplay(false);
            } else {
                setPieceDisplay(true);
            }
        },
    }));
    return pieceDisplay ? (
        <img
            ref={drag}
            className={`h-full `}
            id={props.id}
            src={`../../../../img/${props.colorPiece}_${props.piece}.svg`}
            alt={`${props.colorPiece} ${props.piece}`}
        />
    ) : null;
}

export function BoxNoPiece(props: boxNoPieceProps): JSX.Element {
    let [pieceProps, setPieceProps] = useState<boxWithPieceProps | null>(null);

    const [, drop] = useDrop(() => ({
        accept: "image",
        drop: (item: DragItem) => setPieceProps(item.pieceProps),
    }));

    return (
        <li
            ref={drop}
            id="box"
            className={`column-2 fixed ${props.colorBox} ${props.bottom} ${props.left} flex aspect-square w-1/8 items-center justify-center`}
        >
            {pieceProps ? <Picture {...pieceProps} /> : ""}
        </li>
    );
}

export function BoxWithPiece(props: boxWithPieceProps): JSX.Element {
    return (
        <li
            id={props.key.toString()}
            className={`column-2 fixed ${props.colorBox} ${props.bottom} ${props.left} flex aspect-square w-1/8 items-center justify-center`}
            key={props.key}
        >
            <Picture {...props} />
        </li>
    );
}
