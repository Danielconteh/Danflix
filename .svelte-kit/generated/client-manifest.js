export { matchers } from './client-matchers.js';

export const components = [
	() => import("..\\..\\src\\routes\\__layout.svelte"),
	() => import("..\\..\\src\\routes\\__error.svelte"),
	() => import("..\\..\\src\\routes\\index.svelte"),
	() => import("..\\..\\src\\routes\\login.svelte"),
	() => import("..\\..\\src\\routes\\movies.svelte")
];

export const dictionary = {
	"": [[0, 2], [1]],
	"login": [[0, 3], [1]],
	"movies": [[0, 4], [1]]
};