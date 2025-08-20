use tauri::{PhysicalPosition, TitleBarStyle, WebviewUrl, WebviewWindowBuilder};

#[tauri::command]
fn greet(name: &str) -> String {
	format!("Hello, {}! You've been greeted from Rust!", name)
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
	tauri::Builder::default()
		.setup(|app| {
			let mut win_builder = WebviewWindowBuilder::new(app, "main", WebviewUrl::default())
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
		.invoke_handler(tauri::generate_handler![greet])
		.run(tauri::generate_context!())
		.expect("error while running tauri application");
}
