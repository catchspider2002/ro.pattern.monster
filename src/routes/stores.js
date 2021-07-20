import { writable } from 'svelte/store';

export const themeStore = writable("light");
export const langStore = writable("ro");
export const webStore = writable("https://ro.pattern.monster");
