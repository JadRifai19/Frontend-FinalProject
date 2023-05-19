import React from "react";
import "./teamtraining.css";
import ramiImageSrc from "../../assets/image2.jpeg";
import jadImageSrc from "../../assets/image1.jpeg";
import player1ImageSrc from "../../assets/orangeball.jpeg";
import player2ImageSrc from "../../assets/orangeball.jpeg";
import player3ImageSrc from "../../assets/orangeball.jpeg";
import player4ImageSrc from "../../assets/orangeball.jpeg";
import player5ImageSrc from "../../assets/orangeball.jpeg";
import player6ImageSrc from "../../assets/orangeball.jpeg";

export default function teamtraining() {

  return (
    <div className="training-sessions">
      <div className="hero-section-training-team">
        <img src={jadImageSrc} alt="Hero Image" />
      </div>
         <div className="header"></div>
      <div className="container-team-trainig">
        <div className="about-team-training">
          <div className="left">
            <h1 className="title-team-training"> Team A : Coach Rami</h1>
            <hr />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>
          </div>
          <div className="right">
            <img src={jadImageSrc}  />
          </div>
        </div>
        <div className="mission">
          <div className="left">
            <img src={jadImageSrc} />
          </div>
          <div className="right">
            <h1 className="title-team-training">Team B : Coach Jad</h1>
            <hr />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>
          </div>
        </div>
        </div>
      <div className="team-players">
  <h2 className="meet-our-best-team">OUR TEAM </h2>
  <p className="we-are-proud-team">We are proud to support elite table tennis teams and players from around the world.</p>
  <div className="player-grid">
    <div className="player-row">
      <div className="player-item">
        <img src={player1ImageSrc} alt="Player 1" />
        <div className="player-name">Player 1</div>
      </div>
      <div className="player-item">
        <img src={player2ImageSrc} alt="Player 2" />
        <div className="player-name">Player 2</div>
      </div>
      <div className="player-item">
        <img src={player3ImageSrc} alt="Player 3" />
        <div className="player-name">Player 3</div>
      </div>
    </div>
    <div className="player-row">
      <div className="player-item">
        <img src={player4ImageSrc} alt="Player 4" />
        <div className="player-name">Player 4</div>
      </div>
      <div className="player-item">
        <img src={player5ImageSrc} alt="Player 5" />
        <div className="player-name">Player 5</div>
      </div>
      <div className="player-item">
        <img src={player6ImageSrc} alt="Player 6" />
        <div className="player-name">Player 6</div>
      </div>
    </div>
  </div>
</div>

    </div>
  );
}
