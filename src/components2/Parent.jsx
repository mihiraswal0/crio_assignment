import React, { useState,useCallback } from 'react'
import Child from './Child';
const Parent = () => {
    const [parentCnt, setParentCnt] = useState(0);
    const [childCnt, setChildCnt] = useState(0);
    const increaseParent = () => {
        setParentCnt(prev => prev + 1);
    }
    const increaseChild = useCallback(() => {
        setChildCnt(prev => prev + 1);
    },[childCnt]);
    const showChildCnt=useCallback(()=>{
        console.log("Child cnt is: "+childCnt);
    },[childCnt])
    console.log("Parent Component rendering")
    return (
        <div >
           
            <label>Parent Counter: </label>
            {parentCnt}
            <button onClick={increaseParent}>Parent Button</button>
            <Child childCnt={childCnt} increaseChild={increaseChild} showChildCnt={showChildCnt}/>
        </div>
    )
}

export default Parent