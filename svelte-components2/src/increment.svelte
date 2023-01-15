<script>
    export let count

    const incrementNum = () => count = Number(count) +1;
</script>


<button on:click={incrementNum}>Increment</button>