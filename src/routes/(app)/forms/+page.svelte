<script>
	import Card from '$lib/components/Card.svelte';
	import PageTitle from '$lib/components/PageTitle.svelte';
	import Icon from '@iconify/svelte';
</script>

<PageTitle name="Forms" />

<section id="forms">
	<div class="mt-5 grid md:grid-cols-1 lg:grid-cols-2 items-start gap-6">
		<Card>
			<form>
				<fieldset class="grid gap-5">
					<div class="field-group">
						<label for="username">Username</label>
						<input type="text" id="username" name="username" class="input input-bordered w-full" />
					</div>
					<div class="field-group">
						<label for="email">Email</label>
						<input type="email" id="email" name="email" class="input input-bordered w-full" />
					</div>
					<div class="field-group">
						<label for="password">Password</label>
						<input
							type="password"
							id="password"
							name="password"
							class="input input-bordered w-full"
						/>
					</div>
					<label for="toggle" class="flex items-center gap-2.5 text-sm">
						<input id="toggle" type="checkbox" class="toggle toggle-primary" checked />
						<span>Keep me sign in</span>
					</label>
				</fieldset>
				<button type="button" class="btn btn-primary mt-6">Submit</button>
			</form>
		</Card>
		<div>
			<Card classes="mb-6">
				<h3 class="text-xl font-semibold mb-4">Get More Updates</h3>
				<p class="text-gray-500 text-sm mb-4">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis magnam ipsum unde
					voluptatibus explicabo saepe ipsam nemo adipisci. Corporis, molestias?
				</p>
				<div class="join w-full">
					<input class="input input-bordered join-item w-full" placeholder="Search" />
					<button class="btn join-item btn-primary">Subscribe</button>
				</div>
				<p class="text-xs text-gray-600 mt-3">
					By subscribing, you agree with Take Mine's <a href="/">Terms of Service</a> and
					<a href="/">Privacy Policy</a>.
				</p>
			</Card>
			<Card>
				<form>
					<fieldset class="grid gap-4">
						<input
							type="text"
							name="name"
							id="name"
							placeholder="Enter your name"
							class="input input-bordered w-full"
						/>
						<textarea
							name="comment"
							id="comment"
							class="textarea textarea-bordered w-full"
							placeholder="Enter your comment"
							cols="30"
							rows="10"
						/>
						<div class="flex items-center">
							<div class="form-control">
								<label class="label cursor-pointer">
									<input
										type="radio"
										name="radio-10"
										class="radio checked:bg-primary-800 radio-sm"
										checked
									/>
									<span class="label-text ml-2.5">Men</span>
								</label>
							</div>
							<div class="form-control">
								<label class="label cursor-pointer">
									<input
										type="radio"
										name="radio-10"
										class="radio checked:bg-primary-800 radio-sm"
										checked
									/>
									<span class="label-text ml-2.5">Women</span>
								</label>
							</div>
						</div>
					</fieldset>
					<button type="submit" class="btn btn-primary mt-5">
						Send
						<Icon icon="ion:paper-plane" class="text-xl" />
					</button>
				</form>
			</Card>
		</div>
	</div>
</section>
