<script lang="ts">
    import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	let chartEl: HTMLElement;
    export let options: any

    onMount(async () => {
		const ApexCharts = (await import('apexcharts')).default;

		if (browser) {
			const chart = new ApexCharts(chartEl, options);
			chart.render();
		}
	});
</script>

<div class="shadow-xl rounded-xl p-5">
    <div bind:this={chartEl} />
</div>