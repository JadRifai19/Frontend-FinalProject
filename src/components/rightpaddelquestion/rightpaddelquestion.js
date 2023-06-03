import React, { useState } from "react";
import "./rightpaddelquestion.css";

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
    <div
      className="container-paddel-question"
      aria-label="Frequently Asked Questions"
    >
      <div className="faq__body">
        <details
          aria-expanded={expandedPanels[0]}
          className="faq__panel"
          open={expandedPanels[0]}
        >
          <summary className="faq__label" onClick={() => togglePanel(0)}>
            Ping Pong Paddle Sets
          </summary>
          <div className="faq__panel-body">
            <p className="faq__panel-answer">
              Start your ping pong journey with our paddle sets, providing
              everything you need to dive into the game right away. Designed for
              optimal control and accuracy, our paddle sets ensure an enjoyable
              experience as you develop your skills. Choose quality and unleash
              your inner ping pong champion today.
            </p>
          </div>
        </details>
        <details
          aria-expanded={expandedPanels[1]}
          className="faq__panel"
          open={expandedPanels[1]}
        >
          <summary className="faq__label" onClick={() => togglePanel(1)}>
            Recreational Paddles{" "}
          </summary>
          <div className="faq__panel-body">
            <p className="faq__panel-answer">
              Perfect for those new to the game of ping pong and who wish to
              develop a feel for the enticing game! Made with durable materials,
              these paddles will give you the tools to begin building your ping
              pong skills. The lightweight design of these paddles makes them
              easy to handle, allowing for greater control and precision in your
              shots.
            </p>
          </div>
        </details>
        <details
          aria-expanded={expandedPanels[2]}
          className="faq__panel"
          open={expandedPanels[2]}
        >
          <summary className="faq__label" onClick={() => togglePanel(2)}>
            Intermediate Paddles
          </summary>
          <div className="faq__panel-body">
            <p className="faq__panel-answer">
              These paddles offer enhanced control, speed, and spin to take your
              skills to the next level. Built with high-quality materials for
              longevity and durability, these paddles feature ergonomic handles
              for maximum comfort and grip, reducing hand fatigue and allowing
              for longer play sessions.
            </p>
          </div>
        </details>
        <details
          aria-expanded={expandedPanels[3]}
          className="faq__panel"
          open={expandedPanels[3]}
        >
          <summary className="faq__label" onClick={() => togglePanel(3)}>
            Performance Paddles
          </summary>
          <div className="faq__panel-body">
            <p className="faq__panel-answer">
              Unleash your full potential with the premium table tennis paddles
              designed for the ultimate champions. These paddles are crafted
              with up to 7-ply blades, incorporating the highest-quality woods
              such as balsa, to achieve a perfect balance of speed, spin, and
              control.
            </p>
          </div>
        </details>
      </div>
    </div>
  );
};

export default FaqSection;
