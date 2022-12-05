<script lang="ts">
import { isOpenSidebar } from "$lib/stores/dashboardStore";
import { page } from '$app/stores';
import { links } from '../data/links';
import { Settings } from "$lib/settings";
import NavDropdownLink from "./NavDropdownLink.svelte";

let routeId: any;
let isMinimalize = false;

$: routeId = $page.route.id;
</script>

<aside class="overflow-y-auto h-full fixed {$isOpenSidebar ? 'translate-x-0' : '-translate-x-full'} duration-300 md:translate-x-0 md:static z-20 md:block {isMinimalize ? 'w-fit' : 'w-60 md:w-56 lg:w-64'} bg-white flex-shrink-0 border-r">
    <div class="py-6 relative">
        <button on:click={() => isOpenSidebar.set(false)} class="bg-primary-700 block md:hidden text-white p-1 text-xl absolute right-0 rounded-tl-md rounded-bl-md">
            <i class="fas fa-fw fa-times"></i>
        </button>
        <button on:click={() => isMinimalize = !isMinimalize} class="bg-primary-700 hidden md:block text-white p-1 text-xl absolute right-0 {isMinimalize ? '-bottom-4' : ''} rounded-tl-md rounded-bl-md">
            <i class="fas fa-fw fa-chevron-{isMinimalize ? 'right' : 'left'}"></i>
        </button>
        <a href="/" class="px-4 text-2xl font-bold text-primary-700">{isMinimalize ? Settings.SITE_SHORT_NAME : Settings.SITE_NAME}</a>
        <ul class="mt-5 {isMinimalize ? 'text-center' : ''}">
            {#each links as link }
                <li>
                    {#if link.path }
                        <a href={link.path} class="px-4 py-4 border-l-4 border-transparent {link.path == routeId ? 'border-l-primary-700 bg-primary-100 text-black' : 'text-gray-500'} hover:bg-primary-50 hover:text-black font-medium block duration-200"><i class="{link.path == routeId ? 'fas' : 'far'} fa-fw {link.icon} text-lg {isMinimalize ? '' : 'mr-3'}"></i> <span class="{isMinimalize ? 'hidden' : ''}">{link.name}</span></a>
                    {:else}
                        <NavDropdownLink nestedLinks={link?.nested_links} {link} {routeId} {isMinimalize} />
                    {/if}
                </li>
            {/each}
        </ul>
    </div>
    {#if !isMinimalize }
        <footer class="px-6 text-xs absolute bottom-6 text-gray-700">&copy; 2022 Mohamad Adithya</footer>
    {/if}
</aside>