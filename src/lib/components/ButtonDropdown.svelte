<script lang="ts">
	import { clickoutside } from '@svelte-put/clickoutside';
	import type { Link } from '$lib/data/links';

	export let isOpen = false,
				links: Link[] = [];
</script>

<div class="relative">
	<button type="button" on:click|stopPropagation>
		<slot />
	</button>
	<div
		use:clickoutside on:clickoutside={() => isOpen = false}
		id="dropdown"
		class="absolute {isOpen ? '' : 'hidden'} right-0 shadow-md bg-white p-4 w-52 rounded-xl"
	>
		<ul>
			{#each links as link}
				<li>
					<a class="py-2 px-2.5 rounded-md block hover:bg-gray-100" href={link.path}
						><i class="far mr-1 fa-fw {link.icon} {link.path == '/logout' ? 'rotate-180' : ''}" />
						{link.name}</a
					>
				</li>
			{/each}
		</ul>
	</div>
</div>
