<svelte:head>
	<title>Forgot Password</title>
</svelte:head>

<section id="forgot-password">
	<div class="container mx-auto px-5 max-w-xl">
		<h1 class="text-2xl md:text-3xl font-bold mb-3">Forgot your password?</h1>
		<p class="text-gray-500">
			Don't fret! Just type in your email and we will send you a code to reset your password!
		</p>
		<form class="mt-6">
			<fieldset class="grid gap-5">
				<div class="field-group">
					<label for="email">Email</label>
					<input
						type="email"
						name="email"
						id="email"
						placeholder="name@company.com"
						class="input input-bordered block w-full"
					/>
				</div>
				<div class="field-group">
					<label for="password">Password</label>
					<input
						type="password"
						name="password"
						id="password"
						placeholder="********"
						class="input input-bordered block w-full"
					/>
				</div>
				<div class="flex items-start">
					<input
						class="checkbox checkbox-sm checkbox-primary"
						type="checkbox"
						name="checkbox"
						id="checkbox"
					/>
					<label for="checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
						>I accept the <a href="/">Terms and Conditions</a></label
					>
				</div>
			</fieldset>
			<button type="button" class="w-full mt-8 mb-5 btn btn-primary">Reset Password</button>
		</form>
	</div>
</section>
