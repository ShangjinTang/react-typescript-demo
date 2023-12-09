import React, { useState, useEffect } from "react";
import "./App.css";
import UsersJson from "./users.json";
import ItemList, { ItemInfo } from "./components/itemlist/ItemList";
import SearchBox from "./components/searchbox/SearchBox";

const App: React.FC = () => {
  const [users, setUsers] = useState<ItemInfo[]>([]);
  const [searchField, setSearchField] = useState<string>("");

  useEffect(() => {
    console.log(UsersJson);
    setUsers(UsersJson);
  }, []);

  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setSearchField(event.target.value);
  };

  const filteredUsers = users.filter((user) =>
    user.title.toLocaleLowerCase().includes(searchField.toLocaleLowerCase())
  );

  return (
    <>
      <div className="App">
        <SearchBox
          onChangeHandler={onSearchChange}
          placeholder="Search Users"
          className="user-search-box"
        />
        <ItemList items={filteredUsers} />
      </div>
    </>
  );
};

export default App;
