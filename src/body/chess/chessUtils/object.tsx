export type useStateObject = {
    board: (pieceObject | null)[][];
    setBoard: React.Dispatch<React.SetStateAction<(pieceObject | null)[][]>>;
    legalMoveArray: number[][];
    setLegalMoveArray: React.Dispatch<React.SetStateAction<number[][]>>;
    turn: number;
    setTurn: React.Dispatch<React.SetStateAction<number>>;
    enPassant: enPassant;
    setEnPassant: React.Dispatch<React.SetStateAction<enPassant>>;
    originClick: {
        x: number;
        y: number;
    };
    setOriginClick: React.Dispatch<
        React.SetStateAction<{
            x: number;
            y: number;
        }>
    >;
    PositionWhiteKing: {
        x: number;
        y: number;
    };
    setPositionWhiteKing: React.Dispatch<
        React.SetStateAction<{
            x: number;
            y: number;
        }>
    >;
    PositionBlackKing: {
        x: number;
        y: number;
    };
    setPositionBlackKing: React.Dispatch<
        React.SetStateAction<{
            x: number;
            y: number;
        }>
    >;
    check: string;
    setCheck: React.Dispatch<React.SetStateAction<string>>;
};

export type enPassant = {
    isEnPassant: boolean;
    x: number;
    y: number;
};

export type boxObject = {
    bottom: string;
    left: string;
    colorBox: string;
};

export type pieceObject = {
    colorPiece: string;
    piece: string;
    key: number;
    id: string;
    enPassant: boolean;
    pin: boolean;
};

export interface dragItem {
    pieceObject: pieceObject | null;
    boxObject: boxObject;
    origin: { x: number; y: number };
    stateObject: useStateObject;
}
