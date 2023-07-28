<script>
    export let id, text, completed;
</script>

<style>
    .item {
        display: flex;
        align-items: center;
        width: 100%;
        padding: 10px;
        background: white;
    }

    .item:focus-within {
        background: rgba(255, 255, 255, 0.8);
    }

    .text-input {
        flex-grow: 1;
        border: none;
        background: none;
        outline: none;
        font-weight: 500;
        font-size: 1em;
    }

    .completed-checkbox {
        margin: 10px;
    }
</style>

<div class="item">
    <input 
        type="text"
        class="text-input"
        bind:value={text}
        readonly={completed}
    />
    <input
        class="completed-checkbox"
        type="checkbox"
        bind:checked={completed}
    />
</div>
    