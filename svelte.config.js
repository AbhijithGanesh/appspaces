import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
    preprocess: vitePreprocess(),

    kit: {
        adapter: adapter({
            // Specify the output directory for your build
            outDir: '_site',
        })
    },
};

export default config;