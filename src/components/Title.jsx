import React from 'react'

const Title = () => {
    console.log("title")
  return (
    <div>   
        Let Learn useCallBack hook
    </div>
  )
}

export default React.memo(Title)