import { BoxNoPiece } from "../chess/chessUtils/BoxesUtils";

function getBoxesColor(lineNbrInt: number, index: number): string {
    if (lineNbrInt % 2 == 0) {
        if (index % 2 == 1) return "bg-white";
        else return "bg-blue-400";
    } else {
        if (index % 2 == 0) return "bg-white";
        else return "bg-blue-400";
    }
}

function SetUpEmptyLine(lineNbrInt: number, lineNbrStr: string): JSX.Element[] {
    let boxes: JSX.Element[] = [];

    for (let index = 1; index <= 8; index++) {
        let color: string = getBoxesColor(lineNbrInt, index);
        let box: JSX.Element = (
            <BoxNoPiece
                key={index}
                bottom={`bottom-${lineNbrStr}/8`}
                left={`left-${index}/8`}
                colorBox={color}
            />
        );
        boxes.push(box);
    }
    return boxes;
}

export function EmptyLine(): Array<{ element: JSX.Element }>[] {
    let arrayElement: { element: JSX.Element }[][] = [];

    for (let i = 0; i < 4; i++) {
        let temp: JSX.Element[] = SetUpEmptyLine(i + 3, (i + 3).toString());
        arrayElement[i] = [];
        for (let y = 0; y < temp.length; y++) {
            arrayElement[i][y] = { element: temp[y] };
        }
    }
    return arrayElement;
}
