export type useStateProps = {
    board: (pieceProps | null)[][];
    setBoard: React.Dispatch<React.SetStateAction<(pieceProps | null)[][]>>;
    legalMoveArray: number[][];
    setLegalMoveArray: React.Dispatch<React.SetStateAction<number[][]>>;
    turn: number;
    setTurn: React.Dispatch<React.SetStateAction<number>>;
};

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
    enPassant: boolean;
};

export interface dragItem {
    pieceProps: pieceProps | null;
    boxProps: boxProps;
    origin: { x: number; y: number };
    stateProps: useStateProps;
}
