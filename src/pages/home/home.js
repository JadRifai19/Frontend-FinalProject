import React from "react";
import "./home.css";
import Carousel from "../../components/carousal/carousal.js";
import Profile from "../../assets/profilepic.jpg";
import WhoWeAre from "../../components/whoweare/whoweare";
import { Link } from "react-router-dom";
import ShopPaddle from "../../assets/paddlehome.webp";
import ShopTable from "../../assets/tableshop.webp";
import ShopBall from "../../assets/ShopBall.webp";
import Rifai from "../../assets/rifai.jpg";

export default function Home() {
  const slides = [ShopTable, Rifai];

  return (
    <div className="home">
      <div className="imagehomehome">
        <Carousel images={slides} />
      </div>
      <div className="centered-heading">
        <h2 className="title-homepage">Rifaii Coaches</h2>
      </div>
      <div className="who-we-are">
        <div className="card-home-page-coaches">
          <div class="headhomepage">
            <div class="number-box">
              <span> 01</span>
            </div>
            <h2 className="h2fortitle">
              <span class="small">Coach nb.1</span> Rami Rifaii
            </h2>
          </div>
          <div className="card-home-page-coaches-inner">
            <div className="card-home-page-coaches-front">
              <img src={ShopTable} alt="Image 1" />
            </div>
            <div className="card-home-page-coaches-back">
              <div className="homeprofpic">
                <img src={Profile} alt="profile pic" />{" "}
              </div>
              <p className="descriptionofcoach">
                Lebanon champion in 2018. Played for several club like : Riyadi
                and Asad and homumetmen at 1st devision. Riyada Wel Adab in 2nd
                devision. Coach for Qnat Team. Ping Pong coach at OEA. <br /> 
                titles : 36 title
              </p>
              <Link to="/teamtraining" className="buttonhome">
                Training schedule
              </Link>
            </div>
          </div>
        </div>

        <div className="card-home-page-coaches">
          <div class="headhomepage">
            <div class="number-box">
              <span> 02</span>
            </div>
            <h2 className="h2fortitle">
              <span class="small">Coach nb.2</span> Jad Rifaii
            </h2>
          </div>
          <div className="card-home-page-coaches-inner">
            <div className="card-home-page-coaches-front">
              <img src={ShopBall} alt="Image 2" />
            </div>
            <div className="card-home-page-coaches-back">
              <div className="homeprofpic">
                <img src={Profile} alt="profile pic" />{" "}
              </div>
              <p className="descriptionofcoach">
                Currently playing at Qnat team. North champions 1st place for 5 years in a row.
                ping pong coach at Iman school and at OEA for more than 2 years. private coach
                3rd in lebanon in 2017. <br />
                titles : 28 title
              </p>
              <Link to="/teamtraining" className="buttonhome">
                Training schedule
              </Link>
            </div>
          </div>
        </div>

        <div className="card-home-page-coaches">
          <div class="headhomepage">
            <div class="number-box">
              <span> 03</span>
            </div>
            <h2 className="h2fortitle">
              <span class="small">Coach nb.3</span> Alaa Rifaii
            </h2>
          </div>
          <div className="card-home-page-coaches-inner">
            <div className="card-home-page-coaches-front">
              <img src={ShopTable} alt="Image 1" />
            </div>
            <div className="card-home-page-coaches-back">
              <div className="homeprofpic">
                <img src={Profile} alt="profile pic" />{" "}
              </div>
              <p className="descriptionofcoach">
                Ping Pong Player for Dar El Nour. North champions for 8 times.
                played in 1st Division for Riyadi and Dar El Nour. private ping
                pong coach for 8 years. first in North according to ... <br />
                titles : 41 title
              </p>
              <Link to="/teamtraining" className="buttonhome">
                Training schedule
              </Link>
            </div>
          </div>
        </div>

        <div className="card-home-page-coaches">
          <div class="headhomepage">
            <div class="number-box">
              <span> 04</span>
            </div>
            <h2 className="h2fortitle">
              <span class="small">Coach nb.4</span> Hani Rifaii
            </h2>
          </div>
          <div className="card-home-page-coaches-inner">
            <div className="card-home-page-coaches-front">
              <img src={ShopTable} alt="Image 1" />
            </div>
            <div className="card-home-page-coaches-back">
              <div className="homeprofpic">
                <img src={Profile} alt="profile pic" />{" "}
              </div>
              <p className="descriptionofcoach">
                Ping Pong Player for Dar El Nour. North champions for 9 times.
                played in 1st Division for Riyadi and Dar El Nour and Asad. private ping
                pong coach for 6 years. second in North according to ... <br />
                titles : 45 title
              </p>
              <Link to="/teamtraining" className="buttonhome">
                Training schedule
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="centered-heading">
          <h2 className="title-homepage">Frequenctly questions asked</h2>
        </div>
        <div className="whoweare-home">
          <WhoWeAre />
        </div>
      </div>

      <div className="shop-now-home">
        <div className="shop-now-images">
          <div className="image-wrapper-home-page-section2">
            <img src={ShopTable} alt="Image 1" className="image-small1" />
            <div className="image-description">
              <div className="title-dark-white">Table Tennis Tables</div>
              <div className="description-lighter">
                Every player can find their perfect table with our exclusive
                lineup of portable, recreational, and ITTF approved,
                tournament-ready table tennis options.
              </div>
            </div>
          </div>
          <div className="image-wrapper-home-page-section2">
            <img src={ShopPaddle} alt="Image 2" className="image-small2" />
            <div className="image-description">
              <div className="title-dark-white">Ping Pong Paddles</div>
              <div className="description-lighter">
                Find the perfect ping pong paddle to take your game to the next
                level, infused with our premiere technologies.
              </div>
            </div>
          </div>
          <div className="image-wrapper-home-page-section3">
            <img src={ShopBall} alt="Image 3" className="image-large" />
            <div className="image-description">
              <div className="title-dark-white">Ping Pong Balls</div>
              <div className="description-lighter">
                Ping pong balls offer superior performance with accurate bounce,
                precise control, and excellent spin for players ranging from
                amateurs to professional table tennis champions.
              </div>
            </div>
          </div>
          <div className="image-wrapper-home-page-section2">
            <div className="shop-now-button">
              <a href="/shopping" className="shop-now-link">
                Shop Now
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="champions">
        <div className="champions-image">
          <img src={ShopTable} alt="Champions" />
          <div className="champions-description">
            <h2 className="champions-description-header">
              "Champions no matter your age or gender..."
            </h2>
            <p className="champions-description-underheader">
              Discover our wide range of training sessions and high-quality
              products suitable for all ages and genders. Whether you're a
              beginner or an experienced player, we have everything you need to
              excel in your game. Join us and unleash your inner champion today!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
