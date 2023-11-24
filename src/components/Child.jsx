import React from 'react'

const Child = (props) => {
   const {childCnt, increaseChild}=props;
   console.log("Child Component rendering")

  return (
    <div>
         <label>Child Counter: </label>
         {childCnt}
        <button onClick={increaseChild}>Child Button</button>
    </div>
  )
}

export default React.memo(Child)