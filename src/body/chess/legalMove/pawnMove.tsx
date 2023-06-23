import { dragItem, pieceProps } from "../setUpBoard/displayBoxes";

function whitePawnMove(props: dragItem) {
    props.setBoard((prevBoard: (pieceProps | null)[][]) => {
        let tempBoard = prevBoard.map((row: any) => [...row]);

        // tempBoard[ending.y][ending.x] = {
        //     ...tempBoard[origin.y][origin.x],
        // };
        // tempBoard[origin.y][origin.x] = null;
        return tempBoard;
    });
}

export function pawnMove(props: dragItem): void {
    if (props.pieceProps.colorPiece == "white") whitePawnMove(props);
}
