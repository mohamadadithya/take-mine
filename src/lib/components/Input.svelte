<script lang="ts">
    export let helpText: string = '', classes: string = 'mb-4', label: string = '', id: string, name: string, placeholder: string = '', type: string = 'text', icon: string = '';
</script>

<div class={classes}>
    {#if label }
        <label for={id} class="inline-block mb-1.5 font-medium">{label}</label>
    {/if}
    <div class="flex items-center input-primary">
        {#if icon }
            <i class="{icon} mr-2 text-gray-400"></i>
        {/if}
        <input type={type} class="w-full outline-none" {id} {name} {placeholder}>
    </div>
    {#if helpText }
        <p class="mt-1.5 text-sm inline-block text-gray-500">{helpText}</p>
    {/if}
</div>