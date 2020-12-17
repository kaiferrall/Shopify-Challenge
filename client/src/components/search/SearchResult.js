import React, { Component } from "react";

//components
export class SearchResult extends Component {
  constructor() {
    super();
    this.state = {
      selected: false
    };
    this.select = this.select.bind(this);
  }

  select() {
    this.setState({ selected: !this.state.selected });
    this.props.selectPhoto(this.props.url, !this.state.selected, false);
  }
  componentWillReceiveProps(newProps) {
    if (newProps.url !== this.props.url) {
      this.setState({ selected: false });
    }
    if (newProps.selectedPhotos.indexOf(newProps.url) > -1) {
      this.setState({ selected: true });
    }
  }
  render() {
    let imageStyle, checkBox;
    let img_id = "res-img " + this.props.url.slice(24, 40);
    let check_id = "res-checkbox " + this.props.url.slice(24, 40);
    if (this.state.selected) {
      imageStyle = { opacity: "0.3" };
      checkBox = (
        <div id={check_id}>
          <i className="fas fa-check-circle" />
        </div>
      );
    }
    return (
      <div className="search-result" onClick={this.select}>
        {checkBox}
        <img id={img_id} style={imageStyle} src={this.props.url} />
      </div>
    );
  }
}
