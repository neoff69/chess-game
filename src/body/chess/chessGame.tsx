import { SetUpBoard } from "./setUpBoard/setUpBoard";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export function ChessGame(): JSX.Element {
    return (
        <main
            className="fixed top-1/2 left-1/2 aspect-square w-1/2 
                    -translate-x-1/2 -translate-y-1/2 border-8 border-amber-400"
        >
            <DndProvider backend={HTML5Backend}>
                <SetUpBoard />
            </DndProvider>
        </main>
    );
}
