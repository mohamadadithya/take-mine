<script>
	import Card from '$components/Card.svelte';
	import PageTitle from '$components/PageTitle.svelte';
</script>

<PageTitle name="Cards" />

<section id="cards" class="mt-3">
	<h3 class="mb-3 font-semibold text-lg">Shadow Card</h3>
	<Card class="mb-5">
		<p>Large, full width sections goes here</p>
	</Card>
	<h3 class="mb-3 font-semibold text-lg">Border Card</h3>
	<Card type="border" class="mb-5">
		<p>Large, full width sections goes here</p>
	</Card>
	<h3 class="mb-3 font-semibold text-lg">Cards with Title</h3>
	<div class="grid md:grid-cols-2 gap-8 mb-5">
		<div>
			<Card type="border" class="bg-white text-black">
				<h4 class="font-medium mb-2">Title Here</h4>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi reiciendis quos suscipit
					aut eveniet recusandae ad provident sapiente assumenda commodi!
				</p>
			</Card>
		</div>
		<div>
			<Card type="shadow" class="bg-primary-700 text-white">
				<h4 class="font-medium mb-2">Title Here</h4>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi reiciendis quos suscipit
					aut eveniet recusandae ad provident sapiente assumenda commodi!
				</p>
			</Card>
		</div>
	</div>
	<h3 class="mb-3 font-semibold text-lg">Cards with Image</h3>
	<div class="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
		<div>
			<Card type="border" class="bg-white text-black md:flex">
				<img
					src="/images/card-image-1.jpg"
					class="w-full mb-4 md:mb-0 md:w-36 object-cover mr-5 rounded-lg"
					alt="Card 1"
				/>
				<div class="flex flex-col justify-between">
					<div>
						<h4 class="font-medium mb-1.5 text-xl">Title Here</h4>
						<p class="text-gray-600">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi reiciendis quos
							suscipit aut eveniet recusandae ad provident sapiente assumenda commodi!
						</p>
					</div>
					<a href="/" class="mt-6 btn btn-primary w-fit">Lorem</a>
				</div>
			</Card>
		</div>
		<div>
			<Card type="shadow" class="bg-primary-700 text-white">
				<h4 class="font-medium mb-2">Title Here</h4>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi reiciendis quos suscipit
					aut eveniet recusandae ad provident sapiente assumenda commodi!
				</p>
			</Card>
		</div>
	</div>
</section>
