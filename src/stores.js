import { writable } from 'svelte/store';

export let loggedIn = writable(false);
export let userID = writable("");
export let userEmail = writable("");
