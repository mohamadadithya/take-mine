<script lang="ts">
    export let link: any, isMinimalize: boolean, routeId: string, nestedLinks: any

    let isOpen: boolean = false
</script>

<button on:click={() => isOpen = !isOpen} class="text-center flex items-center justify-between px-4 py-4 w-full border-l-4 border-transparent {link.path == routeId ? 'border-l-primary-700 bg-primary-100 text-black' : 'text-gray-500'} hover:bg-primary-50 hover:text-black font-medium block duration-200">
    <div class="flex items-center">
        <i class="far fa-fw {link.icon} text-lg {isMinimalize ? '' : 'mr-3'}"></i>
        <span class="{isMinimalize ? 'hidden' : ''}">{link.name}</span>
    </div>
    {#if !isMinimalize }
        <i class="fas fa-fw fa-chevron-down"></i>
    {/if}
</button>

{#if !isMinimalize && isOpen }
    <ul class="ml-8">
        {#each nestedLinks as link }
            <li>
                <a href={link.path} class="px-4 py-4 border-l-4 border-transparent {link.path == routeId ? 'border-l-primary-700 bg-primary-100 text-black' : 'text-gray-500'} hover:bg-primary-50 hover:text-black font-medium block duration-200"><i class="far fa-fw {link.icon} text-lg {isMinimalize ? '' : 'mr-3'}"></i> <span class="{isMinimalize ? 'hidden' : ''}">{link.name}</span></a>
            </li>
        {/each}
    </ul>
{/if}