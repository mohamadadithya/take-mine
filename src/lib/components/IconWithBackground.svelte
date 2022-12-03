<script lang="ts">
    export let icon: string, textColor: string, background: string;
</script>

<div class="relative {background} w-12 h-12 mr-4 p-2 rounded-full">
    <i class="fas fa-fw absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 z-10 {icon} text-xl {textColor} rounded-full"/>
</div>