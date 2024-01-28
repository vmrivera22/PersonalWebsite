import "../css/Header.css";
import { useEffect, useState } from "react";
import GetWindow from "./GetWindow";

// Component for the right sidebar (Quote).
const SidebarRight = () => {
  const window = GetWindow();

  // State to hold the quote and author.
  const [quote, setQuote] = useState<{
    _id: string;
    content: string;
    author: string;
  }>();

  // Fetch the quote.
  useEffect(() => {
    fetch("https://api.quotable.io/quotes/random")
      .then((response) => response.json())
      .then((data) => {
        setQuote(data[0]);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <div
      className={
        window.windowWidth >= 700
          ? "sidebar--container fullsize--sidebar--l"
          : "sidebar--container small--sidebar"
      }
    >
      {window.windowWidth >= 700 && <h2>Quote</h2>}
      <div className="home--quote">
        "{quote?.content}" <br />
        <br />- {quote?.author}
      </div>
    </div>
  );
};

export default SidebarRight;
