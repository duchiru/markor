import { useState } from "react";
import EditorAndPreview from "./components/editor-and-preview";
import TitleBar from "./components/title-bar";

function App() {
	const [showEditor, setShowEditor] = useState(true);
	const [showPreview, setShowPreview] = useState(true);

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
