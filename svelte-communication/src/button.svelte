<script>
    import {getContext} from "svelte";

    // context api 는 값이 변하지 않는 경우에 자주 사용된다.
    let handleIncrement = getContext('incrementCount')
    let count = getContext('count')
</script>

<button on:click={handleIncrement}>
    count 초기값: [{count}]
</button>