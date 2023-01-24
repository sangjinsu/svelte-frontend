import {readable} from "svelte/store";

export const time = readable(new Date(), set => {
    let setTime = setInterval(() => {
        set(new Date());
    }, 1000)

    return () => clearInterval(setTime)
})