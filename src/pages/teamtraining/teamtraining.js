import React from "react";
import "./teamtraining.css";
import ramiImageSrc from "../../assets/rami.jpeg";
import jadImageSrc from "../../assets/jad.jpeg";
import family2 from "../../assets/family2.jpeg";
import player1ImageSrc from "../../assets/player1.jpeg";
import player2ImageSrc from "../../assets/player2.jpeg";
import player3ImageSrc from "../../assets/player3.jpeg";
import player4ImageSrc from "../../assets/player4.jpeg";
import player5ImageSrc from "../../assets/player5.jpeg";
import player6ImageSrc from "../../assets/player6.jpeg";

export default function teamtraining() {
  return (
    <div className="training-sessions">
      <div className="hero-section-training-team">
        <img src={family2} alt="Hero Image" />
        <div className="hero-text">
          <span> "Team Training" </span> <br />{" "}
          <p className="hero-text-p">
            {" "}
            Unite, Train, and Excel as a Ping Pong Powerhouse{" "}
          </p>
        </div>
      </div>
      <div className="header"></div>
      <div className="container-team-training">
        <div className="about-team-training">
          <div className="left">
            <h1 className="title-team-training">Team A : Coach Rami</h1>
            <div />
            <hr />
            <div className="right">
              <img
                classname="image-coch-team-training"
                src={ramiImageSrc}
                alt="Coach Rami"
              />
            </div>
            <table className="schedule-table">
              <thead>
                <tr>
                  <th>Day</th>
                  <th>Time</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Monday</td>
                  <td>9:00</td>
                </tr>
                <tr>
                  <td>Wednesday</td>
                  <td>19:00</td>
                </tr>
                <tr>
                  <td>Saturday</td>
                  <td>19:00</td>
                </tr>
              </tbody>
            </table>
            <div className="jad">
              <p className="description-team-trainnig">
                "Get ready to unleash your ping pong potential with Coach Rami's
                Team A training sessions! Coach Rami is a seasoned coach known
                for his innovative training methods and commitment to player
                development. If you're seeking a supportive and challenging
                environment to take your game to the next level, Coach Rami's
                team is the perfect fit."
              </p>
            </div>
          </div>
        </div>
        <div className="mission">
          <div className="right">
            <h1 className="title-team-training">Team B : Coach Jad</h1>
            <hr />
            <div className="left">
              <img
                classname="image-coch-team-training"
                src={jadImageSrc}
                alt="Coach Jad"
              />
            </div>
            <table className="schedule-table">
              <thead>
                <tr>
                  <th>Day</th>
                  <th>Time</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Tuseday</td>
                  <td>19:00</td>
                </tr>
                <tr>
                  <td>Thursday</td>
                  <td>19:00</td>
                </tr>
                <tr>
                  <td>Saturday</td>
                  <td>10:00</td>
                </tr>
              </tbody>
            </table>
            <div className="jad">
              <p className="description-team-trainnig">
                "Welcome to Coach Jad's Team B training sessions! If you're
                looking to elevate your ping pong skills and take your game to
                new heights, you've come to the right place. Coach Jad brings a
                wealth of experience and expertise to the table, with a passion
                for nurturing talent and helping players reach their full
                potential."
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="team-players">
        <h2 className="meet-our-best-team">OUR TEAM </h2>
        <p className="we-are-proud-team">
          We are proud to support elite table tennis teams and players from
          around the world.
        </p>
        <div className="player-grid">
          <div className="player-row">
            <div className="player-item">
              <img src={player1ImageSrc} alt="Player 1" />
              <div className="player-name">mira Kadi</div>
            </div>
            <div className="player-item">
              <img src={player2ImageSrc} alt="Player 2" />
              <div className="player-name">Nazih Lazkani</div>
            </div>
            <div className="player-item">
              <img src={player3ImageSrc} alt="Player 3" />
              <div className="player-name">Georgie Hallal</div>
            </div>
          </div>
          <div className="player-row">
            <div className="player-item">
              <img src={player4ImageSrc} alt="Player 4" />
              <div className="player-name">Sidra Hasan</div>
            </div>
            <div className="player-item">
              <img src={player5ImageSrc} alt="Player 5" />
              <div className="player-name">Dani Wakim</div>
            </div>
            <div className="player-item">
              <img src={player6ImageSrc} alt="Player 6" />
              <div className="player-name">Assad Antoun</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
