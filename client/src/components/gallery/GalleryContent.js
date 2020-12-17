import React, { Component } from "react";

//components
import ImageCard from "./ImageCard";
class GalleryContent extends Component {
  render() {
    let { selectedPhotos } = this.props;
    let images = selectedPhotos.map((url, index) => {
      return (
        <ImageCard key={index} view={this.props.view} selectPhoto={this.props.selectPhoto} url={url} />
      );
    });
    return (
      <div id="gallery-content" className="flex-row">
        {images}
      </div>
    );
  }
}

export default GalleryContent;
