import React from "react";

type SearchBoxProps = {
  className: string;
  placeholder: string;
  onChangeHandler: any;
};

const SearchBox: React.FC<SearchBoxProps> = ({
  className,
  placeholder,
  onChangeHandler,
}) => {
  return (
    <input
      type="search"
      className={`search-box ${className}`}
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  );
};

export default SearchBox;
