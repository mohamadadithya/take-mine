<script lang="ts">
	import Sidebar from '$lib/components/Sidebar.svelte';
	import Header from '$lib/components/Header.svelte';
	import { Settings } from '$lib/settings';
	import { navigating } from '$app/stores';

	const { SITE_NAME } = Settings;

	let wrapperEl: HTMLElement;

	$: if ($navigating) {
		if (wrapperEl) wrapperEl.scrollTo(0, 0);
	}
</script>

<svelte:head>
	<title>{SITE_NAME}</title>
</svelte:head>

<section id="body">
	<div class="flex h-screen">
		<Sidebar />
		<div class="flex flex-col flex-1 w-full">
			<Header />
			<main class="h-full overflow-y-auto px-4 md:px-6 pt-5 pb-10" bind:this={wrapperEl}>
				<slot />
			</main>
		</div>
	</div>
</section>
