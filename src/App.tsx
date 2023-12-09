import React, { Component } from "react";
import "./App.css";
import UsersJson from "./users.json";
import ItemList, { ItemInfo } from "./components/itemlist/ItemList";
import SearchBox from "./components/searchbox/SearchBox";

type AppProps = {};
type AppState = { users: ItemInfo[]; searchField: string };

class App extends Component<AppProps, AppState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      users: [],
      searchField: "",
    };
  }

  componentDidMount(): void {
    console.log(UsersJson);
    this.setState(
      () => {
        return { users: UsersJson };
      },
      () => {
        console.log(this.state);
      }
    );
  }

  onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    const searchField = event.target.value;
    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    const { users, searchField } = this.state;
    const { onSearchChange } = this;

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
  }
}

export default App;
