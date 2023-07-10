import { dragItem } from "../chessUtils/props";

function pieceEatableEnPassant(
    props: dragItem,
    copyLegalMoveArray: number[][],
    direction: number
) {
    if (
        props.stateProps.board[props.origin.y][props.origin.x + 1]?.enPassant ==
        true
    )
        copyLegalMoveArray[props.origin.y + direction][props.origin.x + 1] = 1;
    else if (
        props.stateProps.board[props.origin.y][props.origin.x - 1]?.enPassant ==
        true
    )
        copyLegalMoveArray[props.origin.y + direction][props.origin.x - 1] = 1;
}

function pieceEatable(
    props: dragItem,
    direction: number,
    copyLegalMoveArray: number[][]
) {
    let colorOpponent = "white";
    if (direction == 1) colorOpponent = "black";
    if (props.origin.y < 7 && props.origin.y > 0) {
        if (
            props.stateProps.board[props.origin.y + 1 * direction][
                props.origin.x + 1
            ]?.colorPiece == colorOpponent
        )
            copyLegalMoveArray[props.origin.y + 1 * direction][
                props.origin.x + 1
            ] = 1;
        else if (
            props.stateProps.board[props.origin.y + 1 * direction][
                props.origin.x - 1
            ]?.colorPiece == colorOpponent
        )
            copyLegalMoveArray[props.origin.y + 1 * direction][
                props.origin.x - 1
            ] = 1;
    }
    if (props.origin.y == 4 && direction == 1)
        pieceEatableEnPassant(props, copyLegalMoveArray, direction);
    else if (props.origin.y == 3 && direction == -1) {
        pieceEatableEnPassant(props, copyLegalMoveArray, direction);
    }
}

function firstDeplacement(
    props: dragItem,
    direction: number,
    copyLegalMoveArray: number[][]
) {
    if (
        props.origin.y < 7 &&
        props.origin.y > 0 &&
        props.stateProps.board[props.origin.y + 1 * direction][
            props.origin.x
        ] == null
    )
        copyLegalMoveArray[props.origin.y + 1 * direction][props.origin.x] = 1;
}

function secondDeplacement(
    props: dragItem,
    direction: number,
    copyLegalMoveArray: number[][]
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
        copyLegalMoveArray[props.origin.y + 2 * direction][props.origin.x] = 1;
    }
}

function checkPawnMove(props: dragItem, direction: number) {
    props.stateProps.setLegalMoveArray((prevBoard: number[][]) => {
        let copyLegalMoveArray = prevBoard.map((row: any) => [...row]);
        firstDeplacement(props, direction, copyLegalMoveArray);
        secondDeplacement(props, direction, copyLegalMoveArray);
        pieceEatable(props, direction, copyLegalMoveArray);
        return copyLegalMoveArray;
    });
}

export function pawnMove(props: dragItem): void {
    if (props.pieceProps == null) return;
    if (props.pieceProps.colorPiece == "white") checkPawnMove(props, 1);
    else checkPawnMove(props, -1);
}
