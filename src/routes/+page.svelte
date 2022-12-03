<script lang="ts">
	import Card from '$lib/components/Card.svelte';
import Chart from '$lib/components/Chart.svelte';
	import IconWithBackground from '$lib/components/IconWithBackground.svelte';
	import PageTitle from '$lib/components/PageTitle.svelte';

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

    export let data;
    const cards = data.cards;
</script>

<section>
	<PageTitle name="Dashboard" />
	<a
		href="https://github.com/mohamadadithya/take-mine"
		class="w-full flex justify-between items-center p-4 text-sm hover:bg-primary-800 bg-primary-700 text-white rounded-lg mt-5"
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
	<div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
		{#each cards as card }
            <Card classes="flex items-center">
                <IconWithBackground icon={card.icon} textColor={card.colors.text} background={card.colors.background} />
                <div>
                    <h6 class="mb-2 text-sm">{card.name}</h6>
                    <p class="font-bold text-3xl">{card.value}</p>
                </div>
            </Card>
        {/each}
	</div>
	<div class="grid lg:grid-cols-2 gap-8 mt-10">
		<Chart options={barOptions} />
		<Chart options={lineOptions} />
	</div>
</section>
