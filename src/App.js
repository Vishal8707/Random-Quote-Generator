import { useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [quotes, setQuotes] = useState("");
  const textRef = useRef();
  let colors = ["#ffff00", "#90ee90", "#ffa500", "#ff68ff", "#a9a9e7"];

  const getQuotes = () => {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((data) => {
        let randomQuotes = Math.floor(Math.random() * data.length);
        setQuotes(data[randomQuotes]);
      });
  };
  useEffect(() => {
    getQuotes();
  }, []);

  useEffect(() => {
    textRef.current.style.color = colors[Math.floor(Math.random() * colors.length)] 
  }, [quotes]);

  return <div className="App">
    <div className="quotes">
      <p ref={textRef}>{quotes.text}</p>
      <p>Author: {quotes.author}</p>
      <div className="btnContainer">
        <button onClick={getQuotes} className="btn" >Get Quotes</button>

      </div>
    </div>
  </div>;
}

export default App;
