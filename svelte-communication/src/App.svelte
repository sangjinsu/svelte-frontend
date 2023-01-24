<script>
    import {setContext} from "svelte";
    import Panel from './panel.svelte';
    import First from './first.svelte'
    import {count} from './store';
    import Increment from './increment.svelte';
    import Decrement from './decrement.svelte';
    import Reset from './reset.svelte';

    let counts = 10;

    const incrementCount = (event) => counts++;

    setContext('incrementCount', incrementCount);
    setContext('count', counts);

    let value = 0;

    const handleValueAdd = (event) => {
        console.log(event.detail.message)

        value += event.detail.value
    }

    let count_value;
</script>

<Panel {counts}/>

<p>value : {value}</p>
<First on:add={handleValueAdd}/>

<h1>현재 count 는 {$count}</h1>
<Increment></Increment>
<Decrement></Decrement>
<Reset></Reset>