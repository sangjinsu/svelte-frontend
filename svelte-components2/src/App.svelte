<script>
    import Increment from './increment.svelte'
    import Child from './child.svelte'
    import {onMount, onDestroy, beforeUpdate, afterUpdate, tick} from "svelte";

    onMount(async () => {
        console.log('onMount')
    })

    onDestroy(async () => {
        console.log('onDestroy')
    })

    beforeUpdate(async () => {
        console.log('beforeUpdate')
    })

    afterUpdate(async () => {
        console.log('afterUpdate')
    })

    let user = {loggedIn: false}

    const toggle = () => {
        user.loggedIn = !user.loggedIn
    }

    let list = [
        {
            id: 0,
            content: 'todo1',
            done: false
        },
        {
            id: 1,
            content: 'todo2',
            done: false
        },
        {
            id: 2,
            content: 'todo3',
            done: false
        }
    ]

    let textValue = ''
    const clearText = () => textValue = ''

    let a = 1;
    let b = 2;

    let selected = ''

    let boxChecked = false

    let radioSelected = 0

    let numbers = [
        'one', 'two', 'three'
    ]

    let getNumbers = []

    let html = '<p>내용을 입력해주세요</p>'

    let value = 0
</script>


{#if user.loggedIn}
    <button on:click={toggle}>
        Log out
    </button>
    <p>로그인 상태입니다.</p>
{:else }
    <button on:click={toggle}>
        Log in
    </button>
    <p>로그아웃 상태입니다.</p>
{/if}


{#each list as {id, content} (id)}
    <li>
        <span>{id}</span>
        <span>{content}</span>
    </li>
{/each}

<input type="text" bind:value={textValue}>
<p>입력값: {textValue}</p>
<button on:click={clearText}>clear</button>

<label>
    <input type="number" bind:value={a} min=0 max=10>
    <input type="range" bind:value={a} min=0 max=10>
</label>

<label>
    <input type="number" bind:value={b} min=0 max=10>
    <input type="range" bind:value={b} min=0 max=10>
</label>

<p>{a} + {b} = {a + b}</p>

<select bind:value={selected}>
    {#each list as todo}
        <option value={todo.id}>{todo.content}</option>
    {/each}
</select>

<label>
    체크박스 예제
    <input type="checkbox" bind:checked="{boxChecked}"/>
</label>

<button disabled={!boxChecked}>전송</button>

<h2>Size</h2>

<label>
    <input type="radio" bind:group={radioSelected} value={1}>
    One scoop
</label>
<label>
    <input type="radio" bind:group={radioSelected} value={2}>
    Two scoops
</label>
<label>
    <input type="radio" bind:group={radioSelected} value={3}>
    Three scoops
</label>

<p>선택된 라디오 버튼: {radioSelected} 번째</p>

{#each numbers as number}
    <label>
        <input type="checkbox" bind:group={getNumbers} value={number}>
        {number}
    </label>
{/each}

{getNumbers}

<div contenteditable="true" bind:innerHTML={html}></div>
<pre>{html}</pre>

<input type="number" bind:value={value}>
<h2>{value}</h2>
<Increment bind:count={value} />


<Child/>
