import { useState } from "react";
import Editor from "./editor";
import Preview from "./preview";

interface Props {
	showEditor: boolean;
	showPreview: boolean;
}

function EditorAndPreview({ showEditor, showPreview }: Props) {
	const [content, setContent] = useState("");

	return (
		<div className="flex h-[calc(100dvh-32px)] flex-row overflow-y-hidden">
			{showEditor && (
				<Editor
					value={content}
					onChange={(value) => setContent(value)}
					className={`overflow-y-auto ${showEditor && showPreview ? "w-1/2" : "w-full"}`}
				/>
			)}
			{showPreview && (
				<Preview
					content={content}
					className={`overflow-y-auto ${showEditor && showPreview ? "w-1/2" : "w-full"}`}
				/>
			)}
		</div>
	);
}

export default EditorAndPreview;
