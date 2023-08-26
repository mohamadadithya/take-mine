<script>
	import { Settings } from '$lib/settings';
</script>

<svelte:head>
	<title>Login</title>
</svelte:head>

<section id="login">
	<div class="grid xl:grid-cols-2 items-center">
		<div class="p-6 md:p-16 max-w-2xl mx-auto">
			<h1 class="text-2xl font-bold mb-5">Welcome back!</h1>
			<div class="grid md:grid-cols-2 gap-3 mb-6">
				<button
					type="button"
					class="border hover:bg-gray-100 px-5 py-2.5 rounded-lg flex justify-center items-center"
				>
					<svg
						class="mr-3"
						width="24px"
						height="24px"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
						xmlns:xlink="http://www.w3.org/1999/xlink"
					>
						<path
							fill="#EA4335 "
							d="M5.26620003,9.76452941 C6.19878754,6.93863203 8.85444915,4.90909091 12,4.90909091 C13.6909091,4.90909091 15.2181818,5.50909091 16.4181818,6.49090909 L19.9090909,3 C17.7818182,1.14545455 15.0545455,0 12,0 C7.27006974,0 3.1977497,2.69829785 1.23999023,6.65002441 L5.26620003,9.76452941 Z"
						/>
						<path
							fill="#34A853"
							d="M16.0407269,18.0125889 C14.9509167,18.7163016 13.5660892,19.0909091 12,19.0909091 C8.86648613,19.0909091 6.21911939,17.076871 5.27698177,14.2678769 L1.23746264,17.3349879 C3.19279051,21.2936293 7.26500293,24 12,24 C14.9328362,24 17.7353462,22.9573905 19.834192,20.9995801 L16.0407269,18.0125889 Z"
						/>
						<path
							fill="#4A90E2"
							d="M19.834192,20.9995801 C22.0291676,18.9520994 23.4545455,15.903663 23.4545455,12 C23.4545455,11.2909091 23.3454545,10.5272727 23.1818182,9.81818182 L12,9.81818182 L12,14.4545455 L18.4363636,14.4545455 C18.1187732,16.013626 17.2662994,17.2212117 16.0407269,18.0125889 L19.834192,20.9995801 Z"
						/>
						<path
							fill="#FBBC05"
							d="M5.27698177,14.2678769 C5.03832634,13.556323 4.90909091,12.7937589 4.90909091,12 C4.90909091,11.2182781 5.03443647,10.4668121 5.26620003,9.76452941 L1.23999023,6.65002441 C0.43658717,8.26043162 0,10.0753848 0,12 C0,13.9195484 0.444780743,15.7301709 1.23746264,17.3349879 L5.27698177,14.2678769 Z"
						/>
					</svg>
					Sign In With Google
				</button>
				<button
					type="button"
					class="border hover:bg-gray-100 px-5 py-2.5 rounded-lg flex justify-center items-center"
				>
					<svg
						class="mr-3"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<g clip-path="url(#clip0_1_2)">
							<path
								d="M20.7658 0H3.23417C1.44809 0 0.00012207 1.44791 0.00012207 3.23405V20.7658C0.00012207 22.552 1.44803 23.9999 3.23417 23.9999H11.8807L11.8954 15.4236H9.66733C9.37778 15.4236 9.14276 15.1895 9.14164 14.8999L9.13096 12.1354C9.12984 11.8443 9.36556 11.6077 9.65671 11.6077H11.8808V8.93651C11.8808 5.83661 13.774 4.14869 16.5393 4.14869H18.8084C19.0988 4.14869 19.3342 4.38406 19.3342 4.67444V7.00547C19.3342 7.29573 19.0989 7.53104 18.8087 7.53122L17.4162 7.53187C15.9123 7.53187 15.6211 8.24649 15.6211 9.29522V11.6078H18.9256C19.2405 11.6078 19.4848 11.8827 19.4477 12.1954L19.12 14.9599C19.0887 15.2244 18.8643 15.4237 18.598 15.4237H15.6359L15.6211 24H20.766C22.552 24 23.9999 22.5521 23.9999 20.766V3.23405C23.9999 1.44791 22.552 0 20.7658 0Z"
								fill="#475993"
							/>
						</g>
						<defs>
							<clipPath id="clip0_1_2">
								<rect width="24" height="24" fill="white" />
							</clipPath>
						</defs>
					</svg>
					Sign In With Facebook
				</button>
			</div>
			<div class="divider">OR</div>
			<form class="mt-8">
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
					<div class="mb-3 flex items-center justify-between text-sm">
						<div class="flex items-start">
							<input
								type="checkbox"
								checked={true}
								class="checkbox checkbox-sm checkbox-primary"
								id="remember-me"
							/>
							<label
								for="remember-me"
								class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label
							>
						</div>
						<a href="/forgot-password">Forgot password?</a>
					</div>
				</fieldset>
				<button type="button" class="w-full my-5 btn btn-primary">Login</button>
				<p class="text-sm text-gray-600">
					Dont have an account? <a href="/register" class="font-medium">Sign Up</a>
				</p>
			</form>
		</div>
		<div
			class="bg-primary-700 text-white xl:h-screen flex flex-col justify-center items-start p-6 md:p-16"
		>
			<a href="/" class="text-2xl mb-3 font-bold text-white">{Settings.SITE_NAME}</a>
			<h2 class="text-3xl md:text-5xl font-bold mb-6">
				Explore the world's leading design portfolios.
			</h2>
			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt recusandae voluptates
				asperiores consequatur, pariatur placeat obcaecati suscipit maxime illo illum? Lorem ipsum
				dolor sit, amet consectetur adipisicing elit. Aut, commodi?
			</p>
			<div class="flex items-center mt-10">
				<div class="flex -space-x-4 mr-5">
					<img
						class="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800 object-cover"
						src="/images/profile-1.jpg"
						alt="Username"
					/>
					<img
						class="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800 object-cover"
						src="/images/profile-2.jpg"
						alt="Username"
					/>
					<img
						class="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800 object-cover"
						src="/images/profile-3.jpg"
						alt="Username"
					/>
					<a
						class="flex justify-center items-center w-10 h-10 text-xs font-medium text-white bg-gray-700 rounded-full border-2 border-white hover:bg-gray-600 dark:border-gray-800"
						href="/">+99</a
					>
				</div>
				<p class="pl-5 border-l border-gray-300 flex-1">
					Over <strong>15.7k</strong> Happy Customers
				</p>
			</div>
		</div>
	</div>
</section>
