/*import React,{useState} from 'react'


 const CommonWords = ['a', 'an', 'the', 'and', 'or', 'but', 'for', 'in', 'on', 'at','to'];

export default function 
TextForm(props) {

    const handleUpClick=()=>{
        let newText=text.toUpperCase();
        setText(newText);
    }

    const handleOnChange=(event)=>{
        console.log("on change");
        setText(event.target.value);
    
       
    }

    const countWordsExcludingCommon =()=>{
     const words=text.split(/\s+/);

     if (text) {
        const filteredWords = words.filter(word =>
            !CommonWords.includes(word.toLowerCase()));
        return filteredWords.length;
    } else {
        return 0; // Handle the case where text is not yet available
    }
    };
    const handleLoClick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
    }

    const handle=()=>{
       
        setText('');
    }

    const countParagraphs = () => {
       // Split the text into paragraphs based on the newline character '\n'
        const paragraphs = text.split('\n');
      // Filter out empty paragraphs
        const nonEmptyParagraphs = paragraphs.filter(paragraph => paragraph.trim() !== '');
      // Return the count of non-empty paragraphs / 
        return nonEmptyParagraphs.length;
      }
      
      
    const calculateSentimentScore = () => {
        const words = text.split(/\s+/);
        let score = 0;
        words.forEach(word => {
            if (AFINN.hasOwnProperty(word.toLowerCase())) {
                score += AFINN[word.toLowerCase()];
            }
        });
        return score;
    };
    const[text,setText]=useState('enter text here');
  
  return (
    <>
    <div className='container'>

        <h1>{props.heading}</h1>
      <div className="mb-3">
      <label for="myBox" className="form-label"></label>
      <textarea className="form-control" value={text} onChange={handleOnChange}  rows={10}
        cols={50} id="myBox"></textarea>
      
      </div>
    <button className="btn btn danger mx-1" onClick={handleUpClick}>Convert to uppercase</button>
    <button className="btn btn primary mx-1 " onClick={handleLoClick}>Convert to lowercase</button>
    <button className="btn btn primary mx-1 " onClick={handle}>Clear Text</button>
    </div>
    <div className="container my-3">
        <h2>
            your text summary
        </h2>
        <p>
            {text.split(" ").length} words,{text.length} characters
        </p>
        <p>
            {0.008 * text.split(" ").length} minutes read
        </p>
        <p>
           {countParagraphs()} paragragh
        </p>
        <p>
           {countWordsExcludingCommon()} Word Count (Excluding Common Words):
        </p>
        <p>Sentiment Score: {calculateSentimentScore()}</p>
        <h2>preview</h2>
        <p>{text}</p>
    </div>
   
   </>
  )
}*/

import React, { useState } from 'react';

const CommonWords = ['a', 'an', 'the', 'and', 'or', 'but', 'for', 'in', 'on', 'at', 'to'];

const TextForm = (props) => {
    const [text, setText] = useState('enter text here');

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const countWordsExcludingCommon = () => {
        const words = text.split(/\s+/);
        const filteredWords = words.filter(word => !CommonWords.includes(word.toLowerCase()));
        return filteredWords.length;
    };

    const countParagraphs = () => {
        const paragraphs = text.split('\n');
        const nonEmptyParagraphs = paragraphs.filter(paragraph => paragraph.trim() !== '');
        return nonEmptyParagraphs.length;
    }

    const calculateSentimentScore = () => {
        const words = text.split(/\s+/);
        let score = 0;
        words.forEach(word => {
            const lowercaseWord = word.toLowerCase();
            console.log('Checking word:', lowercaseWord);
            if (AFINN.hasOwnProperty(lowercaseWord)) {
                console.log('Found word in AFINN:', lowercaseWord);
                score += AFINN[lowercaseWord];
                console.log('Current score:', score);
            }
        });
        console.log('Final score:', score);
        return score;
    };
    

    return (
        <>
            <div className='container'>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <label htmlFor="myBox" className="form-label"></label>
                    <textarea
                        className="form-control"
                        value={text}
                        onChange={handleOnChange}
                        rows={10}
                        cols={50}
                        id="myBox"
                    ></textarea>
                </div>
                <button className="btn btn danger mx-1" onClick={handleUpClick}>Convert to uppercase</button>
            </div>
            <div className="container my-3">
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").length} words, {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} minutes read</p>
                <p>{countParagraphs()} paragraph(s)</p>
                <p>{countWordsExcludingCommon()} Word Count (Excluding Common Words)</p>
                <p>Sentiment Score: {calculateSentimentScore()}</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    );
}

export default TextForm;

// AFINN wordlist
const AFINN = {
    // Word: Score
    "awesome": 4,
    "amazing": 4,
    "interesting": 2,
    "bad": -3,
    "terrible": -4,
    // Add more words and scores as needed
};
