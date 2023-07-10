export type useStateProps = {
    board: (pieceProps | null)[][];
    setBoard: React.Dispatch<React.SetStateAction<(pieceProps | null)[][]>>;
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
    check: boolean;
    setCheck: React.Dispatch<React.SetStateAction<boolean>>;
};

export type enPassant = {
    isEnPassant: boolean;
    x: number;
    y: number;
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
    pin: boolean;
};

export interface dragItem {
    pieceProps: pieceProps | null;
    boxProps: boxProps;
    origin: { x: number; y: number };
    stateProps: useStateProps;
}
