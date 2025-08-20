import CodeMirror, {
	EditorView,
	ReactCodeMirrorProps,
} from "@uiw/react-codemirror";
import { markdown } from "@codemirror/lang-markdown";
import { oneDark } from "@codemirror/theme-one-dark";

const theme = EditorView.theme({
	"&.cm-focused": {
		outline: "none !important",
	},
	".cm-gutterElement": {
		"user-select": "none !important",
		"-webkit-user-select": "none !important",
		cursor: "default !important",
	},
});

function Editor(props: ReactCodeMirrorProps) {
	return (
		<CodeMirror
			autoFocus
			placeholder={"# Markor"}
			theme={oneDark}
			extensions={[EditorView.lineWrapping, markdown(), theme]}
			{...props}
		/>
	);
}

export default Editor;
