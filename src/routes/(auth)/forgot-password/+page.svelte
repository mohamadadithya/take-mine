<script>
	import Input from '$lib/components/Input.svelte';
	import Button from '$lib/components/Button.svelte';
</script>

<svelte:head>
	<title>Forgot Password</title>
</svelte:head>

<section id="forgot-password">
	<h1 class="text-2xl md:text-3xl font-bold mb-3">Forgot your password?</h1>
	<p class="text-gray-500">
		Don't fret! Just type in your email and we will send you a code to reset your password!
	</p>
	<form class="mt-8">
		<Input placeholder="name@company.com" label="Email" type="email" name="email" id="email" />
		<Input
			placeholder="&bullet;&bullet;&bullet;&bullet;&bullet;&bullet;&bullet;&bullet;"
			label="Password"
			type="password"
			name="password"
			id="password"
		/>
		<div class="flex items-start">
			<input class="accent-primary-700" type="checkbox" name="checkbox" id="checkbox" />
			<label for="checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
				>I accept the <a href="/">Terms and Conditions</a></label
			>
		</div>
		<Button type="button" classes="w-full mt-8 mb-5 font-medium" name="Reset Password" />
	</form>
</section>
