import CodeMirror, { EditorView } from "@uiw/react-codemirror";
import { markdown } from "@codemirror/lang-markdown";
import { oneDark } from "@codemirror/theme-one-dark";

const theme = EditorView.theme({
	"&.cm-focused": {
		outline: "none !important",
	},
});

interface Props {
	content: string;
	onChange: (content: string) => void;
}

function Editor({ content, onChange }: Props) {
	return (
		<CodeMirror
			value={content}
			autoFocus
			placeholder={"# Markor"}
			theme={oneDark}
			extensions={[markdown(), theme]}
			onChange={onChange}
		/>
	);
}

export default Editor;
