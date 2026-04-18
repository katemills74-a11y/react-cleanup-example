//src/CounterInputCard.jsx

import { useState } from "react"
import styles from "./Styles"

export default function CounterInputCard({
	title = "Default Title",
	big = false,
	showFooter = false
}) {

const [count,setCount] = useState(0)
const [text,setText] = useState("")
const {container, title: titleStyle, countText, button, inputWrapper, input, message, footer, footerText} = styles

function handleClick() {
	setCount(count+1)		
}

function handleInput(e){
	setText(e.target.value)
}

return (	
		<div style={container}>

			<h3 style={titleStyle(big)}>{title}</h3>

			<p style={countText}>Count: {count}</p>

			<button onClick={handleClick} style={button(count)}>
				Click me
			</button>

		<div style={inputWrapper}>
			<label htmlFor="messageInput">Type something:</label>
			<input
				id="messageInput" 
				value={text}
				onChange={handleInput}
				style={input}
			/>
		</div>

		{count > 5 && (
			<p role="status" 
				style={message}>
				You clicked more than 5 times!
			</p>
		)}

		{showFooter && (
			<div style={footer}>
				<p style={footerText}>Footer text goes here</p>
			</div>
		)}
	</div>
	
	);
}
