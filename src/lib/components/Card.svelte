<script lang="ts">
    export let classes: string = '', type: string = 'shadow';
</script>

<div class="p-5 {type == "shadow" ? 'shadow-lg' : 'border border-gray-300'} rounded-xl {classes}">
    <slot />
</div>