import { useState } from 'react';
import quotes from "./assets/quotes.json";
import { FaTwitter, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import './App.css';

interface Quote {
  quote: string;
  author: string;
}

const getRandomQuote = (): Quote => {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

const getRandomColor = (): string => {
  const colors = [
    "#77DD77",
    "#836953",
    "#89cff0",
    "#99c5c4",
    "#9adedb",
    "#aa9499",
    "#aaf0d1",
    "#b2fba5",
    "#b39eb5",
    "#bdb0d0",
    "#bee7a5",
    "#befd73",
    "#c1c6fc",
    "#c6a4a4",
    "#cb99c9",
    "#ff6961",
    "#ff694f",
    "#ff9899",
    "#ffb7ce",
    "#ca9bf7",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}

const transition = "all 1s";

function App() {
  const [quote, setQuote] = useState<Quote>(getRandomQuote());
  const [randomColor, setRandomColor] = useState<string>(getRandomColor());

const changeQuote = () => {
  setQuote(getRandomQuote());
  setRandomColor(getRandomColor());
};

  return (
    <div className="background" style={{backgroundColor: randomColor, transition }}>
      <div id="quote-box">
        <div className="quote-content" style={{color: randomColor, transition }}>
          <h2 id="text">
          <FaQuoteLeft size="30" style={{ marginRight: "10px" }} />
            {quote.quote}
            <FaQuoteRight size="30" style={{ marginLeft: "10px" }} />
            </h2>
          <h4 id="author">-  {quote.author}</h4>
        </div>
        <div className="buttons" >
          <a 
            href={'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${quote.quote}'}
            id="tweet-quote"
            style={{
             backgroundColor: randomColor, transition,
             marginRight: "10px",
            }}
          >
            <FaTwitter color="white" />
          </a>
          <button id="new-quote" onClick={changeQuote} style={{backgroundColor: randomColor, transition }}>Change Quote</button>
        </div>
      </div>
    </div>
  );
}

export default App;
