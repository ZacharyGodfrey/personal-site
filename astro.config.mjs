// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
	output: 'static',
	outDir: './dist',
	compressHTML: false,
	trailingSlash: 'ignore',

	server: {
			port: 8080,
			open: '/'
	},

	devToolbar: {
			enabled: false
	},

	integrations: [mdx()]
});