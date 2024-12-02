import React, { useEffect, useState } from "react";

const Quotes = () => {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    const quotesList = [
      {
        id: 99,
        text: "What is money without friends?",
        book: { id: 48, title: "Daisy-Head Mayzie" },
      },
      {
        id: 95,
        text: "Waiting for a train to go or a bus to come, or a plane to go or the mail to come, or the rain to go or the phone to ring, or the snow to snow or waiting around for a Yes or No or waiting for their hair to grow.",
        book: { id: 47, title: "Oh, the Places You'll Go!" },
      },
      {
        id: 57,
        text: "I'll beat you up right after lunch.",
        book: { id: 32, title: "I Can Lick 30 Tigers Today!" },
      },
      {
        id: 60,
        text: "And it's very, very hard to make a noise like that.",
        book: {
          id: 35,
          title:
            "Mr. Brown Can Moo! Can You?: Dr. Seuss's Book of Wonderful Noises!",
        },
      },
      {
        id: 69,
        text: "Just tell yourself, Duckie, you're really quite lucky!",
        book: { id: 38, title: "Did I Ever Tell You How Lucky You Are?" },
      },
      {
        id: 86,
        text: "I'll butter-side-up you to small smithereens!",
        book: { id: 45, title: "The Butter Battle Book" },
      },
      {
        id: 67,
        text: "You ought to be thankful, a whole heaping lot",
        book: { id: 38, title: "Did I Ever Tell You How Lucky You Are?" },
      },
      {
        id: 27,
        text: "Now, don't ask me what Voom is. I never will know.",
        book: { id: 18, title: "The Cat in the Hat Comes Back" },
      },
      {
        id: 66,
        text: "Just go. Go. GO! I don't care how.",
        book: { id: 37, title: "Marvin K. Mooney Will You Please Go Now!" },
      },
      {
        id: 26,
        text: "I MUST find some way to stop Christmas from coming!",
        book: { id: 17, title: "How the Grinch Stole Christmas!" },
      },
    ];

    const randomQuotes = getRandomQuotes(quotesList, 10);
    setQuotes(randomQuotes);
  }, []);

  const getRandomQuotes = (allQuotes, count) => {
    const shuffled = allQuotes.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  return (
    <div>
      <h1 className="main-title">Seuss Quotes</h1>
      <p className="sub-title">Random Dr. Seuss quotes from various books.</p>

      <div className="quotes-list">
        {quotes.map((quote) => (
          <li key={quote.id} className="quote-box">
            <p className="quote-text">"{quote.text}"</p>
            <blockquote className="quote-attribution">
              - Dr. Seuss: {quote.book.title}
            </blockquote>
          </li>
        ))}
      </div>
    </div>
  );
};

export default Quotes;
