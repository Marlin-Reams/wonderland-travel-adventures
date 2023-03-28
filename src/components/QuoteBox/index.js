import React, { useState, useEffect } from 'react';
import './QuoteBox.css';

const quotes = [
  {
    text: "All our dreams can come true, if we have the courage to pursue them.",
    author: "Walt Disney"
  },
  {
    text: "The world is a book, and those who do not travel read only a page.",
    author: "Saint Augustine"
  },
  {
    text: "Not all those who wander are lost.",
    author: "J.R.R. Tolkien"
  },
  {
    text: "Theres a whole world at your feet,",
    author: "Mary Poppins"
  },
  {
    text: "Laughter is timeless imagination has no age, and dreams are forever.",
    author: "Walt Disney"
  },
  {
    text: "Traveling it leaves you speechless, then turns you into a storyteller.",
    author: "Ibn Battuta"
  }
];

const QuoteBox = () => {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [fadeType, setFadeType] = useState('fade-in');

  useEffect(() => {
    const fadeTimeout = setTimeout(() => {
      setFadeType('fade-out');
    }, 1);

    const nextQuoteTimeout = setTimeout(() => {
      setFadeType('fade-in');
      const nextIndex = (quoteIndex + 1) % quotes.length;
      setQuoteIndex(nextIndex);
    }, 10000);

    return () => {
      clearTimeout(fadeTimeout);
      clearTimeout(nextQuoteTimeout);
    }
  }, [quoteIndex]);

  return (
    <div className={`quote-box ${fadeType}`}>
      <div className="quote-text">
        <i className="fa fa-quote-left"></i>
        {quotes[quoteIndex].text}
      </div>
      <div className="quote-author">
        - {quotes[quoteIndex].author}
      </div>
    </div>
  );
};

export default QuoteBox;
