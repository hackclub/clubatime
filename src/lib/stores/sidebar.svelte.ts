function createSidebarStore() {
	let collapsed = $state(false);

	if (typeof window !== "undefined") {
		const stored = localStorage.getItem("sidebar-collapsed");
		if (stored !== null) {
			collapsed = stored === "true";
		}
	}

	$effect(() => {
		if (typeof window !== "undefined") {
			localStorage.setItem("sidebar-collapsed", String(collapsed));
		}
	});

	return {
		get collapsed() {
			return collapsed;
		},
		toggle() {
			collapsed = !collapsed;
		},
		close() {
			collapsed = true;
		},
		open() {
			collapsed = false;
		},
	};
}

export const sidebar = createSidebarStore();
