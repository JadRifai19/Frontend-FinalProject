import React from "react";
import "./home.css";
import Carousel from "../../components/carousal/carousal.js";
import Image1 from '../../assets/image1.jpeg';
import Image2 from '../../assets/image2.jpeg';
import Profile from '../../assets/profilepic.jpg';
import WhoWeAre from '../../components/whoweare/whoweare';


export default function Home() {
  const slides = [Image1, Image2];

  return (
    <div className="home">
      <div className="imagehomehome">
        <Carousel images={slides} />
      </div>
      <div className="centered-heading">
        <h2 className="title-homepage">Our Coaches</h2>
      </div>
      <div className="who-we-are">
        <div className="card">
          <div class="headhomepage">
            <div class="number-box">
              <span> 01</span>
            </div>
            <h2 className="h2fortitle">
              <span class="small">Coach nb.1</span> Rami Rifaii
            </h2>
          </div>
          <div className="card-inner">
            <div className="card-front">
              <img src={Image1} alt="Image 1" />
            </div>
            <div className="card-back">
              <div className="homeprofpic"><img src={Profile} alt="profile pic" /> </div>
              <p className="descriptionofcoach">
              Lorem ipsum dolor sit amet, consectetur adipiscing  Aenean commodo augue at nulla
                faucibus ullamcorper.
              </p>
              <button className="buttonhome">Training schedule</button>
            </div>
          </div>
        </div>

        <div className="card">
          <div class="headhomepage">
            <div class="number-box">
              <span> 02</span>
            </div>
            <h2 className="h2fortitle">
              <span class="small">Coach nb.2</span> Jad Rifaii
            </h2>
          </div>
          <div className="card-inner">
            <div className="card-front">
              <img src={Image2} alt="Image 2" />
            </div>
            <div className="card-back">
            <div className="homeprofpic"><img src={Profile} alt="profile pic" /> </div>
            <p className="descriptionofcoach">
                Lorem ipsum dolor sit amet, consectetur adipiscing  Aenean commodo augue at nulla
                faucibus ullamcorper.
              </p>
              <button className="buttonhome">Training schedule</button>
            </div>
          </div>
        </div>
      </div>
      <div >
        <div className="whoweare-home">
        < WhoWeAre />
        </div>
      </div>
    </div>
  );
}
