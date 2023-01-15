<script>
    import Child from './child.svelte';
    export let count;
    export let handleClick;
</script>

<Child carryValue={count} handleClick={handleClick} />