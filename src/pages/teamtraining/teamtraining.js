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
        <span> "Team Training" </span> <br /> <p className="hero-text-p"> Unite, Train, and Excel as a Ping Pong Powerhouse </p>
        </div>
      </div>
      <div className="header"></div>
      <div className="container-team-training">
        <div className="about-team-training">
          <div className="left">
            <h1 className="title-team-training">Team A : Coach Rami</h1>
            <hr />

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
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              incidunt hic eveniet enim beatae quis. Maiores, nostrum sunt ut
              recusandae laborum voluptate amet sed, dolores hic quasi ab!
              Quibusdam, architecto?
            </p>
          </div>
          <div className="right">
            <img src={ramiImageSrc} alt="Coach Rami" />
          </div>
        </div>
        <div className="mission">
          <div className="left">
            <img src={jadImageSrc} alt="Coach Jad" />
          </div>
          <div className="right">
            <h1 className="title-team-training">Team B : Coach Jad</h1>
            <hr />
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
            <p className="description-team-trainnig">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              minus ea laborum nulla nisi amet, explicabo magnam aspernatur
              doloribus distinctio est officiis placeat harum, nam iure, culpa
              vitae exercitationem itaque!
            </p>
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
              <div className="player-name">Yorgo Antoun</div>
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
