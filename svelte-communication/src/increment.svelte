<script>
    import {count} from './store'

    const increment = () => {
        count.update(count => {
            count += 1;
            return count
        })
    }
</script>

<button on:click={increment}>+</button>