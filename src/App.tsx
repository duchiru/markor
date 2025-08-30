import { useState } from "react";
import EditorAndPreview from "./components/editor-and-preview";
import TitleBar from "./components/title-bar";
import useShortcut from "./hooks/use-shortcut";

function App() {
	const [showEditor, setShowEditor] = useState(true);
	const [showPreview, setShowPreview] = useState(true);

	useShortcut("CommandOrControl+E", () => {
		setShowEditor((prev) => !prev);
	});

	useShortcut("CommandOrControl+P", () => {
		setShowPreview((prev) => !prev);
	});

	return (
		<>
			<TitleBar
				showEditor={showEditor}
				showPreview={showPreview}
				setShowEditor={setShowEditor}
				setShowPreview={setShowPreview}
			/>
			<EditorAndPreview showEditor={showEditor} showPreview={showPreview} />
		</>
	);
}

export default App;
