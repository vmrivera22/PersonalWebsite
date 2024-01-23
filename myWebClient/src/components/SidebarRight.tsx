import "../css/Header.css";
import { useEffect, useState } from "react";

const SidebarRight = () => {
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
    <div className="sidebar--container">
      <h3>Quote</h3>
      <div className="home--quote">
        "{quote?.content}" <br />
        <br />- {quote?.author}
      </div>
    </div>
  );
};

export default SidebarRight;
