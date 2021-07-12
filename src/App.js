import './App.css';
import { Component } from 'react';
import { CardList } from './component/card-list/card-list.component';
import { SearchBox } from './component/search-box/search-box.component';
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: '',
    };
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json()
        .then(users => this.setState({ monsters: users })));
  }
  render() {
    const { searchField, monsters } = this.state;
    const filteredMonster = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase()));
    return (
      <div className="App">
        <h1 className='app-title'>Monster's Rolodex</h1>
        <SearchBox
          placeholder='Search Monsters'
          handleChange={e => this.setState({ searchField: e.target.value })}
        />
        <CardList monsters={filteredMonster} />
      </div>
    );
  }
}

export default App;
