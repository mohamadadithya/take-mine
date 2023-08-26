<script lang="ts">
	import { onMount } from 'svelte';
	import type { ApexOptions } from 'apexcharts';

	export let options: ApexOptions;

	onMount(async () => {
		const ApexCharts = (await import('apexcharts')).default;

		const chartEl = document.querySelector('.chart-wrapper');

		if (chartEl) {
			const chart = new ApexCharts(chartEl, options);
			chart.render();
		}
	});
</script>

<div class="shadow-xl rounded-xl p-3 md:p-5">
	<div class="chart-wrapper" />
</div>
