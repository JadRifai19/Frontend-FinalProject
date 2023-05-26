import React, { useState } from "react";
import { FaPaperPlane, FaCheck } from "react-icons/fa";
import "./footer.css";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Footer() {
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const sendMessage = () => {
    if (message.trim() !== "") {
      setSent(true);
      setTimeout(() => {
        setSent(false);
        setMessage("");
      }, 6000);
      toast.success("Message sent successfully!", {
        icon: <FaCheck style={{ color: "red" }} />,
        progressStyle: { backgroundColor: "red" },
        style: {
          background: "white",
          color: "red",
        },
      });
    }
  };

  return (
    <div className="footer-container">
      <footer className="footer">
        <ToastContainer />

        <div className="footer-section1">
          <p className="titlefooter">Ping Pong</p>

          <span className="locationfooter">
            <LocationOnIcon /> <span> - </span> Find us{" "}
          </span>
          <p className="locationdaher">Daher Al Ein</p>
          <p className="footerdescription">
            Explore the exciting world of Ping Pong with the Rifai family. Join
            us as we share our passion for the game and provide valuable
            insights, tips, and training resources.
          </p>
        </div>

        <div className="footer-section2">
          <span className="section2header">contact us</span>
          <div className="emailfooter">
            <EmailIcon /> <span> - </span> mail us
          </div>
          <div className="mailinside">
            <p>
              <a href="mailto:jad.rami.rifaii19@gmail.com">
                jad.rami.rifaii19@gmail.com
              </a>
            </p>
            <p>
              <a href="mailto:rami.mustafa.rifaii@gmail.com">
                rami.mustafa.rifaii@gmail.com
              </a>
            </p>
          </div>
          <div className="section2headerph">
            <PhoneIcon /> <span> - </span> call us
          </div>
          <div className="mailinside">
            <p>76 597610 - Jad Rifaii</p>
            <p>70 701287 - Rami Rifaii</p>
          </div>
        </div>

        <div className="footer-section3">
          <span className="registerfooter">Register</span>
          <p>
            Don't forget to register for our training. Feel free to send a
            message:
          </p>
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Send a message"
              className={`inputfooter ${sent ? "sent" : ""}`}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button
              className={`send-button ${sent ? "sent" : ""}`}
              onClick={sendMessage}
            >
              {sent ? <FaCheck /> : <FaPaperPlane />}
            </button>
          </div>
          <div className="followfooter">
            <span className="">Follow us:</span>
            <div className="followusicon">
              <a
                href="https://instagram.com/jad._rifai_.19?igshid=OGQ5ZDc2ODk2ZA=="
                className="social-icon"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100008222161499&mibextid=LQQJ4d"
                className="social-icon-facebook"
              >
                <FacebookIcon />
              </a>
            </div>
            <span className="ownerfooter"> - Jad Rifaii</span>
            <div className="followusicon">
              <a
                href="https://instagram.com/ping.rifaii.pong?igshid=MzRlODBiNWFlZA=="
                className="social-icon"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://www.facebook.com/rami.rifaii.1?mibextid=ZbWKwL"
                className="social-icon-facebook"
              >
                <FacebookIcon />
              </a>
            </div>
            <span className="ownerfooter"> - Rami Rifaii</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
