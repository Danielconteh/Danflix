import adapter from '@sveltejs/adapter-auto'
import preprocess from 'svelte-preprocess'
import image from 'svelte-image'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: preprocess({ ...image({ placeholder: 'trace' }) }),
  kit: {
    adapter: adapter(),
  },
}

export default config

// vite: {
// 	optimizeDeps: {
// 		exclude: ['movie-trailer'];
// 	}
// }
