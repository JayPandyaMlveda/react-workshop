import React ,{useState} from 'react'

function Counter() {
  const [count , setCount]= useState(0)

  return (
    <div>
      <button type="button" className="btn btn-primary" onClick={()=>setCount(count +1)}>Button is clicked {count} times</button>
    </div>
  )
}

export default Counter
