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
		<div
			data-tauri-drag-region
			className="ml-16 flex h-8 flex-row-reverse gap-1 p-1"
		>
			<div className="flex flex-row gap-1">
				<TitleBarButton
					active={showEditor}
					onClick={toggleEditor}
					className="h-6 w-6"
				>
					E
				</TitleBarButton>
				<TitleBarButton
					active={showPreview}
					onClick={togglePreview}
					className="h-6 w-6"
				>
					P
				</TitleBarButton>
			</div>
		</div>
	);
}

export default TitleBar;
