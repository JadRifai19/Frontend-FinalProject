import React, { useState } from "react";
import "./whoweare.css";

const FaqSection = () => {
  const [expandedPanels, setExpandedPanels] = useState([
    true,
    false,
    false,
    false,
  ]);

  const togglePanel = (index) => {
    setExpandedPanels((prevExpandedPanels) => {
      const newExpandedPanels = [...prevExpandedPanels];
      newExpandedPanels[index] = !newExpandedPanels[index];
      return newExpandedPanels;
    });
  };

  return (
    <section
      className="container-whoweare"
      aria-label="Frequently Asked Questions"
    >
      <div className="faq__body">
        <details
          aria-expanded={expandedPanels[0]}
          className="faq__panel"
          open={expandedPanels[0]}
        >
          <summary className="faq__label" onClick={() => togglePanel(0)}>
          How can I determine the most suitable table tennis paddle to
            purchase ?
          </summary>
          <div className="faq__panel-body">
            <p className="faq__panel-answer">
              Consider your playing style, skill level, and preferences when
              choosing a table tennis paddle. Look for a paddle with a
              comfortable grip, balanced speed and control in the blade, and
              rubber that suits your desired spin and shot characteristics.
            </p>
          </div>
        </details>
        <details
          aria-expanded={expandedPanels[1]}
          className="faq__panel"
          open={expandedPanels[1]}
        >
          <summary className="faq__label" onClick={() => togglePanel(1)}>
          Are there any specific rules regarding the ball hitting the net in
            ping pong?{" "}
          </summary>
          <div className="faq__panel-body">
            <p className="faq__panel-answer">
              If the ball hits the net during a serve and goes over to the
              opponent's side while still landing within the boundaries of the
              table, it is considered a legal serve, and the rally continues.
              However, if the ball hits the net during a rally and does not go
              over to the opponent's side, it is a point for the opposing player
              or team.
            </p>
          </div>
        </details>
        <details
          aria-expanded={expandedPanels[2]}
          className="faq__panel"
          open={expandedPanels[2]}
        >
          <summary className="faq__label" onClick={() => togglePanel(2)}>
            What is the correct way to hold a ping pong paddle?
          </summary>
          <div className="faq__panel-body">
            <p className="faq__panel-answer">
              The most common grip in ping pong is the shakehand grip, where you
              hold the paddle as if shaking hands. The penhold grip is another
              popular grip style, where you hold the paddle between your thumb
              and index finger, similar to holding a pen.
            </p>
          </div>
        </details>
        <details
          aria-expanded={expandedPanels[3]}
          className="faq__panel"
          open={expandedPanels[3]}
        >
          <summary className="faq__label" onClick={() => togglePanel(3)}>
            What is the scoring system in ping pong?
          </summary>
          <div className="faq__panel-body">
            <p className="faq__panel-answer">
              In ping pong, each game is played to 11 points. The player/team
              that reaches 11 points first with a lead of at least two points
              wins the game. Matches are usually played as best-of-five or
              best-of-seven games, and sometimes best-of-three games
            </p>
          </div>
        </details>
      </div>
    </section>
  );
};

export default FaqSection;
