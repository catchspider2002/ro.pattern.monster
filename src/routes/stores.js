import { writable } from 'svelte/store';

export const themeStore = writable("light");
export const langStore = writable("es");
export const webStore = writable("https://es.pattern.monster");
