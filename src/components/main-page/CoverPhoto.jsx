import React from "react";
import { Link } from "react-router-dom";

function CoverPhoto() {
  return (
    <div className="cover_photo_main">
      <div className="cover_photo_title">
        <div>
        <h2>Mid-Seasons Sale</h2>
        <h4>Up to 50% Discount</h4>
      </div>
      <div className="cover_photo_button">
        <Link to="/Product">
          <button type="button" className="btn btn-outline-light">
            Go shopping!
          </button>
        </Link>
      </div>
      </div>
      
    </div>
  );
}

export default CoverPhoto;
