import React,{useState} from 'react'

const useStorage=(key)=> {
const [Value, ChangeValue]=useState(localStorage.getItem(key))
    const setValue=(finalvalue)=>{
        localStorage.setItem(key, finalvalue)
        ChangeValue(finalvalue)
}
return [Value, setValue]
    
}

export default useStorage
