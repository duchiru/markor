use tauri::{PhysicalPosition, TitleBarStyle, WebviewUrl, WebviewWindowBuilder};

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
	tauri::Builder::default()
		.plugin(tauri_plugin_global_shortcut::Builder::new().build())
		.setup(|app| {
			let mut win_builder = WebviewWindowBuilder::new(app, "main", WebviewUrl::default())
				.title("Markor - Untitled")
				.visible(false)
				.min_inner_size(800.0, 600.0);

			#[cfg(target_os = "macos")]
			{
				win_builder = win_builder
					.title_bar_style(TitleBarStyle::Overlay)
					.hidden_title(true)
					.traffic_light_position(PhysicalPosition::new(10, 14))
					.transparent(true);
			}

			win_builder.build()?;

			Ok(())
		})
		.run(tauri::generate_context!())
		.expect("error while running tauri application");
}
