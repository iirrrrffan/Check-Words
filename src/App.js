import React, { useState } from 'react'

const App = () => {
  const [bad,setBad]=useState(["knife","gun","kill","death"])
  const [text,setText] = useState("")
  const [show,setShow] = useState("")
  const [check,setCheck] = useState(false)

  const sbmt=()=>{
   for(let i=0; i<bad.length;i++){
    if(text.toLowerCase().includes(bad[i])){
      setCheck(true)
    }
   }
  if(check){
    setShow("you are bad man")
   }else{
    setShow("you are good go")
 }
   setText("")
  }
  
  return (
    <div>
     {bad.map((vlu)=>(
   
     <div> <p>{vlu}</p></div>
    ))}

    <div>
      <input placeholder='text here' onChange={(e)=>setText(e.target.value)}  />
      <button onClick={sbmt}>submit</button>

      <h1>{show}</h1>
    </div>
    </div>
  )
}

export default App