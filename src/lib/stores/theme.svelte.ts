const THEMES = ["orchid", "midnight", "ember", "daylight"] as const;
type Theme = (typeof THEMES)[number];

const DEFAULT_THEME: Theme = "orchid";

function isValidTheme(value: string): value is Theme {
	return THEMES.includes(value as Theme);
}

function createThemeStore() {
	let current = $state<Theme>(DEFAULT_THEME);

	if (typeof window !== "undefined") {
		const stored = localStorage.getItem("theme");
		if (stored && isValidTheme(stored)) {
			current = stored;
		}
	}

	$effect(() => {
		if (typeof document !== "undefined") {
			document.documentElement.dataset.theme = current;
			localStorage.setItem("theme", current);
		}
	});

	return {
		get current() {
			return current;
		},
		set current(value: Theme) {
			if (isValidTheme(value)) {
				current = value;
			}
		},
		themes: THEMES,
	};
}

export const theme = createThemeStore();
