import React, { useState } from 'react'
import Child from './Child';
const Parent = () => {
    const [parentCnt, setParentCnt] = useState(0);
    const [childCnt, setChildCnt] = useState(0);
    const increaseParent = () => {
        setParentCnt(prev => prev + 1);
    }
    const increaseChild = () => {
        setChildCnt(prev => prev + 1);
    }
    console.log("Parent Component rendering")
    return (
        <div >
            <label>Parent Counter: </label>
            {parentCnt}
            <button onClick={increaseParent}>Parent Button</button>
            <Child childCnt={childCnt} increaseChild={increaseChild} />
        </div>
    )
}

export default Parent