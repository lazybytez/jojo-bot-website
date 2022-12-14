import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-node';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://github.com/sveltejs/svelte-preprocess
    // for more information about preprocessors
    extensions: ['.svelte', '.md'],

    preprocess: [
        preprocess({
            postcss: true
        }),
        mdsvex({
            extensions: ['.md']
        })
    ],

    kit: {
        adapter: adapter({ out: 'dist' })
    }
};

export default config;
