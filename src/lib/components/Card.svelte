<script lang="ts">
	import { twMerge } from 'tailwind-merge';

	export let classes: string = '',
		type: string = 'shadow';

	let className: string = '';

	export { className as class };
</script>

<div
	class="p-5 {type == 'shadow' ? 'shadow-lg' : 'border border-gray-300'} {twMerge(
		'bg-white',
		className
	)} rounded-xl {classes}"
>
	<slot />
</div>
