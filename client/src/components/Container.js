import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//Components
import GalleryContainer from "./gallery/GalleryContainer";
import SearchContainer from "./search/SearchContainer";

//Functions
import { getGallery } from "../api/getGallery";

class Container extends Component {
  constructor() {
    super();
    this.state = {
      view: false,
      name: "",
      error: "",
      hidden: false,
      selectedPhotos: []
    };
    this.hide = this.hide.bind(this);
    this.selectPhoto = this.selectPhoto.bind(this);
  }

  componentDidMount() {
    if (window.location.href.split("/")[3] == "view") {
      this.setState({ view: true, hidden: true });
      let name = window.location.href.split("/")[4];
      getGallery(name)
        .then(images => {
          this.setState({ selectedPhotos: images, name: name });
        })
        .catch(err => {
          this.setState({ error: "no gallery" });
        });
    }
  }

  hide() {
    this.setState({ hidden: !this.state.hidden });
  }
  selectPhoto(selectedURL, add, deleteStatus) {
    if (add) {
      let { selectedPhotos } = this.state;
      selectedPhotos.unshift(selectedURL);
      this.setState({ selectedPhotos: selectedPhotos });
    } else {
      let { selectedPhotos } = this.state;
      let newPhotos = selectedPhotos.filter(url => url !== selectedURL);
      //Remove selected styling by grabbing the unique result div
      //Only when the photo is being deleted not unselected
      if (deleteStatus) {
        let img_id = "res-img " + selectedURL.slice(24, 40);
        let checkbox = "res-checkbox " + selectedURL.slice(24, 40);
        let img = document.getElementById(img_id);
        let check = document.getElementById(checkbox);
        if (img != null && check != null) {
          img.style.opacity = 1;
          check.style.display = "none";
        }
      }
      this.setState({ selectedPhotos: newPhotos });
    }
  }
  render() {
    let colapseStyle = this.state.hidden ? { display: "none" } : {};
    return (
      <div id="main-container" className="flex-row-nowrap">
        <div style={colapseStyle} className="left-col">
          <SearchContainer
            selectedPhotos={this.state.selectedPhotos}
            selectPhoto={this.selectPhoto}
            hide={this.hide}
          />
        </div>
        <div className="right-col">
          <GalleryContainer
            selectedPhotos={this.state.selectedPhotos}
            selectPhoto={this.selectPhoto}
            view={this.state.view}
            hidden={this.state.hidden}
            hide={this.hide}
          />
        </div>
      </div>
    );
  }
}

export default Container;
