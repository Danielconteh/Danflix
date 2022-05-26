import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	}
};

export default config;

// vite: {
// 	optimizeDeps: {
// 		exclude: ['movie-trailer'];
// 	}
// }
