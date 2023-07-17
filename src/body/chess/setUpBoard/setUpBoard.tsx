import { convertBoardInJSX } from "./displayBoxes/convertBoardInJSX";
import { setUpState } from "../chessUtils/setUpUseState";

export function SetUpBoard(): JSX.Element {
    let stateObject = setUpState();
    return (
        <>
            {stateObject.board.map((element, index) => (
                <ul key={index}>
                    {convertBoardInJSX(element, index, stateObject)}
                </ul>
            ))}
        </>
    );
}
