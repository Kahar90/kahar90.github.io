export { matchers } from './client-matchers.js';

export const components = [
	() => import("..\\..\\src\\routes\\__layout.svelte"),
	() => import("..\\runtime\\components\\error.svelte"),
	() => import("..\\..\\src\\routes\\about.svelte"),
	() => import("..\\..\\src\\routes\\contacts.svelte"),
	() => import("..\\..\\src\\routes\\index.svelte")
];

export const dictionary = {
	"": [[0, 4], [1]],
	"about": [[0, 2], [1]],
	"contacts": [[0, 3], [1]]
};