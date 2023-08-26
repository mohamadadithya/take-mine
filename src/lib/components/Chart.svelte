<script lang="ts">
	import { onMount } from 'svelte';
	import type { ApexOptions } from 'apexcharts';

	export let options: ApexOptions;
	let chartWrapperEl: HTMLDivElement;

	onMount(async () => {
		const ApexCharts = (await import('apexcharts')).default;

		if (chartWrapperEl) {
			if (options.chart) {
				options.chart.redrawOnParentResize = true;
			}

			const chart = new ApexCharts(chartWrapperEl, options);
			chart.render();
		}
	});
</script>

<div bind:this={chartWrapperEl} />
