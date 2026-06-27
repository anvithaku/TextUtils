import React from 'react'

export default function About({ darkMode }) {
    const textColor = { color: darkMode ? '#f0f0f0' : '#111111' };

    return (
        <div className="container my-4" style={textColor}>
            <div className="mb-3">
                <label className="form-label" style={textColor}><h1>About</h1></label>
                <label className="form-label" style={textColor}>
                    <p>
                        This is a website that performs some basic text editing functions. 
                        What you see is what you get: you can change the case of your input,
                        get keywords, remove punctuation and get a summary of your text.
                    </p></label>
            </div>
        </div>
    )
}