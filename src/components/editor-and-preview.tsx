import { useCallback, useState } from "react";
import Editor from "./editor";
import Preview from "./preview";

interface Props {
	showEditor: boolean;
	showPreview: boolean;
}

function EditorAndPreview({ showEditor, showPreview }: Props) {
	const [content, setContent] = useState("");

	const onChange = useCallback(
		(content: string) => {
			if (showPreview) {
				setContent(content);
			}
		},
		[showPreview],
	);

	return (
		<div className="flex h-[calc(100dvh-32px)] flex-row gap-2 overflow-y-hidden *:flex-1">
			{showEditor && <Editor content={content} onChange={onChange} />}
			{showPreview && <Preview content={content} />}
		</div>
	);
}

export default EditorAndPreview;
