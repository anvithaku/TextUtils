import React , {useState} from 'react'
import { removeStopwords } from "stopword";

export default function Textform({darkMode}) {
    const handleUpClick = () =>{
        console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLowClick = () =>{
        console.log("Lowercase was clicked");
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleTogCLick = () =>{
        console.log("Toggle was clicked");
        let newText = text.split('').map(text => text === text.toUpperCase()?text.toLowerCase():text.toUpperCase()).join('');
        setText(newText);
    }
    const getKeywords = () =>{
        console.log("Get Keywords was clicked.");
        let newText = removeStopwords(text.split(' '));
        newText = newText.join(" ");
        setText(newText);
    }
    const removePunctuation = () =>{
        console.log("Remove Punctuation clicked.");
        let newText = text.replace(/[^\w\s]/g, "");
        setText(newText);
    }
    const getSummary = () =>{
        console.log("Get summary clicked");
        let wordCount = text.trim().split(/\s+/).length;
        let charCount = text.trim().split('').filter(c => c!==" " && c!=="\n" && c!=="\t").length;
        let sentenceCount = text.split('').filter(c => c===".").length;
        let newText = "Word Count: "+wordCount+"\n"+"Character Count: "+charCount+"\n"+"Sentence Count: "+sentenceCount;
        setText(newText);
        
    }

    const handleOnChange = (event) =>{
        console.log("On Change");
        setText(event.target.value);
    }

    const [text, setText] = useState('');

    return (
        <div className = "container">
            <div className="mb-3">
                <label className="form-label"><h1>Enter the text to analyse</h1></label>
                <textarea className="form-control" value = {text} onChange = {handleOnChange} id="MyBox" rows="8" style={{
                    background: darkMode ? '#1a1a1a' : '#ffffff',
                    color: darkMode ? '#f0f0f0' : '#111111',
                }}></textarea>
            </div>

            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleTogCLick}>Toggle</button>
            <button className="btn btn-primary mx-2" onClick={removePunctuation}>Remove Punctuation</button>
            <button className="btn btn-primary mx-2" onClick={getKeywords}>Get Keywords</button>
            <button className="btn btn-primary mx-2" onClick={getSummary}>Get Summary</button>
        </div>
    )
}
