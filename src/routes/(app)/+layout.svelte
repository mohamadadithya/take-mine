<script lang="ts">
	import Sidebar from '$lib/components/Sidebar.svelte';
	import Header from '$lib/components/Header.svelte';
	import { Settings } from '$lib/settings';
	const { SITE_NAME } = Settings
</script>

<svelte:head>
	<title>{SITE_NAME}</title>
</svelte:head>

<section id="body">
	<div class="flex h-screen">
		<Sidebar />
		<div class="flex flex-col flex-1 w-full">
			<Header />
			<main class="h-full overflow-y-auto px-4 md:px-6 pt-5 pb-10">
				<slot />
			</main>
		</div>
	</div>
</section>