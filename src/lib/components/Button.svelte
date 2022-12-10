<script lang="ts">
    export let type: string, name: string, width: string = 'w-fit', classes: string = '', icon: string = '';
</script>

{#if type == "button" }    
    <button on:click {type} class="bg-primary-700 {classes} {width} text-white px-6 py-2.5 rounded-md active:ring-2 active:ring-primary-700 active:ring-offset-2">
        {#if icon }
            <i class="fas fa-fw {icon}"></i>
        {/if}
        {name}
    </button>
{:else}
    <button {type} class="bg-primary-700 {classes} {width} text-white px-6 py-2.5 rounded-md active:ring-2 active:ring-primary-700 active:ring-offset-2">
        {#if icon }
            <i class="fas fa-fw {icon}"></i>
        {/if}
        {name}
    </button>
{/if}