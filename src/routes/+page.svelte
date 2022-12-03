<script lang="ts">
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
</script>

<section>
	<PageTitle name="Dashboard" />
	<a
		href="/"
		class="w-full flex justify-between items-center p-4 text-sm hover:bg-emerald-800 bg-emerald-700 text-white rounded-lg mt-5"
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
	<div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
		<div id="card" class="bg-white shadow-lg rounded-xl p-5 flex items-center">
            <IconWithBackground icon="fa-users" textColor="text-emerald-700" background="bg-emerald-100" />
			<div>
				<h6 class="mb-2 text-sm">Total Members</h6>
				<p class="font-bold text-3xl">80,730</p>
			</div>
		</div>
		<div id="card" class="bg-white shadow-lg rounded-xl p-5 flex items-center">
            <IconWithBackground icon="fa-money-bills" textColor="text-sky-700" background="bg-sky-100" />
			<div>
				<h6 class="mb-2 text-sm">Account Balance</h6>
				<p class="font-bold text-3xl">Rp. 1,5M</p>
			</div>
		</div>
		<div id="card" class="bg-white shadow-lg rounded-xl p-5 flex items-center">
            <IconWithBackground icon="fa-video-arrow-up-right" textColor="text-red-700" background="bg-red-100" />
			<div>
				<h6 class="mb-2 text-sm">Live Events</h6>
				<p class="font-bold text-3xl">50</p>
			</div>
		</div>
		<div id="card" class="bg-white shadow-lg rounded-xl p-5 flex items-center">
            <IconWithBackground icon="fa-boxes-stacked" textColor="text-indigo-700" background="bg-indigo-100" />
			<div>
				<h6 class="mb-2 text-sm">Total Products</h6>
				<p class="font-bold text-3xl">120</p>
			</div>
		</div>
	</div>

	<div class="grid lg:grid-cols-2 gap-8 mt-10">
		<Chart options={barOptions} />
		<Chart options={lineOptions} />
	</div>
</section>
