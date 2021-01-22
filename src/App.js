import React from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list";
import { SearchBox } from "./components/search-box/search-box";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      searchField: "",
      monster: [],
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => this.setState({ monster: data }));
  }
  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };
  render() {
    const { monster, searchField } = this.state;
    const filteredMonster = monster.filter((monst) => monst.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div className="App">
        <h1>Monsters Inc</h1>
        <SearchBox placeholder="search monster" handleChange={this.handleChange} />
        <CardList monster={filteredMonster} />
      </div>
    );
  }
}

export default App;
