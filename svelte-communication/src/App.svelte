<script>
    import {setContext} from "svelte";
    import Panel from './panel.svelte';
    import First from './first.svelte'
    import {count} from './store';
    import Increment from './increment.svelte';
    import Decrement from './decrement.svelte';
    import Reset from './reset.svelte';
    import {count2, doubled} from './store2'

    import {time} from "./store3";

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

    const formatter = new Intl.DateTimeFormat('en', {
        hour12: true,
        hour: 'numeric',
        minute: '2-digit',
        second: '2-digit'
    });
</script>

<Panel {counts}/>

<p>value : {value}</p>
<First on:add={handleValueAdd}/>

<h1>현재 count 는 {$count}</h1>
<Increment></Increment>
<Decrement></Decrement>
<Reset></Reset>


<h1>현재 count2 는 {$count2}</h1>
<h1>현재 doubled 는 {$doubled}</h1>
<button on:click={count2.increment}>+</button>
<button on:click={count2.decrement}>-</button>
<button on:click={count2.reset}>reset</button>
<h1>The time is {formatter.format($time)}</h1>