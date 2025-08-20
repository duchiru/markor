import { useCallback } from "react";
import TitleBarButton from "./title-bar-button";

interface Props {
	showEditor: boolean;
	showPreview: boolean;
	setShowEditor: (showEditor: boolean) => void;
	setShowPreview: (showPreview: boolean) => void;
}

function TitleBar({
	showEditor,
	showPreview,
	setShowEditor,
	setShowPreview,
}: Props) {
	const toggleEditor = useCallback(() => {
		setShowEditor(!showEditor);
	}, [showEditor]);

	const togglePreview = useCallback(() => {
		setShowPreview(!showPreview);
	}, [showPreview]);

	return (
		<div data-tauri-drag-region className="flex h-8 flex-row-reverse gap-1 p-1">
			<TitleBarButton active={showPreview} onClick={togglePreview}>
				P
			</TitleBarButton>
			<TitleBarButton active={showEditor} onClick={toggleEditor}>
				E
			</TitleBarButton>
		</div>
	);
}

export default TitleBar;
