import React from "react";
import ReactDOM from "react-dom/client";
import "../build/style.css";
import { Body } from "./body/body";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <Body />
    </React.StrictMode>
);
