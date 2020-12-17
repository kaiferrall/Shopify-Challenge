import React, { Component } from "react";

//components
import GalleryHeader from "./GalleryHeader";
import GalleryContent from "./GalleryContent";

class GalleryContainer extends Component {
  render() {
    let showLeft;
    if (this.props.hidden && !this.props.view) {
      showLeft = (
        <div className="colapse-right">
          <button onClick={this.props.hide} href="#">
            <i className="fas fa-chevron-right" />
          </button>
        </div>
      );
    }
    return (
      <div id="gallery-container" className="flex-col">
        {showLeft}
        <GalleryHeader
          view={this.props.view}
          selectedPhotos={this.props.selectedPhotos}
        />
        <GalleryContent
          view={this.props.view}
          selectPhoto={this.props.selectPhoto}
          selectedPhotos={this.props.selectedPhotos}
        />
      </div>
    );
  }
}

export default GalleryContainer;
