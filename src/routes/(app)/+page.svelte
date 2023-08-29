<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	import Chart from '$lib/components/Chart.svelte';
	import IconWithBackground from '$lib/components/IconWithBackground.svelte';
	import PageTitle from '$lib/components/PageTitle.svelte';
	import Table from '$lib/components/Table.svelte';
	import Icon from '@iconify/svelte';
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
			<Icon icon="tabler:star-filled" class="mr-2.5 text-xl" />
			<p>Star this dashboard on Github</p>
		</div>
		<div class="flex items-center">
			<p class="mr-2">View more</p>
			<Icon icon="mingcute:arrow-right-line" class="text-2xl" />
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
	<p>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, quidem eos. Voluptas dolorum
		nostrum optio veniam illo architecto pariatur vel commodi odio earum consequuntur rerum aliquam,
		ab excepturi laboriosam amet. Quod dolores vero harum id voluptatibus quasi molestias, ipsam
		repellendus eaque maiores, deserunt blanditiis. Ratione debitis quibusdam repellendus accusamus,
		rerum, ipsa deserunt nobis architecto reiciendis illum beatae culpa! Sit, ipsam. Consequatur,
		illo exercitationem nulla quos libero voluptates possimus maxime atque doloremque sint tenetur,
		neque voluptatum adipisci quasi aliquam vero aspernatur est eligendi? Repellat dolor quasi
		molestiae voluptas, qui excepturi nam. Dolorum, recusandae assumenda ducimus eos ab voluptate
		perferendis impedit consectetur inventore atque vel error quam quae provident repudiandae
		consequuntur sint! Quidem repellat aspernatur illo aliquid suscipit expedita alias ullam
		impedit? Commodi optio animi similique doloribus beatae, cupiditate et consequuntur blanditiis
		enim, sint, omnis assumenda odit maxime asperiores quidem nulla aliquam neque eius non! Quos
		culpa, officia praesentium odit est illo! Fugit perspiciatis sit omnis natus amet laborum sunt
		veritatis saepe beatae quo! Amet atque mollitia est totam vero obcaecati dolor repellendus
		praesentium, saepe eveniet? Quod alias laborum perspiciatis nisi libero. Porro dolorum quae
		blanditiis tenetur, harum, voluptates inventore veniam temporibus laborum incidunt vitae sed ab
		voluptatem veritatis in nihil mollitia totam! Saepe mollitia quos consequuntur laboriosam amet
		impedit iste incidunt! Modi aut obcaecati aperiam? Enim cum dicta laboriosam, debitis
		accusantium sunt culpa, autem at rem architecto fugit totam vero odit quae aliquid perspiciatis
		impedit quidem laudantium, porro error! In, quam? Nam, nesciunt tenetur provident, dolorem
		officia esse accusamus perferendis sed minima necessitatibus hic consequatur eius consectetur
		natus beatae dolores doloremque. Maxime, obcaecati! Distinctio reiciendis ipsa aliquam
		accusamus, voluptatem nisi doloremque. Suscipit facilis tenetur quisquam odio ex. Veritatis
		ipsam vel voluptas facere tenetur est nam omnis explicabo dolorem magni architecto distinctio
		libero officiis quod saepe dicta sunt, veniam nesciunt minima repudiandae? Ipsa repellendus
		deserunt, esse numquam accusantium nulla provident odio laudantium recusandae! Quo maiores
		deserunt ullam nesciunt! Temporibus mollitia in impedit cum cupiditate non qui. Facilis numquam
		doloribus quo rem soluta. Nobis incidunt magni praesentium pariatur? Incidunt esse numquam culpa
		deleniti pariatur mollitia dignissimos autem doloribus distinctio non, perferendis eligendi
		maxime doloremque corrupti eaque! Itaque, quod quas quae aspernatur quasi maxime! Ab facere
		asperiores at dignissimos. Ea excepturi nihil, modi dicta ratione reprehenderit illum? Adipisci,
		corporis magnam? Corrupti natus facilis veniam voluptatum quas. Quaerat tempore autem aut
		numquam recusandae quasi id? Sunt maxime nihil, beatae rerum, minus eaque qui quod sint ducimus
		quaerat nemo iure corrupti ipsa molestias praesentium. Corporis a ut eligendi doloremque, minima
		amet nostrum vel aperiam sequi laboriosam. Ad necessitatibus odit nemo nobis vitae veritatis,
		quo voluptatum fugiat? Saepe numquam tempore eum voluptates doloremque. A in dolorum qui, soluta
		veniam repellat suscipit dolor possimus error minima id blanditiis! Velit cupiditate iste ipsam
		blanditiis, quia assumenda omnis ad veritatis voluptates quas dignissimos praesentium ratione
		cumque nam qui. Fugit aliquid obcaecati eos excepturi iste velit impedit dolor facilis atque
		recusandae. Laudantium dicta voluptas fuga vitae possimus voluptate excepturi ut! Rerum
		temporibus molestiae fugit, adipisci facilis eligendi cupiditate dicta iste, quisquam illo error
		aliquam repudiandae. Non animi a voluptatum vel nostrum? Quas quidem, suscipit pariatur
		temporibus amet aut sequi laborum architecto doloribus. Suscipit error recusandae velit in
		ducimus voluptas, provident odit? Repellendus nobis sunt eaque rerum soluta ullam eligendi nisi
		alias. Ipsum, veritatis illum accusantium maxime reprehenderit odit hic, quo, ratione neque
		laborum praesentium delectus porro rerum. Ipsa, ex exercitationem! Eos nulla eius odit aut,
		laudantium alias consequuntur asperiores voluptates quam! Eius suscipit, voluptates harum saepe
		quo, nemo odit ab unde nulla nihil porro assumenda, veniam aperiam facere? Modi, tenetur debitis
		vitae expedita voluptas incidunt tempora dolores eveniet quibusdam nesciunt libero! Consequatur,
		iure natus. Fuga, explicabo consequatur! Distinctio iusto at atque, voluptatem nemo accusamus
		tempora, illo quod id ratione cumque adipisci accusantium aliquam, quaerat animi laborum?
		Tenetur reiciendis molestias atque! Labore. Quisquam explicabo dolores magnam quos rem amet
		placeat accusantium reiciendis, neque aut ducimus vel officia eius maiores qui ea corporis
		eligendi perferendis, repellendus, repudiandae impedit excepturi? Commodi impedit unde nesciunt.
		Explicabo tenetur accusamus iusto tempora, ipsa reprehenderit optio iure rerum, culpa quaerat
		aliquam nesciunt. Obcaecati perspiciatis mollitia cupiditate quod odit quae corrupti a ad.
		Quidem quia ipsa sed repellat totam? Rem consequatur hic illum vitae incidunt, maxime suscipit
		odit nulla impedit reprehenderit quibusdam doloribus mollitia accusantium aut officia distinctio
		nobis ullam quis nesciunt. Quod, ipsam modi facere repellat possimus quibusdam? Nesciunt, qui!
		Dignissimos veritatis alias quibusdam corporis accusantium quasi distinctio beatae veniam
		pariatur aliquid accusamus maxime consectetur deleniti eaque reprehenderit suscipit assumenda,
		quae ducimus mollitia, ea nam deserunt maiores asperiores.
	</p>
</section>
