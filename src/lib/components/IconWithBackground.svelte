<script lang="ts">
	import Icon from '@iconify/svelte';

	export let icon: string, textColor: string, background: string;
</script>

<div class="relative {background} w-12 h-12 mr-4 p-2 rounded-full">
	<Icon
		{icon}
		class="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 text-xl {textColor}"
	/>
</div>
