<script lang="ts">
	export let isOpen: boolean = false;
	export let links: any = [];
</script>

<div class="relative">
	<button type="button" on:click>
		<slot />
	</button>
	<div
		id="dropdown"
		class="absolute {isOpen ? '' : 'hidden'} right-0 shadow-md bg-white p-5 w-40 rounded-xl"
	>
		<ul>
			{#each links as link}
				<li>
					<a class="py-1 px-2.5 rounded-md block hover:bg-gray-100" href={link.path}
						><i class="far mr-1 fa-fw {link.icon} {link.path == '/logout' ? 'rotate-180' : ''}" />
						{link.name}</a
					>
				</li>
			{/each}
		</ul>
	</div>
</div>
