<script lang="ts">
	import '$lib/app.css';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import Header from '$lib/components/Header.svelte';
</script>

<svelte:head>
	<title>Take Mine</title>
    <link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous"><link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
	<link href="https://cdn.jsdelivr.net/gh/hung1001/font-awesome-pro-v6@44659d9/css/all.min.css" rel="stylesheet" type="text/css" />
</svelte:head>

<main class="font-poppins">
	<section id="body">
		<div class="flex h-screen">
			<Sidebar />
			<div class="flex flex-col flex-1 w-full">
				<Header />
				<main class="h-full overflow-y-auto px-4 md:px-6 py-5">
					<slot />
				</main>
			</div>
		</div>
	</section>
</main>
