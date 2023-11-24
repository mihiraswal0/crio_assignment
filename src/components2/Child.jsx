import React from 'react'

const Child = (props) => {
   const {childCnt, increaseChild,showChildCnt}=props;
   console.log("Child Component rendering")

  return (
    <div>
         <label>Child Counter: </label>
         {childCnt}
        <button onClick={increaseChild}>Child Button</button>
        <button onClick={showChildCnt}>Show Child Cnt on Console</button>
    </div>
  )
}

export default React.memo(Child)