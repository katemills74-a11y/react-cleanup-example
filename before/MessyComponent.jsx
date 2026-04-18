import React, {useState, useEffect} from "react"

export default function MessyComponent(props){

const [count,setCount] = useState(0)
const [text,setText] = useState("")
const [isActive,setIsActive] = useState(false)

useEffect(()=>{
console.log("component mounted")
},[])

function handleClick(){
setCount(count+1)
if(count %2===0){
setIsActive(true)
}else{
setIsActive(false)
}
}

function handleInput(e){
setText(e.target.value)
}

return <div style={{border:"1px solid #ccc",padding:10, marginTop: "20px", display:"block"}}>
<h3 style={{fontSize: props.big ? "32px" : "18px"}}>{props.title ? props.title : "Default Title"}</h3>

<p style={{marginBottom: 5}}>Count: {count}</p>

<button onClick={handleClick} style={{background: isActive ? "green" : "red", color:"#fff", padding: 10, cursor:"pointer"}}>Click me</button>

<div style={{marginTop: 15}}>
<label>Type something:</label>
<input value={text} onChange={handleInput} style={{padding:5, marginLeft: 10}}/>
</div>

{count > 5 ? <p style={{color:"blue"}}>You clicked more than 5 times!</p> : null}

{props.showFooter ? <div style={{marginTop:20, borderTop:"1px dashed #aaa"}}>
<p style={{fontSize:12}}>Footer text goes here</p>
</div> : ""}

</div>
}
