import { useEffect, useState } from "react"

export function useDebounce({value,delay}){
    const [debouncedValue,setDebouncedValue] = useState();
    
    useEffect(()=>{
        const timer = setTimeout(()=>{
            setDebouncedValue(value);
        },delay);
        return ()=> clearTimeout(timer);
    },[]);

    return debouncedValue
}