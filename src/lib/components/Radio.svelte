<script lang="ts">
    export let label: string, id: string, name: string, value: any = '', classes: string = 'mr-3', checked: boolean = false;
</script>

<div class="flex items-center mb-4 {classes}">
    <input {id} type="radio" {value} {name} class="w-4 h-4 accent-primary-700 text-primary-600 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600 cursor-pointer" {checked}>
    <label for={id} class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{label}</label>
</div>