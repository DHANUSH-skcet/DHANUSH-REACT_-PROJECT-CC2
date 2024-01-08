import { useState } from "react"
import React  from 'react'

const Increment = () => {
    const [state, setstate] = useState(0);
    const profile=()=>{
setstate(state+1)
    }
    const profile1=()=>{
        setstate(state-1)
            }   

  return (
    <div>
<button onClick={profile}>+</button>
{state}
<button onClick={profile1}>-</button>
    </div>
  )
}

export default Increment