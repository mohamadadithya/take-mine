<script lang="ts">
	import type { Link } from '$lib/data/links';
	import Icon from '@iconify/svelte';

	export let link: Link, routeId: string, nestedLinks: Link[] | undefined;

	let isOpen: boolean = false;
</script>

<button
	on:click={() => (isOpen = !isOpen)}
	class="text-center flex items-center justify-between px-4 py-4 w-full border-l-4 border-transparent {link.path ==
	routeId
		? 'border-l-primary-700 bg-primary-100 text-black'
		: 'text-gray-500'} hover:bg-primary-50 hover:text-black font-medium block duration-200"
>
	<div class="flex items-center">
		<Icon icon={isOpen ? link.icon.active : link.icon.inactive} class="text-3xl mr-3" />
		<span>{link.name}</span>
	</div>
	<Icon icon="mi:chevron-down" class="text-3xl" />
</button>

{#if isOpen}
	<ul class="ml-8">
		{#if nestedLinks}
			{#each nestedLinks as link}
				<li>
					<a
						href={link.path}
						class="flex items-center px-4 py-4 border-l-4 border-transparent {link.path == routeId
							? 'border-l-primary-700 bg-primary-100 text-black'
							: 'text-gray-500'} hover:bg-primary-50 hover:text-black font-medium block duration-200"
					>
						<Icon icon={link.icon.inactive} class="text-3xl mr-3" />
						<span>{link.name}</span>
					</a>
				</li>
			{/each}
		{/if}
	</ul>
{/if}
