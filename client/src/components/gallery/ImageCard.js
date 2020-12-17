import React, { Component } from "react";

//components
class ImageCard extends Component {
  constructor() {
    super();
    this.state = {
      showEdit: false
    };
    this.toggleEdit = this.toggleEdit.bind(this);
    this.deletePhoto = this.deletePhoto.bind(this);
  }

  toggleEdit() {
    this.setState({ showEdit: !this.state.showEdit });
  }
  deletePhoto() {
    this.props.selectPhoto(this.props.url, false, true);
  }
  componentWillReceiveProps(newProps) {
    if (newProps.url !== this.props.url) {
      this.setState({ showEdit: false });
    }
  }
  render() {
    let editDisplay, photoStyling, containerStyle;
    let imageID = "gallery-image-card " + this.props.index;
    let toggleButton = (
      <button onClick={this.toggleEdit} id="img-gallery-settings">
        <i className="fas fa-trash-alt" />
      </button>
    );
    if (this.state.showEdit) {
      editDisplay = (
        <div className="edit-display">
          <button onClick={this.deletePhoto} href="javascript:void()">
            <i className="far fa-trash-alt fa-3x" />
          </button>
        </div>
      );
      photoStyling = { opacity: "0.1" };
      toggleButton = (
        <button
          style={{ color: "black" }}
          onClick={this.toggleEdit}
          id="img-gallery-settings"
        >
          cancel
        </button>
      );
    }
    console.log(this.props.view)
    return (
      <div style={containerStyle} id={imageID}>
        <a href={this.props.url} className="flex-col">
          <img style={photoStyling} src={this.props.url} />
        </a>
        {editDisplay}
        {!this.props.view ? toggleButton : null}
      </div>
    );
  }
}

export default ImageCard;
