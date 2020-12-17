import React, { Component } from "react";

class PixaBay extends Component {
  render() {
    return (
      <div className="PixaBay">
        <div id="about-site">
          <h4>Instructions</h4>
          <hr />
          <p>
            1. Search for and click on photos to add to your gallery. Delete
            photos from your current gallery if you change your mind.
          </p>
          <p>
            2. Once you created your gallery share the link /view/(gallery name) for others to view.
          </p>
          <p>3. Note galleries are only available for 24 hours.</p>
        </div>
        <h4>PixaBay</h4>
        <hr />
        <p>
          This website uses PixaBays API to gain access to a large photo
          database.
        </p>
        <a href="https://pixabay.com/">Pixabay.com</a>
      </div>
    );
  }
}

export default PixaBay;
