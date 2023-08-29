import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		version: {
			pollInterval: 5000
		},
		alias: {
			$components: "src/lib/components"
		}
	},
	preprocess: vitePreprocess()
};

export default config;
