import {writable, derived} from "svelte/store";

const createCount = () => {
    const {subscribe, set, update} = writable(0);

    const increment = () => update(count2 => count2 + 1)
    const decrement = () => update(count2 => count2 - 1)
    const reset = () => set(0)

    return {
        increment, decrement, reset, subscribe
    }
}


export const count2 = createCount()

export const doubled = derived(count2, $count2 => $count2 * 2)