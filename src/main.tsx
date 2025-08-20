import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";

import "./index.css";

import { getCurrentWindow } from "@tauri-apps/api/window";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);

getCurrentWindow().show();
