import React, { useState } from 'react'

const TextForm = (props) => {
  const { heading } = props;

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText)
  }
  const handleLoClick = () => {
    let newText = text.replace("  ", " ");
    setText(newText)
  }
  const handleClClick = () => {
    let newText = "";
    setText(newText)
  }
  const handleGapClick = () => {

  }
  const downloadTxtFile = () => {
    const e = document.createElement("a");
    const file = new Blob([text], {
      type: "text/plain"
    });
    e.href = URL.createObjectURL(file);
    e.download = "myFile.txt";
    e.click()

  }
  const Speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg)
  }
  const handleReverse = (e) => {
    let strArr = text.split("");
    strArr = strArr.reverse();
    let newText = strArr.join("");
    setText(newText)
  }


  const handleOnChange = (event) => {
    setText(event.target.value)
  }

  const [text, setText] = useState('')

  return (
    <>
      <div className="container mt-3">
        <h1>{heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UPPERCASE</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to lowercase</button>
        {/* <button className="btn btn-primary mx-2" onClick={handleGapClick}>Clear Gap</button> */}
        <button className="btn btn-primary mx-2" onClick={handleClClick}>Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={Speak}>Speak</button>
        <button className="btn btn-primary mx-2" onClick={handleReverse}>Reverse It</button>
        <button className="btn btn-primary mx-2 my-2" onClick={downloadTxtFile}>Download Txt File</button>
      </div>
      <div className="container my-3">
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  )
}

export default TextForm
