import { dragItem } from "../chessUtils/props";

function pieceEatable(
    props: dragItem,
    direction: number,
    tempBoard: number[][]
) {
    let colorOponnent = "white";
    if (direction == 1) colorOponnent = "black";
    if (props.origin.y < 7 && props.origin.y > 0) {
        if (
            props.stateProps.board[props.origin.y + 1 * direction][
                props.origin.x + 1
            ]?.colorPiece == colorOponnent
        )
            tempBoard[props.origin.y + 1 * direction][props.origin.x + 1] = 1;
        else if (
            props.stateProps.board[props.origin.y + 1 * direction][
                props.origin.x - 1
            ]?.colorPiece == colorOponnent
        )
            tempBoard[props.origin.y + 1 * direction][props.origin.x - 1] = 1;
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
    )
        tempBoard[props.origin.y + 2 * direction][props.origin.x] = 2;
}

function whitePawnMove(props: dragItem) {
    props.stateProps.setLegalMoveArray((prevBoard: number[][]) => {
        let tempBoard = prevBoard.map((row: any) => [...row]);
        firstDeplacement(props, 1, tempBoard);
        secondDeplacement(props, 1, tempBoard);
        pieceEatable(props, 1, tempBoard);
        return tempBoard;
    });
}

function blackPawnMove(props: dragItem) {
    props.stateProps.setLegalMoveArray((prevBoard: number[][]) => {
        let tempBoard = prevBoard.map((row: any) => [...row]);
        firstDeplacement(props, -1, tempBoard);
        secondDeplacement(props, -1, tempBoard);
        pieceEatable(props, -1, tempBoard);
        return tempBoard;
    });
}

export function pawnMove(props: dragItem): void {
    if (props.pieceProps == null) return;
    if (props.pieceProps.colorPiece == "white") whitePawnMove(props);
    else blackPawnMove(props);
}
