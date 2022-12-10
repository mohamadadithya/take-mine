<script>
	import PageTitle from "$lib/components/PageTitle.svelte";
    import Chart from "$lib/components/Chart.svelte";

    const barOptions = {
		chart: {
			type: 'bar'
		},
		colors: ['#047857'],
        title: {
			text: 'Joined Members by Month',
			align: 'left'
		},
		series: [
			{
				data: [
					{
						x: 'January',
						y: 10
					},
					{
						x: 'February',
						y: 18
					},
					{
						x: 'March',
						y: 13
					}
				]
			}
		]
	};

	const lineOptions = {
		series: [
			{
				name: 'Desktops',
				data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
			}
		],
		chart: {
			type: 'line',
			zoom: {
				enabled: false
			}
		},
		colors: ['#047857'],
		dataLabels: {
			enabled: false
		},
		stroke: {
			curve: 'straight'
		},
		title: {
			text: 'Product Trends by Month',
			align: 'left'
		},
		grid: {
			row: {
				colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
				opacity: 0.5
			}
		},
		xaxis: {
			categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
		}
	};
</script>

<PageTitle name="Charts" />
<p class="mt-5 text-gray-500">Charts are provided by <a href="https://apexcharts.com" rel="noreferrer" target="_blank">ApexCharts.js</a> . Note that the default legends are disabled and you should provide a description for your charts in HTML. See source code for examples.</p>

<section id="cards" class="mt-5">
	<div class="grid lg:grid-cols-2 gap-8 mt-10">
		<Chart options={barOptions} />
		<Chart options={lineOptions} />
	</div>
</section>