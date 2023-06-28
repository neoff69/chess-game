import { dragItem } from "../chessUtils/props";

function pieceEatableEnPassant(
    props: dragItem,
    tempBoard: number[][],
    direction: number
) {
    if (
        props.stateProps.board[props.origin.y][props.origin.x + 1]?.enPassant ==
        true
    )
        tempBoard[props.origin.y + direction][props.origin.x + 1] = 1;
    else if (
        props.stateProps.board[props.origin.y][props.origin.x - 1]?.enPassant ==
        true
    )
        tempBoard[props.origin.y + direction][props.origin.x - 1] = 1;
}

function pieceEatable(
    props: dragItem,
    direction: number,
    tempBoard: number[][]
) {
    let colorOpponent = "white";
    if (direction == 1) colorOpponent = "black";
    if (props.origin.y < 7 && props.origin.y > 0) {
        if (
            props.stateProps.board[props.origin.y + 1 * direction][
                props.origin.x + 1
            ]?.colorPiece == colorOpponent
        )
            tempBoard[props.origin.y + 1 * direction][props.origin.x + 1] = 1;
        else if (
            props.stateProps.board[props.origin.y + 1 * direction][
                props.origin.x - 1
            ]?.colorPiece == colorOpponent
        )
            tempBoard[props.origin.y + 1 * direction][props.origin.x - 1] = 1;
    }
    if (props.origin.y == 4 && direction == 1)
        pieceEatableEnPassant(props, tempBoard, direction);
    else if (props.origin.y == 3 && direction == -1) {
        pieceEatableEnPassant(props, tempBoard, direction);
    }
}

function firstDeplacement(
    props: dragItem,
    direction: number,
    tempBoard: number[][]
) {
    if (
        props.origin.y < 7 &&
        props.origin.y > 0 &&
        props.stateProps.board[props.origin.y + 1 * direction][
            props.origin.x
        ] == null
    )
        tempBoard[props.origin.y + 1 * direction][props.origin.x] = 1;
}

function secondDeplacement(
    props: dragItem,
    direction: number,
    tempBoard: number[][]
) {
    if (
        ((props.origin.y == 1 && direction == 1) ||
            (props.origin.y == 6 && direction == -1)) &&
        props.stateProps.board[props.origin.y + 1 * direction][
            props.origin.x
        ] == null &&
        props.stateProps.board[props.origin.y + 2 * direction][
            props.origin.x
        ] == null
    ) {
        tempBoard[props.origin.y + 2 * direction][props.origin.x] = 1;
    }
}

function checkPawnMove(props: dragItem, direction: number) {
    props.stateProps.setLegalMoveArray((prevBoard: number[][]) => {
        let tempBoard = prevBoard.map((row: any) => [...row]);
        firstDeplacement(props, direction, tempBoard);
        secondDeplacement(props, direction, tempBoard);
        pieceEatable(props, direction, tempBoard);
        return tempBoard;
    });
}

export function pawnMove(props: dragItem): void {
    if (props.pieceProps == null) return;
    if (props.pieceProps.colorPiece == "white") checkPawnMove(props, 1);
    else checkPawnMove(props, -1);
}
