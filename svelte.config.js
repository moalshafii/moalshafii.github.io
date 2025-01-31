import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		paths: { base: process.argv.includes('dev') ? '' : process.env.BASE_PATH },
		adapter: adapter({ fallback: '404.html' }),
		prerender: { entries: ['*'], crawl: false }
	}
};

export default config;
