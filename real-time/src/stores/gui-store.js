import { readable, writable } from "svelte/store";

// Version
export const VERSION = readable("0.0.2");

// GUI state with user selections
export let hovered_id = writable("");
export let selected_id = writable("");

// GUI state for the leaflet map
export let centerLon = writable(-100);
export let centerLat = writable(40);
export let zoom = writable(4);