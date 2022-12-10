<script lang="ts">
    export let role: string = "button", href = "", name: string, width: string = 'w-fit', classes: string = '', icon: string = '';
</script>

<a {href} {role} class="bg-primary-700 inline-block {classes} {width} text-white px-6 py-2.5 rounded-md active:ring-2 active:ring-primary-700 active:ring-offset-2">
    {#if icon }
        <i class="fas fa-fw {icon}"></i>
    {/if}
    {name}
</a>