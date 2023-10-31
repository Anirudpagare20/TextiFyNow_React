import React, { useState } from "react";

export default function TextForm(props) {
    const handleUpClick = () => {
        let NewText = text.toUpperCase();
        setText(NewText);
    };

    const handleLOClick = () => {
        let LowNewText = text.toLowerCase();
        setText(LowNewText);
    };

    const handleClClick = () => {
        setText("");
    };

    const handleRemoveExtraSpaces = () => {
        const newText = text.replace(/\s+/g, " ");
        setText(newText);
    };

    const copyTextToClipboard = (text) => {
        navigator.clipboard
            .writeText(text)
            .then(() => alert("Copied to clipboard"));
    };

    const handleCapitalizeFirstLetters = () => {
        const words = text.split(" ");
        const capitalizedWords = words.map((word) => {
            if (word.length > 0) {
                return word[0].toUpperCase() + word.slice(1);
            } else {
                return word;
            }
        });
        const newText = capitalizedWords.join(" ");
        setText(newText);
    };

    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    const [text, setText] = useState("");

    return (
        <>
            <div className="container">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <label htmlFor="MyBox" className="form-label"></label>
                    <textarea
                        className="form-control"
                        value={text}
                        onChange={handleOnChange}
                        id="MyBox"
                        rows="8"
                    ></textarea>
                </div>
                <div className="d-flex flex-wrap justify-content-center ">
                    <button
                        className="btn btn-info mx-3 btn-fixed-width"
                        onClick={handleUpClick}
                    >
                        Convert To UPPERCASE
                    </button>
                    <button className="btn btn-info mx-3 my-" onClick={handleLOClick}>
                        Convert To LowerCase
                    </button>
                    <button
                        className="btn btn-info mx-3 my-"
                        onClick={() => copyTextToClipboard(text)}
                    >
                        Copy to Clipboard
                    </button>
                    <button className="btn btn-info mx-3 my-" onClick={handleClClick}>
                        Clear The Text
                    </button>
                    <button
                        className="btn btn-info mx-3 my-"
                        onClick={handleRemoveExtraSpaces}
                    >
                        Remove Extra Spaces
                    </button>
                    <button
                        className="btn btn-info mx-3 my-"
                        onClick={handleCapitalizeFirstLetters}
                    >
                        Capitalize First Letters
                    </button>
                </div>
            </div>
            <div className="container my-3">
                <h1>Your Text Summary</h1>
                <h5 className="my-3">
                    {text.split(" ").length} Words And {text.length} Characters
                </h5>
                <h5>Estimated Reading Time: {0.08 * text.split(" ").length} minutes</h5>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    );
}
