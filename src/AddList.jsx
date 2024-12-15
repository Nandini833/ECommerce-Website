import React, { useState } from 'react'

const AddList = () => {
    const [value,setValue]=useState('')
    const [items,SetItems]=useState([])


    
//     const onChange=(e)=>{
// e.preventDefault()
// const s=setValue(value)
// console.log(s)
//     }


console.log(value)

    const handleClick=()=>
    {
    }
  return (
  <>
<div>
    <div className='flex flex-col gap-4'>
                  <input type="text"  placeholder='Enter your  list here'
         className='border rounded-full px-4 py-2' value={value} onChange={(e)=>setValue(e.target.value)}/>
        <button onClick={handleClick} className='border rounded-full px-4 py-2 bg-green-800 text-white'>Add Item  </button>
        </div>
        {/* <ul>
            {
                value.map((item)=>{
                    return 
                <li key={item.id}>{item}</li>
                })
            }
            <li>My Name is Nandini</li>
        </ul> */}
</div>
  </>
  )
}

export default AddList