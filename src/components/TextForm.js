import React, { useState } from 'react'


export function TextForm(props) {
    const [text, setText] = useState("")

    const handleUpClick = () => {
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to uppercase","success")
    }
    const handleLowerClick= () =>{
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to lowercase","success")
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
        
    }
    const clearText = ()=>{
        let newText = ""
        setText(newText)
        props.showAlert("Text cleared","success")
    }
    const copyText=() => {
        var text = document.getElementById("myBox")
        text.select()
        navigator.clipboard.writeText(text.value)
        props.showAlert("successfully copied","success")
    }
    return (
        <>
            <div className='container'style= {{color:props.mode==='dark'?'white':'black'}}>
                <h1>{props.heading}</h1>

                <div className="mb-3">
                    <textarea className="form-control" onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white'}} id="myBox" rows="6" value={text}></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLowerClick}>Convert to lowercase</button>
                <button className="btn btn-primary mx-1" onClick={clearText}>Clear Text</button>
                <button className="btn btn-primary mx-1" onClick={copyText}>Copy Text</button>

            </div>
            <div className="container my-3" style= {{color:props.mode==='dark'?'white':'black'}}>
                <h3>Your Text summary</h3>
                <p>{text.split(" ").length-1} word and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h3>Preview</h3>
                <p>{text.length>0?text:"Enter text to preview it."}</p>
            </div>
        </>
    )
}