import React, { Component } from "react";

type SearchBoxProps = {
  className: string;
  placeholder: string;
  onChangeHandler: any;
};
type SearchBoxState = {};

class SearchBox extends Component<SearchBoxProps, SearchBoxState> {
  render() {
    return (
      <input
        type="search"
        className={`search-box ${this.props.className}`}
        placeholder={this.props.placeholder}
        onChange={this.props.onChangeHandler}
      />
    );
  }
}

export default SearchBox;
