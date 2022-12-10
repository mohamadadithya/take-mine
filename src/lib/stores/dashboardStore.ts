import { writable } from "svelte/store";

export let isOpenSidebar = writable(false), isShowedToast = writable(false);