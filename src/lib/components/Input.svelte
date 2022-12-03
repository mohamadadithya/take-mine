<script lang="ts">
    export let helpText: string = '', label: string, id: string, name: string, placeholder: string = '', type: string = 'text';
</script>

<div class="mb-4">
    <label for={id} class="inline-block mb-1.5 font-medium">{label}</label>
    <input type={type} class="input-primary" name={name} placeholder={placeholder}>
    {#if helpText }
        <p class="mt-1.5 text-sm inline-block text-gray-500">{helpText}</p>
    {/if}
</div>