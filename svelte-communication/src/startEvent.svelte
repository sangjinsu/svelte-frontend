<script>
    import {createEventDispatcher} from "svelte";

    const dispatch = createEventDispatcher();

    const addAction = (param) => {
        console.log(param)

        dispatch('add', {
            value: param,
            message: param + ' 값 추가'
        })
    }
</script>

<button on:click={() => addAction(10)}>10</button>
<button on:click={() => addAction(20)}>20</button>