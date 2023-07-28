<script>
    import { items } from "../stores.js";

    $: itemCount = $items.length;
    $: completedItemCount = $items.filter((item) => item.completed).length;
</script>

<style>
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px 20px;
        color: white;
        font-weight: bold;
        font-size: 1.5em;
        background: rgba(0, 0, 0, 0.1);
    }
</style>

<div class="header">
    <span>Rovo's To-Do List</span>
    <span>{completedItemCount}/{itemCount}</span>
</div>