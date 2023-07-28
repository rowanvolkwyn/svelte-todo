<script>
    import { onMount } from "svelte";
    import { items } from "../stores"
    import ToDoApi from "../ToDoApi.js";

    function handleNewItem(event) {

    }

    onMount(async () => {
        $items = await ToDoAPI.getAll();
    })
</script>

<style>

</style>

<div class="list">
    {#each $items as item}
        {JSON.stringify(item)}
    {:else}
        <p class="list-status">There are no items in the list</p>
    {/each}
</div>