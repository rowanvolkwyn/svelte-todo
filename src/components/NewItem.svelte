<script>
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

    function handleKeyUp({key}) {
        if (key !== "Enter" || value.length === 0)
        return;
        dispatch("newItem", value);
        value = "";
    }

    let value = "";
</script>

<style>
    input {
        box-sizing: border-box;
        margin-bottom: 15px;
        padding: 15px;
        border: none;
        outline: none;
        width: 100%;
        background: rgba(0, 0, 0, 0.25);
        color: #FFF;
        font-weight: bold;
        font-size: 1em;
        cursor: pointer;
    }

    input::placeholder {
        color: #FFF;
        font-weight: bold;
        font-size: 1em;
    }
</style>

<input type="text" on:keyup={handleKeyUp} bind:value placeholder="+ Add Item" />