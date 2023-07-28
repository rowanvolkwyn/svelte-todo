<script>
    import { onMount } from "svelte";
    import { items } from "../stores"
    import ToDoApi from "../ToDoApi.js";
    import Item from "./Item.svelte";

    function handleNewItem(event) {

    }

    function handleUpdate(event) {
        const index = $items.findIndex(item => item.id === event.detail.id);
        $items[index] = event.detail;
        ToDoApi.save($items);
    }

    function handleDelete(event) {
        console.log("deleting item!")
    }

    onMount(async () => {
        $items = await ToDoApi.getAll();
        $items = [{ id: 1, text: "test", completed: false }]
    })
</script>

<style>
    .list {
        padding: 50px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .list-status {
        font-size: 1.2rem;
        font-weight: bold;
        color: white;
    }
</style>

<div class="list">
    {#each $items as item}
        <Item
            {...item}
            on:update={handleUpdate}
            on:delete={handleDelete}
        />
    {:else} 
        <p class="list-status">Nothing to do... go code</p>
    {/each}
</div>