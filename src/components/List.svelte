<script>
    import { onMount } from "svelte";
    import { items } from "../stores"
    import ToDoApi from "../ToDoApi.js";
    import Item from "./Item.svelte";

    function handleNewItem(event) {

    }

    onMount(async () => {
        $items = await ToDoApi.getAll();

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
        <Item {...item} />
    {:else} 
        <p class="list-status">Nothing to do... go code</p>
    {/each}
</div>