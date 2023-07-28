<script>
    import { onMount } from "svelte";
    import { v4 as uuidv4 } from "uuid";
    import { items } from "../stores"
    import ToDoApi from "../ToDoApi.js";
    import Item from "./Item.svelte";
    import NewItem from "./NewItem.svelte";

    function handleNewItem(event) {
        $items = [
            {
                id: uuidv4(),
                text: event.detail,
                completed: false
            },
            ...$items
        ];
        ToDoApi.save($items);
    }

    function handleUpdate(event) {
        const index = $items.findIndex(item => item.id === event.detail.id);
        $items[index] = event.detail;
        ToDoApi.save($items);
    }

    function handleDelete(event) {
        $items = $items.filter(item => item.id !== event.detail);
        ToDoApi.save($items);
    }

    let itemsSorted = [];
    $: {
        itemsSorted = [...$items];
        itemsSorted.sort((a, b) => {
            if (a.completed && b.completed) return 0;
            if (a.completed) return 1;
            if (b.completed) return -1;
        })
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
    <NewItem on:newItem={handleNewItem} />
    {#each itemsSorted as item}
        <Item
            {...item}
            on:update={handleUpdate}
            on:delete={handleDelete}
        />
    {:else} 
        <p class="list-status">Nothing to do... go code</p>
    {/each}
</div>