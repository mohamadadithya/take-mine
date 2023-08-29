<script lang="ts">
	import { clickoutside } from '@svelte-put/clickoutside';
	import type { Link } from '$lib/data/links';
	import Icon from '@iconify/svelte';

	export let isOpen = true,
		links: Link[] = [];
</script>

<div class="relative">
	<button type="button" on:click|stopPropagation>
		<slot />
	</button>
	<div
		use:clickoutside
		on:clickoutside={() => (isOpen = false)}
		id="dropdown"
		class="absolute {isOpen ? '' : 'hidden'} right-0 shadow-md bg-white p-4 w-64 rounded-xl"
	>
		<div class="flex items-start gap-3 border-b pb-3 mb-3">
			<img
				src="/images/profile-1.jpg"
				class="w-14 h-14 aspect-square rounded-full border border-gray-300"
				alt="Username"
			/>
			<div>
				<p class="font-semibold">John Doe</p>
				<p class="text-xs">johndoe@gmail.com</p>
				<p class="text-xs bg-primary-200 w-fit py-1 px-3 rounded-full mt-1.5">Admin</p>
			</div>
		</div>
		<ul>
			{#each links as link}
				<li>
					<a class="py-2 px-2.5 rounded-md hover:bg-gray-100 flex items-center" href={link.path}>
						<Icon icon={link.icon.inactive} class="mr-1 text-2xl" />
						{link.name}</a
					>
				</li>
			{/each}
			<li class="border-t mt-2 pt-3">
				<form method="POST">
					<button type="button" class="btn btn-error w-full rounded-full">
						Logout
						<Icon icon="solar:logout-linear" class="ml-1 text-2xl" />
					</button>
				</form>
			</li>
		</ul>
	</div>
</div>
