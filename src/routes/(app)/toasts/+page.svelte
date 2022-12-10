<script lang="ts">
	import Button from "$lib/components/Button.svelte";
    import PageTitle from "$lib/components/PageTitle.svelte";
	import Toast from "$lib/components/Toast.svelte";
    import { isShowedToast } from "$lib/stores/dashboardStore";
</script>

<PageTitle name="Toasts" />

<section>
    <Button on:click={() => isShowedToast.set(true)} type="button" name="Toast Me" />
    <Toast />
</section>