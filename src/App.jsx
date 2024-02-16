import { useState } from "react";
import quotes from "./assets/data.json"


function App() {
  const [currentQuote, setCurrentQuote] = useState(() => {
    const idx = Math.floor(Math.random() * quotes.quotes.length);
    return quotes.quotes[idx];
  });
  const generateNewQuote = () => {
    const idx = Math.floor(Math.random() * quotes.quotes.length);
    setCurrentQuote(quotes.quotes[idx]);
  };
  const tweetText = encodeURIComponent(`"${currentQuote.quote}" ${currentQuote.author} #quotes`);
  const color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`

  return (
    <div>
      <div style={{ backgroundColor: color,  width: "100%", transition: 'all 1s' }} className="container">
        <div id='quote-box' className="quote-box">
          <div className="wrapper">
            <div className="box-text" style={ {color: color, transition: 'all 1s'} }>
              <div id="text">
              <h1> 
                <svg width="45" height="45" viewBox="0 0 8 8" style={ {transition: 'all 1s'} }>
                  <path d="M3 0c-1.65 0-3 1.35-3 3v3h3v-3h-2c0-1.11.89-2 2-2v-1zm5 0c-1.65 0-3 1.35-3 3v3h3v-3h-2c0-1.11.89-2 2-2v-1z" transform="translate(0 1)" fill={color} />
                </svg>
                 {currentQuote.quote}
                 </h1>
              </div>
              <div className="author-box">
              <div id="author">
                <h3><span>-</span>{currentQuote.author}</h3>
              </div>
              </div>
          </div>
          <div className="btn-group">
            <div className='sosmed-group' >
              <a id="tweet-quote"  style={ {backgroundColor: color, transition: 'all 1s'} }  href={`https://twitter.com/intent/tweet?text=${tweetText}`} target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="30px" height="30px"><path d="M26.37,26l-8.795-12.822l0.015,0.012L25.52,4h-2.65l-6.46,7.48L11.28,4H4.33l8.211,11.971L12.54,15.97L3.88,26h2.65 l7.182-8.322L19.42,26H26.37z M10.23,6l12.34,18h-2.1L8.12,6H10.23z"/>
              </svg>
              </a>
              <button id='new-quote' style={ {backgroundColor: color, transition: 'all 1s'} } onClick={generateNewQuote}>New Quote</button>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
