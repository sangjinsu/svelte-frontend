<script>
    import Content from './content.svelte';
    import Footer from './footer.svelte';
    import Header from './header.svelte';
    import Middle from './middle.svelte';
    import Card from './card.svelte'

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

    const handleAddTodo = () => {
        const todo = {
            id: list.length + 1,
            content: `todo${list.length + 2}`,
            done: false
        }

        list = [...list, todo]
    }

    let count = 1
    $: doubled = count * 2
    $: {
        console.log(count)
        console.log(doubled)
    }
    const handleClick = () => count += 1

    $: if (count >= 10){
        count = 9
    }

    let m = {
        x : 0,
        y : 0
    }

    const handleMousemove = (event) => {
        m.x = event.clientX
        m.y = event.clientY
    }

    let hovering = 7

</script>

<main>
    <Header/>
    <Content/>

    {#each list as item}
        <li>
            <p>{item.id}</p>
            <p>{item.content}</p>
            <p>{item.done}</p>
        </li>
    {/each}

    <button on:click={handleAddTodo}>Add Todo</button>
    <button on:click={handleClick}>
        클릭 수 {count} {count === 1 ? 'time' : 'times'}
    </button>

    <p>{count} 두 배는 {doubled}</p>

    <div class="mousemove" on:mousemove={handleMousemove}>
        The mouse position is {m.x} x {m.y} y
    </div>

    <Middle count={count} handleClick={handleClick}/>

    <Card let:hovering={hovering}>
        <h2>안녕하세요!</h2>
        <p>이곳은 내용이 들어가는 영역입니다.</p>

        <span slot="hover">
            {hovering}
        </span>
    </Card>

    <Footer/>
</main>

<style>
     .mousemove {
         width: 100%;
         height: 100%;
     }
</style>
