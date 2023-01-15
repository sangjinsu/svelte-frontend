<script>
    import {afterUpdate, beforeUpdate, onDestroy, onMount} from "svelte";

    onMount(async () => {
        console.log('child onMount')
    })

    onDestroy(async () => {
        console.log('child onDestroy')
    })

    beforeUpdate(async () => {
        console.log('child beforeUpdate')
    })

    afterUpdate(async () => {
        console.log('child afterUpdate')
    })

</script>


<p>자식 컴포넌트</p>