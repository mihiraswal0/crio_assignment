import React, { useState,useCallback } from 'react'
import Child from './Child';
import Title from './Title';
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
            <Title/>
            <label>Parent Counter: </label>
            {parentCnt}
            <button onClick={increaseParent}>Parent Button</button>
            <Child childCnt={childCnt} increaseChild={increaseChild} />
        </div>
    )
}

export default Parent