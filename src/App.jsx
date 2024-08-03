import { useState , useRef } from 'react'
import './App.css'

function App() {
  const data = 
  [ 
      { word: "React", meaning: "A JavaScript library for building user interfaces." },
      { word: "Component", meaning: "A reusable building block in React." },
      { word: "State", meaning: "An object that stores data for a component." }
  ]
  
  const [text, setText] = useState("");
  const inp = useRef(null);
  const handler = (e)=>{
    console.log(e,inp);
    setText("Word not found in dictionary.");
    data.forEach((val)=>{
      if(val.word.toLowerCase() === inp.current.value.toLowerCase()){
        setText(val.meaning);
      }
    })
  }
  return (
    <div>
      <h1>Dictionary App</h1>
      <input type="text" ref={inp} style={{height:'30px'}} placeholder='Search for a word...'></input>
      <button onClick={handler}>Search</button>
      <h2>Definition:</h2>
      <p>{text}</p>
    </div>
  )
}

export default App
