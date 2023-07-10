import { convertBoardInJSX } from "./displayBoxes/convertBoardInJSX";
import { setUpState } from "../chessUtils/setUpUseState";

export function SetUpBoard(): JSX.Element {
    let stateProps = setUpState();
    return (
        <>
            {stateProps.board.map((element, index) => (
                <ul key={index}>
                    {convertBoardInJSX(element, index, stateProps)}
                </ul>
            ))}
        </>
    );
}
