<script>
    export let text = '';
</script>

<div class="relative">
    <div class="w-full bg-gray-200 h-0.5"></div>
    {#if text }
        <p class="font-medium text-gray-500 bg-white px-4 absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4">{text}</p>
    {/if}
</div>