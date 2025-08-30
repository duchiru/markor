import { useEffect } from "react";

import { register, unregister } from "@tauri-apps/plugin-global-shortcut";

function useShortcut(shortcut: string, callback: () => void) {
	useEffect(() => {
		register(shortcut, callback);

		return () => {
			unregister(shortcut);
		};
	}, [shortcut, callback]);
}

export default useShortcut;
