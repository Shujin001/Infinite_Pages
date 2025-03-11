import React, { useState } from 'react'

const Counter = () => {
    let [count,setCount] = useState(0)
    /*
    useState-
        let/const [var_name, function] = useState(initial Value)

            var_name -name of the state variable
            function - function to update value of state variable

            initial Value - starting value
                0-9 : number
                '' or "" : string
                true/false : boolean
                {} : object
                [] : array
    */
    function increase_count(){
        // console.log(count)
        setCount(++count)
    }
    // function decrease_count(){
    //     setCount(--count)
    // }
  return (
    <div className='text-center fs-1'>
        Counter:{count}
        <br />
        <button onClick={increase_count}>Increase</button>
        <br />
        <button onClick={()=>setCount(--count)}>Decrease</button><br/>
        <button onClick={()=>setCount(0)}>Reset</button>

        </div>
  )
}

export default Counter