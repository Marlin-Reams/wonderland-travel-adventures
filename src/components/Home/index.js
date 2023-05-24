import React from 'react';
import './Home.css';
import QuoteBox from '../QuoteBox';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.min.js'; // Import Bootstrap JavaScript





function Home() {
  return (
    <div className="bg">
        <QuoteBox />

    </div>
  );
}

export default Home;
