import React from "react";
import { Link } from "react-router-dom";
import "./training.css";

export default function Training() {
  return (
    <div className="training-container-notfound">
      <h2 className="training-heading-notfound">Page not found - Error 404</h2>
      <p className="training-message-notfound">
        The page you are looking for does not exist.
      </p>
      <div className="training-buttons">
        <div className="training-buttons-notfound">
          <Link to="/privatetraining" className="training-button">
            <button>Go to Private Training</button>
          </Link>
        </div>
        <div className="training-buttons-notfound">
          <Link to="/teamtraining" className="training-button">
            <button>Go to Team Training</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
