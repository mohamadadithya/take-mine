<script>
	import Button from "$lib/components/Button.svelte";
	import Card from "$lib/components/Card.svelte";
	import Input from "$lib/components/Input.svelte";
	import PageTitle from "$lib/components/PageTitle.svelte";
	import Radio from "$lib/components/Radio.svelte";
	import Toggle from "$lib/components/Toggle.svelte";
</script>
<PageTitle name="Forms" />

<section id="forms">
	<div class="mt-5 grid md:grid-cols-1 lg:grid-cols-2 items-start gap-6">
		<Card>
			<form>
				<Input label="Username" id="username" name="username" />
				<Input type="email" label="Email" id="email" name="email" helpText="We'll never share your email with anyone else." />
				<Input type="password" label="Password" id="password" name="password" helpText="Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji." />
				<Toggle label="Keep Me Sign In" checked={true} />
				<Button classes="mt-5 block" type="submit" name="Submit" />
			</form>
		</Card>
		<div>
			<Card classes="mb-6">
				<h3 class="text-xl font-semibold mb-4">Get More Updates</h3>
				<p class="text-gray-500 text-sm mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis magnam ipsum unde voluptatibus explicabo saepe ipsam nemo adipisci. Corporis, molestias?</p>
				<form class="md:flex justify-between items-center">
					<Input type="email" id="email-subscribe" name="email-subscribe" classes="mb-0 flex-1" placeholder="Your email address..." icon="fas fa-fw fa-envelope" />
					<Button classes="md:ml-3 mt-3 md:mt-0 flex-[0.1]" width="w-full" type="submit" name="Subscribe" />
				</form>
				<p class="text-xs text-gray-600 mt-3">By subscribing, you agree with Take Mine's <a href="/">Terms of Service</a> and <a href="/">Privacy Policy</a>.</p>
			</Card>
			<Card>
				<form>
					<Input name="name" id="name" placeholder="Enter your name" />
					<div class="input-primary mb-5">
						<textarea name="message" class="outline-none w-full" id="message" cols="30" rows="10" placeholder="Enter your message"></textarea>
					</div>
					<div class="flex items-center">
						<Radio id="man" checked={true} name="gender" label="Man" />
						<Radio id="woman" name="gender" label="Woman" />
					</div>
					<Button type="submit" name="Send" icon="fa-paper-plane" />
				</form>
			</Card>
		</div>
	</div>
</section>