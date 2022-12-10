<script lang="ts">
    export let label: string = '', checked = false
</script>

<label class="inline-flex relative items-center cursor-pointer">
    <input type="checkbox" class="sr-only peer" {checked}>
    <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-2 peer-focus:ring-primary-700 peer-focus:ring-offset-2 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-700"></div>
    <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">{label}</span>
</label>