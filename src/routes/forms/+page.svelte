<script>
	import Card from "$lib/components/Card.svelte";
	import Input from "$lib/components/Input.svelte";
	import PageTitle from "$lib/components/PageTitle.svelte";
</script>
<PageTitle name="Forms" />

<section id="forms">
	<div class="mt-5 grid grid-cols-2">
		<Card>
			<form>
				<Input label="Username" id="username" name="username" />
				<Input type="email" label="Email" id="email" name="email" helpText="We'll never share your email with anyone else." />
				<Input type="password" label="Password" id="password" name="password" helpText="Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji." />
			</form>
		</Card>
	</div>
</section>