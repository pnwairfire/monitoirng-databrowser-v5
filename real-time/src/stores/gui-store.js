import { readable, writable } from "svelte/store";

// Version
export const VERSION = readable("5.1.4");

// Status messages
export let error_message = writable("");
export let monitorCount = writable(0);
export let sensorCount = writable(0);

// GUI state for the leaflet map
export let centerLon = writable(-100);
export let centerLat = writable(40);
export let zoom = writable(4);

// GUI state for user selections
export let hovered_monitor_id = writable("");
export let selected_monitor_ids = writable([]);
export let unselected_monitor_id = writable("");

export let hovered_sensor_id = writable("");
export let selected_sensor_ids = writable([]);
export let unselected_sensor_id = writable("");

export let map_update_needed = writable(false);

export let use_hovered_sensor = writable(false);

export let current_slide = writable("all");
