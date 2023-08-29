<script lang="ts">
	import Sidebar from '$components/Sidebar.svelte';
	import Header from '$components/Header.svelte';
	import { navigating } from '$app/stores';
	import { PUBLIC_SITE_NAME } from '$env/static/public';

	let wrapperEl: HTMLElement;

	$: if ($navigating) {
		if (wrapperEl) wrapperEl.scrollTo(0, 0);
	}
</script>

<svelte:head>
	<title>{PUBLIC_SITE_NAME}</title>
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
