import React, { Component } from "react";
import { saveGallery } from "../../api/saveGallery";

class SaveContainer extends Component {
  constructor() {
    super();
    this.state = {
      name: ""
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  onChange(e) {
    this.setState({ name: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    if (this.state.name.length == 0) {
      this.setState({ error: "Gallery needs a name" });
    } else if (this.props.selectedPhotos.length == 0) {
      this.setState({ error: "You need at least one photo" });
    } else {
      saveGallery(this.state.name, this.props.selectedPhotos)
        .then(name => {
          this.setState({ link: name });
        })
        .catch(err => {
          this.setState({ error: err });
        });
    }
  }
  render() {
    let error, link;
    if (this.state.error) {
      error = <p style={{ color: "red" }}>{this.state.error}</p>;
    }
    if (this.state.link) {
      const url = "/view/" + this.state.link;
      link = <p>Share this link: <a href={url}>{url}</a>. Valid for 24 hours.</p>;
      error = null;
    }
    return (
      <div className="save-container">
        <form onSubmit={this.onSubmit}>
          <input
            value={this.state.name}
            onChange={this.onChange}
            type="text"
            placeholder="Gallery name"
          />
          <button type="submit">Save</button>
        </form>
        <br />
        {link}
        {error}
      </div>
    );
  }
}

export default SaveContainer;
