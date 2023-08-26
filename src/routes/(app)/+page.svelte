<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	import IconWithBackground from '$lib/components/IconWithBackground.svelte';
	import PageTitle from '$lib/components/PageTitle.svelte';
	import Table from '$lib/components/Table.svelte';
	import ChartJS from 'chart.js/auto';
	import { onMount } from 'svelte';

	let barChartEl: HTMLCanvasElement;

	onMount(() => {
		new ChartJS(barChartEl, {
			type: 'bar',
			data: {
				labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
				datasets: [
					{
						label: '# of Votes',
						data: [12, 19, 3, 5, 2, 3],
						borderWidth: 1
					}
				]
			},
			options: {
				maintainAspectRatio: false,
				scales: {
					y: {
						beginAtZero: true
					}
				},
				responsive: true
			}
		});
	});

	export let data;
	const cards = data.cards;
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
		<div class="shadow-md bg-white p-3 border rounded-xl h-[25rem]">
			<canvas class="w-full" bind:this={barChartEl} />
		</div>
	</div>
</section>
