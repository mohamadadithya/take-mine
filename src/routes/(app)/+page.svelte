<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	import Chart from '$lib/components/Chart.svelte';
	import IconWithBackground from '$lib/components/IconWithBackground.svelte';
	import PageTitle from '$lib/components/PageTitle.svelte';
	import Table from '$lib/components/Table.svelte';
	import type { ApexOptions } from 'apexcharts';

	export let data;
	const cards = data.cards;

	const barChartOptions: ApexOptions = {
		series: [
			{
				name: 'Actual',
				data: [
					{
						x: '2011',
						y: 12,
						goals: [
							{
								name: 'Expected',
								value: 14,
								strokeWidth: 2,
								strokeDashArray: 2,
								strokeColor: '#775DD0'
							}
						]
					},
					{
						x: '2012',
						y: 44,
						goals: [
							{
								name: 'Expected',
								value: 54,
								strokeWidth: 5,
								strokeHeight: 10,
								strokeColor: '#775DD0'
							}
						]
					},
					{
						x: '2013',
						y: 54,
						goals: [
							{
								name: 'Expected',
								value: 52,
								strokeWidth: 10,
								strokeHeight: 0,
								strokeLineCap: 'round',
								strokeColor: '#775DD0'
							}
						]
					},
					{
						x: '2014',
						y: 66,
						goals: [
							{
								name: 'Expected',
								value: 61,
								strokeWidth: 10,
								strokeHeight: 0,
								strokeLineCap: 'round',
								strokeColor: '#775DD0'
							}
						]
					},
					{
						x: '2015',
						y: 81,
						goals: [
							{
								name: 'Expected',
								value: 66,
								strokeWidth: 10,
								strokeHeight: 0,
								strokeLineCap: 'round',
								strokeColor: '#775DD0'
							}
						]
					},
					{
						x: '2016',
						y: 67,
						goals: [
							{
								name: 'Expected',
								value: 70,
								strokeWidth: 5,
								strokeHeight: 10,
								strokeColor: '#775DD0'
							}
						]
					}
				]
			}
		],
		chart: {
			height: 350,
			type: 'bar'
		},
		plotOptions: {
			bar: {
				horizontal: true
			}
		},
		colors: ['#00E396'],
		dataLabels: {
			formatter: function (val: number, opt) {
				const goals = opt.w.config.series[opt.seriesIndex].data[opt.dataPointIndex].goals;

				if (goals && goals.length) {
					return `${val} / ${goals[0].value}`;
				}
				return val;
			}
		},
		legend: {
			show: true,
			showForSingleSeries: true,
			customLegendItems: ['Actual', 'Expected'],
			markers: {
				fillColors: ['#00E396', '#775DD0']
			}
		}
	};

	const radarChartOptions: ApexOptions = {
		series: [
			{
				name: 'Series 1',
				data: [80, 50, 30, 40, 100, 20]
			},
			{
				name: 'Series 2',
				data: [20, 30, 40, 80, 20, 80]
			},
			{
				name: 'Series 3',
				data: [44, 76, 78, 13, 43, 10]
			}
		],
		chart: {
			height: 350,
			type: 'radar',
			dropShadow: {
				enabled: true,
				blur: 1,
				left: 1,
				top: 1
			}
		},
		title: {
			text: 'Radar Chart - Multi Series'
		},
		stroke: {
			width: 2
		},
		fill: {
			opacity: 0.1
		},
		markers: {
			size: 0
		},
		xaxis: {
			categories: ['2011', '2012', '2013', '2014', '2015', '2016']
		}
	};
</script>

<section>
	<PageTitle name="Dashboard" />
	<a
		href="https://github.com/mohamadadithya/take-mine"
		class="w-full flex justify-between items-center p-4 text-sm hover:bg-primary-800 bg-primary-700 text-white rounded-lg mt-3"
	>
		<div class="flex items-center">
			<i class="fas fa-fw fa-star mr-2.5" />
			<p>Star this dashboard on Github</p>
		</div>
		<div class="flex items-center">
			<p class="mr-2">View more</p>
			<i class="fas fa-fw fa-arrow-right" />
		</div>
	</a>
	<div class="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mt-8">
		{#each cards as card}
			<Card classes="flex items-center">
				<IconWithBackground
					icon={card.icon}
					textColor={card.colors.text}
					background={card.colors.background}
				/>
				<div>
					<h6 class="mb-2 text-sm">{card.name}</h6>
					<p class="font-bold text-3xl">{card.value}</p>
				</div>
			</Card>
		{/each}
	</div>
	<Table classes="mt-8" />

	<div class="grid lg:grid-cols-2 gap-8 mt-10">
		<div class="bg-white shadow-xl p-3 rounded-xl">
			<Chart options={barChartOptions} />
		</div>
		<div class="bg-white shadow-xl p-3 rounded-xl">
			<Chart options={radarChartOptions} />
		</div>
	</div>
</section>
