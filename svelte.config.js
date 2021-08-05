import node from '@sveltejs/adapter-node';
// import vercel from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte', 

		// adapter: node()
		adapter: node({ out: 'node_build' })
		// adapter: vercel()
	}
};

export default config;
