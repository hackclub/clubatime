import type { Preview } from "@storybook/sveltekit";
import "../src/lib/styles/app.css";

const preview: Preview = {
	parameters: {
		backgrounds: {
			default: "dark",
			values: [
				{ name: "dark", value: "#171717" },
				{ name: "light", value: "#ffffff" },
			],
		},
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
};

export default preview;
