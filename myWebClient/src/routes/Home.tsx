import { useEffect, useState } from "react";
import "../css/Home.css";

const Home = () => {
  const [quote, setQuote] = useState<{
    _id: string;
    content: string;
    author: string;
  }>();
  useEffect(() => {
    fetch("https://api.quotable.io/quotes/random")
      .then((response) => response.json())
      .then((data) => {
        console.log(data[0]);
        setQuote(data[0]);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <div className="home--container">
      <h1 className="home--title">Victor Manuel Rivera</h1>
      <div className="home--quote">
        {quote?.content} -{quote?.author}
      </div>
    </div>
  );
};

export default Home;
