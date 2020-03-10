import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor() {
    super();
    // Fucking States
    this.state = {
      monsters: [],
      searchField: '',
    };

    // this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    fetch(
      `https://cors-anywhere.herokuapp.com/https://jsonplaceholder.typicode.com/users`,
      { headers: { 'Access-Control-Allow-Origin': '*' } }
    )
      .then(response => response.json())
      .then(users => {
        this.setState({ monsters: users });
      })
      .catch(error => this.setState({ error }));
  }

  // Don't need to bind it if we use the arrow function
  handleChange = e => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField } = this.state; // Destructuring
    // Filter the monsters with what we type in the searchBox
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className='App'>
        <h1>Catz Rolodex</h1>
        <SearchBox
          placeholder='Search Weird Catz'
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}
export default App;
