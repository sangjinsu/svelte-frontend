<script>
    import {count} from './store'

    const decrement = () => {
        count.update(count => {
            count -= 1;
            return count
        })
    }
</script>

<button on:click={decrement}>-</button>