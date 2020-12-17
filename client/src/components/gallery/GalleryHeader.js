import React, { Component } from "react";

//components
import SaveContainer from "../save/SaveContainer";

class GalleryHeader extends Component {
  render() {
    let save,
      homeBTN,
      title = "Welcome to Quik Gallery";
    if (this.props.view) {
      homeBTN = <a href="/">Create your own from scratch here!</a>;
      title = "Viewing Gallery";
    }
    return (
      <div id="gallery-header" className="flex-col">
        <h1>{title}</h1>
        {!this.props.view ? <SaveContainer selectedPhotos={this.props.selectedPhotos} /> : null}
        <br />
        {homeBTN}
      </div>
    );
  }
}

export default GalleryHeader;
